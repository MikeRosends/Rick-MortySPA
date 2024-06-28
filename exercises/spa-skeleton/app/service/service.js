import { getCharID, pageNum } from "../controller/charController.js";

const URL = "https://rickandmortyapi.com/api/character";
const LIST_URL = "https://rickandmortyapi.com/api/character?page=1";

let currentPage = null;
let nextPage = null;
let prevPage = null;

export function hasNext() {
  return nextPage !== null;
}

export function hasPrevious() {
  return prevPage !== null;
}

export function getCurrentPageNumber() {
  console.log(pageNum);
  return pageNum;
}

export async function fetchCharacterListCurrentPage(name) {
  if (currentPage === null) {
    currentPage = LIST_URL;
  }
  return fetchCharacterList(currentPage, name);
}

export async function fetchCharacterListNextPage(name) {
  return fetchCharacterList(nextPage, name);
}

export async function fetchCharacterListPreviousPage(name) {
  return fetchCharacterList(prevPage, name);
}

// Fetches data.RESULTS
// fetchCharacterList(url = pageURL) - if no url is provided as param, pageURL is default
async function fetchCharacterList(url, name) {
  let nameSegment = "";
  if (name) {
    nameSegment = `name=${name}`;
  }
  try {
    const response = await fetch(`${url}&${nameSegment}`);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();

    nextPage = data.info.next;
    prevPage = data.info.prev;

    return data;
  } catch (error) {
    console.log("Error fetching characters:", error);
    return null;
    // Handle differently when needed
  }
}

export async function fetchCharDetails(characterID) {
  try {
    const response = await fetch(`${URL}/${characterID}`);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("Error fetching characters:", error);
    return [];
    // Handle differently when needed
  }
}

