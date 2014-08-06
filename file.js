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

function preparePlaceholder() {
	var placeholder = createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "blank");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	document.getElementsByTagName("body")[0].appendChild(placeholder);
	document.getElementsByTagName("body")[0].appendChild(description);

}

window.onload = prepareGallery;