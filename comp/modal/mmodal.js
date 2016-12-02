import React, {
	Component
} from 'react';
import './modal.js';
import './modal.css';

export default class Mmodal extends Component {
	//初始化
	constructor(props) {
			super(props);
			this.state = {
				list: [{
					id: 1,
					btn: 'btn1'
				}, {
					id: 2,
					btn: 'btn2'
				}, {
					id: 3,
					btn: 'btn3'
				}, {
					id: 4,
					btn: 'btn4'
				}, {
					id: 5,
					btn: 'btn5'
				}]
			};
		}
		//绑定点击事件
	handleClick(e) {
			// console.log(e);
			let id = e.currentTarget.id,
				test;
			if (id == 'btn1') {
				test = new Modal();
				test.init({
					now: 0,
					title: "我是大仙",
					w: 620,
					dir: "top",
					content: '我不是大仙，我不会武功，我只要一辆特斯拉超级拖拉机，悲伤的故事',
					type: "info",
					footer: `<button type="button" id="shut-modal" class="shut-normal">关闭</button>`
				});
			} else if (id == 'btn2') {
				test = new Modal();
				test.init({
					now: 0,
					title: "我是大仙",
					w: 620,
					dir: "top",
					content: '我不是大仙，我不会武功，我只要一辆特斯拉超级拖拉机，悲伤的故事',
					type: "info",
					footer: `<button type="button" id="shut-modal" class="shut-default">关闭</button>
		        <button type="button" id="shut-modal" class="shut-info">确认</button>`
				});
			} else if (id == 'btn3') {
				test = new Modal();
				test.init({
					now: 0,
					title: "我是大仙",
					w: 620,
					dir: "top",
					content: `<img src="./image/warn.png" alt="警告" class="content-warn">
                <span class="orange">我不是大仙，我不会武功，我只要一辆特斯拉超级拖拉机，悲伤的故事</span>`,
					type: "info",
					footer: `<button type="button" id="shut-modal" class="shut-default">关闭</button>
                <button type="button" id="shut-modal" class="shut-warning">确认</button>`
				});
			} else if (id == 'btn4') {
				test = new Modal();
				test.init({
					now: 0,
					title: "我是大仙",
					w: 620,
					dir: "center",
					content: `<img src="./image/warn.png" alt="警告" class="content-warn">
	            <span class="orange">我不是大仙，我不会武功，我只要一辆特斯拉超级拖拉机，悲伤的故事</span>`,
					type: "info",
					footer: `<button type="button" id="shut-modal" class="shut-warning">确认</button>`
				});
			} else if (id == 'btn5') {
				test = new Modal();
				test.init({
					now: 0,
					title: "我是大仙",
					w: 620,
					dir: "top",
					content: '我不是大仙，我不会武功，我只要一辆特斯拉超级拖拉机，悲伤的故事',
					type: "form",
					footer: `<button type="button" id="shut-modal" class="form-default">确认</button>`
				});
			}
		}
		//循环插入子组件
	render() {
		return (<div className="content-cell" id="modal">
			<label>弹框组</label>
			<pre>引用方式<br/>
			<code>
			<span>传入参数：</span><br/>
			<span>now，作为防止连续点击的标识为;</span><br/>
			<span>title，弹框标题;</span><br/>
			<span>w,弹框宽度，默认宽度620px；</span><br/>
			<span>content嘛，弹框内容，可自由书写</span><br/>
			<span>footer，弹框底部内容，可自由书写,默认为空</span><br/>
			<span>type，为info信息提示，为form表单弹框；</span><br/>
			<span>dir，弹框位置为center居于页面中间位置，top则位于页面顶端</span><br/>
			<span>id，自定义弹框id</span><br/>
			</code>
			</pre>
			{
				this.state.list.map(function(item) {
				return (
					<button type="button" id={item.btn} className="dd-btn" key={item.id} onClick={this.handleClick}>弹框{item.id}</button>
					)
				},this)			
			}
		    </div>);
	}
}