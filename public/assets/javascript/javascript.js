//initialize and declare variables


//initialize and store the used repoitory information in an array of objects
var repositories = [
    {
        name: 'Adventure-Time'
        ,link: 'https://secure-fjord-87831.herokuapp.com/'
        ,repoLink:'https://github.com/kasuao/Adventure-website'
        ,description:'This is the description of the Repo.'
        ,technologies:'These are the technologies used.'
        ,picture:'./../assets/images/adventureSite.jpg'
    },
    {
        name: 'FriendFinder'
        ,link: 'https://friend-finder-bff.herokuapp.com/'
        ,repoLink:'https://github.com/PilotCo/FriendFinder'
        ,description:''
        ,technologies:''
        ,picture:'./../assets/images/friendFinder.jpg'
    },
    {
        name: 'GIFtasticSearch'
        ,link: 'https://pilotco.github.io/GIFtasticSearch/'
        ,repoLink:'https://github.com/PilotCo/GIFtasticSearch'
        ,description:''
        ,technologies:''
        ,picture:'./../assets/images/gifSearch.jpg'
    },
    {
        name: 'TriviaGame'
        ,link: 'https://pilotco.github.io/TriviaGame/'
        ,repoLink:'https://github.com/PilotCo/TriviaGame'
        ,description:''
        ,technologies:''
        ,picture:'./../assets/images/quizGame.jpg'
    },
    {
        name: 'StarWarsRPG'
        ,link: 'https://pilotco.github.io/Star-Wars-RPG/'
        ,repoLink:'https://github.com/PilotCo/Star-Wars-RPG'
        ,description:''
        ,technologies:''
        ,picture:'./../assets/images/starWarsRPG.jpg'
    },
    {
        name: 'Hangman'
        ,link: 'https://pilotco.github.io/Hangman-Game/'
        ,repoLink:'https://github.com/PilotCo/Hangman-Game'
        ,description:''
        ,technologies:''
        ,picture:'./../assets/images/hangman.jpg'
    }
];

/*
    function: displayRepos
    parameters: repositories array
    description: create a function to display all of my repositories to the page. 
        This will take the repositories array as a parameter and append them to the page.
        The repos will show up in 2 column rows.
*/
function displayRepos(repositories){
    for (let i = 0; i < repositories.length; i++) {
        //create a row to add to the page to hold the repos. Want to make 2 column rows.
        if(i % 2 === 0){
            var rowDiv = document.createElement("div");
            rowDiv.setAttribute("class" , "row");
            document.getElementById("repos").appendChild(rowDiv);
        }
        // create a new div to hold information from each individual repository..
        var repoDiv = document.createElement("div");
        //if the repo is in the first column give it an offset of one. If it is in the second column give it an offset of 2.
        if(i % 2 === 0){
            repoDiv.setAttribute("class", "repoDiv col s4 offset-s1");
        }else{
            repoDiv.setAttribute("class", "repoDiv col s4 offset-s2"); 
        }
        repoDiv.setAttribute("id", repositories[i].name);
        repoDiv.setAttribute("onclick", "repoModal(this)");
        //create the title to add to repoDiv this title is the name of the repository.
        var repoTitle = document.createElement("h3");
        repoTitle.innerHTML = repositories[i].name;
        repoTitle.setAttribute("class", "repoTitle");
        //create an image to show the picture of the repository.
        var repoPic = document.createElement("img");
        repoPic.setAttribute("class", "repoPic");
        repoPic.setAttribute("src", repositories[i].picture);

        //append our new elements to our repoDiv div.
        repoDiv.appendChild(repoTitle);
        repoDiv.appendChild(repoPic);

        //append our new repoDiv to the page.
        document.getElementById("repos").appendChild(repoDiv);
    }
}

/*
    function: repoModal
    Parameters: selected repository
    description: Run a function to display information about a selected repository.
        When a repository is clicked a modal will be displayed and show helpful information to the user.
*/
function repoModal (repo) {
    //save the information of the selected repository in the selectedRepo temporary variable.
    var selectedRepo;
    for (var i = 0; i < repositories.length; i++){
        if(repo.id === repositories[i].name){
            selectedRepo = repositories[i];
        }
    }
    console.log(selectedRepo);
    //create the modal container
    var modal = document.createElement("div");
    modal.setAttribute("class", "repoModal");
    //create the title of the modal
    var newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
    var titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "col s12 center header")
        titleDiv.setAttribute("id", "modalTitle");
    var title = document.createElement("h3");
        title.innerText = selectedRepo.name;
    //append the new information to the repoModal
    titleDiv.appendChild(title);
    newRow.appendChild(titleDiv);
    modal.appendChild(newRow);

    //create new row to add columns and append to modal
    newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
    //create the contents of the new row - left side
    var modalPic = document.createElement("div");
        modalPic.setAttribute("class", "col s4 offset-s1");
    var pic = document.createElement("img");
        pic.setAttribute("src", selectedRepo.picture);
        pic.setAttribute("id", "modalPic");
    modalPic.appendChild(pic);
    //new row right side
    var links = document.createElement("div");
        links.setAttribute("class", "col s5 offset-s1");
        //create the title of the links
        var linksTitle = document.createElement("h5");
            linksTitle.setAttribute("class", "header linksHeader")
            linksTitle.innerText = "Links";
        links.appendChild(linksTitle);
        //create the list of links
        var linksList = document.createElement("ul");
            linksList.setAttribute("style", "list-style-type:none");
            var linksListItem = document.createElement("li");
                linksListItem.innerHTML = "Link to the published site: " + "<a id='modalLink' target='blank' href=" + selectedRepo.link + ">Link</a>";
            linksList.appendChild(linksListItem);
            var linksListItem2 = document.createElement("li");
                linksListItem2.innerHTML = "Link to the GitHub Repository: " + "<a id='modalLink' target='blank' href=" + selectedRepo.repoLink + ">Link</a>";
            linksList.appendChild(linksListItem2);
        links.appendChild(linksList);
    //append the new columns to the row
    newRow.appendChild(modalPic);
    newRow.appendChild(links);
    modal.appendChild(newRow);
    
    //create a new row for the description
    newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
    //add the description div
    var description = document.createElement("div");
        description.setAttribute("class", "col s10 offset-s1");
        description.innerHTML = "<h5 class='header modalSection'>Description</h4><p class='modalDescription'>" + selectedRepo.description + "</p>";
    newRow.appendChild(description);
    modal.appendChild(newRow);

    //create a new row for the technologies
    newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
    //add the Technology div
    var technology = document.createElement("div");
        technology.setAttribute("class", "col s10 offset-s1");
        technology.innerHTML = "<h5 class='header modalSection'>Technology Used</h4><p class='modalDescription'>" + selectedRepo.technologies + "</p>";
    newRow.appendChild(technology);
    modal.appendChild(newRow);

    //create close button
    var closeModal = document.createElement("div");
    closeModal.setAttribute("id", "closeModal");
    closeModal.setAttribute("onclick", "closeModal()");
    closeModal.innerText = "X";
    modal.appendChild(closeModal);

    document.getElementById("repoModal").appendChild(modal);
    //create the right hand side of the row
};

/*
    function closeModal
    parameters: none
    description: close the modal, set inner html of repoModal to ""
*/
function closeModal() {
    document.getElementById("repoModal").innerHTML = "";
}

//run the function that will display my repositories.
displayRepos(repositories);

