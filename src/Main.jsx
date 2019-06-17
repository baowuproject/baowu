import {Layout, Row, Col, Button, Divider} from 'antd';
import React, {Component} from 'react'
import LeftSider from './LeftSider'
import RightSider from './RightSider'
import Navigation from './Navigation'
import NnetWorkChart from './NnetWorkChart'
import DataList from './DataList'

var echarts = require('echarts');
const {Header, Footer, Sider, Content} = Layout;


class Main extends Component {

    componentDidMount() {
        let app = {}
        let symbolSize = 4;
        let data = [
            {value:[-1.1591473	,0.52753085]},
            {value:[-1.1307307	,0.36183468]},
            {value:[-1.0551773	,0.18105464]},
            {value:[-0.93563646	,-0.00727307]},
            {value:[-0.7770916	,-0.1952978]},
            {value:[-0.586152	,-0.3751809]},
            {value:[-0.37077734	,-0.53942376]},
            {value:[-0.13994549	,-0.6811797]},
            {value:[0.096719794	,-0.794539]},
            {value:[0.3293531	,-0.87477624]},
            {value:[0.5482566	,-0.9185465]},
            {value:[0.74430484	,-0.9240251]},
            {value:[0.90932506	,-0.89098376]},
            {value:[1.0364381	,-0.82079977]},
            {value:[1.1203451	,-0.71639866]},
            {value:[1.1575478	,-0.5821332]},
            {value:[1.1464957	,-0.42360014]},
            {value:[1.0876492	,-0.24740843]},
            {value:[0.98346186	,-0.060902957]},
            {value:[0.83827674	,0.12814139]},
            {value:[0.65814614	,0.31184387]},
            {value:[0.45057935	,0.48254648]},
            {value:[0.22422914	,0.63313305]},
            {value:[-0.011468535	,0.757326]},
            {value:[-0.24668813	,0.8499484]},
            {value:[-0.471624	,0.9071387]},
            {value:[-0.67689914	,0.92651296]},
            {value:[-0.85395706	,0.90726334]},
            {value:[-0.99541503	,0.8501924]},
            {value:[-1.095377	,0.75767934]},
            {value:[-1.1496756	,0.63358086]},
            {value:[-1.1560476	,0.48307005]},
            {value:[-1.1142272	,0.3124215]},


        ];
        var myChart = echarts.init(document.getElementById('test'));


        myChart.setOption({

            tooltip: {
                triggerOn: 'none',
                formatter: function (params) {
                    return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
                }
            },
            grid: {},
            xAxis: {

                show: false
            },
            yAxis: {

                show: false
            },

            series: [
                {
                    id: 'a',
                    type: 'line',
                    smooth: true,
                    symbolSize: symbolSize,
                    data: data,
                    symbol: 'circle',

                    color: "rgb(17,238,238)"
                }
            ]
        })
        let count = 0
        app.timeTicket = setInterval(function () {

            let index = count % data.length

            console.log(index, data[index]["value"])
            data[index]["itemStyle"] = {

                "color": "red"
            }
            count += 1
            myChart.setOption({
                    series: [{
                        data: data
                    }]

                }
            )
            data[index]["itemStyle"] = {

                "color": "rgb(17,238,238)"
            };
        }, 500);


    }

