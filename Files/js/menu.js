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
				+ '</td><td class="modifyBuildColumn deleteBuild" onClick=deleteBuild("' + window.templates[i].id + '")> <i class="fa fa-minus fa-lg"></i></td></tr>';
			}
    	}
	}
    html += '<tr><td></td><td id="newBuildLink" class="modifyBuildColumn" onClick=newBuild()>New Build <i class="fa fa-plus fa-lg"></i></td></tr>';
    $('#buildList').append(html);
}

//Open the build editor to the specified id
function openBuild(buildId) {
	//Set target in window
	success = loadById(buildId);

	//Prepare traits
	initTraits();
	//Generate gear options for the class
	initGear();

	//Switch divs
	switchToTraits();
}

function deleteBuild(buildId) {
	//Set target in window
	success = deleteById(buildId);

	if(success){
		//Redraw options
		populateClassBuilds(window.className);
	}
}

//Open an empty template page
function newBuild() {
	//Prepare clean build
	newBuildObject();
	initTraits();
	initGear();
	//Prepare any data
	switchToTraits();
}