document.getElementById('does-nothing').disabled = true;

var showTip = function(id){
	document.getElementById(id).style.visibility = 'visible';
}

var hideTip = function(id){
	document.getElementById(id).style.visibility = 'hidden';
}
