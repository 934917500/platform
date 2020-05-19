function boom(opt){
	this.opt = opt;
	this.index = 99999;
	this.imgLeg = 0;

	//生成元素的模块
	this.createNode();

	//爆炸模块
	this.chartBoom();

};
boom.prototype = {
	'createNode':function(){
		this.imgLeg == this.opt.imgUrl.length && (this.imgLeg = 0);

		this.newDiv = document.createElement('div');

		this.newDiv.style.cssText ='width:100%;height:100%;position:absolute;';
		this.newDiv.style.zIndex=this.index;
		this.index--;
		for(var i = 0;i < this.opt.y;i++){
			for(var j = 0;j < this.opt.x;j++){
				this.smallDiv = document.createElement('div');

				this.smallDiv.style.width = this.opt.obj.clientWidth / this.opt.x + 'px';
				this.smallDiv.style.height = this.opt.obj.clientHeight / this.opt.y + 'px';
				this.smallDiv.style.float = 'left';
				this.smallDiv.style.background = 'url('+this.opt.imgUrl[this.imgLeg]+')';
				this.smallDiv.style.backgroundPositionX = this.opt.obj.clientWidth / this.opt.x * -j+'px';
				this.smallDiv.style.backgroundPositionY = this.opt.obj.clientHeight / this.opt.y * -i+'px';
				this.smallDiv.style.transition = this.random(Number(this.opt.timer.split('-')[0]),Number(this.opt.timer.split('-')[1]))+'s all ease';
				this.newDiv.appendChild(this.smallDiv);
			};
		};
		this.imgLeg++;

		this.opt.obj.appendChild(this.newDiv);
	},
	'returnArr':function(){
		this.str='';
		for(var i =0;i <this.opt.style.length;i++ ){
			//this.str='';
			this.str+= ' '+this.opt.style[i].split(':')[0]+'(';
			this.str+= this.random(Number(this.opt.style[i].split(':')[1].split('*')[0]),Number(this.opt.style[i].split(':')[1].split('*')[1]));
			this.str+= this.opt.style[i].split(':')[2] +')';
			//this.arr.push(this.str);
		};
		this.str = this.str.replace('undefined','');
		return this.str;
		//this.arr.push(this.str);
	},
	'chartBoom':function(){
		var _this = this;
		

		setTimeout(function(){
			for(var i = 0;i<_this.newDiv.children.length;i++){
				_this.newDiv.children[i].style.transform = _this.returnArr();
				_this.newDiv.children[i].style.opacity = 0;
			};


			_this.createNode();
			_this.chartBoom();
		},1500);

		setTimeout(function(){
			boomNode.children[0].remove();

		},Number((this.opt.timer.split('-')[1])*1000)+1000)

	},
	'random':function(min,max){
		return Number(Math.random()*((max-min))+min);
	}
}
let boomNode = document.getElementById('boomNode');
new boom({
	'obj':boomNode,
	'x':10,
	'y':8,
	'timer':'0.8-1.7',
	'imgUrl':['../src/static/1.jfif','../src/static/2.jfif','../src/static/3.jpg','../src/static/2.jpg'],
	'style':['perspective:800*800:px','translateX:-500*500:px','translateY:-500*500:px','rotate:-180*180:deg','rotateX:-180*180:deg','rotateY:-180*180:deg','scale:1*3:']

})

// var arr = ['../src/static/1.jfif','../src/static/2.jfif','../src/static/3.jpg','../src/static/2.jpg']
// var z = 9999999;
// var index = 0;
// boom(10,10);
// function boom(l,t){
// 	//console.log(1)
// 	var oParentNode = document.createElement('div');
// 	oParentNode.style.zIndex = z;
// 	z--;
// 	let BoomNode = document.getElementById('BoomNode');
// 	BoomNode.appendChild(oParentNode);
// 	var x = l;
// 	var y = t;
// 	for(var i = 0;i < y;i++){
// 		for(var j = 0;j < x;j++){

// 			var oDiv = document.createElement('div');
// 			//1 - > width * -j => 0
// 			//2 - > width * -j => -80
// 			//3 - > width * -j => -160
// 			oDiv.style.background = 'url('+arr[index]+')';
// 			oDiv.style.width = div1.clientWidth / x + 'px';
// 			oDiv.style.height = div1.clientHeight / y + 'px';
// 			oDiv.style.left = (div1.clientWidth / x) * j +'px';
// 			oDiv.style.top = (div1.clientHeight / y) * i + 'px';
// 			oDiv.style.backgroundPositionX = (div1.clientWidth / x) * -j +'px';
// 			oDiv.style.backgroundPositionY = (div1.clientHeight / y) * -i + 'px'; 
// 			oDiv.style.transition = (Math.random()*1+0.5)+'s';
// 			oParentNode.appendChild(oDiv);
// 		}
// 	};

// 	var allDiv = oParentNode.children;
// 	setTimeout(()=>{
// 		index++;
// 		index == arr.length && (index = 0);
// 		boom(l,t);
// 		for(var i = 0;i < allDiv.length;i++){
// 			allDiv[i].style.transform='perspective(800px) rotateX('+(Math.random()*360-180)+'deg) rotateY('+(Math.random()*360-180)+'deg) translateX('+(Math.random()*400-200)+'px) translateY('+(Math.random()*400-200)+'px) translateZ('+(Math.random()*200+100)+'px)';
// 			allDiv[i].style.opacity= 0;
// 		};
// 	},2000);

// 	//boom(l,t);

// 	setTimeout(function(){
// 		oParentNode.remove(); //= ''
// 		//boom(10,10);
// 	},3500);
// }