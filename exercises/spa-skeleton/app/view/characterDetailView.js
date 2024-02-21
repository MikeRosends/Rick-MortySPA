export async function renderDetails(character) {
  const detailsContainer = $('.content')
  const bannerContainer = $('<div class="header-section">');
  const banner = $('<h1 class="banner-text">Rick and Morty API</h1>')
  const charImgDiv = $('<div class="char-container">');
  const charImg = $(`<img class="char-image">`).attr("src", character.image);
  const statsContainer = $('<div class="char-text-details">');
  const details = $(`
    <h4 class="character-name">${character.name}</h4>
    <p class="details">${character.status}</p>
    <p class="details">${character.species}</p>
    <p class="details">${character.location.name}</p>
    `);
  const buttonContainer = $('<div class="button-div">');
  const backButton = $("<button>").text("Go Back").addClass("button");

  detailsContainer.append(bannerContainer);
  detailsContainer.append(banner);
  detailsContainer.append(buttonContainer);
  buttonContainer.append(backButton);
  detailsContainer.append(charImgDiv);
  charImgDiv.append(charImg, statsContainer);
  statsContainer.append(details);
}
