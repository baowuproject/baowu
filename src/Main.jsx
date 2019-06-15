import {Layout, Row, Col, Button, Divider} from 'antd';
import React, {Component} from 'react'
import LeftSider from './LeftSider'
import RightSider from './RightSider'
import Navigation from './Navigation'
import NnetWorkChart from './NnetWorkChart'
import DataList from './DataList'

const {Header, Footer, Sider, Content} = Layout;


class Main extends Component {
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
                    {/*<div style={{*/}
                    {/*    width: "12%",*/}
                    {/*    height: "21%",*/}
                    {/*    position: "absolute",*/}
                    {/*    backgroundImage: "url('./static/rightSider/topCutLine.png')",*/}
                    {/*    backgroundRepeat: "no-repeat",*/}
                    {/*    backgroundSize: "cover",*/}
                    {/*    top: "44%",*/}
                    {/*    left: "86%",*/}
                    {/*}}>*/}
                    {/*</div>*/}
                    {/*<div style={{*/}
                    {/*    width: "4%",*/}
                    {/*    height: "4%",*/}
                    {/*    position: "absolute",*/}
                    {/*    // backgroundImage: "url('./static/rightSider/tag.png')",*/}
                    {/*    // backgroundRepeat: "no-repeat",*/}
                    {/*    // backgroundSize: "cover",*/}
                    {/*    top: "65.4%",*/}
                    {/*    left: "88%",*/}
                    {/*    zIndex:2*/}
                    {/*}}>*/}
                    {/*</div>*/}
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

                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position:"absolute", top:"10.5%", left:"17.5%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize:'1vw'
                    }}>透平轴前截面</span></Button>

                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position:"absolute", top:"10.5%", left:"24.1%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize:'1vw'
                    }}>透平轴后截面</span></Button>
                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position:"absolute", top:"10.5%", left:"30.9%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize:'1vw'
                    }}>透平轴前振动</span></Button>
                    <Button type={"link"} size={"large"}
                            style={{width: "10%", position:"absolute", top:"10.5%", left:"37.7%"}}> <span style={{
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",
                        height: "100%",
                        fontSize:'1vw'
                    }}>透平轴前振动</span></Button>


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


