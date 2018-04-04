/*****
 * auther:黄倩倩
 * email:1872367346@qq.com
 * time:2017/12/1
 * @type {string}
 */
var border_color = 'rgba(81,110,122,0.8)';//图标辅助线颜色
var text_color = '#b8b8b9';//辅助字体颜色
var background_color = 'rgba(0,193,222,0.5)';//提示框背景颜色
var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};
$(function () {

        china_map('map');

        //中国地图
        function china_map(id) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(document.getElementById(id));
            var geoCoordMap = {
                '上海': [121.4648, 31.2891],
                '东莞': [113.8953, 22.901],
                '东营': [118.7073, 37.5513],
                '中山': [113.4229, 22.478],
                '临汾': [111.4783, 36.1615],
                '临沂': [118.3118, 35.2936],
                '丹东': [124.541, 40.4242],
                '丽水': [119.5642, 28.1854],
                '乌鲁木齐': [87.9236, 43.5883],
                '佛山': [112.8955, 23.1097],
                '保定': [115.0488, 39.0948],
                '兰州': [103.5901, 36.3043],
                '包头': [110.3467, 41.4899],
                '北京': [116.4551, 40.2539],
                '北海': [109.314, 21.6211],
                '南京': [118.8062, 31.9208],
                '南宁': [108.479, 23.1152],
                '南昌': [116.0046, 28.6633],
                '南通': [121.1023, 32.1625],
                '厦门': [118.1689, 24.6478],
                '台州': [121.1353, 28.6688],
                '合肥': [117.29, 32.0581],
                '呼和浩特': [111.4124, 40.4901],
                '咸阳': [108.4131, 34.8706],
                '哈尔滨': [127.9688, 45.368],
                '唐山': [118.4766, 39.6826],
                '嘉兴': [120.9155, 30.6354],
                '大同': [113.7854, 39.8035],
                '大连': [122.2229, 39.4409],
                '天津': [117.4219, 39.4189],
                '太原': [112.3352, 37.9413],
                '威海': [121.9482, 37.1393],
                '宁波': [121.5967, 29.6466],
                '宝鸡': [107.1826, 34.3433],
                '宿迁': [118.5535, 33.7775],
                '常州': [119.4543, 31.5582],
                '广州': [113.5107, 23.2196],
                '廊坊': [116.521, 39.0509],
                '延安': [109.1052, 36.4252],
                '张家口': [115.1477, 40.8527],
                '徐州': [117.5208, 34.3268],
                '德州': [116.6858, 37.2107],
                '惠州': [114.6204, 23.1647],
                '成都': [103.9526, 30.7617],
                '扬州': [119.4653, 32.8162],
                '承德': [117.5757, 41.4075],
                '拉萨': [91.1865, 30.1465],
                '无锡': [120.3442, 31.5527],
                '日照': [119.2786, 35.5023],
                '昆明': [102.9199, 25.4663],
                '杭州': [119.5313, 29.8773],
                '枣庄': [117.323, 34.8926],
                '柳州': [109.3799, 24.9774],
                '株洲': [113.5327, 27.0319],
                '武汉': [114.3896, 30.6628],
                '汕头': [117.1692, 23.3405],
                '江门': [112.6318, 22.1484],
                '沈阳': [123.1238, 42.1216],
                '沧州': [116.8286, 38.2104],
                '河源': [114.917, 23.9722],
                '泉州': [118.3228, 25.1147],
                '泰安': [117.0264, 36.0516],
                '泰州': [120.0586, 32.5525],
                '济南': [117.1582, 36.8701],
                '济宁': [116.8286, 35.3375],
                '海口': [110.3893, 19.8516],
                '淄博': [118.0371, 36.6064],
                '淮安': [118.927, 33.4039],
                '深圳': [114.5435, 22.5439],
                '清远': [112.9175, 24.3292],
                '温州': [120.498, 27.8119],
                '渭南': [109.7864, 35.0299],
                '湖州': [119.8608, 30.7782],
                '湘潭': [112.5439, 27.7075],
                '滨州': [117.8174, 37.4963],
                '潍坊': [119.0918, 36.524],
                '烟台': [120.7397, 37.5128],
                '玉溪': [101.9312, 23.8898],
                '珠海': [113.7305, 22.1155],
                '盐城': [120.2234, 33.5577],
                '盘锦': [121.9482, 41.0449],
                '石家庄': [114.4995, 38.1006],
                '福州': [119.4543, 25.9222],
                '秦皇岛': [119.2126, 40.0232],
                '绍兴': [120.564, 29.7565],
                '聊城': [115.9167, 36.4032],
                '肇庆': [112.1265, 23.5822],
                '舟山': [122.2559, 30.2234],
                '苏州': [120.6519, 31.3989],
                '莱芜': [117.6526, 36.2714],
                '菏泽': [115.6201, 35.2057],
                '营口': [122.4316, 40.4297],
                '葫芦岛': [120.1575, 40.578],
                '衡水': [115.8838, 37.7161],
                '衢州': [118.6853, 28.8666],
                '西宁': [101.4038, 36.8207],
                '西安': [109.1162, 34.2004],
                '贵阳': [106.6992, 26.7682],
                '连云港': [119.1248, 34.552],
                '邢台': [114.8071, 37.2821],
                '邯郸': [114.4775, 36.535],
                '郑州': [113.4668, 34.6234],
                '鄂尔多斯': [108.9734, 39.2487],
                '重庆': [107.7539, 30.1904],
                '金华': [120.0037, 29.1028],
                '铜川': [109.0393, 35.1947],
                '银川': [106.3586, 38.1775],
                '镇江': [119.4763, 31.9702],
                '长春': [125.8154, 44.2584],
                '长沙': [113.0823, 28.2568],
                '长治': [112.8625, 36.4746],
                '阳泉': [113.4778, 38.0951],
                '青岛': [120.4651, 36.3373],
                '韶关': [113.7964, 24.7028]
            };
            var BJData = [
                // [{name: '上海', value: 100}, {name: '西安'}],
                // [{name: '广州', value: 70}, {name: '西安'}],
                // [{name: '哈尔滨', value: 30}, {name: '西安'}],
                // [{name: '青岛', value: 50}, {name: '西安'}],
                // [{name: '南昌', value: 20}, {name: '西安'}],
                [{name: '银川', value: 10}, {name: '西安'}],
                [{name: '南京', value: 80}, {name: '西安'}],
                [{name: '承德', value: 55}, {name: '西安'}],
                // [{name: '乌鲁木齐', value: 90}, {name: '西安'}]
            ];
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[0].name];
                    var toCoord = geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push([
                            {
                                coord: fromCoord,
                                value: dataItem[0].value
                            },
                            {
                                coord: toCoord,
                            }
                        ]);
                    }
                }
                return res;
            };


            /*地图点击事件 --- 点击不同的地区跳转到不同的页面*/
            myChart.on('click', function (params) {
                console.log(params.name);
                //     $.getJSON('./map/province/' + geoCoordMap[params.name] + '.json', function (data) {
                //     for (var i = 0; i <= BJData.length; i++) {
                //         var data = BJData[i];
                //         for (var c = 0; c < data.length; c++) {
                //             // alert(data[c].name)
                //             if(data[c].name==params.name){
                //                 alert(data[c].name)
                //             }
                //         }
                //     }
                // })
                 // alert(BJData[0][0].name);
                // var selected = param.selected;
                // for (var i = 0; i <= BJData.length; i++) {
                //     var data = BJData[i];
                //     // alert(data)
                //     for (var c = 0; c < data.length; c++) {
                //         // alert(data[c].name)
                //     }


  
                switch (params.name) {
                     case '陕西':
                        window.location.href = 'index.html';
                        break;
                    case '宁夏':
                        window.location.href = 'index_a.html';
                        break;
                    case '江苏':
                        window.location.href = 'index_b.html';
                        break;

                    case '河北':   
                        window.location.href = 'index_c.html';
                        break;
                    case '江苏':
                        window.location.href = 'index_d.html';
                        break;
                    default:
                        break;
                }
            });


            // })
            var color = ['#a6c84c', '#ffa022', '#46bee9'];
            var series = [];
            [['西安', BJData]].forEach(function (item, i) {
                series.push(
                    {
                        type: 'lines',
                        zlevel: 2,
                        showLegendSymbol: false,
                        effect: {
                            show: false,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.02,//特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow',//箭头图标
                            symbolSize: 5,//图标大小
                        },
                        lineStyle: {
                            normal: {
                                width: 1,//尾迹线条宽度
                                opacity: 0,//尾迹线条透明度
                                curveness: 0 //尾迹线条曲直度
                            }
                        },

                        data: convertData(item[1])
                    },
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {//涟漪特效
                            period: 4,//动画时间，值越小速度越快
                            brushType: 'stroke', //波纹绘制方式 stroke, fill
                            scale: 4 //波纹圆环最大限制，值越大波纹越大
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',//显示位置
                                offset: [5, 0], //偏移设置
                                formatter: '{b}' //圆环显示文字
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        symbol: 'circle',
                        symbolSize: function (val) {
                            return 4 + val[2] / 10; //圆环大小
                        },
                        itemStyle: {
                            normal: {
                                show: false,
                                color: '#f00'
                            }
                        },
                        data: item[1].map(function (dataItem) {
                            return {
                                name: dataItem[0].name,
                                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                            };
                        }),
                    },
                    //被攻击点
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            period: 4,
                            brushType: 'stroke',
                            scale: 4
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
//			                offset:[5, 0],

                                color: '#00ffff',
                                formatter: '{b}',
                                textStyle: {
                                    color: "#00ffff"
                                }
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        symbol: 'pin',
                        symbolSize: 30,
                        itemStyle: {
                            normal: {
                                show: true,
                                color: '#9966cc'
                            }
                        },
                        data: [{
                            name: item[0],
                            value: geoCoordMap[item[0]].concat([100]),
                        }],
                    }
                );
            });

            var option = {
                backgroundColor: 'rgba(0,0,0,0)',
                title: {
                    text: ' ',
                    textStyle: {
                        color: '#e1e1e1',
                        fontSize: 18,
                        fontWight: '300',
                        // borderLeft:'3x solid teal',
                    },
                    padding: [20, 20, 20, 20]
                },
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(12, 204, 104, 0.92)',
                    borderColor: '#FFFFCC',
                    showDelay: 20,
                    hideDelay: 20,
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
                visualMap: { //图例值控制
                    min: 0,
                    max: 100,
                    show: false,
                    calculable: true,
                    color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true, //是否允许缩放
                    layoutCenter: ['50%', '53%'], //地图位置
                    layoutSize: "108%",
                    itemStyle: {
                        normal: {
                            //color: 'rgba(51, 69, 89, .5)', //地图背景色
                            color: 'rgba(16,48,114,0.6)', //地图背景色
                            borderColor: 'rgba(100,149,237,1)' //省市边界线
                        },
                        emphasis: {
                            show: false,
                            color: 'rgba(24,81,152,0.8)'//悬浮背景
                            // color: 'red'//悬浮背景
                        }
                    }
                },

                series: series
            };

            var counts = option.series[0].data.length; //获取所有闪动圆环数量
            var dataIndex = 0;

            //让圆环的提示框自动触发轮播显示
            function autoHoverTip() {
                for (var i = 0; i < counts; i++) {
                    (function (i) {
                        ts = setTimeout(function () {
                            myChart.dispatchAction({
                                type: 'showTip',
                                seriesIndex: 1,
                                dataIndex: i
                            });
                        }, 5000 * i);
                    })(i);
                }
            }

            setTimeout(function () {
                autoHoverTip();
                tv = setInterval(autoHoverTip, counts * 5600);
            }, 500);

            // 为echarts对象加载数据
            myChart.setOption(option);
        }


    }
)
;
