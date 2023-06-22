'use strict';

function sortYear(arr) {
  return arr.sort(compareYear); // Sort the array of movies by year in descending order
}

function compareYear(a, b) {
  return b.year - a.year; // Compare the years of two movies for sorting in descending order
}

function sortTitle(arr) {
  return arr.sort(compareTitle); // Sort the array of movies by title
}

function compareTitle(a, b) {
  const titleA = removeIgnoredWords(a.title); // Get the modified version of movie title A without ignored words
  const titleB = removeIgnoredWords(b.title); // Get the modified version of movie title B without ignored words
  return titleA.localeCompare(titleB);
}

function removeIgnoredWords(title) {
  return title.replace(/^(?:The|A|An)\s+/i, '');
}

module.exports = { sortYear, compareYear, sortTitle, compareTitle };
