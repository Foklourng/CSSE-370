
function myFunction() {
  
  var btn = document.createElement("p");
  btn.innerHTML = "Click to disappear";
  
  document.body.appendChild(btn);
  btn.style.color = "#D93600";
  btn.onclick = function(){
    this.parentNode.removeChild(this);
  };
  
}
function getPos(e){
		x=e.clientX;
    	y=e.clientY;
    		cursor="Your Mouse Position Is : " + x + " and " + y ;
    		document.getElementById("displayArea").innerHTML=cursor;
}
function stopTracking(){
    		document.getElementById("displayArea").innerHTML="";
    	}
