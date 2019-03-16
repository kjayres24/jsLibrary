const baseURL = 'https://api.spacexdata.com/v2/rockets'; //URL endpoint where our data lives

const searchForm = document.querySelector('form'); //Queries the first instance of a <form> tag in our HTML document
const spaceShips = document.querySelector('ul'); //Queries the first instance of a <ul> tag in our HTML document

searchForm.addEventListener('submit', fetchSpace); //Grabs our searchForm constant and attatches an event listener to it. Our event listener takes two arguments - one being a sumbit, and the other being our callback function fetchSpace. 

function fetchSpace(e) { //Declaring a function called fetchSpace, which takes in an argument of (e) - or event
    e.preventDefault(); //By default, buttons refresh the webpage. e.preventDefault() prevents the page from reloading when our 'event' or submit happens.

    fetch(baseURL) //Fetches or 'gets' information from our baseURL. Returns a promise.

        .then(results => { //Promise resolver. This is grabbing the results we are getting back from our fetch request. 
            return results.json() //Returns the results we receieve from our fetch jsonified (JSON = JavaScript object notation). Also gives us another promise.
        })
        .then(json => { //Promise resolver. Grabbing the jsonfied data from our promise.
            displayRockets(json) //This drops our jsonified data into our displayRockets function. 
        })
}

function displayRockets(data) { //Declaring a function called displayRockets, and we give it a parameter of data. Our data parameter is passing the displayRockets function our jsonfied data (which is passed in on line 17).
    //console.log(data);
    //for (x of data) {
    // console.log(x.name);
    //console.log(x.cost_per_launch);
    //}
    let rockets = data.forEach(r => { //Delcaring a new variable called rockets. We then pass in our data parameter from our displayRockets function and run the forEach method on it. The forEach method has an argument called 'r', which is assigning 'r' to each rocket we get back from our jsonified data.
        let rocket = document.createElement('li'); //Declaring a new variable called rocket, which will create a new <li> element. 
        let cost = document.createElement('li'); //Declaring a new variable called cost, which will create a new <li> element.
        rocket.innerText = r.name; //Grabbing our rocket variable and setting the inner text of the <li> element to the rocket name (remember - r is the value we append to the array when we run forEach. We get name from the jsonified object itself, and append it to our rocket variable using dot notation.). 
        cost.innerText = r.cost_per_launch; //Grabbing our cost variable and setting the inner text of the <li> element to the cost per launch (remember - r is the value we append to the array when we run forEach. We get cost_per_launch from the jsonified object itself, and append it to our cost variable using dot notation.)
        spaceShips.appendChild(rocket) //Grabs our spaceShips variable, and appends our rocket variable to it(in which we create a new <li> element and set the inner text to the rocket name)
        spaceShips.appendChild(cost) //Grabs our spaceShips variable, and appends our cost variable to it(in which we create a new <li> element and set the inner text to the cost per launch)
    })
}

/*Making a table in JS*/

/*
const baseURL = 'https://api.spacexdata.com/v2/rockets';// endpoint where our data lives

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit',fetchSpace);

function fetchSpace(e) {
    e.preventDefault();

    fetch(baseURL)

    .then( results => {
       return results.json();
    })
    .then( json => {
       displayRockets(json)
    })
}

function displayRockets(data){
    //console.log(data);
    // for( let x of data){
    //     console.log(x.name)
    //     console.log(x.cost_per_launch)
    // }
    let tabRow = document.createElement('tr');
    let tabName = document.createElement('th');
    let tabCost = document.createElement('th');
    tabCost.innerText = 'Cost';
    tabName.innerText = 'Name';
    tabRow.appendChild(tabName);
    tabRow.appendChild(tabCost);
    spaceShips.appendChild(tabRow);
    let rockets = data.forEach(r => {
        let tabRowe = document.createElement('tr');
        let rocket = document.createElement('td');// create a new element
        let cost = document.createElement('td');
        rocket.innerText = r.name;
        cost.innerText = r.cost_per_launch;
        tabRowe.appendChild(rocket);
        tabRowe.appendChild(cost);
        spaceShips.appendChild(tabRowe);
    } )
}
*/

