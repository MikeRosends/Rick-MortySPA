import {
  hasNextPage,
  hasPreviousPage,
} from "../controller/detailsController.js";
import {
  nextButtonClick,
  prevButtonClick,
  imageClick,
  setName,
  displayCharGrid,
  getName,
} from "../controller/charController.js";

export function renderCharacters(characters, numOfCols) {
  $(".content").empty();
  const content = $(".content");
  const bannerContainer = $('<div class="header-section">');
  const banner = $('<h1 class="banner-text">Rick and Morty API</h1>');
  const paginator = $(`<div class="paginator">`);
  const buttonNext = $('<button class="next-button"><i class="fa-solid fa-arrow-right"></i></button>');
  const buttonPrev = $('<button class="prev-button"><i class="fa-solid fa-arrow-left"></i></button>');

  const searchDiv = $(`<div class="search-div">`);
  const searchButton = $(
    '<button class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>'
  );
  const searchBar = $('<input class="search-bar" type="text">');
  searchBar.val(getName());
  searchDiv.append(searchBar);
  content.append(bannerContainer, banner, searchDiv, paginator);

  $(".search-button").on("click", function () {
    setName(searchBar.val());
    displayCharGrid();
  });

  if (hasPreviousPage()) {
    paginator.append(searchButton, buttonPrev);
    $(".prev-button").on("click", prevButtonClick);
  }

  if (hasNextPage()) {
    paginator.append(searchButton, buttonNext);
    $(".next-button").on("click", nextButtonClick);
  }

  const container = $(`<div class="container">`).appendTo(".content");

  let row = $(`<div class="row">`);
  for (let j = 0; j < characters.length; j++) {
    const character = characters[j];

    const col = $(`<div class="col-lg-3 col-sm-6">`);

    const char = $(`<div class="char" id="${character.name}">`);
    const img = $(`<img class="char-image">`).attr("src", character.image);

    img.on("load", () => {
      char.append(img);
      $(".char-image").on("click", imageClick);
      char.append($(`<p class="name">${character.name}</p>`));
    });
    col.append(char);
    col.append(char.attr("data-id", character.id)); // Add data-id attribute
    row.append(col);
    if ((j + 1) % numOfCols === 0) {
      container.append(row);
      row = $(`<div class="row">`);
    }
  }
}
