var homeData = JSON.parse(sessionStorage.getItem("home"));
var cart = JSON.parse(sessionStorage.getItem("cart"));
var cartData = cart;
var products = homeData.products;
var users = JSON.parse(sessionStorage.getItem("store"));

if(users.length === 0){
	$('.cart-box').empty();
	$(`
		<h1 class='nologin'>请先<a href = '../login/login.html'>登录</a></h1>
	`).appendTo('.cart-box');
}else{
	var user = users[0][0].name;
	var list = cartData.filter(function(item){return item.u_name === user});
	$('.cart-list').empty();
	list.forEach(function(item) {
		var product = products.filter(function(item2) {return item.pid === item2.id});
		var col_total = item.pirce*item.count;
		$(`
			<li data-id='${ item.id }'>
				<span class='bgc'><i class="checkbox checked"></i></span>
				<span class='img-box'><img src='${product[0].avatar}'/></span>
				<span class='name'>${ product[0].name }</span>
				<span class='price'>￥${ item.pirce }.00</span>
				<span class='count-box'>
					<button class='btn-subtract'  ${ item.count === 1? "disabled" : "" } >-</button>
					<span class='count'>${ item.count }</span>
					<button class="btn-plus"  ${ item.count === 10? "disabled" : "" } >+</button>
				</span>
				<span class='col-total'>${col_total}元</span>
				<button class='btn-remove'>×</button>
			</li>
		
		`).appendTo('.cart-list')
	});
	(function(){
		$('ul.cart-list')
		.on('click','button.btn-subtract',function() {
			var id = parseInt($(this).parent().parent().attr('data-id'));
			var target = cartData.find(function(item){ return item.id === id})
			target.count--;
			$(this).attr('disabled', target.count === 1).next().text(target.count).next().attr('disabled',false);
			parseInt($(this).next().text());
			var price_obj = $(this).parent().prev().text();
			var pricenum = parseInt(price_obj.slice(1,(price_obj.indexOf('.'))));
			var aa = pricenum*parseInt($(this).next().text());
			$(this).parent().next().text(aa+'元');
			accounts();
			sessionStorage.setItem('cart',JSON.stringify(cartData));
		})
		.on('click', 'button.btn-plus', function() {
			var id = parseInt($(this).parent().parent().attr('data-id'));
			var target = cartData.find(function(item){ return item.id === id});
			
			target.count++;
			$(this).attr("disabled", target.count === 10).prev().text(target.count).prev().attr('disabled',false);
			
			parseInt($(this).prev().text());
			var price_obj = $(this).parent().prev().text();
			var pricenum = parseInt(price_obj.slice(1,(price_obj.indexOf('.'))));
			var aa = pricenum*parseInt($(this).prev().text());
			$(this).parent().next().text(aa+'元');
			accounts();
			sessionStorage.setItem('cart',JSON.stringify(cartData));
		})
		.on('click','i.checkbox', function() {
			$(this).toggleClass('checked');
			$('i.all').toggleClass('checked',$('ul.cart-list i.checkbox').not('.checked').length === 0)
			accounts();
		})
		.on('click','button.btn-remove',function() {
			var id = parseInt($(this).parent().attr('data-id'));
			var i = cartData.findIndex(function(item){ return item.id === id });
			cartData.splice(i,1);
			$(this).parent().remove();
			$('i.all').toggleClass('checked',$('ul.cart-list i.checkbox').not('.checked').length === 0);
			accounts();
			sessionStorage.setItem('cart',JSON.stringify(cartData));
			
		});
		$('i.all').on('click', function() {
			$(this).toggleClass('checked');
			$('ul.cart-list i.checkbox').toggleClass('checked',$(this).hasClass('checked'))
			accounts();
		})
		//商品的结算
		
		
		function accounts(){
			var total = 0,amount = 0 ,amount_s = 0, col_total = 0;
			var id = 0, target = null;
			$('ul.cart-list i.checked').each(function(i,item) {
				id = parseInt($(this).parent().parent().attr('data-id'));
				target = cartData.find(function(item2) { return id === item2.id });
				amount += target.count;
				total += target.pirce*target.count;
			});
			$('ul.cart-list i.checkbox').each(function(i,item) {
				id = parseInt($(this).parent().parent().attr('data-id'));
				target = cartData.find(function(item2) { return id === item2.id });
				amount_s += target.count;
			});
			$('span.total').text(total);
			$('span.amount').text(amount_s);
			$('span.amount-s').text(amount);
		}
		accounts();
		
		
		//立即结算
		$('button.close').on('click', function() {
			if($('ul.cart-list i.checked').length === 0){
				alert('请选择商品！')
			}else {
				var li = $('ul.cart-list i.checked').parent().parent();
				var arr = [];
				li.each(function(i,item) {
					var id = parseInt(item.dataset.id);
					var closeData = cart.filter(function( item2){return item2.id === id })
					var i = cart.findIndex(function(item){ return item.id === id });
					cart.splice(i,1);
					$('ul.cart-list i.checked').parent().parent().remove();
					$('i.all').toggleClass('checked',$('ul.cart-list i.checkbox').not('.checked').length === 0);
					accounts();
					sessionStorage.setItem('cart',JSON.stringify(cartData));
					arr.push(closeData[0]);
				});
				sessionStorage.setItem('close', JSON.stringify(arr));
				window.location.href = '../order_confirm/order_confirm.html';
			}
			
		});
	})();
	
	
}

