//your JS code here. If required.
document.addEventListener("DOMContentLoaded", fun);
function fun(){
	const message = document.createElement("div");
	message.innerHTML = "DOM load success";
	document.body.appendChild(message);
}