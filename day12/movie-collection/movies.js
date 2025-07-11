console.log("🎬 Movie Collection Program");

const defaultGenre = "Unknown";

const movie = {
  title: "케이팝 데몬 헌터스",
  director: "매기 강",
  year: 2025,
  genre: "animation",
};

let movies = [
  {
    title: "매트릭스",
    director: "와쇼스키",
    year: 1999,
    genre: "Sci-Fi",
  },
  {
    title: "기생충",
    director: "봉준호",
    year: 2019,
    genre: "Drama",
  },
  {
    title: "인셉션",
    director: "크리스토퍼 놀란",
    year: 2010,
    genre: "Sci-Fi",
  },
  {
    title: "라라랜드",
    director: "데이미언 셔젤",
    year: 2016,
    genre: "Musical",
  },
  {
    title: "인터스텔라",
    director: "크리스토퍼 놀란",
    year: 2014,
    genre: "Sci-Fi",
  },
];

var movieCount = movies.length;

// 중복 확인 함수
function isDuplicate(targetMovie) {
  return movies.some(
    (m) =>
      m.title === targetMovie.title &&
      m.director === targetMovie.director &&
      m.year === targetMovie.year &&
      m.genre === targetMovie.genre
  );
}

// 영화 추가 함수
function addMovies(index, ...newMovies) {
  console.log("추가 위치 index:", index);

  let addedCount = 0;

  for (let i = 0; i < newMovies.length; i++) {
    if (!isDuplicate(newMovies[i])) {
      movies.splice(index + addedCount, 0, newMovies[i]);
      addedCount++;
    } else {
      console.log(`중복으로 제외됨: ${newMovies[i].title}`);
    }
  }

  movieCount = movies.length;
  console.log(`총 영화 수: ${movieCount}`);
}

// 영화 목록 출력 함수
function printMovies(movieList = []) {
  console.log("\n🎬 Movie Collection:");

  for (let i = 0; i < movieList.length; i++) {
    const m = movieList[i];

    const title = m.title || "Unknown";
    const director = m.director || "Unknown";
    const year = m.year || "Unknown";
    const genre = m.genre || defaultGenre;

    console.log(
      `${
        i + 1
      }. Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genre}`
    );
  }

  console.log(`\n🎬 Total Movies: ${movieList.length}`);
}

addMovies(0, movie, movie);
printMovies(movies);
