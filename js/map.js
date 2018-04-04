//地图容器
var chart = echarts.init(document.getElementById('map'));
//34个省、市、自治区的名字拼音映射数组
var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};

//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京", "天津", "上海", "重庆", "香港", "澳门"];
var mapdata = [];
//绘制全国地图
$.getJSON('./map/china.json', function (data) {
    d = [];
    for (var i = 0; i < data.features.length; i++) {
        d.push({
            name: data.features[i].properties.name
        })
    }
    mapdata = d;
    //注册地图
    echarts.registerMap('china', data);
    //绘制地图
    renderMap('china', d);
});

//地图点击事件---点击到不同的地区页面重新绘图
chart.on('click', function (params) {
    console.log(params);
    if (params.name in provinces) {
        //如果点击的是34个省、市、自治区，绘制选中地区的二级地图
        $.getJSON('./map/province/' + provinces[params.name] + '.json', function (data) {
            echarts.registerMap(params.name, data);
            var d = [];
            for (var i = 0; i < data.features.length; i++) {
                d.push({
                    name: data.features[i].properties.name
                })
            }
            renderMap(params.name, d);
            // line('right-two', line_csv);
        });
    }
    else if (params.seriesName in provinces) {
        //如果是【直辖市/特别行政区】只有二级下钻
        if (special.indexOf(params.seriesName) >= 0) {
            renderMap('china', mapdata);

        }
        else {
            //显示县级地图
            $.getJSON('./map/city/' + cityMap[params.name] + '.json', function (data) {
                echarts.registerMap(params.name, data);
                var d = [];
                for (var i = 0; i < data.features.length; i++) {
                    d.push({
                        name: data.features[i].properties.name
                    })
                }
                renderMap(params.name, d);
            });
        }
    }
    else {
        renderMap('china', mapdata);
    }
});

//初始化绘制全国地图配置
var option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: {
        text: '',
        subtext: '三级下钻',
        link: 'http://www.ldsun.com',
        left: 'center',
        textStyle: {
            color: '#e1e1e1',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: "Microsoft YaHei"
        },
        subtextStyle: {
            color: '#ccc',
            fontSize: 13,
            fontWeight: 'normal',
            fontFamily: "Microsoft YaHei"
        }
    },

    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(12, 204, 104, 0.92)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function (params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value;
            res = "<span style='color:red;'>" + name + "</span><br/>坐标：" + value;
            return res;
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        },
        iconStyle: {
            normal: {
                color: '#e1e1e1'
            }
        }
    },
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    animationDurationUpdate: 1000

};

function renderMap(map, data) {
    option.title.subtext = map;
    option.series = [
        {
            name: map,
            type: 'map',
            mapType: map,
            roam: false,
            nameMap: {
                // 'china':'中国'
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#b8b8b9',
                        fontSize: 13
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#043FA9',
                    borderColor: 'dodgerblue'
                },
                emphasis: {
                    areaColor: 'darkorange'
                }
            },
            data: data
        }
    ];
    //渲染地图
    chart.setOption(option);
    window.addEventListener("resize", function () {
        chart.resize();
    });
}