    render() {
        return (

            <div>
                <div style={{
                    // width: "100%",
                    // height: "100%",
                    // backgroundImage: "url('./static/main.jpg')",
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: "cover",
                    // position: "absolute",
                    // top: 0,
                    // left: 0,
                    // height: "100%",
                    // width: "100%",
                    // backgroundImage: "url('./static/main.jpg')",
                    // backgroundPosition: "center 0",
                    // backgroundRepeat: "no-repeat",
                    // // backgroundAttachment: "fixed",
                    // backgroundSize: "cover",
                    // zoom: 1,
                    position: "relative"
                }}>
                    <img id="pic" src="./static/main1.jpg" style={{width: "100%"}}/>
                    <div style={{
                        textAlign: "center",
                        marginTop: "1%",
                        position: "absolute",
                        top: 0,
                        left: "50%"
                    }}>
                        <span>
                        XXXX
                        </span>
                    </div>


                    {/*<div style={{*/}
                    {/*    width: "5%",*/}
                    {/*    height: "2%",*/}
                    {/*    position: "absolute",*/}
                    {/*    top: "9.4%",*/}
                    {/*    left: "20.5%",*/}
                    {/*    // fontSize: "10%",*/}
                    {/*    color: "white",*/}
                    {/*}}>*/}
                    {/*    <p style={{*/}
                    {/*        height: "100%",*/}
                    {/*        marginTop: "10%",*/}
                    {/*        color: "white",*/}
                    {/*        position: "absolute",*/}
                    {/*        // font-size: "50%",*/}
                    {/*        marginLeft: "0%"*/}
                    {/*    }}>*/}
                    {/*    透平轴前截面*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div style={{*/}
                    {/*    width: "14.2%",*/}
                    {/*    height: "72%",*/}
                    {/*    position: "absolute",*/}
                    {/*    backgroundImage: "url('./static/leftSider/bottom.png')",*/}
                    {/*    backgroundRepeat: "no-repeat",*/}
                    {/*    backgroundSize: "cover",*/}
                    {/*    top: "16%",*/}
                    {/*    left: "0.8%"*/}
                    {/*}}>*/}
                    {/*    /!*<img src="./static/leftSider/bottom.png" alt=""/>*!/*/}
                    {/*</div>*/}
                    {/*<div style={{*/}
                    {/*    width: "14.8%",*/}
                    {/*    height: "72%",*/}
                    {/*    position: "absolute",*/}
                    {/*    backgroundImage: "url('./static/leftSider/cutLine.png')",*/}
                    {/*    backgroundRepeat: "no-repeat",*/}
                    {/*    backgroundSize: "cover",*/}
                    {/*    top: "21.5%",*/}
                    {/*    left: "0.2%"*/}
                    {/*}}>*/}
                    {/*</div>*/}
                    {/*<div style={{*/}
                    {/*    width: "14%",*/}
                    {/*    height: "30%",*/}
                    {/*    position: "absolute",*/}
                    {/*    backgroundImage: "url('./static/centerBottom/dataFlow.png')",*/}
                    {/*    backgroundRepeat: "no-repeat",*/}
                    {/*    backgroundSize: "cover",*/}
                    {/*    top: "63.5%",*/}
                    {/*    left: "29%"*/}
                    {/*}}>*/}
                    {/*</div>*/}
                    <div style={{
                        width: "14.77%",
                        height: "5%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/bottom.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "10%",
                        left: "85.38%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                            marginLeft: "33%"
                        }}>
                            诊断结论
                        </span>
                    </div>

                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "18%",
                        left: "88.5%",
                    }}>
                    </div>


                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "16%",
                        left: "85%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "40%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            正常
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "23%",
                        left: "88.5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "21.3%",
                        left: "85%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "40%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            不平衡
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "28.6%",
                        left: "88.5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "26.8%",
                        left: "85%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "40%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            不对中
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "33.8%",
                        left: "88.5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "32%",
                        left: "85%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "40%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            碰磨
                        </span>
                    </div>


