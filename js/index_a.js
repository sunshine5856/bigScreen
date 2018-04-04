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


    /******************************假数据************************************************************/

        //折线--面积图,左下角(first)
    var line_csv = {
            "x": ["11.02", "12.02", "13.02", "14.02", "15.02", "16.02", "17.02"],
            "y": [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
            "arr": [
                [200, 211, 215, 313, 142, 413, 310],
                [50, 80, 120, 150, 102, 313, 210],
            ]
        };


    //右侧柱图，右下角(first)
    var csv_right_bar = {
        "x": ['1', '2', '3', '4', '5'],
        "y": [1, 3, 2, 3, 4],
    };

    // 雷达图假数据
    var csv_leida = {
        'dataBJ': [
            [55, 9, 56, 0.46, 18, 6, 1],
            [25, 11, 21, 0.65, 34, 9, 2],
            [56, 7, 63, 0.3, 14, 5, 3],
            [33, 7, 29, 0.33, 16, 6, 4],
            [42, 24, 44, 0.76, 40, 16, 5],
            [82, 58, 90, 1.77, 68, 33, 6],
            [74, 49, 77, 1.46, 48, 27, 7],
            [78, 55, 80, 1.29, 59, 29, 8],
            [267, 216, 280, 4.8, 108, 64, 9],
            [185, 127, 216, 2.52, 61, 27, 10],
            [39, 19, 38, 0.57, 31, 15, 11],
            [41, 11, 40, 0.43, 21, 7, 12],
            [64, 38, 74, 1.04, 46, 22, 13],
            [108, 79, 120, 1.7, 75, 41, 14],
            [108, 63, 116, 1.48, 44, 26, 15],
            [33, 6, 29, 0.34, 13, 5, 16],
            [94, 66, 110, 1.54, 62, 31, 17],
            [186, 142, 192, 3.88, 93, 79, 18],
            [57, 31, 54, 0.96, 32, 14, 19],
            [22, 8, 17, 0.48, 23, 10, 20],
            [39, 15, 36, 0.61, 29, 13, 21],
            [94, 69, 114, 2.08, 73, 39, 22],
            [99, 73, 110, 2.43, 76, 48, 23],
            [31, 12, 30, 0.5, 32, 16, 24],
            [42, 27, 43, 1, 53, 22, 25],
            [154, 117, 157, 3.05, 92, 58, 26],
            [234, 185, 230, 4.09, 123, 69, 27],
            [160, 120, 186, 2.77, 91, 50, 28],
            [134, 96, 165, 2.76, 83, 41, 29],
            [52, 24, 60, 1.03, 50, 21, 30],
            [46, 5, 49, 0.28, 10, 6, 31]
        ],
        'dataGZ': [
            [26, 37, 27, 1.163, 27, 13, 1],
            [85, 62, 71, 1.195, 60, 8, 2],
            [78, 38, 74, 1.363, 37, 7, 3],
            [21, 21, 36, 0.634, 40, 9, 4],
            [41, 42, 46, 0.915, 81, 13, 5],
            [56, 52, 69, 1.067, 92, 16, 6],
            [64, 30, 28, 0.924, 51, 2, 7],
            [55, 48, 74, 1.236, 75, 26, 8],
            [76, 85, 113, 1.237, 114, 27, 9],
            [91, 81, 104, 1.041, 56, 40, 10],
            [84, 39, 60, 0.964, 25, 11, 11],
            [64, 51, 101, 0.862, 58, 23, 12],
            [70, 69, 120, 1.198, 65, 36, 13],
            [77, 105, 178, 2.549, 64, 16, 14],
            [109, 68, 87, 0.996, 74, 29, 15],
            [73, 68, 97, 0.905, 51, 34, 16],
            [54, 27, 47, 0.592, 53, 12, 17],
            [51, 61, 97, 0.811, 65, 19, 18],
            [91, 71, 121, 1.374, 43, 18, 19],
            [73, 102, 182, 2.787, 44, 19, 20],
            [73, 50, 76, 0.717, 31, 20, 21],
            [84, 94, 140, 2.238, 68, 18, 22],
            [93, 77, 104, 1.165, 53, 7, 23],
            [99, 130, 227, 3.97, 55, 15, 24],
            [146, 84, 139, 1.094, 40, 17, 25],
            [113, 108, 137, 1.481, 48, 15, 26],
            [81, 48, 62, 1.619, 26, 3, 27],
            [56, 48, 68, 1.336, 37, 9, 28],
            [82, 92, 174, 3.29, 0, 13, 29],
            [106, 116, 188, 3.628, 101, 16, 30],
            [118, 50, 0, 1.383, 76, 11, 31]
        ],
        'dataSH': [
            [91, 45, 125, 0.82, 34, 23, 1],
            [65, 27, 78, 0.86, 45, 29, 2],
            [83, 60, 84, 1.09, 73, 27, 3],
            [109, 81, 121, 1.28, 68, 51, 4],
            [106, 77, 114, 1.07, 55, 51, 5],
            [109, 81, 121, 1.28, 68, 51, 6],
            [106, 77, 114, 1.07, 55, 51, 7],
            [89, 65, 78, 0.86, 51, 26, 8],
            [53, 33, 47, 0.64, 50, 17, 9],
            [80, 55, 80, 1.01, 75, 24, 10],
            [117, 81, 124, 1.03, 45, 24, 11],
            [99, 71, 142, 1.1, 62, 42, 12],
            [95, 69, 130, 1.28, 74, 50, 13],
            [116, 87, 131, 1.47, 84, 40, 14],
            [108, 80, 121, 1.3, 85, 37, 15],
            [134, 83, 167, 1.16, 57, 43, 16],
            [79, 43, 107, 1.05, 59, 37, 17],
            [71, 46, 89, 0.86, 64, 25, 18],
            [97, 71, 113, 1.17, 88, 31, 19],
            [84, 57, 91, 0.85, 55, 31, 20],
            [87, 63, 101, 0.9, 56, 41, 21],
            [104, 77, 119, 1.09, 73, 48, 22],
            [87, 62, 100, 1, 72, 28, 23],
            [168, 128, 172, 1.49, 97, 56, 24],
            [65, 45, 51, 0.74, 39, 17, 25],
            [39, 24, 38, 0.61, 47, 17, 26],
            [39, 24, 39, 0.59, 50, 19, 27],
            [93, 68, 96, 1.05, 79, 29, 28],
            [188, 143, 197, 1.66, 99, 51, 29],
            [174, 131, 174, 1.55, 108, 50, 30],
            [187, 143, 201, 1.39, 89, 53, 31]
        ]
    }

    //折柱图
    var csv_line_bar = {
        x: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078],
        y_1: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220],
        y_2: [1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865, 4298]
    };
    //底部柱状图
    var csv_bottom_bar = {
        x: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        y: [100, 200, 300, 400, 500, 600, 700],
    };
    //  地图旁边的柱图
    var csv_nearMap = {
        x: ['银川', '盐池', '淘乐', '平罗', '石嘴山', '固原', '永宁', '吴忠', '德隆', '中宁', '海源', '中卫'],
        y: [264, 153, 29, 121, 115, 127, 11, 110, 157, 121, 112, 196]
    };
    //分类饼图
    var csv_sort = {
        aa: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 274, name: '联盟广告'},
            {value: 235, name: '视频广告'},
            {value: 400, name: '搜索引擎'}
        ]
    };

    /*******************************************执行函数*******************************************/

    line_line('left-two', line_csv);

    //右侧的第二个柱图 ---右下角
    right_bar_one('right-two', csv_right_bar);

    leiDa('left-one', csv_leida);

    //右上角的仪表盘
    dashBord('right-one');

    // 中间下方的折柱图
    line_bar("bottom-one", csv_line_bar);

    //右下角的柱图
    bottom_bar('right-three');

    //左下角分类饼图
    sort_pie('left-three', csv_sort);

    //地图旁边的柱图
    nearMap('map_one', csv_nearMap);

    //宁夏地图
    henanMap('map');

    /***********************************画图函数*********************************************/

    //渐变面积图---左侧第一个图---first
    function line_line(id, line_csv) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                show: false,//是否显示标题
            },
            grid: {
                top: 40,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        backgroundColor: '#333'
                    }
                }
            },
            legend: {//图利
                show: false,
                data: ['意向', '预购', '成交']
            },
            calculable: false,//是否拖拽重算
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    splitNumber: 5,
                    name: '(日)',
                    nameTextStyle: {color: text_color},
                    axisLine: {
                        lineStyle: {
                            color: border_color
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: text_color
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: border_color
                        }
                    },
                    data: line_csv.x
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '(台)',
                    splitNumber: 5,
                    data: line_csv.y,
                    nameTextStyle: {color: text_color},
                    axisLabel: {
                        textStyle: {
                            color: text_color
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: border_color
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: border_color
                        }
                    }
                }
            ],
            series: [//图表类型
                {
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 4,
                    showAllSymbol: true,
                    hoverAnimation: true,
                    areaStyle: { //区域填充样式
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                                offset: 0, // 0% 处的颜色
                                color: 'rgba(137, 189, 27, 0.3)'
                            }, {
                                offset: 0.8, // 80% 处的颜色
                                color: 'rgba(137, 189, 27, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                            shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                        }
                    },
                    itemStyle: { //折线拐点标志的样式
                        normal: {
                            color: 'rgb(137,189,27)',
                            borderColor: 'rgba(137,189,2,0.27)', //图形的描边颜色。支持的格式同 color
                            borderWidth: 2 //描边线宽。为 0 时无描边。[ default: 0 ]

                        }
                    },
                    // markLine: {itemStyle:{normal:{lineStyle:{width:2,color:'#959EBB'}}}},
                    data: line_csv.arr[0]
                },
                {
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 4,
                    showAllSymbol: true,
                    hoverAnimation: true,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 136, 212, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 136, 212, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,136,212)',
                            borderColor: 'rgba(0,136,212,0.2)',
                            borderWidth: 1

                        }
                    },
                    // markLine: {itemStyle:{normal:{lineStyle:{width:2,color:'#959EBB'}}}},
                    data: line_csv.arr[1]
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //右侧渐变柱状图----first
    function right_bar_one(id, csv_right_bar) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: 40,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            xAxis: [
                {
                    type: 'category',
                    data: csv_right_bar.x,
                    nameTextStyle: {color: text_color},
                    axisLine: {
                        lineStyle: {
                            color: border_color
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: text_color
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: border_color
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    axisLabel: {
                        textStyle: {
                            color: text_color
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: border_color
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: border_color
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '20',
                    textStyle: {
                        color: text_color
                    },
                    data: csv_right_bar.y
                },

            ],
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    textStyle: {
                        color: text_color
                    },
                    formatter: '{c}'
                }
            },
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(17, 168,171, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17, 168,171, 0.1)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //雷达图
    function leiDa(id, csv_leida) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: '',
                left: 'center',
                textStyle: {
                    color: text_color,
                }
            },
            grid: {
                x: 40,
                x2: 10,
                y2: 15,
                showAllSymbol: 20,
                borderColor: text_color
            },
            legend: {
                top: 5,
                data: [''],
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                selectedMode: 'single',
                show: 'true',
            },

            radar: {
                nameGap: 5,
                center: ['50%', '46%'],
                indicator: [
                    {name: '星期一', max: 300},
                    {name: '星期二', max: 250},
                    {name: '星期三', max: 300},
                    {name: '星期四', max: 5},
                    {name: '星期五', max: 200},
                    {name: '星期六', max: 100}
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: text_color,
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: csv_leida.dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#F9713C'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    }
                },
                {
                    name: '上海',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: csv_leida.dataSH,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#B3E4A1'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                },
                {
                    name: '广州',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: csv_leida.dataGZ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: 'rgb(238, 197, 102)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //宁夏地图
    function henanMap(id) {
        var myChart = echarts.init(document.getElementById(id));
        var geoCoordMap = {
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
        var dataFrom = '银川';
        var data = [
            {name: '盐池', value: 80},
            {name: '淘乐', value: 80},
            {name: '平罗', value: 80},
            {name: '固原', value: 80},
            {name: '石嘴山', value: 80},
            {name: '永宁', value: 80},
            {name: '海源', value: 80},
            {name: '中卫', value: 80},
        ];
        var series = [
            {
                name: '银川',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: false,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02,//特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow',//箭头图标
                    symbolSize: 5,//图标大小
                },
                lineStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        width: 0,
                        show: false,
                        curveness: 0.2
                    }
                },
                data: data.map(function (dataItem) {
                    return {
                        fromName: dataFrom,
                        toName: dataItem.name,
                        coords: [
                            geoCoordMap[dataFrom],
                            geoCoordMap[dataItem.name]
                        ]
                    }
                })
            },
            {
                name: '银川',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: false,
                    period: 6,
                    trailLength: 0,

                },
                lineStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        width: 1,
                        show: false,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: data.map(function (dataItem) {
                    return {
                        fromName: dataFrom,
                        toName: dataItem.name,
                        coords: [
                            geoCoordMap[dataFrom],
                            geoCoordMap[dataItem.name]
                        ]
                    }
                })
            },
            {
                name: '银川',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    scale: 5,
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 6;
                },
                itemStyle: {
                    normal: {
                        color: '#a6c84c'
                    }
                },
                data: data.map(function (dataItem) {
                    return {
                        name: dataItem.name,
                        value: geoCoordMap[dataItem.name].concat([dataItem.value])
                    };
                })
            }
        ];
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            dataRange: {
                min: 0,
                max: 100,
                calculable: false,
                color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
                textStyle: {
                    color: '#fff'
                },
                show: false,
                right: 10
            },
            title: {
                text: '',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: '宁夏',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: false,  //是否可缩放、拖拽
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(16,48,114,0.7)',
                        borderColor: 'rgba(31,63,116,0.8)'
                    },
                    emphasis: {
                        areaColor: 'rgba(20,74,148,0.8)'
                    }
                },

            },
            series: series
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    //地图旁边的柱图
    function nearMap(id, csv_nearMap) {
        var myChart = echarts.init(document.getElementById(id));
        // app.title = '堆叠条形图';
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                // show: true,
                data: ['今日排行'],
                // textStyle: {
                //     color: text_color
                // }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                textStyle: {color: text_color},
                type: 'value',
                axisLine: {
                    lineStyle: {
                        //color: border_color  
                        color: 'rgba(0,0,0,0)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        //color:text_color
                        color: 'rgba(0,0,0,0)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // color: border_color
                        color: 'rgba(0,0,0,0)'
                    },

                }
            },
            yAxis: {
                type: 'category',
                data: csv_nearMap.x,
                axisLabel: {
                    textStyle: {
                        //color:text_color
                        color: text_color
                    }
                },
                axisLine: {
                    lineStyle: {
                        //color: border_color
                        color: border_color
                    }
                },
            },

            series: [
                {
                    name: '家属词频分析',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: csv_nearMap.y
                },

            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    //分类饼图
    function sort_pie(id, csv_sort) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: 'Customized Pie',
                left: 'center',
                show: false,
                top: 20,
                textStyle: {
                    color: {color: text_color}
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 100,
                max: 800,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '85%',
                    center: ['50%', '50%'],
                    data: csv_sort.aa.sort(function (a, b) {
                        return a.value - b.value
                    }),
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: text_color
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //柱状折线图
    function line_bar(id, csv_line_bar) {
        var myChart = echarts.init(document.getElementById(id));
        var xData = function () {
            var data = [];
            for (var i = 1; i < 13; i++) {
                data.push(i + "月份");
            }
            return data;
        }();

        var option = {
            backgroundColor: "rgba(0,0,0,0)",
            title: {
                text: "本年商场顾客男女人数统计",
                show: false,
                subtext: "BY Wang Dingding",
                x: "4%",

                textStyle: {
                    color: text_color,
                    fontSize: '22'
                },
                subtextStyle: {
                    color: text_color,
                    fontSize: '16',

                },
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    textStyle: {
                        color: "#fff"
                    }

                },
            },

            grid: {
                top: 30,
                bottom: 95,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            legend: {
                x: '4%',
                top: 0,
                right: 0,
                show:false,
                textStyle: {
                    color: '#90979c',
                },
                // data: ['女', '男', '平均']
            },


            calculable: true,
            xAxis: [{
                type: "category",
                axisLine: {
                    lineStyle: {
                        color: border_color
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: text_color
                    },
                    rotate: -45,
                },
                data: xData,
            }],
            yAxis: [{
                type: "value",
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: border_color
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: text_color
                    }

                },
                splitArea: {
                    show: false
                },

            }],
            dataZoom: [{
                show: true,
                height: 30,
                xAxisIndex: [
                    0
                ],
                bottom: 20,
                start: 10,
                end: 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",

                },
                textStyle: {
                    color: "#fff"
                },
                borderColor: "#90979c"


            }, {
                type: "inside",
                show: true,
                height: 15,
                start: 1,
                end: 35
            }],
            series: [{
                name: "女",
                type: "bar",
                stack: "总量",
                barMaxWidth: 35,
                barGap: "10%",
                itemStyle: {
                    normal: {
                        color: "rgba(255,144,128,1)",
                        label: {
                            show: true,
                            textStyle: {
                                color: "#fff"
                            },
                            position: "insideTop",
                            formatter: function (p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                data: csv_line_bar.x
            },

                {
                    name: "男",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: "rgba(0,191,183,1)",
                            barBorderRadius: 0,
                            label: {
                                show: true,
                                position: "top",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    data: csv_line_bar.y_1
                }, {
                    name: "总数",
                    type: "line",
                    stack: "总量",
                    symbolSize: 10,
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: "rgba(252,230,48,1)",
                            barBorderRadius: 0,
                            label: {
                                show: true,
                                position: "top",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    data: csv_line_bar.y_2
                },
            ]
        }
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //右下角的柱图
    function bottom_bar(id) {
        var myChart = echarts.init(document.getElementById(id));
        var min = 100;
        var max = 2000;
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            grid: {
                top: 40,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: text_color,
                            fontSize: '14',
                        },
                        interval: 0,
                        // rotate: -45,
                    },
                    data: csv_bottom_bar.x,
                    axisLine: {
                        lineStyle: {
                            color: border_color,
                        }
                    },
                    axisTick: {
                        show: false
                    },
                }
            ],
            yAxis: [
                {
                    axisLabel: {
                        textStyle: {
                            color: text_color
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: border_color
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: border_color
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '40%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#de682e'
                            }, {
                                offset: 1,
                                color: '#ecc232'
                            }]),
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: function (param) {
                                if (param.value == max || param.value == min) {
                                    return ''
                                }
                                return param.value
                            },
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '16',
                            }
                        }
                    },
                    markPoint: {
                        symbolSize: '70',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '16',
                                }
                            }
                        },
                        data: [
                            {name: '年最低', value: min, xAxis: 0, yAxis: 100},
                            {name: '年最高', value: max, xAxis: 19, yAxis: 700}
                        ]
                    },
                    data: csv_bottom_bar.y
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //仪表盘
    function dashBord(id) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                text: '仪表盘',
                subtext: '纯属虚构',
                x: 'center',
                show: false
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            // toolbox: {
            //     feature: {
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            series: [{
                name: '成功率',
                type: 'gauge',
                max: 280,
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#445C69'
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 18
                    }
                },
                radius: '100%',  // 半径
                startAngle: 215,  //起始位置
                endAngle: -35,   //终点位置
                detail: {
                    formatter: '{value}Km/h',
                    show: false
                },
                data: [{
                    value: 100,
                    name: ''
                }]
            }]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 280).toFixed(2) - 0;
            myChart.setOption(option, true);
        }, 30000);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
});
