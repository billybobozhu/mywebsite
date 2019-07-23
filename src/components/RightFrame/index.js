import React from 'react';
import './index.less';
import { Row, Card, Tooltip, Icon , Tag } from 'antd';
import { connect } from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import { TimesFun } from '../../utils';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';
import { GenericWeather } from 'react-weather';


class RightFrame extends React.Component {
    toAlbumIndex=()=>{
        window.open('https://photos.app.goo.gl/fGQ3LucAENRGJR199');
    }

    render() {
        return (
            <Row>
                <Card bordered={false} hoverable={false} className="card" >
                    <div>

                        <ReactWeather
                            forecast="today"
                            apikey="0e4970dbf4e14f999f053741191207"
                            type="auto"
                        />

                    </div>

                </Card>
                <Card bordered={true} hoverable={true} className="card" cover={<img src={require('../../img/photocover.jpg')} onClick={()=>this.toAlbumIndex()} />}>
                    <div>
                        <p className="abstract1"> 相册</p>
                    </div>


                </Card>
                <Card title="广告" hoverable={true} className="card"  cover={<img src={require('../../img/ad2.jpg')} />}>
                    <div>
                        <p className="abstract1"> 联系方式 </p>
                    </div>

                    <Tooltip
                        title={
                            <img
                                className="wx"
                                src={require('../../img/wechatad.jpg')}
                                alt="微信"
                                width={200}
                                height={200}

                            />
                        }
                        >

                        <div>
                            <p className="abstract1" > 这里是微信 </p>
                        </div>
                    </Tooltip>

                </Card>
            </Row>
        );
    }
}


const mapStateToProps = state => {
    return {
        issues: state.issues,
    }
}

export default withRouter(connect(mapStateToProps)(RightFrame));
