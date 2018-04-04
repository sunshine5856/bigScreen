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
        //面积图
    var csv_area = {
            'x': ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            'y': [4, 3, 4, 4, 4, 1, 2, 2, 4, 1, 1, 4]
        };

    //左侧的柱图
    var csv_left_bar = {
        x: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        y1: [103, 234, 290, 104, 131, 63],
        y2: [193, 234, 310, 121, 134, 68],
    };
    //地图旁边的柱图
    var csv_nearMap = {
        x: ['鼓楼区', '江宁区', '白下区', '秦淮区', '浦口区', '溧水县', '栖霞区', '鼓楼区', '雨花台区', '高淳县'],
        y: [264, 153, 29, 121, 115, 127, 11, 110, 157, 121]
    };

    //水球图，右上角(first)
    var csv_water = [0.6, 0.5, 0.4, 0.3];

    // 分类饼图
    var csv_sort_pie = [{
        value: 45,
        name: 'CARD'
    }, {
        value: 25,
        name: 'SSD'
    }, {
        value: 15,
        name: 'U盘'
    }, {
        value: 8,
        name: '嵌入式'
    }, {
        value: 7,
        name: 'FLASH'
    }];

    //折线图
    var line_csv = {
        "x": ["11.02", "12.02", "13.02", "14.02", "15.02", "16.02", "17.02"],
        "y": [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        "arr": [
            [200, 211, 215, 313, 142, 413, 310],
            [50, 80, 120, 150, 102, 313, 210],
        ]
    };


// 多个柱状图
    var bar_csv = {
        "x": ["星期一", "星期二", "星期三", "星期四", "星期五"],
        "y": [0, 50, 100, 150, 200, 250, 300, 350],
        "arr": [[200, 149, 170, 232, 156],
            // [126,159,190,264,287],
            [160, 139, 140, 234, 187]]
    };

    /******************************执行函数************************************************************/
    //左侧面积图
    area('right-two', csv_area);

    //柱状图
    left_bar('bottom-three', csv_left_bar);


    //地图
    njMap('map');
    //地图旁边的柱图
    nearMap('map_one', csv_nearMap);

    //右侧水球图
    red_water('right-one', csv_water);

    //分类饼图
    sort_pie("left-one", csv_sort_pie);

    //折线图
    line_line('bottom-one', line_csv);

    //多个柱状图
    more_bar('bottom-two', bar_csv);

    /******************************画图函数************************************************************/

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
                top: 40,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            tooltip: {//提示框
                trigger: 'axis',
                show: false
            },
            legend: {//图利
                show: false,
                // top: '20',
                // right: '10',
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
                    data: csv_area.x
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '(台)',
                    splitNumber: 5,
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //  柱状图:x轴y轴颠倒
    function left_bar(id, csv_left_bar) {
        // app.title = '世界人口总量 - 条形图';
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                text: ' ',
                subtext: ' '
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                show: true,
                data: ['2011年', '2012年'],
                textStyle: {
                    color: text_color
                },
            },
            grid: {
                top: 40,
                bottom: 40,
                left: 55,
                right: 40,
                showAllSymbol: 20,
                borderColor: border_color
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLine: {
                    lineStyle: {
                        color: border_color
                    }
                },
                splitLine: {
                    lineStyle: {
                        // type: 'dashed'
                        color: border_color
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: text_color
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: csv_left_bar.x,
                axisLine: {
                    lineStyle: {
                        color: border_color
                    }
                },
                splitLine: {
                    lineStyle: {
                        // type: 'dashed'
                        color: border_color
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: text_color
                    }
                },
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    barWidth: 9,
                    data: csv_left_bar.y1
                },
                {
                    name: '2012年',
                    type: 'bar',
                    barWidth: 8,
                    data: csv_left_bar.y2
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //南京地图
    function njMap(id) {
        var myChart = echarts.init(document.getElementById(id));
        var uploadedDataURL = "./map/city/320100.json";
        $.get(uploadedDataURL, function (as) {
            echarts.registerMap('ch', as);
            var data = [{
                name: '铁山港区',
                value: 0
            }, {
                name: '合浦县',
                value: 50
            },
                {
                    name: '白下区',
                    value: 50
                }, {
                    name: '秦淮区',
                    value: 30
                }, {
                    name: '浦口区',
                    value: 30
                }, {
                    name: '溧水县',
                    value: 35
                }, {
                    name: '栖霞区',
                    value: 30
                },
                {
                    name: '鼓楼区',
                    value: 30
                },
                {
                    name: '雨花台区',
                    value: 55
                },
                {
                    name: '高淳县',
                    value: 30
                },


            ];
            var geoCoordMap = {
                '铁山港区': [109.12, 21.48],
                '合浦县': [109.20, 21.67],
                '白下区': [118.78, 32.03],
                '秦淮区': [118.80, 32.02],
                '浦口区': [118.62, 32.05],
                '溧水县': [119.02, 31.65],
                '栖霞区': [118.88, 32.12],
                '鼓楼区': [117.18, 34.28],
                '雨花台区': [118.77, 32.00],
                '高淳县': [118.88, 31.33],
                '江北新区': [118.77, 32.00],
            };
            var dt = [{
                name: '鼓楼区',
                value: 33
            }, {
                name: '江宁区',
                value: 2123
            }, {
                name: '白下区',
                value: 5383
            }, {
                name: '秦淮区',
                value: 0
            }, {
                name: '浦口区',
                value: 15283
            }, {
                name: '溧水县',
                value: 33
            }, {
                name: '栖霞区',
                value: 15000
            }, {
                name: '鼓楼区',
                value: 15283
            },
                {
                    name: '雨花台区',
                    value: 1523
                },
                {
                    name: '高淳县',
                    value: 152
                },
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
                show: true,
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }


    //右侧水球图
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }


    //右侧的分类饼图
    function sort_pie(id, csv_sort_pie) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataView: {
            //             show: true,
            //             readOnly: true
            //         },
            //         magicType: {
            //             show: true,
            //             type: ['line', 'bar']
            //         },
            //         restore: {
            //             show: true
            //         },
            //         saveAsImage: {
            //             show: true
            //         }
            //     }
            // },
            series: [{
                name: '库存情况',
                type: 'pie',
                radius: '68%',
                center: ['50%', '50%'],
                clockwise: false,
                data: csv_sort_pie,
                label: {
                    normal: {
                        textStyle: {
                            color: text_color,
                            fontSize: 14,
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 4,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                    emphasis: {
                        borderWidth: 0,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }],
            color: [
                '#00acee',
                '#52cdd5',
                '#79d9f1',
                '#a7e7ff',
                '#c8efff'
            ],
            backgroundColor: 'rgba(0,0,0,0)'
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }


    //折线图
    function line_line(id, line_csv) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                show: true,//是否显示标题
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
                show: true,
                top: 10,
                textStyle: {
                    color: text_color
                },
                data: ['意向', '预购']
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
                    smooth: false,
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


    //多个柱状图
    function more_bar(id, bar_csv) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                show: false
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
                // trigger: 'axis',
                trigger: 'item',
                axisPointer: {
                    type: 'none'
                },
                backgroundColor: 'rgba(0,193,222,0.5)',
                formatter: '{a}:{c}',
                textStyle: {
                    fontSize: 12
                }
            },
            legend: {
                show: true,
                top: 10,
                textStyle: {
                    color: text_color
                },
                data: ['问题事件', '待办事件']
            },
            toolbox: {
                show: false
            },
            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    name: '(日)',
                    splitNumber: 0,
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
                    data: bar_csv.x
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '(数量)',
                    splitNumber: 8,
                    // boundaryGap:[0,1],
                    data: bar_csv.y,
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
                    }
                }
            ],
            series: [
                {
                    name: '问题事件',
                    type: 'bar',
                    itemStyle:
                        {
                            normal: {color: "#F47564"},

                        },
                    // itemStyle : { normal: {label : {show: true, position: 'top'}}},  可以使每个数据显示在柱子的顶部
                    barWidth: 20,
                    barCategoryGap: 25,
                    data: bar_csv.arr[0]
                },
                {
                    name: '待办事件',
                    type: 'bar',
                    itemStyle: {normal: {color: "#51C2B9"}},
                    barWidth: 20,
                    barCategoryGap: 25,
                    data: bar_csv.arr[1]
                },
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

});