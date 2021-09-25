/* Переменная и в ней ответ на вопрос */
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

/* Объект и в нем свойства */
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* Задать два вопроса и поместить ответы в переменные */
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);