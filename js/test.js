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

        china_map('map_new');

        //中国地图
        function china_map(id) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(document.getElementById(id));
            var data = [
                {name: '盐池', value: 80},
                {name: '淘乐', value: 80},
                {name: '平罗', value: 80},
                {name: '固原', value: 80},
                {name: '石嘴山', value: 80},
                {name: '永宁', value: 80},
                {name: '海源', value: 80},
                {name: '中卫', value: 80},
                // {name: "深圳", value: 8259},
                // {name: "佛山", value: 5741},
                // {name: "东莞", value: 3030},
                // {name: "福州", value: 4542},
                // {name: "厦门", value: 3329},
                // {name: "南宁", value: 3157},
                // {name: "郑州", value: 6690},
                // {name: "武汉", value: 8678},
                // {name: "长沙", value: 5303},
                // {name: "南昌", value: 3025},
                // {name: "北京", value: 20259},
                // {name: "长春", value: 3016},
                // {name: "大连", value: 3202},
                // {name: "沈阳", value: 4540},
                // {name: "哈尔滨", value: 3141},
                // {name: "天津", value: 8626},
                // {name: "济南", value: 4361},
                // {name: "青岛", value: 6667},
                // {name: "太原", value: 4080},
                // {name: "石家庄", value: 6137},
                // {name: "西安", value: 6991},
                // {name: "成都", value: 13873},
                // {name: "重庆", value: 13283},
                // {name: "昆明", value: 4633},


            ];

            var geoCoordMap = {
                // "上海": [121.48, 31.22],
                // "珠海": [113.52, 22.3],
                // "三亚": [109.31, 18.14],
                // "惠州": [114.4, 23.09],
                // "海口": [110.35, 20.02],
                // "合肥": [117.27, 31.86],
                // "南京": [118.78, 32.04],
                // "杭州": [120.19, 30.26],
                // "苏州": [120.62, 31.32],
                // "无锡": [120.29, 31.59],
                // "昆山": [120.95, 31.39],
                // "广州": [113.23, 23.16],
                // "深圳": [114.07, 22.62],
                // "佛山": [113.11, 23.05],
                // "东莞": [113.75, 23.04],
                // "福州": [119.3, 26.08],
                // "厦门": [118.1, 24.46],
                // "南宁": [108.33, 22.84],
                // "郑州": [113.65, 34.76],
                // "武汉": [114.31, 30.52],
                // "长沙": [113, 28.21],
                // "南昌": [115.89, 28.68],
                // "北京": [116.46, 39.92],
                // "长春": [125.35, 43.88],
                // "大连": [121.62, 38.92],
                // "沈阳": [123.38, 41.8],
                // "哈尔滨": [126.63, 45.75],
                // "天津": [117.2, 39.13],
                // "济南": [117, 36.65],
                // "青岛": [120.33, 36.07],
                // "太原": [112.53, 37.87],
                // "石家庄": [114.48, 38.03],
                // "西安": [108.95, 34.27],
                // "成都": [104.06, 30.67],
                // "重庆": [106.54, 29.59],
                // "昆明": [102.73, 25.04],
                '银川': [106.27, 38.47],
                '盐池': [107.41, 37.78],
                '淘乐': [106.69, 38.82],
                '平罗': [106.54, 38.91],
                '石嘴山': [106.39, 39.04],
                '固原': [106.28, 36.01],
                '永宁': [106.27, 38.28],
                '吴忠': [106.21, 37.99],
                '德隆': [106.11, 35.63],
                '中宁': [105.66, 37.48],
                '海源': [105.64, 36.56],
                '中卫': [105.18, 37.51],
            };

            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var convertedData = [
                convertData(data),
                convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6))
            ];
            data.sort(function (a, b) {
                return a.value - b.value;
            })

            var selectedItems = [];
            var categoryData = [];
            var barData = [];
//   var maxBar = 30;
            var sum = 0;
            var count = data.length;
            for (var i = 0; i < data.length; i++) {
                categoryData.push(data[i].name);
                barData.push(data[i].value);
                sum += data[i].value;
            }
            console.log(categoryData);
            console.log(sum + "   " + count);
            var option = {
                backgroundColor: 'rgba(0,0,0,0)',
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                title: [{
                    text: ' ',
                    link: 'http://pages.anjuke.com/expert/newexpert.html',
                    subtext: 'data from Anjuke',
                    sublink: 'http://pages.anjuke.com/expert/newexpert.html',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                }, {
                    id: 'statistic',
                    text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
                    right: 120,
                    top: 40,
                    width: 100,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                }],
                toolbox: {
                    iconStyle: {
                        normal: {
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderColor: '#b1e4ff'
                        }
                    },
                    feature: {
                        dataZoom: {},
                        brush: {
                            type: ['rect', 'polygon', 'clear']
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                brush: {
                    outOfBrush: {
                        color: '#abc'
                    },
                    brushStyle: {
                        borderWidth: 2,
                        color: 'rgba(0,0,0,0.2)',
                        borderColor: 'rgba(0,0,0,0.5)',
                    },
                    seriesIndex: [0, 1],
                    throttleType: 'debounce',
                    throttleDelay: 300,
                    geoIndex: 0
                },
                geo: {
                    map: 'china',
                    left: '10',
                    right: '35%',
                    center: [117.98561551896913, 31.205000490896193],
                    zoom: 1.5,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    right: 40,
                    top: 100,
                    bottom: 40,
                    width: '30%'
                },
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    data: categoryData
                },
                series: [{
                    // name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertedData[0],
                    symbolSize: function (val) {
                        return Math.max(val[2] / 300, 8);
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF8C00',
                            position: 'right',
                            show: true
                        }
                    }
                }, {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertedData[0],
                    symbolSize: function (val) {
                        return Math.max(val[2] / 500, 8);
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 50,
                            shadowColor: '#EE0000'
                        }
                    },
                    zlevel: 1
                }, {
                    id: 'bar',
                    zlevel: 2,
                    type: 'bar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    },

                    data: data
                }]
            };

            // 为echarts对象加载数据
            myChart.setOption(option);
        }


    }
)
;
