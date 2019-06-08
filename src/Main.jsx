import { Layout,Row, Col } from 'antd';
import React, {Component} from 'react'
import LeftSider from './LeftSider'
import RightSider from './RightSider'
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation'

const { Header, Footer, Sider, Content } = Layout;

class Main extends Component{




    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        this is header
                    </Header>
                    <Layout>
                        <LeftSider/>
                        <Layout style={{ padding: '0 0 0' }}>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 500,
                                }}
                            >
                                <Row>
                                    <Col span={12}>
                                        <Navigation/>
                                    </Col>
                                    <Col span={12}>
                                        col-12
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                    hhh
                                    </Col>
                                </Row>
                                Content
                            </Content>
                            <RightSider/>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Main


