 // 弹框插件 
 function Modal() {
   this.modal = this.mask = null;
   this.settings = {
     title: '温馨提示',
     content: '我不是大仙，我不会武功，我只要一辆特斯拉超级拖拉机，悲伤的故事',
     footer: "",
     id: "dd-modal",
     w: 620,
     top: 50,
     type: "info"
   }
 }

 Modal.prototype.json = {} //为了防止多次点击,只能点击一次
   //初始化
 Modal.prototype.init = function(opt) {
   extend(this.settings, opt);
   // console.log(this.settings);

   if (this.json[opt.now] == undefined) {
     this.json[opt.now] = true;
   }

   if (this.json[opt.now]) {
     this.create();
     this.close();
     this.json[opt.now] = false;
   }
 }

 //创建弹框DOM
 Modal.prototype.create = function() {
   var close, closeLeft, header, content, footer;
   if (this.settings.type == "form") {
     header = `hheader-modal`;
     content = `ccontent-modal`;
     footer = `ffooter-modal`;
   } else {
     header = `header-modal`;
     content = `content-modal`;
     footer = `footer-modal`;
   }

   this.setFooter(); //设置底部按钮
   this.modal = document.createElement("div");
   this.modal.className = "dd-modal";
   this.modal.id = this.settings.id;

   this.modal.innerHTML = `
    <div class=${header}>
    <label class="title-modal">${this.settings.title}</label>
    <span class="close-left"></span>
    <span class="close" id="close-btn">&times;</span>
    </div>
    <div class=${content}>${this.settings.content}</div>
    <div class=${footer} id="footer-modal">${this.footer}</div>`;

   document.body.appendChild(this.modal);
   this.mask = document.createElement("div");
   this.mask.className = "mask-modal";

   if (this.settings.type == "form") {
     var footer = document.getElementById('footer-modal');
     footer.style.border = "none";
     this.settings.w = 860;
   }

   document.body.appendChild(this.mask);
   this.modal.style.width = this.settings.w + 'px';


   if (this.settings.dir == "center") {

     this.modal.style.left = (viewWidth() - this.modal.offsetWidth) / 2 + 'px';
     this.modal.style.top = (viewHeight() - this.modal.offsetHeight) / 2 + 'px';

   } else if (this.settings.dir == 'top') {
     this.modal.style.left = (viewWidth() - this.modal.offsetWidth) / 2 + 'px';
     this.modal.style.top = this.settings.top + 'px';
   }

   //关闭按钮事件 右下方
   this.shutDown();
 };

 //关闭按钮事件 右下方
 Modal.prototype.shutDown = function() {
   var shut = document.getElementById('shut-modal');
   var that = this;
   shut.onclick = function() {
     that.removeCache();
   }

   this.mask.onclick = function() {
     that.removeCache();
   }
 };

 //清除掉数据
 Modal.prototype.removeCache = function() {
   document.body.removeChild(this.modal);
   document.body.removeChild(this.mask);
   this.json[this.settings.now] = true; //在关闭按钮的时候 变成true 然后下次可点击
 };

 //设置底部按钮需要的样式
 Modal.prototype.setFooter = function() {
   if (!this.settings.footer) {
     this.footer = `<button type="button" id="shut-modal" class="shut-normal">关闭</button>`;
   } else {
     this.footer = this.settings.footer;
   }
 };

 //右侧关闭按钮:此时删除了弹框
 Modal.prototype.close = function() {

   var btn = document.getElementById("close-btn");
   var that = this;

   btn.onclick = function() {
     that.removeCache();
   }
 }

 function viewWidth() {
   return document.documentElement.clientWidth;
 }

 function viewHeight() {
   return document.documentElement.clientHeight;
 }
 //归并参数
 function extend(obj1, obj2) {
   for (var attr in obj2) {
     obj1[attr] = obj2[attr];
   }
 }