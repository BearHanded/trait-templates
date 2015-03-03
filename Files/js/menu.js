/************************************************
*	Functions to manage the menu page
************************************************/



//List the builds available for a class
function populateClassBuilds(className){
	window.className = className;
	$('#classNameTop').text(className);
	//Clear rows
	$('#buildList').empty();
	//load builds

	//add in appropriate build ids
	var html = '';
	if(window.templates && window.templates.length > 0)
	{
		for(var i = 0; i < window.templates.length; i++) {
			//Filter by class
			if(window.templates[i].className === window.className) {
				var gameModeName = '';
				if(window.templates[i].gameMode === 0) {
					gameModeName = 'WvW';
				} else if (window.templates[i].gameMode === 1){
					gameModeName = 'PvP';
				} else if (window.templates[i].gameMode === 2){
					gameModeName = 'PvE';
				}

				html += '<tr><td onClick=openBuild("' + window.templates[i].id + '")>' + window.templates[i].buildName 
				+ '</td></tr>';
			}
    	}
	}
    html += '<tr><td id="newBuildLink" onClick=newBuild()>New Build +</td></tr>';
    $('#buildList').append(html);
}

//Open the build editor to the specified id
function openBuild(buildId) {
	//Set target in window
	loadById(buildId);
	//Prepare traits
	initTraits();
	//Switch divs
	switchToTraits();
}

//Open an empty template page
function newBuild() {
	//Prepare clean build
	newBuildObject();
	initTraits();
	//Prepare any data
	switchToTraits();
}