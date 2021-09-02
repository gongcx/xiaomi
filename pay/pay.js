var dizhi = JSON.parse(sessionStorage.getItem("dizhi"));
var order = JSON.parse(sessionStorage.getItem('order'));
dizhi.forEach(function(item) {
	$('.submit-warp .content p').text(`收货信息：${item.name} ${item.cell} ${item.selectionbar} ${item.detailed}`)
	$('span.zonge').text(`${item.zonge}`)
});

var i = order.length-1;
var id = order[i].id;
var end = order[i].date;
function updateTime() {
			var now = new Date().getTime();
			var diff = Math.floor((end - now) / 1000);
			$('span.minute').text(Math.floor(diff / 60 % 60));
			$('span.second').text(Math.floor(diff % 60));
			if(diff < 0){
				clearInterval(timer);
			}
		}
var timer = setInterval(updateTime, 1000);
$('.yespay').on('click', function() {
	clearInterval(timer);
	order[i].isPay = true;
	sessionStorage.setItem('order', JSON.stringify(order));
	$('.cover').hide();
	alert('支付成功,自动进入查看订单界面');
	window.location.href = '../order/order.html'
	
	
});

$('.payment .pay .alipay').on('click', function(){
	$('.cover').show();
	$('.zfb').show();
	$('.wx').hide();
});
$('.nopay').on('click', function(){
	$('.cover').hide();
	$('.wx').show();
	$('.zfb').hide();
});
$('.payment .pay .wechat').on('click', function(){
	$('.cover').show();
	$('.wx').show();
	$('.zfb').hide();
});


