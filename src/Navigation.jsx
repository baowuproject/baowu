import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import React, {Component} from 'react'
const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
        )}
    </Sticky>
);
class Navigation extends Component{
    render() {
        return(
            <StickyContainer>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab="透平轴前截面" key="1" style={{ height: 200 }}>
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="透平轴后截面" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="发动机轴前截面" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="发动机轴后截面" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                </Tabs>
            </StickyContainer>
        )
    }
}
export default Navigation