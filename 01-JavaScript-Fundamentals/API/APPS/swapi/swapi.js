let stWrList = document.querySelector('ul');

fetch('https://swapi.co/api/people')
    .then(function (response) {
        return response.json();
    })
    .then(json => getPeople(json))

function getPeople(people) {
    let peeps = people.results;
    for (p of peeps) {
        console.log(p.name);
        let name = document.createElement('li');
        let birth_year = document.createElement('li');
        name.innerText = p.name;
        birth_year.innerText = p.birth_year;
        stWrList.appendChild(name)
        stWrList.appendChild(birth_year)

    }
}


