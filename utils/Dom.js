var Dom={
	on(eventName,callbackFn){
		switch(eventName){
			case "move":
			document.addEventListener("mousemove",callbackFn)
			break;
			case "up":
			document.addEventListener("mouseup",callbackFn)
			break;
		}
	},
	off(eventName,callbackFn){
		switch(eventName){
			case "move":
			document.removeEventListener("mousemove",callbackFn)
			break;
			case "up":
			document.removeEventListener("mouseup",callbackFn)
			break;
		}
	},
	clearSelection(){
		if (window.getSelection) {
		  if (window.getSelection().empty) {  // Chrome
		    window.getSelection().empty();
		  } else if (window.getSelection().removeAllRanges) {  // Firefox
		    window.getSelection().removeAllRanges();
		  }
		} else if (document.selection) {  // IE?
		  document.selection.empty();
		}
	}
}

export {Dom}