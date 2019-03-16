const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //api url
const key = '6JAkk679WwdR7yS9mldSGu4LUiGEcIzd'; //key that allows the api see who is using their data.
let url; //setting up url, not defined will later. Declaring not initaializing

//SEARCH FORM
const searchTerm = document.querySelector('.search');//goes through document (HTML) and will look for the search
const startDate = document.querySelector('.start-date');//going through HTML document and lookign for the first things thats called start date
const endDate = document.querySelector('.end-date');//going throgh HTML document and looking for the first things called end date
const searchForm = document.querySelector('form');//same as above
const submitBtn = document.querySelector('.submit');//same as above

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

let pageNumber = 0;//setting page number to 0
console.log('PageNumber:', pageNumber);
let displayNav = false;//

nav.style.display = 'none';

//RESULTS SECTION
const section = document.querySelector('section');

//let pageNumber = 0;
//let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

function fetchResults(e) { //setting up section for the fetch results event. E is the event...the parameter
    console.log(e);
}

//1
function fetchResults(e) {
    e.preventDefault(); //1
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);

    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };


    //1
    fetch(url)
        .then(function (result) {
            return result.json(); //2
        }).then(function (json) {
            displayResults(json); //3
        });
}
function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if (articles.length === 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    }

    if (articles.length === 0) {
        console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i]; //
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;//settign a tag to current article headline

            para.textContent = 'Keywords:';

            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article); //
        }
    }
};

function nextPage(e) {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);  //2
    console.log("Page:", pageNumber); //3
};

function previousPage() {
    console.log("Next button clicked");
} //5



