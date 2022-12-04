function reverse() {
	var s = document.getElementById("txtS").value;
	arr = s.split(" ");
	var i, kq = "";
	for(i = arr.length - 1; i >= 0; i--){
		kq += arr[i].trim() + " ";
	}
	document.getElementById("txtS").value = kq.trim();
}

function normal(){
	var s = document.getElementById("txtS").value;
	arr = s.split(" ");
	var i, kq = "", tmp;
	for(i = 0; i < arr.length; i++){
		tmp = arr[i].trim().toLowerCase();
		if(tmp != ""){
			tmp = tmp.substr(0, 1).toUpperCase() + tmp.substr(1);
			kq += tmp + " ";
		}
	}
	document.getElementById("txtS").value = kq.trim();
}
