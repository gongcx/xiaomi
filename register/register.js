var userData = JSON.parse(sessionStorage.getItem('users'));

var form = $('form').Validform({
				tiptype:3,
				datatype:{
					aaa: function(gets,obj,curform) {//gets 输入的数值
						var i = userData.findIndex(function(item){ return item.name === gets });
						if(i !== -1) return '用户名已存在';
						else return true;
					}
				}
				
			});
$('.btn').on('click' ,function(){
	if(!form.check()){
		return;
	}else{
		var obj = {};
		var name = $('input.name').val();
		var paw1 = $('input.paw1').val();
		var paw2 = $('input.paw2').val();
		console.log(paw1);
		console.log(paw2)
		if(paw2===paw1 && name!== undefined){
			console.log(888)
			obj.name = name;
			obj.paw = paw1;
			userData.push(obj);
			sessionStorage.setItem('users', JSON.stringify(userData));
			window.location.href='../login/login.html';
		}
		
	}
	
	
});

