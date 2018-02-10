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
    displayRepos
    create a function to display all of my repositories to the page. 
    This will take the repositories array as a parameter and append them to the page.
    The repos will show up in 2 column rows.
*/
function displayRepos(repositories){
    for (let i = 0; i < repositories.length; i++) {
        console.log(repositories[i]);
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
        console.log(repoDiv);

        //append our new repoDiv to the page.
        document.getElementById("repos").appendChild(repoDiv);
    }
}

//run the function that will display my repositories.
displayRepos(repositories);

