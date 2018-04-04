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

    //  地图旁边的柱图
    var csv_nearMap = {
        x: ['银川', '盐池', '淘乐', '平罗', '石嘴山', '固原', '永宁', '吴忠', '德隆', '中宁', '海源', '中卫'],
        y: [264, 153, 29, 121, 115, 127, 11, 110, 157, 121, 112, 196]
    };
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


    //堆积图
    var csv_stack = {
        'legend': ['https', 'ssh', 'MsSql', 'else'],
        'x': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        'y': {
            'https': [320, 302, 301, 334, 390, 330, 320],
            'ssh': [120, 132, 101, 134, 90, 230, 210],
            'MsSql': [220, 182, 191, 234, 290, 330, 310],
            'else': [150, 212, 201, 154, 190, 330, 410]
        }
    };

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
        "x": ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        "y": [0, 50, 400, 150, 200, 250, 300, 350, 400, 450],
        "arr": [[200, 149, 170, 232, 156, 300, 120,],
            [126, 159, 190, 264, 287, 30, 450],
        ]
    };

    //漏斗图
    var csv_hopper = {
        y1: [
            {
                value: 140,
                reveal: 2696,
                name: '星期一'
            }, {
                value: 120,
                reveal: 2212,
                name: '星期二'
            }, {
                value: 100,
                reveal: 1939,
                name: '星期三'
            }, {
                value: 80,
                reveal: 1265,
                name: '星期四'
            }, {
                value: 60,
                reveal: 783,
                name: '星期五'
            }, {
                value: 40,
                reveal: 678,
                name: '星期六'
            }, {
                value: 20,
                reveal: 536,
                name: '星期日',
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                }
            }],
        y2: [{
            value: 140,
            reveal: 2696,
            name: '星期一'
        }, {
            value: 120,
            reveal: 2212,
            name: '星期二'
        }, {
            value: 100,
            reveal: 1939,
            name: '星期三'
        }, {
            value: 80,
            reveal: 1265,
            name: '星期四'
        }, {
            value: 60,
            reveal: 783,
            name: '星期五'
        }, {
            value: 40,
            reveal: 678,
            name: '星期六'
        }, {
            value: 20,
            reveal: 536,
            name: '星期日',
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                emphasis: {
                    show: true,
                    length: 30,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }]
    };
    /*******************************************执行函数*******************************************/

    // 左下角的气泡图
    bubble('left-three', bubble_csv);
    //中间地图
    //饼图---左上角的图
    red_bar_forth('left-one', csv_red_bar);

    //渐变面积图---左下角
    line_line('left-two', line_csv);

    //左侧的堆积图

    stack_bar('right-one', csv_stack)

    area('bottom-one', csv_area);

    //漏斗图
    //hopper('right-two', csv_hopper);
    rightPie('right-two');


    //地图旁边的柱图
    nearMap('map_one', csv_nearMap);
    //承德地图
    cdMap('map');

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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //面积图
    function area(id, csv_area) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    // label: {
                    //     backgroundColor: '#6a7985'
                    // }
                }
            },
            legend: {
                data: ['邮件营销', '联盟广告'],
                top: '10',
                textStyle: {
                    color: text_color
                },

            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
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
                    boundaryGap: false,
                    splitNumber: 10,
                    name: '',
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
                    splitNumber: 6,
                    data: csv_area.y,
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
            series: [
                {
                    // symbol: 'none',
                    type: 'line',
                    smooth: true,
                    name: '邮件营销',

                    stack: '总量',
                    itemStyle: {
                        normal:
                            {
                                areaStyle:
                                    {
                                        type: 'default',
                                        color: '#4e93f9',
                                    },
                                color: '#3870f9'
                            }
                    },
                    data: csv_area.arr[0]

                },
                {
                    name: '联盟广告',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    itemStyle: {
                        normal:
                            {
                                areaStyle:
                                    {
                                        type: 'default',
                                        color: '#f27ab4',
                                    },
                                color: '#f25fdb'
                            }
                    },
                    data: csv_area.arr[1]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //漏斗图
    // function hopper(id, csv_hopper) {
    //     var myChart = echarts.init(document.getElementById(id));
    //     var option = {
    //         color: ['#F8F872', '#76FFE7', '#ADF25C', '#5B8DFF', '#ADDD8E', '#41D5F2', '#0BA1FC'],
    //         toolbox: {
    //             feature: {
    //                 dataView: {
    //                     readOnly: false
    //                 },
    //                 restore: {},
    //                 saveAsImage: {}
    //             }
    //         },
    //         series: [{
    //             name: '',
    //             type: 'funnel',
    //             left: '10%',
    //             width: '60%',
    //             gap: 10,
    //             label: {
    //                 normal: {
    //                     position: 'left',
    //                     formatter: '{b}',
    //                     textStyle: {
    //                         fontSize: 14
    //                     }
    //                 },
    //                 emphasis: {
    //                     position: 'inside',
    //                     formatter: '{b}',
    //                     textStyle: {
    //                         fontSize: 22
    //                     }
    //                 }
    //             },
    //             labelLine: {
    //                 normal: {
    //                     show: false
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     opacity: 0.7
    //                 }
    //             },
    //             data: csv_hopper.y1
    //         }, {
    //             name: '',
    //             type: 'funnel',
    //             left: '10%',
    //             width: '60%',
    //             gap: 10,
    //             label: {
    //                 normal: {
    //                     show: false,
    //                     position: 'inside',
    //                     formatter: function (obj) {
    //                         return obj.data.reveal;
    //                     },
    //                     textStyle: {
    //                         color: '#fff',
    //                         fontSize: 22
    //                     }
    //                 },
    //                 emphasis: {
    //                     position: 'inside',
    //                     formatter: function (obj) {
    //                         return obj.data.reveal;
    //                     }
    //                 }
    //             },
    //             labelLine: {
    //                 normal: {
    //                     show: true
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     opacity: 0.5,
    //                     borderColor: '#fff',
    //                     borderWidth: 2
    //                 }
    //             },
    //             data: csv_hopper.y2
    //
    //         }]
    //     };
    //     // 为echarts对象加载数据
    //     myChart.setOption(option);
    //     window.addEventListener("resize", function () {
    //         myChart.resize();
    //     });
    // }
    //饼图
    function rightPie(id) {
        var myChart = echarts.init(document.getElementById(id));
        var colorList = [
            '#66c5d7', '#11c88c', '#989cff', '#ffa55d', '#9c7de1', '#5d9eff', '#ffdb5d', '#ee82ed', '#8fca5f', '#b995f5'
        ];

        // 总和
        var total = {
            value: '24,652',
            name: '用户总数'
        }

        var originalData = [{
            value: 55,
            name: 'IOS'
        }, {
            value: 70,
            name: '安卓国内'
        }, {
            value: 25,
            name: "安卓海外"
        }];

        echarts.util.each(originalData, function (item, index) {
            item.itemStyle = {
                normal: {
                    color: colorList[index]
                }
            };
        });

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            backgroundColor: 'rgba(0,0,0,0)',
            title: [{
                text: total.name,
                left: '49%',
                top: '40%',
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle: {
                    color: text_color,
                    fontWeight: 'normal',
                    fontSize: 16
                }
            }, {
                text: total.value,
                left: '49%',
                top: '51%',
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle: {
                    color: '#199CC4',
                    fontWeight: 'normal',
                    fontSize: 18
                }
            }],
            series: [{
                hoverAnimation: false, //设置饼图默认的展开样式
                radius: [60, 90],
                name: 'pie',
                type: 'pie',
                selectedMode: 'single',
                selectedOffset: 16, //选中是扇区偏移量
                clockwise: true,
                startAngle: 90,
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                    emphasis: {
                        borderWidth: 0,
                        shadowBlur: 5,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.2)'
                    }
                },
                data: originalData
            }]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    //承德地图
    function cdMap(id) {
        var myChart = echarts.init(document.getElementById(id));
        var uploadedDataURL = "./map/city/130800.json";
        $.get(uploadedDataURL, function (as) {
            echarts.registerMap('ch', as);
            var data = [{
                name: '围场满族蒙古族自治区',
                value: 0
            }, {
                name: '丰宁满族自治县 ',
                value: 50
            }, {
                name: '隆化县',
                value: 50
            }, {
                name: '承德县',
                value: 30
            }, {
                name: '兴隆县',
                value: 30
            }, {
                name: '宽城满族自治县',
                value: 35
            }, {
                name: '平泉县',
                value: 30
            },
                {
                    name: '双滦区',
                    value: 30
                }, {
                    name: '滦平县',
                    value: 55
                }];
            var geoCoordMap = {
                '围场满族蒙古族自治区': [118, 27.3],
                '丰宁满族自治县': [116.65, 41.2],
                '隆化县': [117.72, 41.32],
                '承德县': [118.17, 40.77],
                '兴隆县': [117.52, 40.43],
                '宽城满族自治县': [118.48, 40.60],
                '平泉县': [118.68, 41.00],
                '双滦区': [117.78, 40.95],
                '滦平县': [117.33, 40.93],
            };
            var dt = [{
                name: '围场满族蒙古族自治区',
                value: 33
            }, {
                name: '隆化县',
                value: 2123
            }, {
                name: '承德县',
                value: 5383
            }, {
                name: '兴隆县',
                value: 0
            }, {
                name: '宽城满族自治县',
                value: 15283
            }, {
                name: '平泉县',
                value: 33
            }, {
                name: '双滦区',
                value: 15000
            }, {
                name: '滦平县',
                value: 15283
            }
            ];
            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
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
            var color = ['#a6c84c'];
            var series = [];
            [
                ['承德县', data]
            ].forEach(function (item, i) {
                series.push({
                        name: '定位',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: function (val) {
                            return val[2] / 2;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        itemStyle: {
                            normal: {
                                color: '#0ce928',
                                shadowBlur: 20,
                                shadowColor: '#0ce928',
                            }
                        },
                        zlevel: 1
                    },
                    {
                        type: 'map',
                        map: 'ch',
                        zlevel: 0,
                        itemStyle: {
                            normal: {
                                borderColor: 'transparent',
                                color: '#555'
                            }
                        },
                        data: dt
                    }, {
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: function (val) {
                            return val[2] / 1;
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#e1e1e1',

                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#9dffdd', //标志颜色
                                borderColor: "#c9aaff",
                                borderWidth: 2,
                            },
                            emphasis: {
                                borderColor: '#3fb8ff',
                                borderWidth: 2
                            }
                        },
                        zlevel: 6,
                        data: convertData(item[1])
                    });
            });

            var option = {
                visualMap: { //视觉映射组件
                    type: 'piecewise', //分段型。
                    splitNumber: 6,
                    inverse: true,
                    pieces: [{
                        min: 1,
                        max: 1000,
                        color: '#799a1f'
                    }, {
                        min: 1000,
                        max: 3000,
                        color: '#149c9c'
                    }, {
                        min: 3000,
                        max: 8000,
                        color: '#ff84ff'
                    }, {
                        min: 8000,
                        max: 15000,
                        color: '#997cbe'
                    }, {
                        min: 15000,
                        color: '#6eb5ed'
                    }, {
                        value: 0,
                        label: '正在入库',
                        color: '#0ce928'
                    }],
                    left: 'right',
                    top: 'bottom',
                    textStyle: {
                        color: text_color
                    }
                },
                geo: {
                    map: 'ch',
                    itemStyle: {
                        normal: {
                            areaColor: '#ddd',
                            borderColor: 'transparent'
                        },
                        emphasis: {
                            areaColor: '#ccc'
                        }
                    },
                },
                series: series
            };

            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        });
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
});
