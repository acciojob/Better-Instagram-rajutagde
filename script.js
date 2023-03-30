// Get all pic elements
var pics = document.querySelectorAll(".pic");

// Add drag and drop event listeners to each pic element
pics.forEach(function(pic) {
	pic.addEventListener("dragstart", dragStart);
	pic.addEventListener("dragover", dragOver);
	pic.addEventListener("dragenter", dragEnter);
	pic.addEventListener("dragleave", dragLeave);
	pic.addEventListener("drop", drop);
	pic.addEventListener("dragend", dragEnd);
});

// Global variables for drag and drop operations
var sourcePic = null;
var targetPic = null;

// Drag and drop event functions
function dragStart(event) {
	sourcePic = event.target;
}

function dragOver(event) {
	event.preventDefault();
}

function dragEnter(event) {
	targetPic = event.target;
	targetPic.classList.add("highlight");
}

function dragLeave(event) {
	targetPic = event.target;
	targetPic.classList.remove("highlight");
}

function drop(event) {
	event.preventDefault();
	targetPic = event.target;

	// Swap background images of source and target pics
	var sourceBG = sourcePic.style.backgroundImage;
	sourcePic.style.backgroundImage = targetPic.style.backgroundImage;
	targetPic.style.backgroundImage = sourceBG;
}

function dragEnd(event) {
	// Remove highlight from target pic
	targetPic = event.target;
	targetPic.classList.remove("highlight");
}
