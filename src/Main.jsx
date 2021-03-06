import {Layout, Row, Col} from 'antd';
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
            <div style={{
                width: "100%",
                height: "1000px",
                backgroundImage: "url('./static/main.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <Row>
                    <Col span={24}>
                        <div style={{textAlign: "center", height:"80px", lineHeight:"80px"}}>
                        <span>
                            XXXX
                        </span>
                        </div>
                    </Col>
                </Row>
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
        )
    }
}

export default Main


