'use strict';

const { Movies } = require("./movies");
const { sortTitle, sortYear, compareTitle, compareYear } = require("./sort");

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Intouchables",
      "Valkyrie",
      "Ratatouille",
      "Stardust",
      "City of God",
      "Memento",
      "The Shawshank Redemption",
      "Beetlejuice",
      "Crocodile Dundee",
      "The Cotton Club",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });
  it("can compare movie titles", () => {
    const movie1 = { title: "Movie A" };
    const movie2 = { title: "Movie B" };
    const movie3 = { title: "Movie C" };

    expect(compareTitle(movie1, movie2)).toBeLessThan(0); // movie1.title < movie2.title
    expect(compareTitle(movie2, movie1)).toBeGreaterThan(0); // movie2.title > movie1.title
    expect(compareTitle(movie1, movie1)).toBe(0); // movie1.title === movie1.title

    expect(compareTitle(movie1, movie3)).toBeLessThan(0); // movie1.title < movie3.title (ignoring common words)
    expect(compareTitle(movie3, movie1)).toBeGreaterThan(0); // movie3.title > movie1.title (ignoring common words)
  });

  it("can compare movie years", () => {
    const movie1 = { year: 2000 };
    const movie2 = { year: 2005 };
    const movie3 = { year: 2000 };

    expect(compareYear(movie1, movie2)).toBeGreaterThan(0); // movie2.year > movie1.year
    expect(compareYear(movie2, movie1)).toBeLessThan(0); // movie1.year < movie2.year
    expect(compareYear(movie1, movie1)).toBe(0); // movie1.year === movie1.year

    expect(compareYear(movie1, movie3)).toBe(0); // movie1.year === movie3.year
  });
});
