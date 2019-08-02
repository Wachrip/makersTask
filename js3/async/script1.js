let name = document.querySelector('#name');
let region = document.querySelector('#region');
let subregion = document.querySelector('#subregion');
let capital = document.querySelector('#capital');
let flag = document.querySelector('#flag');

fetch('https://restcountries.eu/rest/v2/name/China')
    .then(response => response.json())
    .then(body => )