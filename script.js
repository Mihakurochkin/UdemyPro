let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');

    while(!numberOfFilms) {
        numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
    }

}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}



function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const a = prompt('Назвіть один з переглянутих фільмів', '').trim(),
            b = prompt('На скільки його оціните?', '');

        if(a && b && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log('done')
        } else {
            console.log('error')
            i--;
        }

    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDb.count < 10) {
        alert('Переглянуто доволі мало фільмів');
    } else if(10 <= personalMovieDb.count <= 30 ) {
        alert('Ви класичний глядач!');
    } else if(personalMovieDb.count > 30) {
        alert('Ви кіноман!');
    } else {
        alert('Сталася помилка!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDB(personalMovieDb.privat);

function writeMyGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i -1] = prompt(`Ваш улюблений жанр під номером ${i}`, '');
    }
}

writeMyGenres();

console.log(personalMovieDb.genres);
