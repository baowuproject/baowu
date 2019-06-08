import { Menu, Icon, Switch, Layout} from 'antd';
import React, {Component} from 'react'
const { SubMenu }  = Menu;
const {Sider} = Layout;
class LeftSider extends Component {
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
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme={this.state.theme}
                    onClick={this.handleClick}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                透平轴前振动
              </span>
                        }
                    >
                        <Menu.Item key="1"><span><Icon type="info-circle" theme="twoTone" twoToneColor="#eb2f96"/>水平</span></Menu.Item>
                        <Menu.Item key="2"><span><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>垂直</span></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                透平轴后振动
              </span>
                        }
                    >
                        <Menu.Item key="3"><span><Icon type="info-circle" theme="twoTone" twoToneColor="#eb2f96"/>水平</span></Menu.Item>
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
        );
    }
}

export default LeftSider