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

    /*****first*****/
        //这里是饼图,百分比,左上角(first)
    var pie_csv = {
            "top": "60",
            "bottom": "40",
            "top_one": "60%",
        };
    //折线--面积图,左下角(first)
    var line_csv = {
        "x": ["11.02", "12.02", "13.02", "14.02", "15.02", "16.02", "17.02"],
        "y": [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        "arr": [
            [200, 211, 215, 313, 142, 413, 310],
            [50, 80, 120, 150, 102, 313, 210],
        ]
    };

    //水球图，右上角(first)
    var csv_water = [0.6, 0.5, 0.4, 0.3];

    //右侧柱图，右下角(first)
    var csv_right_bar = {
        "x": ['1', '2', '3', '4', '5'],
        "y": [1, 3, 2, 3, 4],
    };


    /***********second*************/
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

    //气泡图
    var bubble_csv = [
        [[28604, 77, 17096869, 'Australia', 1990],
            [31163, 77.4, 27662440, 'Canada', 1990],
            [1516, 68, 1154605773, 'China', 1990],
            [13670, 74.7, 10582082, 'Cuba', 1990],
            [28599, 75, 4986705, 'Finland', 1990],
            [29476, 77.1, 56943299, 'France', 1990],
            [31476, 75.4, 78958237, 'Germany', 1990],
            [28666, 78.1, 254830, 'Iceland', 1990],
            [1777, 57.7, 870601776, 'India', 1990],
            [29550, 79.1, 122249285, 'Japan', 1990],
            [2076, 67.9, 20194354, 'North Korea', 1990],
            [12087, 72, 42972254, 'South Korea', 1990],
            [24021, 75.4, 3397534, 'New Zealand', 1990],
            [43296, 76.8, 4240375, 'Norway', 1990],
            [10088, 70.8, 38195258, 'Poland', 1990],
            [19349, 69.6, 147568552, 'Russia', 1990],
            [10670, 67.3, 53994605, 'Turkey', 1990],
            [26424, 75.7, 57110117, 'United Kingdom', 1990],
            [37062, 75.4, 252847810, 'United States', 1990]
        ],
        [[44056, 81.8, 23968973, 'Australia', 2015],
            [43294, 81.7, 35939927, 'Canada', 2015],
            [13334, 76.9, 1376048943, 'China', 2015],
            [21291, 78.5, 11389562, 'Cuba', 2015],
            [38923, 80.8, 5503457, 'Finland', 2015],
            [37599, 81.9, 64395345, 'France', 2015],
            [44053, 81.1, 80688545, 'Germany', 2015],
            [42182, 82.8, 329425, 'Iceland', 2015],
            [5903, 66.8, 1311050527, 'India', 2015],
            [36162, 83.5, 126573481, 'Japan', 2015],
            [1390, 71.4, 25155317, 'North Korea', 2015],
            [34644, 80.7, 50293439, 'South Korea', 2015],
            [34186, 80.6, 4528526, 'New Zealand', 2015],
            [64304, 81.6, 5210967, 'Norway', 2015],
            [24787, 77.3, 38611794, 'Poland', 2015],
            [23038, 73.13, 143456918, 'Russia', 2015],
            [19360, 76.5, 78665830, 'Turkey', 2015],
            [38225, 81.4, 64715810, 'United Kingdom', 2015],
            [53354, 79.1, 321773631, 'United States', 2015]
        ]
    ];

    //折线图
    // var line_csv = {
    //     "x": ["11.02", "12.02", "13.02", "14.02", "15.02", "16.02", "17.02"],
    //     "y": [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
    //     "arr": [
    //         [200, 211, 215, 313, 142, 413, 310],
    //         [50, 80, 120, 150, 102, 313, 210],
    //     ]
    // };


    /*********third*********/

        //玫瑰图
    var rose_csv = [["Direction", "< 0.5 m\/s", "0.5-2 m\/s", "2-4 m\/s", "4-6 m\/s", "6-8 m\/s", "8-10 m\/s", "> 10 m\/s"],
            ["N", 1.81, 1.78, 0.16, 0, 0, 0, 0, 3.75],
            ["NNE", 0.62, 1.09, 0, 0, 0, 0, 0, 1.71],
            ["NE", 0.82, 0.82, 0.07, 0, 0, 0, 0, 1.71],
            ["ENE", 0.59, 1.22, 0.07, 0, 0, 0, 0, 1.88],
            ["E", 0.62, 2.2, 0.49, 0, 0, 0, 0, 3.32],
            ["ESE", 1.22, 2.01, 1.55, 0.3, 0.13, 0, 0, 5.2],
            ["SE", 1.61, 3.06, 2.37, 2.14, 1.74, 0.39, 0.13, 11.45]];

    //渐变柱图
    var csv_third_bar = {
        x: ['8:00', '9:00', '10:00', '11:00', '12:00'],
        y_a: [7.3, 9.2, 5.6, 7.7, 5.6],
        y_b: [2.9, 5, 4.4, 2.7, 5.7]
    };

    //堆积图
    csv_stack = {
        'legend': ['https', 'ssh', 'MsSql', 'else'],
        'x': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        'y': {
            'https': [320, 302, 301, 334, 390, 330, 320],
            'ssh': [120, 132, 101, 134, 90, 230, 210],
            'MsSql': [220, 182, 191, 234, 290, 330, 310],
            'else': [150, 212, 201, 154, 190, 330, 410]
        }
    };
    /*********forth*********/
        //彩色的柱图
    var csv_red_bar = {
            "x": ['星期一', '星期二', '星期三', '星期四', '星期五'],
            "y": ["TOP5", "TOP4", "TOP3", "TOP2", "TOP1"],
            "appusage_data": [{
                name: "app4",
                value: 34
            }, {
                name: "app11",
                value: 46
            }, {
                name: "app8",
                value: 53
            }, {
                name: "app3",
                value: 68
            }, {
                name: "app16",
                value: 79
            }],
        };

    //面积图
    var csv_area = {
        'x': ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        'y': [4, 3, 4, 4, 4, 1, 2, 2, 4, 1, 1, 4]
    };

    /*******************************************执行函数*******************************************/
    /****first******/
    // 左下角的气泡图
     bubble('left-three', bubble_csv);
    //中间地图
    //饼图---左上角的图
    red_bar_forth('left-one', csv_red_bar);
    //  pie('left-one', pie_csv);

    //渐变面积图---左下角
     line_line('left-two', line_csv);
     //line_bar('left-two');
    //右侧的第二个柱图 ---右下角
    right_bar_one('right-two', csv_right_bar);

    //左侧的堆积图

    stack_bar('right-one', csv_stack)
    //水球图 ----左上角
    // base_water('water-one', csv_water);
    // red_water('water-two', csv_water);
    // base_water('water-three', csv_water);
     line_line('bottom-one', line_csv);
    //地图-----中间
    // china_map('map');


    //中间的饼图
    // pie('pie-one', pie_csv);
    // pie('pie-two', pie_csv);
    // pie('pie-three', pie_csv);
    /*****second******/
    // leiDa('left-one', csv_leida);
    //气泡图

    // map('map');
    // 右上角---水球图

    //右下角----折线图
    // line('right-two', line_csv);


    /*********third************************/
    //左上角的玫瑰图
    // rose('left-two', rose_csv);


    //右上角的仪表盘
    // dashBoard('right-one');

    //右下角的渐变柱图
    // third_bar('right-two', csv_third_bar);

    //普通地图 ---下钻
    //  map_provice('map');

    /*********forth************************/

    //左侧渐变的柱图


    //左侧的面积图
    // area('left-two', csv_area);

    //地图----下钻
    //  hightLightMap('map');
    // red_water('right-one', csv_water);
    /***********************************画图函数*********************************************/
    /***************************first*********************/
    // 饼图---饼图---first
    function pie(id, pie_csv) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        var dataStyle = {
            normal: {
                label: {show: false},
                labelLine: {show: false}
            }
        };
        //半径
        var pie_int = 65;
        var option = {
            title: {
                text: pie_csv.top_one,
                x: 'center',
                y: 'center',
                itemGap: 20,
                textStyle: {
                    // color : 'rgba(30,144,255,0.8)',
                    color: '#fff',
                    // fontFamily : '微软雅黑',
                    fontSize: 20,
                    // fontWeight : 'bolder'
                }
            },
            tooltip: {
                show: false
            },
            legend: {
                show: false,
                orient: 'vertical',
                x: 'left',
                top: '20',
                data: ['成功次数', '失败次数']
            },
            toolbox: {
                show: false,
            },
            calculable: false,//是否拖拽重算
            series: [
                {
                    name: '1',
                    type: 'pie',
                    hoverAnimation: false,
                    animation: false,
                    clockWise: false,
                    radius: [(pie_int - 15), pie_int],
                    itemStyle: dataStyle,
                    data: [
                        {
                            value: pie_csv.top,
                            name: '成功次数',
                            itemStyle: {
                                normal: {
                                    color: '#32C4EE',
                                    // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //     offset: 0,
                                    //     color: '#9DCC17'
                                    // },
                                    //     {
                                    //         offset: 1,
                                    //         color: '#D9241B'
                                    //     },
                                    //
                                    // ]),

                                },
                            }
                        },

                        {
                            value: pie_csv.bottom,
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: '#207b91'
                                },
                            }
                        }
                    ]
                },

            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }


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
                    barWidth: '18',
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
    }


    // 水球图---first
    function base_water(id, csv_water) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            series: [{
                type: 'liquidFill',
                radius: 150,  //设置半径大小
                label: {
                    normal: {
                        fontSize: 28
                    }
                },
                outline: {
                    show: false,
                    borderDistance: 8,
                    itemStyle: {
                        color: 'none',
                        borderColor: '#294D99',
                        borderWidth: 8,
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.25)'
                    }
                },
                data: csv_water,
                backgroundStyle: {
                    borderWidth: 5,
                    // borderColor: rgba(0,0,0,0),
                    // color: 'yellow'
                }
            }]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }


    // 地图---first   迁徙图
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
            [{name: '上海', value: 100}, {name: '西安'}],
            [{name: '广州', value: 70}, {name: '西安'}],
            [{name: '哈尔滨', value: 30}, {name: '西安'}],
            [{name: '青岛', value: 50}, {name: '西安'}],
            [{name: '南昌', value: 20}, {name: '西安'}],
            [{name: '银川', value: 10}, {name: '西安'}],
            [{name: '拉萨', value: 80}, {name: '西安'}],
            [{name: '天津', value: 55}, {name: '西安'}],
            [{name: '乌鲁木齐', value: 90}, {name: '西安'}]
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

        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var series = [];
        [['西安', BJData]].forEach(function (item, i) {
            series.push(
                {
                    type: 'lines',
                    zlevel: 2,
                    showLegendSymbol: false,
                    effect: {
                        show: true,
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
                        color: 'rgba(51, 69, 89, .5)', //地图背景色
                        borderColor: 'rgba(100,149,237,1)' //省市边界线
                    },
                    emphasis: {
                        show: false,
                        color: 'rgba(37, 43, 61, .5)'//悬浮背景
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

    /**********second******************/
    //雷达图-----second
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
                x2: 100,
                y2: 150,
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
                center: ['50%', '50%'],
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
    }

    //气泡图
    function bubble(id, bubble_csv) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: ''
            },
            grid: {
                top: 30,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            legend: {
                right: 10,
                show: false,
                textStyle: {
                    color: text_color
                },
                data: ['1990', '2015']
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        color: border_color
                    },
                },
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
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        // type: 'dashed'
                        color: border_color
                    },
                },
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
                scale: true
            },
            series: [{
                name: '1990',
                data: bubble_csv[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        }, {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }])
                    }
                }
            }, {
                name: '2015',
                data: bubble_csv[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    }
                }
            }]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    //3d  中国地图
    function map(id) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        let geoCoordMap = {
            "海门": [121.15, 31.89],
            "鄂尔多斯": [109.781327, 39.608266],
            "招远": [120.38, 37.35]
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

        var option = {
            title: {
                text: '实时报道',
                textStyle: {
                    color: '#e1e1e1',
                    fontSize: 20,
                    fontWight: '200',
                    // borderLeft:'3x solid teal',
                },
                padding: [20, 20, 20, 20]
            },
            tooltip: {
                show: true,
            },
            visualMap: [{
                type: 'continuous',
                seriesIndex: 0,
                text: ['bar3D'],
                show: false,
                calculable: true,
                max: 300,
                inRange: {
                    color: ['#a53b40']
                }
            }, {
                type: 'continuous',
                seriesIndex: 1,
                text: ['scatter3D'],
                left: 'right',
                max: 100,
                calculable: true,
                inRange: {
                    color: ['#4b6294', 'blue', 'purple']
                }
            }],
            geo3D: {
                map: 'china',
                roam: true,
                itemStyle: {
                    areaColor: '#1d5e98',
                    opacity: 1,
                    borderWidth: 0.4,
                    borderColor: text_color
                },
                label: {
                    show: true,
                    textStyle: {
                        color: '#575757', //地图初始化区域字体颜色
                        fontSize: 8,
                        opacity: 1,
                        backgroundColor: 'rgba(44,97,16,0)'
                    },
                },
                emphasis: { //当鼠标放上去  地区区域是否显示名称
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 3,
                            backgroundColor: 'rgba(44,97,16,0)'
                        }
                    }
                },
                //shading: 'lambert',
                light: { //光照阴影
                    main: {
                        color: '#fff', //光照颜色
                        intensity: 1.2, //光照强度
                        //shadowQuality: 'high', //阴影亮度
                        shadow: false, //是否显示阴影
                        alpha: 55,
                        beta: 10

                    },
                    ambient: {
                        intensity: 0.3
                    }
                }
            },
            series: [{
                name: 'bar3D',
                type: "bar3D",
                coordinateSystem: 'geo3D',
                barSize: 1, //柱子粗细
                shading: 'lambert',
                opacity: 0.3,
                bevelSize: 0.3,
                textStyle: {backgroundColor: '#0214a8'},
                label: {
                    show: false,
                    formatter: '{b}'
                },
                data: convertData([{
                    name: "海门",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "鄂尔多斯",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "招远",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "舟山",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "齐齐哈尔",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "盐城",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "赤峰",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "青岛",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "乳山",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "金昌",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "泉州",
                    value: (Math.random() * 200).toFixed(2)
                }
                ]),
            }, {
                name: '',
                type: "scatter3D",
                coordinateSystem: 'geo3D',
                symbol: 'pin',
                symbolSize: 30,
                opacity: 1,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                itemStyle: {
                    borderWidth: 0.5,
                    borderColor: '#fff'
                },
                data: convertData([{
                    name: "阳泉",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "莱州",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "湖州",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "汕头",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "昆山",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "张家口",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }])
            }]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    // 水球图
    function red_water(id, csv_water) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            series: [{
                type: 'liquidFill',
                radius: 150,  //设置半径大小
                data: [0.6, {
                    value: 0.5,
                    direction: 'left',
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                }, 0.4, 0.3],
                outline: {
                    show: false,
                    borderDistance: 8,
                    itemStyle: {
                        color: 'none',
                        borderColor: '#294D99',
                        borderWidth: 8,
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.25)'
                    }
                },
            }]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    //折线图
    function line(id, line_csv) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                show: false,//是否显示标题
            },
            grid: {
                top: 30,
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
                    smooth: false,
                    symbol: 'circle',
                    symbolSize: 4,
                    showAllSymbol: true,
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#6B3D32',
                            lineStyle: {
                                color: '#FF7F32'
                            }
                        }
                    },
                    data: line_csv.arr[0]
                },
                {
                    type: 'line',
                    smooth: false,
                    symbol: 'circle',
                    symbolSize: 4,
                    showAllSymbol: true,
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#122E3B',
                            lineStyle: {
                                color: '#20838E'
                            }
                        }
                    },
                    data: line_csv.arr[1]
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }


    /*********third*************/
    // 玫瑰图
    function rose(id, rose_csv) {
        var myChart = echarts.init(document.getElementById(id));
        //配置信息
        var option = {
            data: {
                // table: 'freq',
                columns: rose_csv,
                endRow: 17,
                endColumn: 7
            },

            chart: {
                polar: true,
                type: 'column',
                backgroundColor: 'rgba(0,0,0,0)'
            },

            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },

            exporting: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            pane: {
                size: '85%'
            },

            legend: {
                align: 'left',
                verticalAlign: 'top',
                x: 0,
                y: 30,
                enabled: true,
                layout: 'vertical',
                itemStyle: {color: text_color}
            },

            xAxis: {
                tickmarkPlacement: 'on',
                gridLineColor: border_color,
            },

            yAxis: {
                min: 0,
                endOnTick: false,
                showLastLabel: true,
                gridLineColor: border_color,
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
                reversedStacks: false
            },

            tooltip: {
                valueSuffix: '%',
                backgroundColor: background_color,
                borderColor: 'rgba(0,0,0,0)'
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on',
                    borderColor: border_color,
                }
            }
        };
        $('#' + id).highcharts(option);
    }


    //折柱图
    function line_bar(id) {

        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));

        // Generate data
        var category = [];
        var dottedBase = +new Date();
        var lineData = [];
        var barData = [];

        for (var i = 0; i < 5; i++) {
            var date = new Date(dottedBase += 1000 * 3600 * 24);
            category.push([
                // date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
            ].join('-'));
            var b = Math.random() * 200;
            var d = Math.random() * 200;
            barData.push(b)
            lineData.push(d + b);
        }


        // option
        var option = {
            //backgroundColor: '#0f375f',

            title: {
                // text: '宁夏回族自治区审管服务联动政区图',
                subtext: '',
                sublink: ''
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        backgroundColor: '#333'
                    }
                }
            },
            grid: {
                top: '50px',
                bottom: '30px'
                // borderColor:box_border_color
            },
            legend: {
                top: '10',
                data: ['问题事件', '待办事件', '已处理事件'],
                textStyle: {
                    color: text_color
                }
            },
            xAxis: {
                data: category,
                // splitLine: {show: false},
                // splitLine: {show: false},

                textStyle: {color: text_color},
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
                        //color:text_color
                        color: text_color
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: border_color
                    }
                }
            },
            yAxis: {
                // splitLine: {show: false},
                // axisLine: {
                //     lineStyle: {
                //         color: text_color
                //     }
                // },
                textStyle: {color: text_color},
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
                        //color:text_color
                        color: text_color
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: border_color
                    }
                }
            },
            series: [{
                name: '待办事件',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 5,
                data: lineData
            }, {
                name: '问题事件',
                type: 'bar',
                barWidth: 12,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#996699'},
                                {offset: 1, color: '#161fee'}
                            ]
                        )
                    }
                },
                data: barData
            }, {
                name: '已处理事件',
                type: 'bar',
                barGap: '-100%',
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {
                                    offset: 0,
                                    color: 'rgba(41, 200, 32, 0.8)'
                                },
                                {offset: 0.6, color: 'rgba(121, 200, 142, 0.8)'},
                                {offset: 1, color: 'rgba(0,0,0,0)'}
                            ]
                        )
                    }
                },
                z: -12,
                data: lineData
            },

            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    //仪表盘
    function dashBoard(id) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '',
                    type: 'gauge',
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '80%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 25,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: text_color,
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {           // 分隔线
                        shadowColor: '#4385ff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: text_color,
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    data: [{value: 40, name: 'km/h',}]
                },
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['25%', '55%'],    // 默认全局居中
                    radius: '60%',
                    min: 0,
                    max: 7,
                    endAngle: 45,
                    splitNumber: 7,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            // fontWeight: 'bolder',
                            color: text_color,
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: text_color,
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width: 5,
                        shadowColor: '#4385ff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        offsetCenter: [0, '-30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontStyle: 'italic',
                            color: text_color,
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        //backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        // borderColor: '#fff',
                        shadowColor: '#4385ff', //默认透明
                        shadowBlur: 5,
                        width: 80,
                        height: 30,
                        offsetCenter: [25, '20%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: text_color
                        }
                    },
                    data: [{value: 1.5, name: 'x1000 r/min'}]
                },
                {
                    name: '油表',
                    type: 'gauge',
                    center: ['75%', '50%'],    // 默认全局居中
                    radius: '50%',
                    min: 0,
                    max: 2,
                    startAngle: 135,
                    endAngle: 45,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        formatter: function (v) {
                            switch (v + '') {
                                case '0' :
                                    return 'E';
                                case '1' :
                                    return 'Gas';
                                case '2' :
                                    return 'F';
                            }
                        }
                    },
                    splitLine: {             // 分隔线
                        length: 5,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 8
                        }
                    },
                    pointer: {
                        width: 2,
                        shadowColor: '#0eaeff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{value: 0.5, name: 'gas'}]
                },
                {
                    name: '水表',
                    type: 'gauge',
                    center: ['75%', '50%'],    // 默认全局居中
                    radius: '50%',
                    min: 0,
                    max: 2,
                    startAngle: 315,
                    endAngle: 225,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: text_color,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        formatter: function (v) {
                            switch (v + '') {
                                case '0' :
                                    return 'H';
                                case '1' :
                                    return 'Water';
                                case '2' :
                                    return 'C';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: text_color,
                            shadowColor: '#4385ff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{value: 0.5, name: 'gas'}]
                }
            ]
        };
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
            option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            myChart.setOption(option);
        }, 2000)
        // 为echarts对象加载数据
        myChart.setOption(option);
    }


    //渐变柱图
    function third_bar(id, csv_third_bar) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: { //提示框组件
                trigger: 'axis',
                formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
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
            legend: {//图例组件，颜色和名字
                right: 10,
                top: 0,
                itemGap: 16,
                show: false,
                itemWidth: 18,
                itemHeight: 10,
                data: [{
                    name: '流入',
                },
                    {
                        name: '流出',
                    }],
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: csv_third_bar.x,
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
                    name: '流入',
                    type: 'bar',
                    data: csv_third_bar.y_a,
                    barWidth: 12,
                    barGap: 0,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: text_color,
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            }, {
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            }, {
                                offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                            }, {
                                offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                            }], false),
                        },
                    },
                },
                {
                    name: '流出',
                    type: 'bar',
                    data: csv_third_bar.y_b,
                    barWidth: 12,
                    barGap: 0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            }, {
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            }, {
                                offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                            }], false),
                        },
                    },
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    // 堆积图
    function stack_bar(id, csv_stack) {
        var myChart = echarts.init(document.getElementById(id));

        var option = {
            legend: {//图利
                show: false,
                top: 35,
                textStyle: {
                    color: text_color
                },
                data: csv_stack.legend
            },
            grid: {
                top: 30,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            xAxis: {
                type: 'category',
                // name: '(日)',
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
                },
                data: csv_stack.x
            },
            yAxis: {
                type: 'value',
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
            },
            series: [
                {
                    name: 'https',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 18,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {color: text_color}
                        }
                    },
                    data: csv_stack.y.https
                },
                {
                    name: 'ssh',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 18,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {color: text_color}
                        }
                    },
                    data: csv_stack.y.ssh
                },
                {
                    name: 'MsSql',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 18,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {color: text_color}
                        }
                    },
                    data: csv_stack.y.MsSql
                },
                {
                    name: 'else',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 18,
                    barMaxWidth: 30,
                    // barCategoryGap:30,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {color: text_color}
                        }
                    },
                    data: csv_stack.y.else
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    /***********************forth**************************/
    //彩色柱图
    function red_bar_forth(id, red_bar_forth) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                text: " ",
                show: 'false',
                textStyle: {
                    "color": "#bcbfff",
                    "fontWeight": "bold",
                    "fontSize": 14
                },
                top: "4%",
                left: "2.2%"
            },
            tooltip: {
                trigger: "axis",
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为："line" | "shadow"
                }
            },
            grid: {
                top: 10,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            yAxis: [{
                type: "category",
                data: csv_red_bar.y,
                axisLine: {
                    lineStyle: {
                        color: border_color
                    }
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
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
            }],
            xAxis: [{
                type: "value",
                axisLine: {
                    show: false
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
            }],

            series: [{
                name: "应用使用率",
                type: "bar",
                data: csv_red_bar.appusage_data,
                barCategoryGap: "35%",
                label: {
                    normal: {
                        show: false,
                        position: "right",
                        formatter: function (params) {
                            return params.data.name;
                        },
                        textStyle: {
                            color: "#bcbfff" //color of value
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: "#ffb069" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#ec2e85" // 100% 处的颜色
                        }], false)
                    }
                }
            }]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }

    //面积图
    function area(id, csv_area) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                show: true,//是否显示标题
                text: '',
                padding: [40, 5, 10, 95],//内边局
                textStyle: {//字体大小
                    fontSize: 12,
                    color: text_color
                }
            },
            grid: {
                top: '70px',
                bottom: '30px'
            },
            tooltip: {//提示框
                trigger: 'axis',
                show: false
            },
            legend: {//图利
                show: false,
                top: '20',
                right: '10',
                data: ['意向', '预购', '成交']
            },
            calculable: false,//是否拖拽重算
            // xAxis: [
            //     {
            //         type: 'category',
            //         boundaryGap: false,
            //         // name: '(日)',
            //         // name: '(日)',
            //         splitNumber: 12,
            //         nameTextStyle: {color: text_color},
            //         axisLine: {
            //             lineStyle: {
            //                 color: border_color
            //             }
            //         },
            //         axisTick: {
            //             show: false
            //         },
            //         axisLabel: {
            //             textStyle: {
            //                 color: text_color
            //             }
            //         },
            //         splitLine: {
            //             show: true,
            //             lineStyle: {
            //                 color: border_color
            //             }
            //         },
            //         data: csv_area.x
            //     }
            // ],
            // yAxis: [
            //     {
            //         type: 'value',
            //         name: '(KB)',
            //         splitNumber: 7,
            //         nameTextStyle: {color: text_color},
            //         axisLabel: {
            //             textStyle: {
            //                 color: text_color
            //             }
            //         },
            //         axisTick: {
            //             show: false
            //         },
            //         axisLine: {
            //             lineStyle: {
            //                 color: border_color
            //             }
            //         },
            //         splitLine: {
            //             show: true,
            //             lineStyle: {
            //                 color: border_color
            //             }
            //         }
            //     }
            // ],
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
                    data: csv_area.x
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
                    name: '成交',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: border_color
                            },
                            areaStyle: {
                                type: 'default',
                                color: 'rgba(21,178,197,0.5)'
                            }
                        }
                    },
                    data: csv_area.y
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }


    //  普通地图   下钻(迁徙，下钻)
    function map_provice(id) {
        var myChart = echarts.init(document.getElementById(id));

        //各省的数据
        var provinces = {
            '上海': './province/shan1xi.json',
            '河北': './province/hebei.json',
            '山西': './province/shan1xi.json',
            '内蒙古': './province/neimenggu.json',
            '辽宁': './province/liaoning.json',
            '吉林': './province/jilin.json',
            '黑龙江': './province/heilongjiang.json',
            '江苏': './province/jiangsu.json',
            '浙江': './province/zhejiang.json',
            '安徽': './province/anhui.json',
            '福建': './province/fujian.json',
            '江西': './province/jiangxi.json',
            '山东': './province/shandong.json',
            '河南': './province/henan.json',
            '湖北': './province/hubei.json',
            '湖南': './province/hunan.json',
            '广东': './province/guangdong.json',
            '广西': './province/guangxi.json',
            '海南': './province/hainan.json',
            '四川': './province/sichuan.json',
            '贵州': './province/guizhou.json',
            '云南': './province/yunnan.json',
            '西藏': './province/xizang.json',
            '陕西': './province/shan3xi.json',
            '甘肃': './province/gansu.json',
            '青海': './province/qinghai.json',
            '宁夏': './province/ningxia.json',
            '新疆': './province/xinjiang.json',
            '北京': './province/beijing.json',
            '天津': './province/tianjin.json',
            '重庆': './province/chongqing.json',
            '香港': './province/hongkong.json',
            '澳门': './province/macau.json',
        };
        var data1 = [{
            name: '北京'
        }, {
            name: '天津'
        }, {
            name: '上海'
        }, {
            name: '重庆'
        }, {
            name: '河北'
        }, {
            name: '河南'
        }, {
            name: '云南'
        }, {
            name: '辽宁'
        }, {
            name: '黑龙江'
        }, {
            name: '湖南'
        }, {
            name: '安徽'
        }, {
            name: '山东'
        }, {
            name: '新疆'
        }, {
            name: '江苏'
        }, {
            name: '浙江'
        }, {
            name: '江西'
        }, {
            name: '湖北'
        }, {
            name: '广西'
        }, {
            name: '甘肃'
        }, {
            name: '山西'
        }, {
            name: '内蒙古'
        }, {
            name: '陕西'
        }, {
            name: '吉林'
        }, {
            name: '福建'
        }, {
            name: '贵州'
        }, {
            name: '广东'
        }, {
            name: '青海'
        }, {
            name: '西藏'
        }, {
            name: '四川'
        }, {
            name: '宁夏'
        }, {
            name: '海南'
        }, {
            name: '台湾'
        }, {
            name: '香港'
        }, {
            name: '澳门'
        }];
        for (var i = 0; i < data1.length; i++) {
            data1[i].value = Math.round(Math.random() * 10000);
        }

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
            [{name: '上海', value: 100}, {name: '西安'}],
            [{name: '广州', value: 70}, {name: '西安'}],
            [{name: '哈尔滨', value: 30}, {name: '西安'}],
            [{name: '青岛', value: 50}, {name: '西安'}],
            [{name: '南昌', value: 20}, {name: '西安'}],
            [{name: '银川', value: 10}, {name: '西安'}],
            [{name: '拉萨', value: 80}, {name: '西安'}],
            [{name: '天津', value: 55}, {name: '西安'}],
            [{name: '乌鲁木齐', value: 90}, {name: '西安'}]
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

        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var series = [];
        [['西安', BJData]].forEach(function (item, i) {
            series.push(
                {
                    type: 'lines',
                    zlevel: 2,
                    showLegendSymbol: false,
                    effect: {
                        show: true,
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
                        show: true,
                    }
                },
                roam: true, //是否允许缩放
                layoutCenter: ['50%', '53%'], //地图位置
                layoutSize: "108%",
                itemStyle: {
                    normal: {
                        color: 'rgba(51, 69, 89, .5)', //地图背景色
                        borderColor: 'rgba(100,149,237,1)' //省市边界线
                    },
                    emphasis: {
                        show: false,
                        color: 'rgba(37, 43, 61, .5)'//悬浮背景
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

        myChart.setOption(option, true);

        var data2 = [{
            name: '重庆市'
        }, {
            name: '北京市'
        }, {
            name: '天津市'
        }, {
            name: '上海市'
        }, {
            name: '香港'
        }, {
            name: '澳门'
        }, {
            name: '巴音郭楞蒙古自治州'
        }, {
            name: '和田地区'
        }, {
            name: '哈密地区'
        }, {
            name: '阿克苏地区'
        }, {
            name: '阿勒泰地区'
        }, {
            name: '喀什地区'
        }, {
            name: '塔城地区'
        }, {
            name: '昌吉回族自治州'
        }, {
            name: '克孜勒苏柯尔克孜自治州'
        }, {
            name: '吐鲁番地区'
        }, {
            name: '伊犁哈萨克自治州'
        }, {
            name: '博尔塔拉蒙古自治州'
        }, {
            name: '乌鲁木齐市'
        }, {
            name: '克拉玛依市'
        }, {
            name: '阿拉尔市'
        }, {
            name: '图木舒克市'
        }, {
            name: '五家渠市'
        }, {
            name: '石河子市'
        }, {
            name: '那曲地区'
        }, {
            name: '阿里地区'
        }, {
            name: '日喀则地区'
        }, {
            name: '林芝地区'
        }, {
            name: '昌都地区'
        }, {
            name: '山南地区'
        }, {
            name: '拉萨市'
        }, {
            name: '呼伦贝尔市'
        }, {
            name: '阿拉善盟'
        }, {
            name: '锡林郭勒盟'
        }, {
            name: '鄂尔多斯市'
        }, {
            name: '赤峰市'
        }, {
            name: '巴彦淖尔市'
        }, {
            name: '通辽市'
        }, {
            name: '乌兰察布市'
        }, {
            name: '兴安盟'
        }, {
            name: '包头市'
        }, {
            name: '呼和浩特市'
        }, {
            name: '乌海市'
        }, {
            name: '海西蒙古族藏族自治州'
        }, {
            name: '玉树藏族自治州'
        }, {
            name: '果洛藏族自治州'
        }, {
            name: '海南藏族自治州'
        }, {
            name: '海北藏族自治州'
        }, {
            name: '黄南藏族自治州'
        }, {
            name: '海东地区'
        }, {
            name: '西宁市'
        }, {
            name: '甘孜藏族自治州'
        }, {
            name: '阿坝藏族羌族自治州'
        }, {
            name: '凉山彝族自治州'
        }, {
            name: '绵阳市'
        }, {
            name: '达州市'
        }, {
            name: '广元市'
        }, {
            name: '雅安市'
        }, {
            name: '宜宾市'
        }, {
            name: '乐山市'
        }, {
            name: '南充市'
        }, {
            name: '巴中市'
        }, {
            name: '泸州市'
        }, {
            name: '成都市'
        }, {
            name: '资阳市'
        }, {
            name: '攀枝花市'
        }, {
            name: '眉山市'
        }, {
            name: '广安市'
        }, {
            name: '德阳市'
        }, {
            name: '内江市'
        }, {
            name: '遂宁市'
        }, {
            name: '自贡市'
        }, {
            name: '黑河市'
        }, {
            name: '大兴安岭地区'
        }, {
            name: '哈尔滨市'
        }, {
            name: '齐齐哈尔市'
        }, {
            name: '牡丹江市'
        }, {
            name: '绥化市'
        }, {
            name: '伊春市'
        }, {
            name: '佳木斯市'
        }, {
            name: '鸡西市'
        }, {
            name: '双鸭山市'
        }, {
            name: '大庆市'
        }, {
            name: '鹤岗市'
        }, {
            name: '七台河市'
        }, {
            name: '酒泉市'
        }, {
            name: '张掖市'
        }, {
            name: '甘南藏族自治州'
        }, {
            name: '武威市'
        }, {
            name: '陇南市'
        }, {
            name: '庆阳市'
        }, {
            name: '白银市'
        }, {
            name: '定西市'
        }, {
            name: '天水市'
        }, {
            name: '兰州市'
        }, {
            name: '平凉市'
        }, {
            name: '临夏回族自治州'
        }, {
            name: '金昌市'
        }, {
            name: '嘉峪关市'
        }, {
            name: '普洱市'
        }, {
            name: '红河哈尼族彝族自治州'
        }, {
            name: '文山壮族苗族自治州'
        }, {
            name: '曲靖市'
        }, {
            name: '楚雄彝族自治州'
        }, {
            name: '大理白族自治州'
        }, {
            name: '临沧市'
        }, {
            name: '迪庆藏族自治州'
        }, {
            name: '昭通市'
        }, {
            name: '昆明市'
        }, {
            name: '丽江市'
        }, {
            name: '西双版纳傣族自治州'
        }, {
            name: '保山市'
        }, {
            name: '玉溪市'
        }, {
            name: '怒江傈僳族自治州'
        }, {
            name: '德宏傣族景颇族自治州'
        }, {
            name: '百色市'
        }, {
            name: '河池市'
        }, {
            name: '桂林市'
        }, {
            name: '南宁市'
        }, {
            name: '柳州市'
        }, {
            name: '崇左市'
        }, {
            name: '来宾市'
        }, {
            name: '玉林市'
        }, {
            name: '梧州市'
        }, {
            name: '贺州市'
        }, {
            name: '钦州市'
        }, {
            name: '贵港市'
        }, {
            name: '防城港市'
        }, {
            name: '北海市'
        }, {
            name: '怀化市'
        }, {
            name: '永州市'
        }, {
            name: '邵阳市'
        }, {
            name: '郴州市'
        }, {
            name: '常德市'
        }, {
            name: '湘西土家族苗族自治州'
        }, {
            name: '衡阳市'
        }, {
            name: '岳阳市'
        }, {
            name: '益阳市'
        }, {
            name: '长沙市'
        }, {
            name: '株洲市'
        }, {
            name: '张家界市'
        }, {
            name: '娄底市'
        }, {
            name: '湘潭市'
        }, {
            name: '榆林市'
        }, {
            name: '延安市'
        }, {
            name: '汉中市'
        }, {
            name: '安康市'
        }, {
            name: '商洛市'
        }, {
            name: '宝鸡市'
        }, {
            name: '渭南市'
        }, {
            name: '咸阳市'
        }, {
            name: '西安市'
        }, {
            name: '铜川市'
        }, {
            name: '清远市'
        }, {
            name: '韶关市'
        }, {
            name: '湛江市'
        }, {
            name: '梅州市'
        }, {
            name: '河源市'
        }, {
            name: '肇庆市'
        }, {
            name: '惠州市'
        }, {
            name: '茂名市'
        }, {
            name: '江门市'
        }, {
            name: '阳江市'
        }, {
            name: '云浮市'
        }, {
            name: '广州市'
        }, {
            name: '汕尾市'
        }, {
            name: '揭阳市'
        }, {
            name: '珠海市'
        }, {
            name: '佛山市'
        }, {
            name: '潮州市'
        }, {
            name: '汕头市'
        }, {
            name: '深圳市'
        }, {
            name: '东莞市'
        }, {
            name: '中山市'
        }, {
            name: '延边朝鲜族自治州'
        }, {
            name: '吉林市'
        }, {
            name: '白城市'
        }, {
            name: '松原市'
        }, {
            name: '长春市'
        }, {
            name: '白山市'
        }, {
            name: '通化市'
        }, {
            name: '四平市'
        }, {
            name: '辽源市'
        }, {
            name: '承德市'
        }, {
            name: '张家口市'
        }, {
            name: '保定市'
        }, {
            name: '唐山市'
        }, {
            name: '沧州市'
        }, {
            name: '石家庄市'
        }, {
            name: '邢台市'
        }, {
            name: '邯郸市'
        }, {
            name: '秦皇岛市'
        }, {
            name: '衡水市'
        }, {
            name: '廊坊市'
        }, {
            name: '恩施土家族苗族自治州'
        }, {
            name: '十堰市'
        }, {
            name: '宜昌市'
        }, {
            name: '襄樊市'
        }, {
            name: '黄冈市'
        }, {
            name: '荆州市'
        }, {
            name: '荆门市'
        }, {
            name: '咸宁市'
        }, {
            name: '随州市'
        }, {
            name: '孝感市'
        }, {
            name: '武汉市'
        }, {
            name: '黄石市'
        }, {
            name: '神农架林区'
        }, {
            name: '天门市'
        }, {
            name: '仙桃市'
        }, {
            name: '潜江市'
        }, {
            name: '鄂州市'
        }, {
            name: '遵义市'
        }, {
            name: '黔东南苗族侗族自治州'
        }, {
            name: '毕节地区'
        }, {
            name: '黔南布依族苗族自治州'
        }, {
            name: '铜仁地区'
        }, {
            name: '黔西南布依族苗族自治州'
        }, {
            name: '六盘水市'
        }, {
            name: '安顺市'
        }, {
            name: '贵阳市'
        }, {
            name: '烟台市'
        }, {
            name: '临沂市'
        }, {
            name: '潍坊市'
        }, {
            name: '青岛市'
        }, {
            name: '菏泽市'
        }, {
            name: '济宁市'
        }, {
            name: '德州市'
        }, {
            name: '滨州市'
        }, {
            name: '聊城市'
        }, {
            name: '东营市'
        }, {
            name: '济南市'
        }, {
            name: '泰安市'
        }, {
            name: '威海市'
        }, {
            name: '日照市'
        }, {
            name: '淄博市'
        }, {
            name: '枣庄市'
        }, {
            name: '莱芜市'
        }, {
            name: '赣州市'
        }, {
            name: '吉安市'
        }, {
            name: '上饶市'
        }, {
            name: '九江市'
        }, {
            name: '抚州市'
        }, {
            name: '宜春市'
        }, {
            name: '南昌市'
        }, {
            name: '景德镇市'
        }, {
            name: '萍乡市'
        }, {
            name: '鹰潭市'
        }, {
            name: '新余市'
        }, {
            name: '南阳市'
        }, {
            name: '信阳市'
        }, {
            name: '洛阳市'
        }, {
            name: '驻马店市'
        }, {
            name: '周口市'
        }, {
            name: '商丘市'
        }, {
            name: '三门峡市'
        }, {
            name: '新乡市'
        }, {
            name: '平顶山市'
        }, {
            name: '郑州市'
        }, {
            name: '安阳市'
        }, {
            name: '开封市'
        }, {
            name: '焦作市'
        }, {
            name: '许昌市'
        }, {
            name: '濮阳市'
        }, {
            name: '漯河市'
        }, {
            name: '鹤壁市'
        }, {
            name: '大连市'
        }, {
            name: '朝阳市'
        }, {
            name: '丹东市'
        }, {
            name: '铁岭市'
        }, {
            name: '沈阳市'
        }, {
            name: '抚顺市'
        }, {
            name: '葫芦岛市'
        }, {
            name: '阜新市'
        }, {
            name: '锦州市'
        }, {
            name: '鞍山市'
        }, {
            name: '本溪市'
        }, {
            name: '营口市'
        }, {
            name: '辽阳市'
        }, {
            name: '盘锦市'
        }, {
            name: '忻州市'
        }, {
            name: '吕梁市'
        }, {
            name: '临汾市'
        }, {
            name: '晋中市'
        }, {
            name: '运城市'
        }, {
            name: '大同市'
        }, {
            name: '长治市'
        }, {
            name: '朔州市'
        }, {
            name: '晋城市'
        }, {
            name: '太原市'
        }, {
            name: '阳泉市'
        }, {
            name: '六安市'
        }, {
            name: '安庆市'
        }, {
            name: '滁州市'
        }, {
            name: '宣城市'
        }, {
            name: '阜阳市'
        }, {
            name: '宿州市'
        }, {
            name: '黄山市'
        }, {
            name: '巢湖市'
        }, {
            name: '亳州市'
        }, {
            name: '池州市'
        }, {
            name: '合肥市'
        }, {
            name: '蚌埠市'
        }, {
            name: '芜湖市'
        }, {
            name: '淮北市'
        }, {
            name: '淮南市'
        }, {
            name: '马鞍山市'
        }, {
            name: '铜陵市'
        }, {
            name: '南平市'
        }, {
            name: '三明市'
        }, {
            name: '龙岩市'
        }, {
            name: '宁德市'
        }, {
            name: '福州市'
        }, {
            name: '漳州市'
        }, {
            name: '泉州市'
        }, {
            name: '莆田市'
        }, {
            name: '厦门市'
        }, {
            name: '丽水市'
        }, {
            name: '杭州市'
        }, {
            name: '温州市'
        }, {
            name: '宁波市'
        }, {
            name: '舟山市'
        }, {
            name: '台州市'
        }, {
            name: '金华市'
        }, {
            name: '衢州市'
        }, {
            name: '绍兴市'
        }, {
            name: '嘉兴市'
        }, {
            name: '湖州市'
        }, {
            name: '盐城市'
        }, {
            name: '徐州市'
        }, {
            name: '南通市'
        }, {
            name: '淮安市'
        }, {
            name: '苏州市'
        }, {
            name: '宿迁市'
        }, {
            name: '连云港市'
        }, {
            name: '扬州市'
        }, {
            name: '南京市'
        }, {
            name: '泰州市'
        }, {
            name: '无锡市'
        }, {
            name: '常州市'
        }, {
            name: '镇江市'
        }, {
            name: '吴忠市'
        }, {
            name: '中卫市'
        }, {
            name: '固原市'
        }, {
            name: '银川市'
        }, {
            name: '石嘴山市'
        }, {
            name: '儋州市'
        }, {
            name: '文昌市'
        }, {
            name: '乐东黎族自治县'
        }, {
            name: '三亚市'
        }, {
            name: '琼中黎族苗族自治县'
        }, {
            name: '东方市'
        }, {
            name: '海口市'
        }, {
            name: '万宁市'
        }, {
            name: '澄迈县'
        }, {
            name: '白沙黎族自治县'
        }, {
            name: '琼海市'
        }, {
            name: '昌江黎族自治县'
        }, {
            name: '临高县'
        }, {
            name: '陵水黎族自治县'
        }, {
            name: '屯昌县'
        }, {
            name: '定安县'
        }, {
            name: '保亭黎族苗族自治县'
        }, {
            name: '五指山市'
        }];

        for (var i = 0; i < data2.length; i++) {
            data2[i].value = Math.round(Math.random() * 1000);
        }
        setTimeout(delay(), 1000);

        function delay() {
            //myChart.on("mapselectchanged", function (param)
            myChart.on("click", function (param) {
                var selectedProvince = param.name;

                if (!provinces[selectedProvince]) {
                    option.series.splice(1);
                    option.legend = null;
                    option.visualMap = null;
                    myChart.setOption(option, true);
                    return;
                }
                //$.get('http://echarts.baidu.com/gallery/vendors/echarts/map/json/province/' + provinces[selectedProvince] + '.json', function (geoJson) {
                $.get(provinces[selectedProvince], function (geoJson) {
                    echarts.registerMap(selectedProvince, geoJson);
                    option.series[1] = {
                        name: '选择省份',
                        type: 'map',
                        mapType: selectedProvince,
                        // left: '50%',
                        top: '25%',
                        width: '50%',
                        height: '50%',
                        roam: true,
                        selectedMode: 'single',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                }
                            },
                            emphasis: {
                                areaStyle: {
                                    color: '#cc7098'
                                },
                                label: {
                                    show: true,
                                }
                            }
                        },
                        data: data2
                    };
                    option.legend = {
                        left: 'right',
                        data: ['随机数据']
                    };
                    option.visualMap = {
                        seriesIndex: 1,
                        orient: 'horizontal',
                        left: 'right',
                        min: 0,
                        max: 1000,
                        color: ['orange', 'yellow'],
                        text: ['高', '低'], // 文本，默认为数值文本
                        splitNumber: 0
                    };
                    myChart.setOption(option, true);
                });
            });
        }
    }


    //  3d地图----下钻
    function hightLightMap(id) {
        var myChart = echarts.init(document.getElementById(id));
        let geoCoordMap = {
            "海门": [121.15, 31.89],
            "鄂尔多斯": [109.781327, 39.608266],
            "招远": [120.38, 37.35]
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
        var provinces = {
            '上海': './province/shan1xi.json',
            '河北': './province/hebei.json',
            '山西': './province/shan1xi.json',
            '内蒙古': './province/neimenggu.json',
            '辽宁': './province/liaoning.json',
            '吉林': './province/jilin.json',
            '黑龙江': './province/heilongjiang.json',
            '江苏': './province/jiangsu.json',
            '浙江': './province/zhejiang.json',
            '安徽': './province/anhui.json',
            '福建': './province/fujian.json',
            '江西': './province/jiangxi.json',
            '山东': './province/shandong.json',
            '河南': './province/henan.json',
            '湖北': './province/hubei.json',
            '湖南': './province/huan.json',
            '广东': './province/guangdong.json',
            '广西': './province/guangxi.json',
            '海南': './province/hainan.json',
            '四川': './province/sichun.json',
            '贵州': './province/guizhou.json',
            '云南': './province/yunnan.json',
            '西藏': './province/xizang.json',
            '陕西': './province/shan3xi.json',
            '甘肃': './province/gansu.json',
            '青海': './province/qinghai.json',
            '宁夏': './province/ningxia.json',
            '新疆': './province/xinjiang.json',
            '北京': './province/beijing.json',
            '天津': './province/tianjin.json',
            '重庆': './province/chongqing.json',
            '香港': './province/hongkong.json',
            '澳门': './province/macau.json',
        };

        var data1 = [{
            name: '北京'
        }, {
            name: '天津'
        }, {
            name: '上海'
        }, {
            name: '重庆'
        }, {
            name: '河北'
        }, {
            name: '河南'
        }, {
            name: '云南'
        }, {
            name: '辽宁'
        }, {
            name: '黑龙江'
        }, {
            name: '湖南'
        }, {
            name: '安徽'
        }, {
            name: '山东'
        }, {
            name: '新疆'
        }, {
            name: '江苏'
        }, {
            name: '浙江'
        }, {
            name: '江西'
        }, {
            name: '湖北'
        }, {
            name: '广西'
        }, {
            name: '甘肃'
        }, {
            name: '山西'
        }, {
            name: '内蒙古'
        }, {
            name: '陕西'
        }, {
            name: '吉林'
        }, {
            name: '福建'
        }, {
            name: '贵州'
        }, {
            name: '广东'
        }, {
            name: '青海'
        }, {
            name: '西藏'
        }, {
            name: '四川'
        }, {
            name: '宁夏'
        }, {
            name: '海南'
        }, {
            name: '台湾'
        }, {
            name: '香港'
        }, {
            name: '澳门'
        }];
        for (var i = 0; i < data1.length; i++) {
            data1[i].value = Math.round(Math.random() * 10000);
        }

        var option = {
            title: {
                text: '实时报道',
                textStyle: {
                    color: '#e1e1e1',
                    fontSize: 20,
                    fontWight: '200',
                    // borderLeft:'3x solid teal',
                },
                padding: [20, 20, 20, 20]
            },
            tooltip: {
                show: true,
                // formatter: (params) => {
                //     let data = "测试1:" + params.name + "<br/>" + "值:" + params.value[2] + "<br/>" + "地理坐标:[" + params.value[0] + "," + params.value[1] + "]";
                //     return data;
                // },
            },
            visualMap: [{
                type: 'continuous',
                seriesIndex: 0,
                text: ['bar3D'],
                show: false,
                calculable: true,
                max: 300,
                inRange: {
                    color: ['#a53b40']
                }
            }, {
                type: 'continuous',
                seriesIndex: 1,
                text: ['scatter3D'],
                left: 'right',
                max: 100,
                calculable: true,
                inRange: {
                    color: ['#4b6294', 'blue', 'purple']
                }
            }],
            geo3D: {
                map: 'china',
                roam: true,
                itemStyle: {
                    areaColor: '#1d5e98',
                    opacity: 1,
                    borderWidth: 0.4,
                    borderColor: text_color
                },
                label: {
                    show: true,
                    textStyle: {
                        color: '#575757', //地图初始化区域字体颜色
                        fontSize: 8,
                        opacity: 1,
                        backgroundColor: 'rgba(44,97,16,0)'
                    },
                },
                emphasis: { //当鼠标放上去  地区区域是否显示名称
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 3,
                            backgroundColor: 'rgba(44,97,16,0)'
                        }
                    }
                },
                //shading: 'lambert',
                light: { //光照阴影
                    main: {
                        color: '#fff', //光照颜色
                        intensity: 1.2, //光照强度
                        //shadowQuality: 'high', //阴影亮度
                        shadow: false, //是否显示阴影
                        alpha: 55,
                        beta: 10

                    },
                    ambient: {
                        intensity: 0.3
                    }
                }
            },
            series: [{
                name: 'bar3D',
                type: "bar3D",
                coordinateSystem: 'geo3D',
                barSize: 1, //柱子粗细
                shading: 'lambert',
                opacity: 0.3,
                bevelSize: 0.3,
                textStyle: {backgroundColor: '#0214a8'},
                label: {
                    show: false,
                    formatter: '{b}'
                },
                data: convertData([{
                    name: "海门",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "鄂尔多斯",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "招远",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "舟山",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "齐齐哈尔",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "盐城",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "赤峰",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "青岛",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "乳山",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "金昌",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "泉州",
                    value: (Math.random() * 200).toFixed(2)
                }
                ]),
            }, {
                name: '',
                type: "scatter3D",
                coordinateSystem: 'geo3D',
                symbol: 'pin',
                symbolSize: 30,
                opacity: 1,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                itemStyle: {
                    borderWidth: 0.5,
                    borderColor: '#fff'
                },
                data: convertData([{
                    name: "阳泉",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "莱州",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "湖州",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "汕头",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "昆山",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "张家口",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }])
            }]
        };

        myChart.setOption(option, true);

        var data2 = [{
            name: '重庆市'
        }, {
            name: '北京市'
        }, {
            name: '天津市'
        }, {
            name: '上海市'
        }, {
            name: '香港'
        }, {
            name: '澳门'
        }, {
            name: '巴音郭楞蒙古自治州'
        }, {
            name: '和田地区'
        }, {
            name: '哈密地区'
        }, {
            name: '阿克苏地区'
        }, {
            name: '阿勒泰地区'
        }, {
            name: '喀什地区'
        }, {
            name: '塔城地区'
        }, {
            name: '昌吉回族自治州'
        }, {
            name: '克孜勒苏柯尔克孜自治州'
        }, {
            name: '吐鲁番地区'
        }, {
            name: '伊犁哈萨克自治州'
        }, {
            name: '博尔塔拉蒙古自治州'
        }, {
            name: '乌鲁木齐市'
        }, {
            name: '克拉玛依市'
        }, {
            name: '阿拉尔市'
        }, {
            name: '图木舒克市'
        }, {
            name: '五家渠市'
        }, {
            name: '石河子市'
        }, {
            name: '那曲地区'
        }, {
            name: '阿里地区'
        }, {
            name: '日喀则地区'
        }, {
            name: '林芝地区'
        }, {
            name: '昌都地区'
        }, {
            name: '山南地区'
        }, {
            name: '拉萨市'
        }, {
            name: '呼伦贝尔市'
        }, {
            name: '阿拉善盟'
        }, {
            name: '锡林郭勒盟'
        }, {
            name: '鄂尔多斯市'
        }, {
            name: '赤峰市'
        }, {
            name: '巴彦淖尔市'
        }, {
            name: '通辽市'
        }, {
            name: '乌兰察布市'
        }, {
            name: '兴安盟'
        }, {
            name: '包头市'
        }, {
            name: '呼和浩特市'
        }, {
            name: '乌海市'
        }, {
            name: '海西蒙古族藏族自治州'
        }, {
            name: '玉树藏族自治州'
        }, {
            name: '果洛藏族自治州'
        }, {
            name: '海南藏族自治州'
        }, {
            name: '海北藏族自治州'
        }, {
            name: '黄南藏族自治州'
        }, {
            name: '海东地区'
        }, {
            name: '西宁市'
        }, {
            name: '甘孜藏族自治州'
        }, {
            name: '阿坝藏族羌族自治州'
        }, {
            name: '凉山彝族自治州'
        }, {
            name: '绵阳市'
        }, {
            name: '达州市'
        }, {
            name: '广元市'
        }, {
            name: '雅安市'
        }, {
            name: '宜宾市'
        }, {
            name: '乐山市'
        }, {
            name: '南充市'
        }, {
            name: '巴中市'
        }, {
            name: '泸州市'
        }, {
            name: '成都市'
        }, {
            name: '资阳市'
        }, {
            name: '攀枝花市'
        }, {
            name: '眉山市'
        }, {
            name: '广安市'
        }, {
            name: '德阳市'
        }, {
            name: '内江市'
        }, {
            name: '遂宁市'
        }, {
            name: '自贡市'
        }, {
            name: '黑河市'
        }, {
            name: '大兴安岭地区'
        }, {
            name: '哈尔滨市'
        }, {
            name: '齐齐哈尔市'
        }, {
            name: '牡丹江市'
        }, {
            name: '绥化市'
        }, {
            name: '伊春市'
        }, {
            name: '佳木斯市'
        }, {
            name: '鸡西市'
        }, {
            name: '双鸭山市'
        }, {
            name: '大庆市'
        }, {
            name: '鹤岗市'
        }, {
            name: '七台河市'
        }, {
            name: '酒泉市'
        }, {
            name: '张掖市'
        }, {
            name: '甘南藏族自治州'
        }, {
            name: '武威市'
        }, {
            name: '陇南市'
        }, {
            name: '庆阳市'
        }, {
            name: '白银市'
        }, {
            name: '定西市'
        }, {
            name: '天水市'
        }, {
            name: '兰州市'
        }, {
            name: '平凉市'
        }, {
            name: '临夏回族自治州'
        }, {
            name: '金昌市'
        }, {
            name: '嘉峪关市'
        }, {
            name: '普洱市'
        }, {
            name: '红河哈尼族彝族自治州'
        }, {
            name: '文山壮族苗族自治州'
        }, {
            name: '曲靖市'
        }, {
            name: '楚雄彝族自治州'
        }, {
            name: '大理白族自治州'
        }, {
            name: '临沧市'
        }, {
            name: '迪庆藏族自治州'
        }, {
            name: '昭通市'
        }, {
            name: '昆明市'
        }, {
            name: '丽江市'
        }, {
            name: '西双版纳傣族自治州'
        }, {
            name: '保山市'
        }, {
            name: '玉溪市'
        }, {
            name: '怒江傈僳族自治州'
        }, {
            name: '德宏傣族景颇族自治州'
        }, {
            name: '百色市'
        }, {
            name: '河池市'
        }, {
            name: '桂林市'
        }, {
            name: '南宁市'
        }, {
            name: '柳州市'
        }, {
            name: '崇左市'
        }, {
            name: '来宾市'
        }, {
            name: '玉林市'
        }, {
            name: '梧州市'
        }, {
            name: '贺州市'
        }, {
            name: '钦州市'
        }, {
            name: '贵港市'
        }, {
            name: '防城港市'
        }, {
            name: '北海市'
        }, {
            name: '怀化市'
        }, {
            name: '永州市'
        }, {
            name: '邵阳市'
        }, {
            name: '郴州市'
        }, {
            name: '常德市'
        }, {
            name: '湘西土家族苗族自治州'
        }, {
            name: '衡阳市'
        }, {
            name: '岳阳市'
        }, {
            name: '益阳市'
        }, {
            name: '长沙市'
        }, {
            name: '株洲市'
        }, {
            name: '张家界市'
        }, {
            name: '娄底市'
        }, {
            name: '湘潭市'
        }, {
            name: '榆林市'
        }, {
            name: '延安市'
        }, {
            name: '汉中市'
        }, {
            name: '安康市'
        }, {
            name: '商洛市'
        }, {
            name: '宝鸡市'
        }, {
            name: '渭南市'
        }, {
            name: '咸阳市'
        }, {
            name: '西安市'
        }, {
            name: '铜川市'
        }, {
            name: '清远市'
        }, {
            name: '韶关市'
        }, {
            name: '湛江市'
        }, {
            name: '梅州市'
        }, {
            name: '河源市'
        }, {
            name: '肇庆市'
        }, {
            name: '惠州市'
        }, {
            name: '茂名市'
        }, {
            name: '江门市'
        }, {
            name: '阳江市'
        }, {
            name: '云浮市'
        }, {
            name: '广州市'
        }, {
            name: '汕尾市'
        }, {
            name: '揭阳市'
        }, {
            name: '珠海市'
        }, {
            name: '佛山市'
        }, {
            name: '潮州市'
        }, {
            name: '汕头市'
        }, {
            name: '深圳市'
        }, {
            name: '东莞市'
        }, {
            name: '中山市'
        }, {
            name: '延边朝鲜族自治州'
        }, {
            name: '吉林市'
        }, {
            name: '白城市'
        }, {
            name: '松原市'
        }, {
            name: '长春市'
        }, {
            name: '白山市'
        }, {
            name: '通化市'
        }, {
            name: '四平市'
        }, {
            name: '辽源市'
        }, {
            name: '承德市'
        }, {
            name: '张家口市'
        }, {
            name: '保定市'
        }, {
            name: '唐山市'
        }, {
            name: '沧州市'
        }, {
            name: '石家庄市'
        }, {
            name: '邢台市'
        }, {
            name: '邯郸市'
        }, {
            name: '秦皇岛市'
        }, {
            name: '衡水市'
        }, {
            name: '廊坊市'
        }, {
            name: '恩施土家族苗族自治州'
        }, {
            name: '十堰市'
        }, {
            name: '宜昌市'
        }, {
            name: '襄樊市'
        }, {
            name: '黄冈市'
        }, {
            name: '荆州市'
        }, {
            name: '荆门市'
        }, {
            name: '咸宁市'
        }, {
            name: '随州市'
        }, {
            name: '孝感市'
        }, {
            name: '武汉市'
        }, {
            name: '黄石市'
        }, {
            name: '神农架林区'
        }, {
            name: '天门市'
        }, {
            name: '仙桃市'
        }, {
            name: '潜江市'
        }, {
            name: '鄂州市'
        }, {
            name: '遵义市'
        }, {
            name: '黔东南苗族侗族自治州'
        }, {
            name: '毕节地区'
        }, {
            name: '黔南布依族苗族自治州'
        }, {
            name: '铜仁地区'
        }, {
            name: '黔西南布依族苗族自治州'
        }, {
            name: '六盘水市'
        }, {
            name: '安顺市'
        }, {
            name: '贵阳市'
        }, {
            name: '烟台市'
        }, {
            name: '临沂市'
        }, {
            name: '潍坊市'
        }, {
            name: '青岛市'
        }, {
            name: '菏泽市'
        }, {
            name: '济宁市'
        }, {
            name: '德州市'
        }, {
            name: '滨州市'
        }, {
            name: '聊城市'
        }, {
            name: '东营市'
        }, {
            name: '济南市'
        }, {
            name: '泰安市'
        }, {
            name: '威海市'
        }, {
            name: '日照市'
        }, {
            name: '淄博市'
        }, {
            name: '枣庄市'
        }, {
            name: '莱芜市'
        }, {
            name: '赣州市'
        }, {
            name: '吉安市'
        }, {
            name: '上饶市'
        }, {
            name: '九江市'
        }, {
            name: '抚州市'
        }, {
            name: '宜春市'
        }, {
            name: '南昌市'
        }, {
            name: '景德镇市'
        }, {
            name: '萍乡市'
        }, {
            name: '鹰潭市'
        }, {
            name: '新余市'
        }, {
            name: '南阳市'
        }, {
            name: '信阳市'
        }, {
            name: '洛阳市'
        }, {
            name: '驻马店市'
        }, {
            name: '周口市'
        }, {
            name: '商丘市'
        }, {
            name: '三门峡市'
        }, {
            name: '新乡市'
        }, {
            name: '平顶山市'
        }, {
            name: '郑州市'
        }, {
            name: '安阳市'
        }, {
            name: '开封市'
        }, {
            name: '焦作市'
        }, {
            name: '许昌市'
        }, {
            name: '濮阳市'
        }, {
            name: '漯河市'
        }, {
            name: '鹤壁市'
        }, {
            name: '大连市'
        }, {
            name: '朝阳市'
        }, {
            name: '丹东市'
        }, {
            name: '铁岭市'
        }, {
            name: '沈阳市'
        }, {
            name: '抚顺市'
        }, {
            name: '葫芦岛市'
        }, {
            name: '阜新市'
        }, {
            name: '锦州市'
        }, {
            name: '鞍山市'
        }, {
            name: '本溪市'
        }, {
            name: '营口市'
        }, {
            name: '辽阳市'
        }, {
            name: '盘锦市'
        }, {
            name: '忻州市'
        }, {
            name: '吕梁市'
        }, {
            name: '临汾市'
        }, {
            name: '晋中市'
        }, {
            name: '运城市'
        }, {
            name: '大同市'
        }, {
            name: '长治市'
        }, {
            name: '朔州市'
        }, {
            name: '晋城市'
        }, {
            name: '太原市'
        }, {
            name: '阳泉市'
        }, {
            name: '六安市'
        }, {
            name: '安庆市'
        }, {
            name: '滁州市'
        }, {
            name: '宣城市'
        }, {
            name: '阜阳市'
        }, {
            name: '宿州市'
        }, {
            name: '黄山市'
        }, {
            name: '巢湖市'
        }, {
            name: '亳州市'
        }, {
            name: '池州市'
        }, {
            name: '合肥市'
        }, {
            name: '蚌埠市'
        }, {
            name: '芜湖市'
        }, {
            name: '淮北市'
        }, {
            name: '淮南市'
        }, {
            name: '马鞍山市'
        }, {
            name: '铜陵市'
        }, {
            name: '南平市'
        }, {
            name: '三明市'
        }, {
            name: '龙岩市'
        }, {
            name: '宁德市'
        }, {
            name: '福州市'
        }, {
            name: '漳州市'
        }, {
            name: '泉州市'
        }, {
            name: '莆田市'
        }, {
            name: '厦门市'
        }, {
            name: '丽水市'
        }, {
            name: '杭州市'
        }, {
            name: '温州市'
        }, {
            name: '宁波市'
        }, {
            name: '舟山市'
        }, {
            name: '台州市'
        }, {
            name: '金华市'
        }, {
            name: '衢州市'
        }, {
            name: '绍兴市'
        }, {
            name: '嘉兴市'
        }, {
            name: '湖州市'
        }, {
            name: '盐城市'
        }, {
            name: '徐州市'
        }, {
            name: '南通市'
        }, {
            name: '淮安市'
        }, {
            name: '苏州市'
        }, {
            name: '宿迁市'
        }, {
            name: '连云港市'
        }, {
            name: '扬州市'
        }, {
            name: '南京市'
        }, {
            name: '泰州市'
        }, {
            name: '无锡市'
        }, {
            name: '常州市'
        }, {
            name: '镇江市'
        }, {
            name: '吴忠市'
        }, {
            name: '中卫市'
        }, {
            name: '固原市'
        }, {
            name: '银川市'
        }, {
            name: '石嘴山市'
        }, {
            name: '儋州市'
        }, {
            name: '文昌市'
        }, {
            name: '乐东黎族自治县'
        }, {
            name: '三亚市'
        }, {
            name: '琼中黎族苗族自治县'
        }, {
            name: '东方市'
        }, {
            name: '海口市'
        }, {
            name: '万宁市'
        }, {
            name: '澄迈县'
        }, {
            name: '白沙黎族自治县'
        }, {
            name: '琼海市'
        }, {
            name: '昌江黎族自治县'
        }, {
            name: '临高县'
        }, {
            name: '陵水黎族自治县'
        }, {
            name: '屯昌县'
        }, {
            name: '定安县'
        }, {
            name: '保亭黎族苗族自治县'
        }, {
            name: '五指山市'
        }];

        for (var i = 0; i < data2.length; i++) {
            data2[i].value = Math.round(Math.random() * 1000);
        }
        setTimeout(delay, 1000);

        function delay() {
            //myChart.on("mapselectchanged", function (param)
            myChart.on("click", function (param) {
                var selectedProvince = param.name;

                if (!provinces[selectedProvince]) {
                    option.series.splice(1);
                    option.legend = null;
                    option.visualMap = null;
                    myChart.setOption(option, true);
                    return;
                }
                $.get(provinces[selectedProvince], function (geoJson) {
                    echarts.registerMap(selectedProvince, geoJson);
                    option.series[1] = {
                        name: '选择省份',
                        type: 'map',
                        mapType: selectedProvince,
                        // left: '50%',
                        top: '25%',
                        width: '50%',
                        height: '50%',
                        roam: true,
                        selectedMode: 'single',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true
                                }
                            }
                        },
                        data: data2
                    };
                    option.legend = {
                        // left: 'right',
                        data: ['随机数据']
                    };
                    option.visualMap = {
                        seriesIndex: 1,
                        orient: 'horizontal',
                        // left: 'right',
                        min: 0,
                        max: 1000,
                        color: ['orange', 'yellow'],
                        text: ['高', '低'], // 文本，默认为数值文本
                        splitNumber: 0
                    };
                    myChart.setOption(option, true);
                });
            });
        }
    }

});
