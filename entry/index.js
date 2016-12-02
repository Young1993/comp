import $ from 'jquery';
import React, {
	Component
} from 'react';
import {
	render
} from 'react-dom';
import Mmodal from '../comp/modal/mmodal'; //弹框组件

class Comp extends Component {
	render() {
		return (
			<div className="container">
			<CompLeft /> 
			<CompRight />
			</div>
		);
	}
}
class CompRight extends Component {
	handleClick(e) {
		$('body').animate({
			scrollTop: '0'
		}, 200, 'swing');
	}
	render() {
		return (
			<div id="nav-right">
			<ul>
			<li><a className="title" href="#modal">弹框</a></li>
			</ul>
			<a className="go-top" href="javascript:void(0);" onClick={this.handleClick}>Top</a>
			</div>
		);
	}
}
class CompLeft extends Component {
	render() {
		return (
			<div id="nav-left">
			<Mmodal/>
			</div>
		);
	}
}

render(<Comp />, document.getElementById('content'));