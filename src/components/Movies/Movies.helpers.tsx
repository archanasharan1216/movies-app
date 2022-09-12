import Movie from "../../models/movie";

export const capitalize = (str: string) => {
    const lowerCaseArr = str.toLowerCase().split('');
    const firstLetter = lowerCaseArr[0].toUpperCase();
    return [firstLetter, ...lowerCaseArr.slice(1)].join('');
}

export const sortByDateAsc = (a: Movie, b: Movie) => a['year'] >= b['year'] ? 1 : -1;

export const sortByTitleAsc = (a: Movie, b: Movie) => a['title'] >= b['title'] ? 1 : -1;