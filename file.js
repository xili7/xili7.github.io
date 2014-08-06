function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	if(document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	}
	return true;
}

function prepareGallery() {
	if(!document.getElementById || !document.getElementsByTagName) return false;
	var gallery = document.getElementById("imageGallery");
	if(!gallery) return false;
	var images = gallery.getElementsByTagName("a");
	for(var i = 0; i < images.length; i++) {
		images[i].onclick = function() {
			return !showPic(this);
		}
	}
	
}

window.onload = prepareGallery;