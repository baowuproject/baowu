import { Layout, Menu, Icon} from 'antd';
import React, {Component} from 'react'
import SideBar from './SideBar'


const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

class Main extends Component{


    state = {
        theme: 'dark',
        currentPosition: '1',
    };



    handleClick = e => {
        console.log('click ', e);
        this.setState({
            currentPosition: e.key,
        });
    };

    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        this is header
                    </Header>
                    <Layout>
                        {/*<SideBar/>*/}
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                theme={'dark'}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                透平轴前振动
              </span>
                                    }
                                >
                                    <Menu.Item key="1"><span><Icon type="user" />水平</span></Menu.Item>
                                    <Menu.Item key="2">垂直</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                透平轴后振动
              </span>
                                    }
                                >
                                    <Menu.Item key="3"><span><Icon type="user" />水平</span></Menu.Item>
                                    <Menu.Item key="4">垂直</Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                发电机轴前振动
              </span>
                                    }
                                >
                                    <Menu.Item key="5"><span><Icon type="user" />水平</span></Menu.Item>
                                    <Menu.Item key="6">垂直</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                发电机轴后振动
              </span>
                                    }
                                >
                                    <Menu.Item key="7"><span><Icon type="user" />水平</span></Menu.Item>
                                    <Menu.Item key="8">垂直</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 0 0' }}>
                            {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                            {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                            {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                            {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                            {/*</Breadcrumb>*/}
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
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Main


