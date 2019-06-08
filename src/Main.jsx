import { Layout} from 'antd';
import React, {Component} from 'react'
import LeftSider from './LeftSider'
import RightSider from './RightSider'



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
                                    background: '#000',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 500,
                                }}
                            >
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


