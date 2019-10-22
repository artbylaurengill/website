jQuery(document).ready(function(){

//when a side nav item is clicked...
$("#seaWater").click(showSeaWater);
$("#seaOil").click(showSeaOil);
$("#gold").click(showGold);

function showSeaWater() {
	hideAll();
	jQuery(".seaWater").show();
}

function showSeaOil() {
	hideAll();
	jQuery(".seaOil").show();
}

function showGold() {
	hideAll();
	jQuery(".gold").show();
}

function hideAll() {
	jQuery(".seaOil").hide();
	jQuery(".seaWater").hide();
	jQuery(".gold").hide();
}

// generate the thumbnails
// create a variable for the thumbnails
var thumbnailsHTML = "";


// loop through artData and create an html sentence with every thumbnail image
$.each(artData,function(index,value){
	thumbnailsHTML = thumbnailsHTML 
	+ "<a href='"+value['modalImages']+"'><img src='"+value['thumb']+"' alt='' data-art='"+index+"' class='"+value['paintingClass']+"'></a>";
});

// Add the html to the class
jQuery(".thumbImages").empty();
jQuery(".thumbImages").append(thumbnailsHTML);
showSeaWater();


// Show the Modal on click
$(".thumbImages > a").click(function(e){
	e.preventDefault();
	var paintingIndex = $(this).children("img").data("art");


	$("#myModal").modal("show");
	$('.modal-header h4').html(artData[paintingIndex]['displayName']);
  	$('.modal-body img').attr("src", artData[paintingIndex]['modalImages']);
  	$('.modal-body p').html(artData[paintingIndex]['caption']);

});

// Hide the Modal
$(".modal-content button").click(function(){
	$("#myModal").modal("hide");
});



})

