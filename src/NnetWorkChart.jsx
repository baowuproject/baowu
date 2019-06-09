import React, {Component} from 'react'
import * as config from './config'

import * as echarts from 'echarts';

class NnetWorkChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '700px',
            height: '100%',
            layerX1: 300,
            layerX2: 380,
            layerX3: 460,
            layerX4: 400,
            layerX0: 250,
            links: [],
            data:[],
            control: 0
        };
        this.chart = null;
    }

    /*
        注意：
            虽然在 componentDidMount 中组件已经被装配，
            但是如果设置容器宽高为百分比的值，那么容器的 clientWidth 和 clientHeight 有可能还处于计算中
            这个时候如果在容器中实例化 echarts，echarts 获得的 clientWidth 和 clientHeight 不一定是我们预期的，
            因此这里使用了定时器延迟实例化，也可以提前计算出像素之后 赋值给 width、height，这样不是百分比就没有问题
    */
    componentDidMount = async () => {
        console.log('did mount');
        // 初始化图表
        let control = this.state.control;
        setTimeout(() => {
            console.log(this.el.offsetWidth)
            let XPosition0 =this.el.offsetWidth * 0.0;
            let XPosition1 =this.el.offsetWidth * 0.15;
            let XPosition2 =this.el.offsetWidth * 0.35;
            let XPosition3 =this.el.offsetWidth * 0.55;
            let XPosition4 =this.el.offsetWidth * 0.65;
            this.setState({
                control: (control + 1) % 5,
                data: data,
                links: links,
                layerX0: XPosition0,
                layerX1: XPosition1,
                layerX2: XPosition2,
                layerX3: XPosition3,
                layerX4: XPosition4
            })
        }, 1500);
        let option = config.option;
        let data = this.state.data;
        let links = this.state.links
        option.series[0].data = data
        option.series[0].links = links
        await this.initChart(this.el);
        // 将传入的配置(包含数据)注入
        this.setOption(option);
        // 监听屏幕缩放，重新绘制 echart 图表
        // window.addEventListener('resize', throttle(this.resize, 100));
    };
    componentDidUpdate = () => {
        // 每次更新组件都重置
        // let positionX1 = this.state.layerX1;
        // let positionX2 = this.state.layerX2;
        // let links = this.state.links;
        // let option = {
        //     title: {
        //         text: 'Graph 简单示例'
        //     },
        //     tooltip: {},
        //     animationDurationUpdate: 1500,
        //     animationEasingUpdate: 'quinticInOut',
        //     series: [
        //         {
        //             type: 'graph',
        //             layout: 'none',
        //             symbolSize: 50,
        //             roam: true,
        //             color: "blue",
        //             label: {
        //                 normal: {
        //                     show: true
        //                 }
        //             },
        //             edgeSymbol: ['circle', 'arrow'],
        //             edgeSymbolSize: [4, 10],
        //             edgeLabel: {
        //                 normal: {
        //                     textStyle: {
        //                         fontSize: 20
        //                     }
        //                 }
        //             },
        //             data: [{
        //                 name: '节点1',
        //                 x: positionX1,
        //                 y: 100
        //             }, {
        //                 name: '节点2',
        //                 x: positionX1,
        //                 y: 130
        //             }, {
        //                 name: '节点3',
        //                 x: positionX1,
        //                 y: 160
        //             }, {
        //                 name: '节点4',
        //                 x: positionX1,
        //                 y: 190
        //             }, {
        //                 name: '节点5',
        //                 x: positionX1,
        //                 y: 220
        //             }, {
        //                 name: '节点6',
        //                 x: positionX1,
        //                 y: 250
        //             }, {
        //                 name: '节点7',
        //                 x: positionX2,
        //                 y: 80
        //             }, {
        //                 name: '节点8',
        //                 x: positionX2,
        //                 y: 110
        //             }, {
        //                 name: '节点9',
        //                 x: positionX2,
        //                 y: 140
        //             }, {
        //                 name: '节点10',
        //                 x: positionX2,
        //                 y: 170
        //             }, {
        //                 name: '节点11',
        //                 x: positionX2,
        //                 y: 200
        //             }, {
        //                 name: '节点12',
        //                 x: positionX2,
        //                 y: 230
        //             }, {
        //                 name: '节点13',
        //                 x: positionX2,
        //                 y: 260
        //             }, {
        //                 name: '节点14',
        //                 x: positionX2,
        //                 y: 290
        //             }, {
        //                 name: '节点15',
        //                 x: positionX2 + 50,
        //                 y: 320
        //             }, {
        //                 name: '节点16',
        //                 x: positionX2 + 50,
        //                 y: 260
        //             }, {
        //                 name: '节点17',
        //                 x: 400,
        //                 y: 160
        //             }, {
        //                 name: '节点18',
        //                 x: 400,
        //                 y: 160
        //             }, {
        //                 name: '节点19',
        //                 x: 400,
        //                 y: 160
        //             }, {
        //                 name: '节点20',
        //                 x: 400,
        //                 y: 160
        //             }, {
        //                 name: '节点21',
        //                 x: 400,
        //                 y: 160
        //             }, {
        //                 name: '节点22',
        //                 x: 400,
        //                 y: 160
        //             }, {
        //                 name: '节点23',
        //                 x: positionX2 + 50,
        //                 y: 160
        //             }],
        //             // links: [],
        //             links: links,
        //             lineStyle: {
        //                 normal: {
        //                     opacity: 0.9,
        //                     width: 2,
        //                     curveness: 0
        //                 }
        //             }
        //         }
        //     ]
        // };
        let control = this.state.control;
        let positionX0 = this.state.layerX0;
        let positionX1 = this.state.layerX1;
        let positionX2 = this.state.layerX2;
        let positionX3 = this.state.layerX3;
        let positionX4 = this.state.layerX4;
        setTimeout(() => {
            let data = [];
            let links = [];
            console.log(control);
            if (control >= 0) {
                let temp = config.nodeLayer0;
                for (let index = 0; index < temp.length; index++) {
                    temp[index].x = positionX0
                }
                data = temp
            }
            if (control >= 1) {
                let temp = config.nodeLayer1;
                for (let index = 0; index < temp.length; index++) {
                    temp[index].x = positionX1
                }
                for (let index in config.nodeLayer0){
                    let link = {};
                    console.log(index)
                    link.source = config.nodeLayer0[index].name;
                    link.target = temp[index].name;
                    links.push(link);
                }
                // for (let node1 of config.nodeLayer0) {
                //     for (let node2 of temp) {
                //         let link = {};
                //         link.source = node1.name;
                //         link.target = node2.name;
                //         links.push(link);
                //     }
                // }
                data = [...data, ...temp]
            }
            if (control >= 2) {
                let temp = config.nodeLayer2;
                for (let index = 0; index < temp.length; index++) {
                    temp[index].x = positionX2
                }
                for (let node1 of config.nodeLayer1) {
                    for (let node2 of temp) {
                        let link = {};
                        link.source = node1.name;
                        link.target = node2.name;
                        links.push(link);
                    }
                }
                data = [...data, ...temp];
            }
            if (control >= 3) {
                let temp = config.nodeLayer3;
                for (let index = 0; index < temp.length; index++) {
                    temp[index].x = positionX3
                }
                for (let node1 of config.nodeLayer2) {
                    for (let node2 of temp) {
                        let link = {};
                        link.source = node1.name;
                        link.target = node2.name;
                        links.push(link);
                    }
                }
                data = [...data, ...temp];
            }
            if (control >= 4){
                let temp = config.nodeLayer4;
                for (let index = 0; index < temp.length; index++) {
                    temp[index].x = positionX4
                }
                for (let index in config.nodeLayer3){
                    let link = {};
                    link.source = config.nodeLayer3[index].name;
                    link.target = temp[index].name;
                    links.push(link);
                }
                data = [...data, ...temp];
            }
            console.log(this.el.offsetWidth)
            let XPosition0 =this.el.offsetWidth * 0.00;
            let XPosition1 =this.el.offsetWidth * 0.15;
            let XPosition2 =this.el.offsetWidth * 0.35;
            let XPosition3 =this.el.offsetWidth * 0.55;
            let XPosition4 =this.el.offsetWidth * 0.65;
            this.setState({
                control: (control + 1) % 5,
                data: data,
                links: links,
                layerX0: XPosition0,
                layerX1: XPosition1,
                layerX2: XPosition2,
                layerX3: XPosition3,
                layerX4: XPosition4
            })
        }, 1500);
        let option = config.option;
        let data = this.state.data;
        let links = this.state.links;
        option.series[0].data = data;
        option.series[0].links = links;

        this.setOption(option);
    };
    componentWillUnmount = () => {
        // 组件卸载前卸载图表
        this.dispose();
    }

    render() {
        const {width, height} = this.state;

        return (
            <div
                className="default-chart"
                ref={el => (this.el = el)}
                style={{height}}
            />
        );
    }

    initChart = el => {
        // renderer 用于配置渲染方式 可以是 svg 或者 canvas
        const renderer = this.props.renderer || 'canvas';
        console.log(renderer);

        return new Promise(resolve => {
            setTimeout(() => {
                this.chart = echarts.init(el, null, {
                    renderer,
                    width: 'auto',
                    height: 'auto'
                });
                resolve();
            }, 0);
        });
    };
    setOption = option => {
        if (!this.chart) {
            return;
        }

        const notMerge = this.props.notMerge;
        const lazyUpdate = this.props.lazyUpdate;

        this.chart.setOption(option, notMerge, lazyUpdate);
    };
    dispose = () => {
        if (!this.chart) {
            return;
        }

        this.chart.dispose();
        this.chart = null;
    };
    resize = () => {
        this.chart && this.chart.resize();
    };
    getInstance = () => {
        return this.chart;
    };
}

export default NnetWorkChart