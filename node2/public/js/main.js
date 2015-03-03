$(document).ready(function(){

	var x = new Array(10);
	var $y = $('#header'); 
	var $z = $('#list'); 
	
	//console.log(x);
	
	for (var i = 0; i < 10; i++) {		
		x[i] = i + 1;
	};

	$.each(x, function(index, val){
		console.log(val);
		$y.append('<h2>'+ val +'</h2>');
	});

	$.each(x, function(index, val){
		console.log(val);
		$z.append('<p>'+ val +'</p>');
	});

});