import {
  fetchCharacterListCurrentPage,
  fetchCharacterListNextPage,
  fetchCharacterListPreviousPage,
  getCurrentPageNumber,
} from "/app/service/service.js";
import { renderCharacters } from "/app/view/characterListView.js";
import * as routing from "/app/routes.js";

let name = null;

export function setName(newName) {
  name = newName;
}

export function getName() {
  return name;
}

export function displayCharGrid() {
  fetchCharacterListCurrentPage(name)
    .then((data) => {
      renderCharacters(data.results, 4);
    })
    .catch((error) => {
      console.log("Error fetching characters:", error);
      // TODO: Handle Error differently
    });
}

export function getCharID(event) {
  // use data() to get ID
  const characterId = $(event.currentTarget).closest(".char").data("id");
  // console.log(characterId);
  return characterId;
}

export function imageClick(event) {
  window.location.hash = routing.character.hash + getCharID(event);
}

// Button Functionality
export async function nextButtonClick() {
  try {
    const data = await fetchCharacterListNextPage(name);
    renderCharacters(data.results, 4);
  } catch (error) {
    console.error("Error fetching next page:", error);
  }
}

export async function prevButtonClick() {
  try {
    const data = await fetchCharacterListPreviousPage(name);
    renderCharacters(data.results, 4);
  } catch (error) {
    console.error("Error fetching next page:", error);
  }
}

// TODO: make init call diferent function acording to the button pressed
export default function init() {
  displayCharGrid();
}

// Display page number
export async function pageNum() {
  try {
    return pageNum = getCurrentPageNumber();
  } catch (error) {
    console.error("Error getting page number:", error);
  }
}
