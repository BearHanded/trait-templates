/************************************************
*	Functions to manage the menu page
************************************************/



//List the builds available for a class
function populateClassBuilds(className){
	window.className = className;
	//Clear rows
	$('#buildList').empty();
	//load builds

	//add in appropriate build ids
	var html = '';
	for(var i = 0; i < 4; i++) {
            html += '<tr><td onClick=openBuild(' + i + ')>' + className + ' ' + i +  '</td></tr>';
    }
    html += '<tr><td id="newBuildLink" onClick=newBuild()>New Build +</td></tr>';
    $('#buildList').append(html);
}

//Open the build editor to the specified id
function openBuild(buildId) {
	newBuild();
}

//Open an empty template page
function newBuild() {
	initTraits();
	//Prepare any data
	switchToTraits();
}