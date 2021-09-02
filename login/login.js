$('h2').eq(0).css({color:'#ff7600'})
	.eq(0).children().css({display:'block',zIndex: 100})
$('h2').eq(1).css({border:'0'})
$('h2').eq(1).children().css({display:'none'})
$('h2').on('mouseover', function() {
	$(this).css({color:'#ff7600'})
		.children().css({display:'block'})
	$(this).siblings().css({color:'#666'})
	$(this).siblings().children().css({display:'none'})
});



var userData = JSON.parse(sessionStorage.getItem('users'));
$('button').on('click', function(){
	var name = $('input.name').val();
	var paw = $('input.paw').val();
	var user1 = userData.filter(function(item){return name === item.name})
	var store = JSON.parse(sessionStorage.getItem('store'));
	
	if(user1.length === 0){
		alert('用户名输入错误！')
	}else{
		user1.forEach(function(item) {
			if(paw == item.paw){
				window.location.href =  '../home/home.html';
			}else{
				
				alert('密码错误')
				$('input.name').val('');
				$('input.paw').val('');
			}
		
		});
		store.push(user1);
		sessionStorage.setItem('store', JSON.stringify(store));
	}
	
})

