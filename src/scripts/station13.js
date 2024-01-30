function changeBackgroundColor(e) {
	text = document.getElementById("text");
  // ここに背景色を変える処理を書く。
	if(check.checked){
		text.style.backgroundColor = "red";
	}
	else{
		text.style.backgroundColor = "white";
	}
}
