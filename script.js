const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDb.count = +prompt('Скільки фільмів ви переглянули?', '');

        while(!personalMovieDb.count) {
            personalMovieDb.count = +prompt('Скільки фільмів ви переглянули?', '');
        }

    },
    rememberMyFilms: () => {
        for(let i = 0; i < 2; i++){
            const a = prompt('Назвіть один з переглянутих фільмів', ''),
              b = prompt('На скільки його оціните?', '');

            if(a && b && a.length < 50) {
                personalMovieDb.movies[a] = b;
                console.log('done')
            } else {
                console.log('error')
                i--;
            }

        }
    },
    detectPersonalLevel: () => {
        if(personalMovieDb.count < 10) {
            alert('Переглянуто доволі мало фільмів');
        } else if(10 <= personalMovieDb.count <= 30 ) {
            alert('Ви класичний глядач!');
        } else if(personalMovieDb.count > 30) {
            alert('Ви кіноман!');
        } else {
            alert('Сталася помилка!');
        }
    },
    showMyDB: (hidden) => {
        if(!hidden) {
            console.log(personalMovieDb);
        }
    },
    toggleVisibleMyDB: () => {
        personalMovieDb.privat = !personalMovieDb.privat;
    },
    writeYourGenres:() => {
        for(let i = 1; i < 2; i++) {
            let genres = prompt(`Введіть ваші улюблені жанри через кому`, '').toLowerCase();
            if(!genres) {
                console.log('Ви ввели некоректні дані або не ввели їх взагалі');
                i--;
            } else {
                personalMovieDb.genres = genres.split(', ');
                personalMovieDb.genres.sort();
            }
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимий жанр #${i + 1} - це ${item}`);
        });
    },
};


