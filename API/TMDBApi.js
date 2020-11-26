import React from 'react'

//enter your personnal API token here 
const API_TOKEN = "";

const DOMAIN = "https://api.themoviedb.org"


export function getFilmsFromApiWithSearchedText(text, currentPage){
    const url = DOMAIN + "/3/search/movie?api_key=" + API_TOKEN
        + "&language=fr&query=" + text + "&page=" + currentPage;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getImageFromApi(name){
    return "https://image.tmdb.org/t/p/w300" + name
}

export function getFilmDetailFromApi (id) {
    return fetch( DOMAIN + '/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }