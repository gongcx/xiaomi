var address = JSON.parse(sessionStorage.getItem("address"));
var store = JSON.parse(sessionStorage.getItem('store'));
var addressD = address.filter(function(item){ return item.u_name === store[0][0].name });

//地址的添加与修改
(function(){
	function addressData(stu) {
		stu.forEach(function(item) {
			$(`
				<div class='address' data-id = ${item.id}>
					<h2>${item.name}</h2>
					<p>${item.cell}</p>
					<p>${item.selectionbar}</p>
					<p>${item.detailed}</p>
					<p>${item.tag}</p>
					<button class='btn-update' type='button'>修改</button>
					<button class='btn-remove' type='button'>删除</button>
				</div>
			`).insertAfter('.address-warp .btn')
		});
	};
	addressData(addressD);
	
	$('.address-warp .btn').on('click',function() {
		$('.cover').css({display:'block'});
		$('button.yes').css({display:'inline-block'});
		$('button.yess').css({display:'none'});
	});
	$('.cover .no').on('click', function() {
		$('.cover').css({display:'none'});
	});
	$('button.yes').css({display:'none'});
	$('button.yess').css({display:'none'});
	//添加地址
	$('.cover .yes').on('click', function() {
		// $('button.yes').css({display:'inline-block'});
		
		var name = $('input.name').val().trim(),
			u_name = store[0][0].name,
			cell = $('input.cell').val().trim(),
			selectionbar = regionPicker.get(),
			detailed = $('input.detailed').val().trim(),
			tag = $('input.tag').val().trim();
			var id = 0;
			if(address.length === 0){
				id = 1;
			}else{
				id = address[address.length-1].id+1;
			}
			var stu = { id, u_name, name, cell, selectionbar, detailed, tag }
			address.push(stu);
			addressD.push(stu);
			sessionStorage.setItem('address', JSON.stringify(address));
			$('.address-warp .btn').prevAll().remove();
			$('.cover').css({display:'none'});
			$('button.yes').css({display:'none'});
			layer.alert('添加成功',function(){
				addressData(addressD);
				window.location.reload();
			});
			

	});
	//删除数据
	$('button.btn-remove').on('click', function() {
		console.log(111)
		var that = this;
		layer.confirm("确认要删除数据吗?", { btn: [ "确定", "取消" ] }, function() {
			var id = parseInt($(that).parent()[0].dataset.id);//.dataset.id取出藏的值
			var i = address.findIndex(function(item) {
				return item.id === id;
			});
			address.splice(i,1);
			sessionStorage.setItem('address', JSON.stringify(address));
			$(that).parent().remove();//删除HTML中的li
			layer.alert('删除成功');
		});
	});
	$('button.btn-update').on('click', function() {
		$('.cover').css({display:'block'});
		$('button.yes').css({display:'none'});
		$('button.yess').css({display:'inline-block'});
		var id = parseInt($(this).parent().attr('data-id'));
		var i = address.findIndex(function(item){ return item.id === id })
		$('.cover').css({display:'block'});
		$('input.name').val(address[i].name);
		$('input.cell').val(address[i].cell);
		regionPicker.set(address[i].selectionbar);
		$('input.detailed').val(address[i].detailed);
		$('input.tag').val(address[i].tag);
		
	$('button.yess').on('click', function() {
		var name = $('input.name').val().trim(),
			u_name = store[0][0].name,
			cell = $('input.cell').val().trim(),
			selectionbar = regionPicker.get(),
			detailed = $('input.detailed').val().trim(),
			tag = $('input.tag').val().trim();
			var id = 0;
			if(address.length === 0){
				id = 1;
			}else{
				id = address[address.length-1].id+1;
			}
			var dizhi = JSON.parse(sessionStorage.getItem('dizhi'));
			var stu = { id, u_name, name, cell, selectionbar, detailed, tag }
			address.splice(i,1,stu);
			addressD.splice(i,1,stu);
			sessionStorage.setItem('address', JSON.stringify(address));
			$('.address-warp .btn').prevAll().remove();
			
			$('.cover').css({display:'none'});
			// $('button.yess').css({display:'none'});
			layer.alert('修改成功',function(){
				window.location.reload();
				addressData(addressD);
			});
	});
		
	});	
})();



