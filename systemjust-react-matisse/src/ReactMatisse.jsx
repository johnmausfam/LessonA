import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { PropTypes } from 'prop-types'
import Matisse from './lib/Matisse'
import "./lib/Matisse.chart.2.0.1.css"

class ReactMatisse extends Component {
	constructor(props){
		super(props);
		this._viewID = "matisse_" + (Math.random() * 1000000).toFixed(0);
		this._chart = null;
		this._chartNode = null;
	}

	initChart(chartType){
		if(this._chart){
			this._chart.destroy();
			this._chartNode.remove();
		}
		this._chartNode = document.createElement('div');
		var baseNode = findDOMNode(this);
		baseNode.append(this._chartNode)
		this._chart = chartType(this._chartNode);
	}

	draw(dataX, dataY, params){
		if(!this._chart || !dataX || !dataY) return;

		if(params){
			var _params = JSON.parse(JSON.stringify(params));
			this._chart.setParams(params);
		}
		this._chart.setData(dataX, dataY);
        this._chart.draw();
	}

	componentDidMount(){
		this.initChart(this.props.chartType);
		this.draw(this.props.dataX,this.props.dataY,this.props.params);
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.chartType != this.props.chartType){
			this.initChart(nextProps.chartType);
		}
		if(nextProps.dataX != this.props.dataX || nextProps.dataY != this.props.dataY || nextProps.params != this.props.params){
			this.draw(nextProps.dataX,nextProps.dataY,(nextProps.params != this.props.params ? nextProps.params : null ));
		}
	}

	shouldComponentUpdate(){
		return false;
	}

	render(){
		var nodeStyle = {
			width:this.props.width,
			height:this.props.height
		};

		return (
			<div ref="base" className="c_rmat" style={nodeStyle} id={this._viewID}></div>
		)
	}
}

ReactMatisse.propTypes = {
	width:PropTypes.string.isRequired,
	height:PropTypes.string.isRequired,
	params:PropTypes.object,
	dataX:PropTypes.array.isRequired,
	dataY:PropTypes.array.isRequired
}

ReactMatisse.defaultProps = {
  width: "700px",
  height: "500px",
  dataX: [],
  dataY: []
};


export default ReactMatisse