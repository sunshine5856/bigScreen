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
        //  地图旁边的柱图
    var csv_nearMap = {
            x: ['鼓楼区', '江宁区', '白下区', '秦淮区', '浦口区', '溧水县', '栖霞区', '鼓楼区', '雨花台区', '高淳县'],
            y: [264, 153, 29, 121, 115, 127, 11, 110, 157, 121]
        };

    //右边的柱图
    var csv_right_bar = {
        x: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        y: ['23', '13', '18', '26', '4', '50', '33']
    };
    //分类饼图
    var csv_sort_bar = [{
        value: 28.7,
        name: '积极'
    }, {
        value: 20.3,
        name: '客观'
    }, {
        value: 51,
        name: '消极'
    }];

    //分类饼图
    var csv_line_bar = {
        x: ['16/01', '16/02', '16/03', '16/04', '16/05', '16/06', '16/07', '16/08', '16/09', '16/10', '16/11', '16/12', '17/01'],
        y: [138, 146, 158, 166, 128, 129, 126, 121, 198, 166, 158, 176, 138]
    };

    //玫瑰图
    var rose_csv = [["Direction", "< 0.5 m\/s", "0.5-2 m\/s", "2-4 m\/s", "4-6 m\/s", "6-8 m\/s", "8-10 m\/s", "> 10 m\/s"],
        ["N", 1.81, 1.78, 0.16, 0, 0, 0, 0, 3.75],
        ["NNE", 0.62, 1.09, 0, 0, 0, 0, 0, 1.71],
        ["NE", 0.82, 0.82, 0.07, 0, 0, 0, 0, 1.71],
        ["ENE", 0.59, 1.22, 0.07, 0, 0, 0, 0, 1.88],
        ["E", 0.62, 2.2, 0.49, 0, 0, 0, 0, 3.32],
        ["ESE", 1.22, 2.01, 1.55, 0.3, 0.13, 0, 0, 5.2],
        ["SE", 1.61, 3.06, 2.37, 2.14, 1.74, 0.39, 0.13, 11.45]];

    /******************************执行函数************************************************************/
    // 南京地图
    njMap('map');

    //地图旁边的柱图
    nearMap('map_one', csv_nearMap);

    //右边的柱图
    right_bar('right-one', csv_right_bar);

    //右边的分类饼图
    sort_pie('right-two', csv_sort_bar);


    //底部折柱图
    line_bar('bottom-one', csv_line_bar);

    //底部玫瑰图
    rose('bottom-two', rose_csv);

    /******************************画图函数************************************************************/
    // 南京地图


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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //右边的柱图
    function right_bar(id, csv_right_bar) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            title: {
                textStyle: {
                    fontSize: 34,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                },
                text: ' ',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    magicType: {
                        show: true,
                        type: ['line','pie']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: false,
            xAxis: [{
                type: 'category',
                data: csv_right_bar.x,
                splitLine: {
                    lineStyle: {
                        color: border_color
                    },
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: border_color
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: text_color
                    }
                },
            }],
            yAxis: [{
                type: 'value',
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
                }
            }],
            series: [{
                name: '学生数',
                type: 'bar',
                data: csv_right_bar.y,
                itemStyle: {
                    normal: {
                        barWidth: 15,
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
                },
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                }
            }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.onresize = myChart.resize;


    }


    //分类饼图
    function sort_pie(id, csv_sort_bar) {
        var myChart = echarts.init(document.getElementById(id));
        var giftImageUrl = 'text=情绪分析'
        myChart.setOption({
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: giftImageUrl,
                        width: 30,
                        height: 30
                    },
                    left: 'center',
                    top: 'center'
                }]
            },
            series: [{
                type: 'pie',
                radius: [55, '80%'],
                center: ['45%', '55%'],
                roseType: 'radius',
                color: ['#f2c955', '#00a69d', '#46d185', '#ec5845'],
                data: csv_sort_bar,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: function (param) {
                            return param.name + ':\n' + Math.round(param.percent) + '%';
                        }
                    }
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 30,
                        shadowColor: 'rgba(0, 0, 0, 0.4)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        });

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    //折柱图
    function line_bar(id, csv_line_bar) {
        var myChart = echarts.init(document.getElementById(id));
        var num = 10;
        var dataer = [11, 158, 176, 138, 149, 141, 132, 154, 129, 193, 167, 132, 154];
        var dataec = [189, 96, 68, 76, 68, 49, 121, 66, 57, 62, 43, 49, 78,];
        var cooarr = [];

        for (i in dataer) {
            if (dataer[i] - dataec[i] >= num) {
                cooarr.push({coord: [parseInt(i), dataer[i]]})
                //当小于某个数的时候，让标示变成黑色
            } else if (dataer[i] - dataec[i] <= -num) {
                cooarr.push({coord: [parseInt(i), dataer[i]], itemStyle: {normal: {color: '#1d80a1'}}})
            }
        }
        console.log(cooarr);
        var option = {

            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['平均价格', '实际价格', '采购总金额'],
                top: -5,
                textStyle: {
                    color: text_color
                }
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
                data: csv_line_bar.x,
                axisLine: {
                    lineStyle: {
                        color: border_color
                    }
                },
                axisLabel: {
                    textStyle: {
                        //color:text_color
                        color: text_color
                    }
                }
            },
            yAxis: {
                type: 'value',
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
            series: [
                {
                    name: '平均价格',
                    type: 'line',
                    data: dataer,
                    itemStyle: {
                        normal: {
                            color: '#996699',
                        },
                    },
                    markPoint: {
                        data: cooarr,
                        fontSize: 12
                    },

                },
                {
                    name: '实际价格',
                    type: 'line',
                    data: dataec,
                    itemStyle: {
                        normal: {
                            color: '#959931',
                        },
                    },
                },
                {
                    name: '采购总金额',
                    type: 'bar',
                    barWidth: '15',
                    data: csv_line_bar.y,
                    itemStyle: {
                        normal: {
                            color: '#61A0A8',
                        },
                    },
                },

            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

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
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                }
            }
        };
        $('#' + id).highcharts(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

});