                    <div style={{
                        width: "14.77%",
                        height: "5%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/bottom2.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "40%",
                        left: "85.38%"
                    }}>
                         <span style={{
                             height: "100%",
                             marginTop: "8%",
                             color: "white",
                             position: "absolute",
                             fontSize: "1.2vw",
                             marginLeft: "33%"
                         }}>
                            故障概率
                        </span>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "46.3%",
                        left: "83%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "40%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            不平衡:
                        </span>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "51.3%",
                        left: "83%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "40%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            不对中:
                        </span>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "56.7%",
                        left: "83.3%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "40%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            碰磨:
                        </span>
                    </div>
                    <div style={{
                        width: "13%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/rightSider/description.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "63.5%",
                        left: "86%"
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "14%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                            marginLeft: "35%"
                        }}>
                            故障描述
                        </span>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        backgroundImage: "url('./static/leftSider/wrong.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "19.5%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "26%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            透平轴前振动
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "26.2%",
                        left: "5%",
                    }}>
                    </div>

                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "24.4%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            水平
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "30.8%",
                        left: "5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "29%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            垂直
                        </span>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        backgroundImage: "url('./static/leftSider/wrong.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "36%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "26%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            透平轴后振动
                        </span>
                    </div>

                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "42.8%",
                        left: "5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "40.8%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            水平
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "47.4%",
                        left: "5%",
                    }}>
                    </div>

                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "45.5%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            垂直
                        </span>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        backgroundImage: "url('./static/leftSider/wrong.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "52.5%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "26%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            发动机轴前振动
                        </span>
                    </div>

                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "59.2%",
                        left: "5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "57.2%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            水平
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "63.8%",
                        left: "5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "61.9%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            垂直
                        </span>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        backgroundImage: "url('./static/leftSider/wrong.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "69%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "26%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            发动机轴后振动
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "75.7%",
                        left: "5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "73.8%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            水平
                        </span>
                    </div>
                    <div style={{
                        width: "2%",
                        height: "3%",
                        position: "absolute",
                        backgroundImage: "url('./static/rightSider/wrongTag.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "80.3%",
                        left: "5%",
                    }}>
                    </div>
                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "78.4%",
                        left: "0.6%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "45%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1.2vw",
                        }}>
                            垂直
                        </span>
                    </div>


                    <div style={{
                        width: "14.35%",
                        height: "6%",
                        position: "absolute",
                        // backgroundImage: "url('./static/leftSider/wrong.png')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        top: "63%",
                        left: "19%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "8%",
                            marginLeft: "26%",
                            color: "white",
                            position: "absolute",
                            fontSize: "1vw",
                        }}>
                            X幅值:{}
                            <br/>
                            X相位:{}
                            <br/>
                            Y幅值:{}
                            <br/>
                            Y相位:{}
                            <br/>
                            长轴:{}
                            <br/>
                            短轴:{}
                            <br/>
                            偏心率:{}
                            <br/>
                            倾斜角:{}
                            <br/>
                            初相角:{}
                            <br/>
                            旋向:{}
                            <br/>
                        </span>
                    </div>


                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position: "absolute", top: "10.5%", left: "17.5%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize: '1vw'
                    }}>透平轴前截面</span></Button>

                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position: "absolute", top: "10.5%", left: "24.1%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize: '1vw'
                    }}>透平轴后截面</span></Button>
                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position: "absolute", top: "10.5%", left: "30.9%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize: '1vw'
                    }}>透平轴前振动</span></Button>
                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position: "absolute", top: "10.5%", left: "37.7%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize: '1vw'
                    }}>透平轴前振动</span></Button>

                    <div id="test"
                         style={{

                             width: "10%",
                             height: 150,
                             position: "absolute",
                             top: "19.5%",
                             left: "35.2%",


                         }}>

                    </div>

                    {/*<Row>*/}
                    {/*    <Col span={24}>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<div style={{*/}
                    {/*    // backgroundImage: "url('./static/leftSider/bottom.png')",*/}
                    {/*    // width: "85%",*/}
                    {/*    // marginLeft: "13px",*/}
                    {/*    // marginTop: "30%",*/}
                    {/*    // height: "700px",*/}
                    {/*    // zIndex: 100,*/}
                    {/*    // backgroundRepeat: "no-repeat",*/}
                    {/*    // backgroundSize: "cover"*/}
                    {/*    position: "absolute",*/}
                    {/*    top: 0,*/}
                    {/*    left: 0,*/}
                    {/*    height: "100%",*/}
                    {/*    width: "100%",*/}
                    {/*    backgroundImage: "url('./static/leftSider/bottom.png')",*/}
                    {/*    backgroundPosition: "center 0",*/}
                    {/*    backgroundRepeat: "no-repeat",*/}
                    {/*    // backgroundAttachment: "fixed",*/}
                    {/*    backgroundSize: "cover",*/}
                    {/*    // zoom: 1,*/}
                    {/*    zIndex:1000*/}
                    {/*}}/>*/}
                    {/*<Row>*/}
                    {/*    <Col span={4}>*/}
                    {/*        /!*<div style={{*!/*/}
                    {/*        /!*    border: 2,*!/*/}
                    {/*        /!*    color: "white",*!/*/}
                    {/*        /!*    backgroundColor: "white",*!/*/}
                    {/*        /!*    height: "20px",*!/*/}
                    {/*        /!*    // marginRight: "10%",*!/*/}
                    {/*        /!*}}*!/*/}
                    {/*             ref={el => (this.el = el)}>*/}
                    {/*            <div style={{*/}
                    {/*                // backgroundImage: "url('./static/leftSider/bottom.png')",*/}
                    {/*                // width: "85%",*/}
                    {/*                // marginLeft: "13px",*/}
                    {/*                // marginTop: "30%",*/}
                    {/*                // height: "700px",*/}
                    {/*                // zIndex: 100,*/}
                    {/*                // backgroundRepeat: "no-repeat",*/}
                    {/*                // backgroundSize: "cover"*/}
                    {/*                position: "absolute",*/}
                    {/*                top: 0,*/}
                    {/*                left: 0,*/}
                    {/*                height: "100%",*/}
                    {/*                width: "100%",*/}
                    {/*                backgroundImage: "url('./static/leftSider/bottom.png')",*/}
                    {/*                backgroundPosition: "center 0",*/}
                    {/*                backgroundRepeat: "no-repeat",*/}
                    {/*                // backgroundAttachment: "fixed",*/}
                    {/*                backgroundSize: "cover",*/}
                    {/*                // zoom: 1,*/}
                    {/*                zIndex:1000*/}
                    {/*            }}>*/}
                    {/*                <div style={{*/}
                    {/*                    backgroundImage: "url('./static/leftSider/cutLine.png')",*/}
                    {/*                    width: "100%",*/}
                    {/*                    marginLeft: "-2%",*/}
                    {/*                    marginTop: "55%",*/}
                    {/*                    // height: "700px",*/}
                    {/*                    height:"100%",*/}
                    {/*                    // paddingTop:"20%",*/}
                    {/*                    zIndex: 100,*/}
                    {/*                    backgroundRepeat: "no-repeat",*/}
                    {/*                    backgroundSize: "cover"*/}
                    {/*                }}>*/}
                    {/*                    /!*<Button type={"link"} size={"large"}*!/*/}
                    {/*                    /!*        style={{marginTop: "20%", width: "107%"}}> <span style={{*!/*/}
                    {/*                    /!*    color: "white",*!/*/}
                    {/*                    /!*    backgroundColor: 1 > 2 ? "red" : "black",*!/*/}
                    {/*                    /!*    width: "100%",*!/*/}
                    {/*                    /!*    height: "100%",*!/*/}
                    {/*                    /!*    lineHeight: "100%",*!/*/}
                    {/*                    /!*    display: "block",*!/*/}
                    {/*                    /!*    paddingTop: "4%"*!/*/}
                    {/*                    /!*}}>透平轴前振功</span></Button>*!/*/}
                    {/*                    /!*<Button type={"link"} size={"large"}*!/*/}
                    {/*                    /!*        style={{width: "107%"}}> <span style={{*!/*/}
                    {/*                    /!*    color: "white",*!/*/}
                    {/*                    /!*    backgroundColor: "rgba(0,0,0,0)",*!/*/}
                    {/*                    /!*    width: "100%",*!/*/}
                    {/*                    /!*    height: "100%",*!/*/}
                    {/*                    /!*    lineHeight: "100%",*!/*/}
                    {/*                    /!*    display: "block",*!/*/}
                    {/*                    /!*    borderBottom: "2px",*!/*/}
                    {/*                    /!*    borderColor:"red",*!/*/}
                    {/*                    /!*    paddingTop: "4%"*!/*/}
                    {/*                    /!*}}>水平</span></Button>*!/*/}
                    {/*                    /!*<Button type={"link"} size={"large"}*!/*/}
                    {/*                    /!*        style={{width: "107%"}}> <span style={{*!/*/}
                    {/*                    /!*    color: "white",*!/*/}
                    {/*                    /!*    backgroundColor: "rgba(0,0,0,0)",*!/*/}
                    {/*                    /!*    width: "100%",*!/*/}
                    {/*                    /!*    height: "100%",*!/*/}
                    {/*                    /!*    lineHeight: "100%",*!/*/}
                    {/*                    /!*    display: "block",*!/*/}
                    {/*                    /!*    paddingTop: "4%",*!/*/}
                    {/*                    /!*}}>垂直</span></Button>*!/*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        /!*</div>*!/*/}
                    {/*    </Col>*/}
                    {/*    <Col span={17}>*/}
                    {/*        <div style={{border: 2, color: "white", backgroundColor: "yellow", height: "20px"}}>*/}

                    {/*        </div>*/}
                    {/*    </Col>*/}
                    {/*    <Col span={3}>*/}
                    {/*        <div style={{border: 2, color: "white", backgroundColor: "white", height: "20px"}}>*/}

                    {/*        </div>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Layout>*/}
                    {/*    <Header className="header" style={{opacity:1}}>*/}
                    {/*        <div className="logo" />*/}
                    {/*        this is header*/}
                    {/*    </Header>*/}
                    {/*    <Layout>*/}
                    {/*        <LeftSider/>*/}
                    {/*        <Layout style={{ padding: '0 0 0' }}>*/}
                    {/*            <Content*/}
                    {/*                style={{*/}
                    {/*                    background: '#000',*/}
                    {/*                    padding: 24,*/}
                    {/*                    margin: 0,*/}
                    {/*                    minHeight: 500,*/}
                    {/*                    backgroundImage: "url('./static/main.jpg')"*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                <Row>*/}
                    {/*                    <Col span={12}>*/}
                    {/*                        <Navigation/>*/}
                    {/*                    </Col>*/}
                    {/*                    <Col span={12}>*/}
                    {/*                        col-12*/}
                    {/*                    </Col>*/}
                    {/*                </Row>*/}
                    {/*                <Row>*/}
                    {/*                    <Col span={4}>*/}
                    {/*                        <DataList/>*/}
                    {/*                    </Col>*/}
                    {/*                    <Col span={20}>*/}
                    {/*                        <div style={{width:"100%", height:"500px"}}>*/}
                    {/*                        <NnetWorkChart/>*/}
                    {/*                        </div>*/}
                    {/*                    </Col>*/}
                    {/*                </Row>*/}
                    {/*                Content*/}
                    {/*            </Content>*/}
                    {/*            <RightSider/>*/}
                    {/*        </Layout>*/}
                    {/*    </Layout>*/}
                    {/*</Layout>*/}
                </div>
            </div>

        )
    }
}

export default Main


