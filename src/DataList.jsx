import React, {Component} from 'react';
import { List, Typography ,Row, Col, Avatar} from 'antd';

const data = [
    'X幅值',
    'X相位',
    'Y幅值',
    'Y相位',
    '长轴',
    '短轴',
    '偏心率',
    '倾斜率',
    '初相角',
    '旋向',
];

class DataList extends Component{
    render() {
        return(
            <div>
                <div style={{height:"50px"}}/>
                <List
                    size="small"
                    bordered={false}
                    split={false}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => <List.Item>
                        <List.Item.Meta
                        title={<a href="https://ant.design">{item}</a>}
                        description={item.email}
                    />
                        <div>{item}</div></List.Item>}
                    style={{color:"#fff"}}
                />
            </div>
        )
    }
}

export default DataList