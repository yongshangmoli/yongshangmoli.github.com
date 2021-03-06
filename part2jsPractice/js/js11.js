(function() {
	/*广度优先遍历*/
	function BFS(node) {
		if(node) {
			var queue = [];
			queue.push(node);
			while(queue.length) {
				var item = queue.shift();
				arr.push(item);
				var child = item.firstElementChild;
				while(child) {
					queue.push(child);
					child=child.nextElementSibling;
				}
			}
		}
	}
	
	/*深度优先遍历*/
	function DFS(node) {
		if(node) {
			arr.push(node);
			DFS(node.firstElementChild);
			if(node.firstElementChild) {
				var child = node.firstElementChild.nextElementSibling;
				while(child) {
					DFS(child);
					child = child.nextElementSibling;
				}
			}
		}
	}
	
	/*遍历改变背景色的动画*/
	function animation(arr){
		var i=0,pre=0;
		t = setInterval(function(){
			arr[pre].style.background = 'white';
			if(i<arr.length) {
				arr[i].style.background = 'pink';
				if(search.value && arr[i].firstChild.nodeValue.trim() == search.value) {
					arr[i].style.background = 'red';
					alert('已经找到匹配元素，搜索停止啦');
					clearInterval(t);
				}
				pre = i;
			}
			else {
				if(search.value) {
					alert('并没有你想寻找的元素哦');
				}
				clearInterval(t);
			}
			i++;
		},600);
	}
	
	/*事件绑定函数*/
	function addEvent(target,type,handler) {
		if(target.addEventListener) {
			target.addEventListener(type,handler);
		}
		else if(target.attachEvent) {
			target.attachEvent('on'+type,function(event) {
				return handler.call(target,window.event);
			})
		}
		else {
			target['on'+type] = function() {
				return handler.call(target);
			}
		}
	}
	
	/*重置全部*/
	var reset = function () {
	    clearInterval(t);
	    var divs = document.getElementsByTagName('div');
	    for (var i = divs.length - 1; i >= 0; i--) {
	        divs[i].style.background = 'white';
	    }
	};
	
	var btns = document.getElementById('sortBtn').getElementsByTagName('input');
	var root = document.getElementById('tree');
	var search = btns[1];
	var arr,t;
	/*分别给俩个按键绑定处理函数，能否把函数名存起来，然后在for循环依次绑定函数？*/
	addEvent(btns[0], 'click', function() {
		arr = [];
		BFS(root);
		reset();
		animation(arr);
	})
	addEvent(btns[2], 'click', function() {
		arr = [];
		DFS(root);
		reset();
		animation(arr);
	})
}())