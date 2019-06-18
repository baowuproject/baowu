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
        let app2 = {}
        let app3 = {}
        let app4 = {}
        let symbolSize = 4;
        let data0=[
            {value:[-1.678807	,-0.457082]},
            {value:[-0.330721	,-0.033719]},
            {value:[-0.553812	,1.112052]},
            {value:[-1.115969	,-0.428983]},
            {value:[0.06267	,-0.724963]},
            {value:[-0.571353	,-0.798021]},
            {value:[-1.201459	,-2.631801]},
            {value:[0.966787	,-2.502033]},
            {value:[1.569986	,-0.56931]},
            {value:[1.054491	,-0.464065]},
            {value:[1.172338	,1.050574]},
            {value:[1.456227	,2.583436]},
            {value:[-1.911776	,0.692606]},
            {value:[-1.990965	,-0.89969]},
            {value:[-0.946351	,-0.595025]},
            {value:[-1.667227	,-0.19908]},
            {value:[-0.297001	,-0.372955]},
            {value:[0.144584	,1.072373]},
            {value:[-0.705038	,0.273841]},
            {value:[-0.01158	,-0.910078]},
            {value:[0.430516	,-0.571353]},
            {value:[-0.943967	,-2.046483]},
            {value:[0.695501	,-2.936976]},
            {value:[1.905986	,-1.3159]},
            {value:[1.438686	,-0.732967]},
            {value:[1.152754	,0.063011]},
            {value:[2.005611	,2.388273]},
            {value:[-0.499828	,1.32135]},
            {value:[-2.613579	,-0.792061]},
            {value:[-0.845024	,-0.988075]},
            {value:[-1.479047	,-0.178473]},
            {value:[-0.76873	,-0.510556]},
            {value:[0.094686	,0.493697]},
            {value:[-0.631469	,0.801768]},
            {value:[-0.699759	,-0.858988]},
            {value:[0.243868	,-0.745228]},
            {value:[-1.142706	,-1.547677]},
            {value:[-0.477178	,-2.993516]},
            {value:[1.622779	,-1.849106]},
            {value:[1.423189	,-0.60388]},
            {value:[0.710998	,-0.612395]},
            {value:[1.365287	,1.720531]},
            {value:[0.496932	,2.124991]},
            {value:[-2.843142	,-0.129257]},
            {value:[-1.64594	,-1.125506]},
            {value:[-1.391854	,-0.32459]},
            {value:[-1.528774	,-0.303984]},
            {value:[0.037466	,0.135217]},
            {value:[-0.173194	,1.240288]},
            {value:[-0.814881	,-0.285591]},
            {value:[0.367335	,-0.639643]},
            {value:[-0.049557	,-0.64373]},
            {value:[-0.761407	,-2.447707]},
            {value:[1.350982	,-2.421481]},
            {value:[1.960993	,-0.598431]},
            {value:[1.40667	,-0.491823]},
            {value:[1.457078,	0.997101]},
            {value:[1.728875,	2.559934]},
            {value:[-1.60523,	0.684261]},
            {value:[-1.95724,	-0.955207]},
            {value:[-0.85745,	-0.670637]},
            {value:[-1.80261,	-0.303984]},
            {value:[-0.43596,	-0.460999]},
            {value:[0.02844	,0.981092]},
            {value:[-0.88504,	0.300748]},
            {value:[-0.32986,	-0.930343]},
            {value:[0.048706,	-0.681537]},
            {value:[-1.33838,	-2.07356]},
            {value:[0.247955,	-2.963373]},
            {value:[1.636233,	-1.313005]},
            {value:[1.158714,	-0.598942]},
            {value:[0.84894	,0.207594]},
            {value:[1.761062,	2.609151]},
            {value:[-0.64662,	1.580204]},
            {value:[-2.91126,	-0.634193]},
            {value:[-1.17114,	-0.935282]},
            {value:[-1.67148,	-0.112397]},
            {value:[-1.04989,	-0.402417]},
            {value:[0.00562	,0.534228]},
            {value:[-0.657354,	0.875677]},
            {value:[-0.662463,	-0.663655]},
            {value:[0.440223,	-0.547]},
            {value:[-0.847408,	-1.325267]},
            {value:[-0.31352,	-2.880778]},
            {value:[1.815387,	-1.910925]},
            {value:[1.818963,	-0.468493]},
            {value:[1.16757,	-0.526394]},
            {value:[1.786436	,1.716443]},
            {value:[1.069989	,2.275705]},
            {value:[-2.302102	,0.024012]},
            {value:[-1.225982	,-1.005786]},
            {value:[-0.961849	,-0.275884]},
            {value:[-1.240117	,-0.290019]},
            {value:[0.246252	,0.062159]},
            {value:[0.065565	,1.182897]},
            {value:[-0.889642	,-0.467641]},
            {value:[0.159911	,-0.977686]},
            {value:[-0.173364	,-0.8658]},
            {value:[-0.992162	,-2.651044]},

        ]
        let data = [
            {value: [-1.1591473, 0.52753085]},
            {value: [-1.1307307, 0.36183468]},
            {value: [-1.0551773, 0.18105464]},
            {value: [-0.93563646, -0.00727307]},
            {value: [-0.7770916, -0.1952978]},
            {value: [-0.586152, -0.3751809]},
            {value: [-0.37077734, -0.53942376]},
            {value: [-0.13994549, -0.6811797]},
            {value: [0.096719794, -0.794539]},
            {value: [0.3293531, -0.87477624]},
            {value: [0.5482566, -0.9185465]},
            {value: [0.74430484, -0.9240251]},
            {value: [0.90932506, -0.89098376]},
            {value: [1.0364381, -0.82079977]},
            {value: [1.1203451, -0.71639866]},
            {value: [1.1575478, -0.5821332]},
            {value: [1.1464957, -0.42360014]},
            {value: [1.0876492, -0.24740843]},
            {value: [0.98346186, -0.060902957]},
            {value: [0.83827674, 0.12814139]},
            {value: [0.65814614, 0.31184387]},
            {value: [0.45057935, 0.48254648]},
            {value: [0.22422914, 0.63313305]},
            {value: [-0.011468535, 0.757326]},
            {value: [-0.24668813, 0.8499484]},
            {value: [-0.471624, 0.9071387]},
            {value: [-0.67689914, 0.92651296]},
            {value: [-0.85395706, 0.90726334]},
            {value: [-0.99541503, 0.8501924]},
            {value: [-1.095377, 0.75767934]},
            {value: [-1.1496756, 0.63358086]},
            {value: [-1.1560476, 0.48307005]},
            {value: [-1.1142272, 0.3124215]},


        ];
        let data2 = [
            {value: [0.34321362, -0.62929857]},
            {value: [0.65936106, -0.13159496]},
            {value: [0.8667067, 0.38782325]},
            {value: [0.9310363, 0.84324634]},
            {value: [0.8417346, 1.1595246]},
            {value: [0.6135374, 1.2844684]},
            {value: [0.28409988, 1.197461]},
            {value: [-0.09221745, 0.91285926]},
            {value: [-0.45331767, 0.47762585]},
            {value: [-0.7396155, -0.036421057]},
            {value: [-0.90386873, -0.5444586]},
            {value: [-0.91897374, -0.96265393]},
            {value: [-0.78243804, -1.2220008]},
            {value: [-0.5167915, -1.2797043]},
            {value: [-0.16586833, -1.1262423]},
            {value: [0.21242458, -0.78693795]},
            {value: [0.5556651, -0.31778038]},
            {value: [0.80721486, 0.20381448]},
            {value: [0.9255653, 0.6917777]},
            {value: [0.89118713, 1.0655905]},
            {value: [0.7097533, 1.2635686]},
            {value: [0.4112023, 1.2530441]},
            {value: [0.044798534, 1.0357537]},
            {value: [-0.3289975, 0.6475526]},
            {value: [-0.64850533, 0.15249825]},
            {value: [-0.86100274, -0.36771995]},
            {value: [-0.9314253, -0.8272603]},
            {value: [-0.8481521, -1.1502943]},
            {value: [-0.6249246, -1.2835163]},
            {value: [-0.2985777, -1.2049439]},
            {value: [0.07703778, -0.92754275]},
            {value: [0.4399412, -0.49708685]},
            {value: [0.73024946, 0.015393785]},
            {value: [0.9000587, 0.5253343]},
            {value: [0.9213483, 0.9485889]},


        ];
        let data3 = [
            {value: [-1.1591473, 0.52753085]},
            {value: [-1.1307307, 0.36183468]},
            {value: [-1.0551773, 0.18105464]},
            {value: [-0.93563646, -0.00727307]},
            {value: [-0.7770916, -0.1952978]},
            {value: [-0.586152, -0.3751809]},
            {value: [-0.37077734, -0.53942376]},
            {value: [-0.13994549, -0.6811797]},
            {value: [0.096719794, -0.794539]},
            {value: [0.3293531, -0.87477624]},
            {value: [0.5482566, -0.9185465]},
            {value: [0.74430484, -0.9240251]},
            {value: [0.90932506, -0.89098376]},
            {value: [1.0364381, -0.82079977]},
            {value: [1.1203451, -0.71639866]},
            {value: [1.1575478, -0.5821332]},
            {value: [1.1464957, -0.42360014]},
            {value: [1.0876492, -0.24740843]},
            {value: [0.98346186, -0.060902957]},
            {value: [0.83827674, 0.12814139]},
            {value: [0.65814614, 0.31184387]},
            {value: [0.45057935, 0.48254648]},
            {value: [0.22422914, 0.63313305]},
            {value: [-0.011468535, 0.757326]},
            {value: [-0.24668813, 0.8499484]},
            {value: [-0.471624, 0.9071387]},
            {value: [-0.67689914, 0.92651296]},
            {value: [-0.85395706, 0.90726334]},
            {value: [-0.99541503, 0.8501924]},
            {value: [-1.095377, 0.75767934]},
            {value: [-1.1496756, 0.63358086]},
            {value: [-1.1560476, 0.48307005]},
            {value: [-1.1142272, 0.3124215]},


        ];
        let data4 = [
            {value: [-1.1591473, 0.52753085]},
            {value: [-1.1307307, 0.36183468]},
            {value: [-1.0551773, 0.18105464]},
            {value: [-0.93563646, -0.00727307]},
            {value: [-0.7770916, -0.1952978]},
            {value: [-0.586152, -0.3751809]},
            {value: [-0.37077734, -0.53942376]},
            {value: [-0.13994549, -0.6811797]},
            {value: [0.096719794, -0.794539]},
            {value: [0.3293531, -0.87477624]},
            {value: [0.5482566, -0.9185465]},
            {value: [0.74430484, -0.9240251]},
            {value: [0.90932506, -0.89098376]},
            {value: [1.0364381, -0.82079977]},
            {value: [1.1203451, -0.71639866]},
            {value: [1.1575478, -0.5821332]},
            {value: [1.1464957, -0.42360014]},
            {value: [1.0876492, -0.24740843]},
            {value: [0.98346186, -0.060902957]},
            {value: [0.83827674, 0.12814139]},
            {value: [0.65814614, 0.31184387]},
            {value: [0.45057935, 0.48254648]},
            {value: [0.22422914, 0.63313305]},
            {value: [-0.011468535, 0.757326]},
            {value: [-0.24668813, 0.8499484]},
            {value: [-0.471624, 0.9071387]},
            {value: [-0.67689914, 0.92651296]},
            {value: [-0.85395706, 0.90726334]},
            {value: [-0.99541503, 0.8501924]},
            {value: [-1.095377, 0.75767934]},
            {value: [-1.1496756, 0.63358086]},
            {value: [-1.1560476, 0.48307005]},
            {value: [-1.1142272, 0.3124215]},


        ];
        var myChart = echarts.init(document.getElementById('test31'));
        var myChart0 = echarts.init(document.getElementById('test1'));
        var myChart2 = echarts.init(document.getElementById('test32'));
        var myChart3 = echarts.init(document.getElementById('test33'));
        var myChart4 = echarts.init(document.getElementById('test34'));
        myChart0.setOption({

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
                    data: data0,
                    symbol: 'circle',
                    color: "rgb(17,238,238)"
                }
            ]
        })

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
        myChart2.setOption({

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
                    data: data2,
                    symbol: 'circle',

                    color: "rgb(17,238,238)"
                }
            ]
        })
        let count2 = 0
        app2.timeTicket = setInterval(function () {

            let index = count2 % data.length

            console.log(index, data[index]["value"])
            data2[index]["itemStyle"] = {

                "color": "red"
            }
            count2 += 1
            myChart2.setOption({
                    series: [{
                        data: data2
                    }]

                }
            )
            data2[index]["itemStyle"] = {

                "color": "rgb(17,238,238)"
            };
        }, 500);
        myChart3.setOption({

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
                    data: data3,
                    symbol: 'circle',

                    color: "rgb(17,238,238)"
                }
            ]
        })
        let count3 = 0
        app3.timeTicket = setInterval(function () {

            let index = count3 % data.length

            console.log(index, data[index]["value"])
            data3[index]["itemStyle"] = {

                "color": "red"
            }
            count3 += 1
            myChart3.setOption({
                    series: [{
                        data: data3
                    }]

                }
            )
            data3[index]["itemStyle"] = {

                "color": "rgb(17,238,238)"
            };
        }, 500);
        myChart4.setOption({

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
                    data: data4,
                    symbol: 'circle',

                    color: "rgb(17,238,238)"
                }
            ]
        })
        let count4 = 0
        app4.timeTicket = setInterval(function () {

            let index = count4 % data.length

            console.log(index, data[index]["value"])
            data4[index]["itemStyle"] = {

                "color": "red"
            }
            count4 += 1
            myChart4.setOption({
                    series: [{
                        data: data4
                    }]

                }
            )
            data4[index]["itemStyle"] = {

                "color": "rgb(17,238,238)"
            };
        }, 500);


    }

    constructor(props) {
        super(props);
        this.state = {
            Section1_Alarm_1: 1,
            Section1_Alarm_2: 0,
            Section2_Alarm_1: 1,
            Section2_Alarm_2: 1,
            Section3_Alarm_1: 1,
            Section3_Alarm_2: 1,
            Section4_Alarm_1: 1,
            Section4_Alarm_2: 1,
            Section1_1X_Amp: 0,
            Section1_1X_Phase: 0,
            Section1_1Y_Amp: 0,
            Section1_1Y_Phase: 0,
            Section1_Holo_Long: 0,
            Section1_Holo_Short: 0,
            Section1_Holo_Ecc: 0,
            Section1_Holo_Angle: 0,
            Section1_Holo_OP: 0,
            Section1_Holo_Direction: 0,
            Section1_Conclusion: 3,
            Section1_Bal_Pro: 0,
            Section1_Alig_Pro: 0,
            Section1_Rub_Pro: 0,
            Section1_Fault_Describe: "assdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsadf",


        }
    }

    // componentWillMount = async () => {
    //     let res = await fetch("url")
    //     res = await res.json()
    //
    // }


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
                        marginTop: "0.5%",
                        position: "absolute",
                        top: 0,
                        left: "35%"
                    }}>
                        <span style={{
                            color: "white",
                            fontSize: "2vw"
                        }}>
                        高炉煤气余压回收透平发电装置(TRT)
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
                    <div style={{
                        width: "14%",
                        height: "30%",
                        position: "absolute",
                        backgroundImage: "url('./static/centerBottom/dataFlow1.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "63.5%",
                        left: "29%"
                    }}>
                    </div>
                    {/*<img src="./static/centerBottom/dataFlow.png" alt=""/>*/}
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

                    {/*<div style={{*/}
                    {/*    width: "2%",*/}
                    {/*    height: "3%",*/}
                    {/*    position: "absolute",*/}
                    {/*    backgroundImage: "url('./static/rightSider/wrongTag.png')",*/}
                    {/*    backgroundRepeat: "no-repeat",*/}
                    {/*    backgroundSize: "cover",*/}
                    {/*    top: "18%",*/}
                    {/*    left: "88.5%",*/}
                    {/*}}>*/}
                    {/*</div>*/}


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
                    {
                        this.state.Section1_Conclusion === 1 ? <div style={{
                            width: "2%",
                            height: "3%",
                            position: "absolute",
                            backgroundImage: "url('./static/rightSider/wrongTag.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            top: "23%",
                            left: "88.5%",
                        }}></div> : null
                    }
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


                    {
                        this.state.Section1_Conclusion === 2 ? <div style={{
                            width: "2%",
                            height: "3%",
                            position: "absolute",
                            backgroundImage: "url('./static/rightSider/wrongTag.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            top: "28.6%",
                            left: "88.5%",
                        }}>
                        </div> : null
                    }

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


                    {
                        this.state.Section1_Conclusion === 3 ? <div style={{
                            width: "2%",
                            height: "3%",
                            position: "absolute",
                            backgroundImage: "url('./static/rightSider/wrongTag.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            top: "33.8%",
                            left: "88.5%",
                        }}>
                        </div> : null
                    }
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
                            不平衡: {this.state.Section1_Bal_Pro}
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
                            不对中: {this.state.Section1_Alig_Pro}
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
                            碰磨: {this.state.Section1_Rub_Pro}
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
                        width: "12%",
                        height: "18%",
                        position: "absolute",
                        top: "73.5%",
                        left: "86.7%",
                        // backgroundColor:"white",
                        overflow: "scroll"
                    }}>
                        <span style={{
                            height: "100%",
                            color: "white",
                            position: "absolute",
                            fontSize: "0.9vw",
                            margin: "auto"
                        }}>
                            {this.state.Section1_Fault_Describe}
                        </span>
                    </div>
                    <div style={{
                        width: "13.4%",
                        height: "5%",
                        position: "absolute",
                        backgroundImage: this.state.Section1_Alarm_1 || this.state.Section1_Alarm_2 ? "url('./static/leftSider/wrong.png')" :
                            "url('./static/leftSider/right.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "21%",
                        left: "1.55%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "5%",
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
                        backgroundImage: this.state.Section1_Alarm_1 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "26.2%",
                        left: "5%",
                    }}>
                    </div>
                    {/*<div style={{*/}
                    {/*    width: "2%",*/}
                    {/*    height: "3%",*/}
                    {/*    position: "absolute",*/}
                    {/*    backgroundImage: "url('./static/leftSider/green.png')",*/}
                    {/*    backgroundRepeat: "no-repeat",*/}
                    {/*    backgroundSize: "cover",*/}
                    {/*    top: "26.2%",*/}
                    {/*    left: "5%",*/}
                    {/*}}>*/}
                    {/*</div>*/}

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
                        backgroundImage: this.state.Section1_Alarm_2 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
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
                        width: "13.4%",
                        height: "5%",
                        position: "absolute",
                        backgroundImage: this.state.Section2_Alarm_1 || this.state.Section2_Alarm_2 ? "url('./static/leftSider/wrong.png')" :
                            "url('./static/leftSider/right.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "37.5%",
                        left: "1.55%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "5%",
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
                        backgroundImage: this.state.Section2_Alarm_1 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
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
                        backgroundImage: this.state.Section2_Alarm_2 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
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
                        width: "13.4%",
                        height: "5%",
                        position: "absolute",
                        backgroundImage: this.state.Section3_Alarm_1 || this.state.Section3_Alarm_2 ? "url('./static/leftSider/wrong.png')" :
                            "url('./static/leftSider/right.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "53.5%",
                        left: "1.55%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "5%",
                            marginLeft: "21%",
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
                        backgroundImage: this.state.Section3_Alarm_1 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
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
                        backgroundImage: this.state.Section3_Alarm_2 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
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
                        width: "13.4%",
                        height: "5%",
                        position: "absolute",
                        backgroundImage: this.state.Section4_Alarm_1 || this.state.Section4_Alarm_2 ? "url('./static/leftSider/wrong.png')" :
                            "url('./static/leftSider/right.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        top: "70%",
                        left: "1.55%",
                    }}>
                        <span style={{
                            height: "100%",
                            marginTop: "5%",
                            marginLeft: "21%",
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
                        backgroundImage: this.state.Section4_Alarm_1 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
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
                        backgroundImage: this.state.Section4_Alarm_2 ? "url('./static/rightSider/wrongTag.png')" : "url('./static/leftSider/green.png')",
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
                            X幅值: {this.state.Section1_1X_Amp}um
                            <br/>
                            X相位: {this.state.Section1_1X_Amp}˚
                            <br/>
                            Y幅值: {this.state.Section1_1X_Amp}um
                            <br/>
                            Y相位: {this.state.Section1_1X_Amp}˚
                            <br/>
                            长轴: {this.state.Section1_Holo_Long}um
                            <br/>
                            短轴: {this.state.Section1_Holo_Short}um
                            <br/>
                            偏心率: {this.state.Section1_Holo_Ecc}
                            <br/>
                            倾斜角: {this.state.Section1_Holo_Angle}˚
                            <br/>
                            初相角: {this.state.Section1_Holo_OP}˚
                            <br/>
                            旋向: {this.state.Section1_Holo_Direction}
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
                    <p style={{
                        width: "1%",
                        height: "10%",
                        position: "absolute",
                        top: "20.39%",
                        left: "17.4%",
                        fontSize: "1vm",
                        color: 'white'
                    }}>
                        原始轴心轨迹
                    </p>
                    <p style={{
                        width: "1%",
                        height: "10%",
                        position: "absolute",
                        top: "20.39%",
                        left: "46.8%",
                        fontSize: "1vm",
                        color: 'white'
                    }}>
                        合成轴心轨迹
                    </p>


                    <div id="test"
                         style={{

                             width: "10%",
                             height: 150,
                             position: "absolute",
                             top: "19.5%",
                             left: "35.2%",
                         }}>

                    </div>
                    <div id="test1"
                         style={{

                             width: "10%",
                             height: 150,
                             position: "absolute",
                             top: "19.5%",
                             left: "19.2%",


                         }}>

                    </div>
                    <div id="test31"
                         style={{

                             width: "7%",
                             height: 150,
                             position: "absolute",
                             top: "40.5%",
                             left: "19.2%",


                         }}>

                    </div>
                    <div id="test32"
                         style={{

                             width: "7%",
                             height: 150,
                             position: "absolute",
                             top: "40.5%",
                             left: "25.2%",


                         }}>

                    </div>
                    <div id="test33"
                         style={{

                             width: "7%",
                             height: 150,
                             position: "absolute",
                             top: "40.5%",
                             left: "32.2%",


                         }}>

                    </div>
                    <div id="test34"
                         style={{

                             width: "7%",
                             height: 150,
                             position: "absolute",
                             top: "40.5%",
                             left: "39.2%",


                         }}>

                    </div>
                    <p style={{
                        width: "10%",
                        height: "10%",
                        position: "absolute",
                        top: "56.5%",
                        left: "29.7%",
                        fontSize: "1vm",
                        color: 'white'
                    }}>
                        二维全息谱图
                    </p>
                    <p style={{
                        width: "10%",
                        height: "10%",
                        position: "absolute",
                        top: "56.5%",
                        left: "64.2%",
                        fontSize: "1vm",
                        color: 'white'
                    }}>
                        三维全息谱图
                    </p>

                    <p style={{
                        width: "10%",
                        height: "10%",
                        position: "absolute",
                        top: "35.3%",
                        left: "64.8%",
                        fontSize: "1vm",
                        color: 'white'
                    }}>
                        机组总貌图
                    </p>

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


