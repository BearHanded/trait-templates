

$(document).ready(function() {
	alert("hello");

	var myURL = "http://wiki.guildwars2.com/wiki/List_of_engineer_traits.html";
	$.get( myURL, function(data) { 
    	$("#entryTable").html( data.htmlCode);
	});

});