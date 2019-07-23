import React from 'react';
import './index.less';
import {Row} from 'antd';


export default class Footer extends React.Component{

    render(){
        return(
            <Row className='footer'>
                <span>@我最喜欢的皮卡龙</span>
            </Row>
        );
    }
}
