var showImage = (event) => {
	var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById("loadedImage");
      output.src = dataURL;
    };
	reader.readAsDataURL(input.files[0]);
	document.getElementById("preview").style.border = "dotted";
}

var changeCursor = (event) => {
			var rect = document.getElementById("loadedImage").getBoundingClientRect();
			var imageCoords = {
				topR: {x: rect.right, y:rect.top},
				topL: {x: rect.left, y: rect.top},
				bottomR: {x: rect.right, y: rect.bottom},
				bottomL: {x: rect.left,	y: rect.bottom}
			};
			var cursorX = event.clientX;
			var cursorY = event.clientY;
			console.log(cursorX,cursorY, imageCoords);
			if (cursorX+1 === imageCoords.topR.x && cursorY === Math.ceil(imageCoords.topR.y))
				document.getElementById("loadedImage").style.cursor = "ne-resize";
			if (cursorX === imageCoords.topL.x && cursorY === Math.ceil(imageCoords.topL.y))
				document.getElementById("loadedImage").style.cursor = "nw-resize";
			if (cursorX+1 === imageCoords.bottomR.x && cursorY === Math.floor(imageCoords.bottomR.y))
				document.getElementById("loadedImage").style.cursor = "se-resize";
			if (cursorX === imageCoords.bottomL.x && cursorY === Math.floor(imageCoords.bottomL.y))
				document.getElementById("loadedImage").style.cursor = "sw-resize";
}


