window.onload = function(){
	//获取盒子id
	var box = document.getElementById("box");
	//获取滚动条盒子
	var scroll = document.getElementsByClassName("scroll")[0];
	//console.log(box.scrollLeft);
	//获取图片所在滚动条位置
	var scrollImg = scroll.getElementsByTagName("img");
	var weizhi = -10;
	var weizhi2 = 2;
	var offset = box.offsetWidth;
	//获取右滚图标
	var rightBtn = document.getElementById("rightBtn");
	//获取左滚图标
	var leftBtn = document.getElementById("leftBtn");
	//右自动滚动
	var runs = setInterval(clickLeft,2000);
	box.onmouseover = function(){
		clearInterval(runs);
	}
	box.onmouseout = function(){
		runs = setInterval(clickRight,2000);
	}
	rightBtn.onclick = function(){
		clickRight();
	}
	leftBtn.onclick = function(){
		clickLeft();
	}
	
	
	
	
	//左边无缝滚动
	function leftRoll(){
		this.Node = document.createElement("img");
		this.lefts = parseFloat(scroll.style.left);
		console.log (this.lefts);
		if(this.lefts <= -2*offset){
			this.Node.src = scrollImg[0].src;
			scroll.appendChild(this.Node);
			this.NodeImg = scrollImg[0];
			scroll.removeChild(this.NodeImg);
			weizhi2 = parseFloat(scroll.style.left);
			scroll.style.left= -offset+"px";
		}else{
			scroll.style.left = this.lefts-10+"px";
			//console.log(this.lefts);
			
		}
	}
	//点击上一张
	function clickLeft(){
		var run = null;
		clearInterval(this.run);
		run = setInterval(function(){
			leftRoll();
			if(weizhi2 <= -2*offset){
				weizhi2 = 2;
			clearInterval(run);
		}
		},1);
	}
	//右边无缝滚动
	function rightRoll(){
		this.Node = document.createElement("img");
		this.lefts = parseFloat(scroll.style.left);
		//console.log (box.scrollLeft);
		if(this.lefts >=  0){
			this.Node.src = scrollImg[scrollImg.length-1].src;
			scroll.insertBefore(this.Node,scrollImg[0]);
			this.NodeImg = scrollImg[scrollImg.length-1];
			scroll.removeChild(this.NodeImg);
			weizhi = parseFloat(scroll.style.left);
			scroll.style.left= -offset+"px";
		}else{
			scroll.style.left = this.lefts+10+"px";
			console.log(this.lefts);
			
		}
	}
	//点击下一张
	function clickRight(){
		var run = null;
		clearInterval(this.run);
		run = setInterval(function(){
			rightRoll();
			if(weizhi >= 0){
				weizhi = -10;
			clearInterval(run);
		}
		},1);
		
			
		
		
	}
	
	
	
}