$('form').Validform({
	tiptype:3,
});


//商品及优惠券
var close = JSON.parse(sessionStorage.getItem("close"));
var homeData = JSON.parse(sessionStorage.getItem("home"));
var products = homeData.products;
(function(){
	close.forEach(function(item,i){
		var avatar = products.filter(function(item2){ return item.id === item2.id })[0].avatar;
		var name = products.filter(function(item2){ return item.id === item2.id })[0].name;
		var xiaoji = parseFloat(item.pirce)*parseFloat(item.count);
		$(`
			<div class='param clearfix'>
				<div class='img-box fl'><img src='${avatar}' /></div>
				<span class='name'>${name}</span>
				<span class='price'>${item.pirce}元</span>
				<span class='x'>X</span>
				<span class='count'>${item.count}件</span>
				<span class='xiaoji fr'>${xiaoji}元<span>
			</div>
		`).appendTo('.param-box');
		
	});
	$('span.xiaoji>span').remove();
	var withll = 0;
	$('span.xiaoji').each(function(i,item){
		withll +=parseFloat($(item).text());
	});
	$('span.withll').text(`${withll}元`);
	
	
})();
(function(){
	
	$('.address').on('click',function() {
		$(this).toggleClass('default');
		if($(this).hasClass('default')){
			$(this).siblings().toggleClass('default',false);
			var id = parseInt($('.default').attr('data-id'));
			var dizhi = address.filter(function(item){ return item.id === id });
			var zonge = $('span.withll').text();
			dizhi[0].zonge = zonge;
			sessionStorage.setItem('dizhi', JSON.stringify(dizhi));
		}
		
		
	});
	
	$('.btn-order').on('click', function() {
		var order_obj = {};
		var date_obj = {};
		var id = 0;
		if($('.default').length === 0){
			layer.alert('请选择收货地址');
		}else{
			var dizhi = JSON.parse(sessionStorage.getItem('dizhi'));
			var order = JSON.parse(sessionStorage.getItem('order'));
			var date = new Date().getTime()+900000;
			var datenow = new Date();
			var year = datenow.getFullYear();
			var mounth = datenow.getMonth()+1;
			var day = datenow.getDate();
			var hours = datenow.getHours();
			var minutes = datenow.getMinutes();
			var time = `${year}年 ${mounth}月 ${day}日 ${hours}:${minutes}`;
			if(order.length === 0){
				id = 1;
			}else{
				id = order[(order.length-1)].id + 1;
			}
			var u_name = store[0][0].name;
			var total = parseInt($('.withll').text());
			var isPay = false;
			var address = dizhi[0];
			var date = date;
			order_obj = { id, u_name, total, isPay, address, date, time };
			order.push(order_obj);
			sessionStorage.setItem('order', JSON.stringify(order));
			(function(){
				var orderData = JSON.parse(sessionStorage.getItem('order'));
				var avatar = '';
				var id = 0;
				var obj = {};
				var orderDetail = JSON.parse(sessionStorage.getItem('orderDetail'));
				var close = JSON.parse(sessionStorage.getItem('close'));
				var order = orderData.filter(function(item){ return item.u_name === store[0][0].name });
				var close = close.filter(function(item){ return item.u_name === store[0][0].name });
				var arr= [];
				var orderId = order[order.length-1].id;
				var pid = 0;
				var count = 0;
				var price = 0;
				close.forEach(function(item,i){
					if(orderDetail.length === 0){
						id = 1;
					}else{
						id = orderDetail.length+1;
					}
					avatar = products.filter(function(item2){ return item.pid === item2.id })[0].avatar;
					pid = item.pid;
					count = item.count;
					price = item.pirce;
					obj = { id, orderId, pid, count, price, avatar };
					arr.push(obj);
					
				});
				orderDetail.push(arr);
				sessionStorage.setItem('orderDetail', JSON.stringify(orderDetail));
			})();
			window.location.href = '../pay/pay.html';
		}
		
	});
})();

