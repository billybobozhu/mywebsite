import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import React from 'react';
import {Card} from 'antd';

export default class Gitalks extends React.Component {

    componentDidMount(){
        const gitalk = new Gitalk({
            enable: true,
            clientID: 'a39e945259b5b8d0279c',
            clientSecret: 'b2b72ac8c28c310bb2c62ea0d0b50a5bbd0eeed2',
            repo: 'blogtalk',
            owner: 'billybobozhu',
            admin: 'billybobozhu',
            id: this.props.path,
            distractionFreeMode: false
        })
        gitalk.render('gitalk-container')
    }

    render(){
        return(
            <Card
                style={{ width: '100%' ,marginTop:20}}
            >
            <div id='gitalk-container'></div>
            </Card>
        )
    }
}
