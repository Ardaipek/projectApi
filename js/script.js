'use strict';
// create html elements
const root = document.getElementById('root');
const logo = document.createElement('img');
const container = document.querySelector('.container');
const introText = document.createElement('p');
let link = document.createElement('a');
link.href = 'https://ghibliapi.herokuapp.com/films';

introText.textContent = `The purpose of this small API project is to GET simple requests from the ${link.href}`;
logo.src = 'img/logo.png';
logo.classList.add('logo');

root.appendChild(logo);
root.appendChild(introText);
root.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
    // Begin
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie);
            // console.log(movie.locations[0]);

            // Create a div with class 'kaart'
            const kaart = document.createElement('div');
            kaart.classList.add('kaart');

            // create h1 and put text from API
            const title = document.createElement('h1');
            title.classList.add('heading');
            title.textContent = movie.title;

            const director = document.createElement('h2');
            director.classList.add('director');
            director.textContent = movie.director;

            const p = document.createElement('p');
            p.classList.add('paragraph');
            movie.description = movie.description.substring(0, 300); // limit to 300 chars
            p.textContent = `${movie.description}...`;

            const releaseDate = document.createElement('p');
            releaseDate.classList.add('date');
            releaseDate.textContent = `Release date: ${movie.release_date}`;

            // container > kaart > title,director,p,releaseDate
            container.appendChild(kaart);
            kaart.appendChild(title);
            kaart.appendChild(director);
            kaart.appendChild(p);
            kaart.appendChild(releaseDate);
        });
    } else {
        // in case of error
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `There is an issue with the API`;
        root.appendChild(errorMessage);
    }
}
request.send();