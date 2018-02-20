import React, { Component } from 'react'
import { Button, List, Tabs, TabPane, Table } from 'antd';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import Places from "../data/data.json"

const columns = [
    {
        title: 'FieldName',
        dataIndex: 'FieldName',
        key: 'FieldName',
    },
    {
        title: 'Value',
        dataIndex: 'Value',
        key: 'Value',
    }
];
const params = { v: '3.exp', key: 'AIzaSyBlIg9iTngB8DtpaJ_jZkTeGuC9OF1oQI0' };
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sn: ""
        }
    }

    _onClickHandler(_sn) {
        this.setState({ ...this.state, sn: _sn });
    }

    _goHome() {
        this.setState({ ...this.state, sn: "" });
    }

    render() {
        return (
            <div className="content">
                {(() => {
                    if (this.state.sn) {
                        let d = Places.find((item) => item.G_sn == this.state.sn);
                        let pData = [];
                        for (var key in d) {
                            pData.push({
                                FieldName: key, Value: d[key]
                            });
                        }
                        console.log(pData);
                        return (
                            <div>
                                <Button onClick={this._goHome.bind(this)}>Back</Button>
                                <List
                                    header={<div>Place List:</div>}
                                    footer={<div>Footer</div>}
                                    bordered
                                    dataSource={pData}
                                    renderItem={item => (<List.Item><span>{item.FieldName}</span><span>:</span>{item.Value}</List.Item>)}
                                />
                                <Button onClick={this._goHome.bind(this)}>Back</Button>
                                {(() => {
                                    if (d.G_point) {
                                        const crd = d.G_point.split(',');
                                        let coords = {
                                            lat: crd[1],
                                            lng: crd[0]
                                        };

                                        return (
                                            <Gmaps
                                                width={'800px'}
                                                height={'600px'}
                                                lat={coords.lat}
                                                lng={coords.lng}
                                                zoom={12}
                                                loadingMessage={'Loading...'}
                                                params={params}
                                            >
                                                <Marker
                                                    lat={coords.lat}
                                                    lng={coords.lng}
                                                    draggable={true} />
                                                <InfoWindow
                                                    lat={coords.lat}
                                                    lng={coords.lng}
                                                    content={'Hello, React :)'} />
                                                <Circle
                                                    lat={coords.lat}
                                                    lng={coords.lng}
                                                    radius={500} />
                                            </Gmaps>
                                        )
                                    }
                                })()}
                            </div>
                        )
                    } else {
                        return (
                            <List
                                header={<div>Place List:</div>}
                                footer={<div>Footer</div>}
                                bordered
                                dataSource={Places}
                                renderItem={item => (<List.Item><span>{item.G_title}</span><Button onClick={this._onClickHandler.bind(this, item.G_sn)}>詳細...</Button></List.Item>)}
                            />
                        )
                    }
                })()}
            </div>
        )
    }
}

export default Content