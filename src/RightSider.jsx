import React, {Component} from 'react';
import {Layout} from "antd";
const {Sider} = Layout
class RightSider extends Component{
    render() {
        return (
            <Sider width={200} style={{background:"#fff"}}>
                right Sider
            </Sider>
        )
    }
}

export default RightSider