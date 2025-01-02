"use strict"

const numberOfFilms = +prompt("Сколько фильмов уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренних фильмов?", ""),
      b = +prompt("На сколько оцените фильм?", ""),
      c = prompt("Один из последних просмотренних фильмов?", ""),
      d = +prompt("На сколько оцените фильм?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);