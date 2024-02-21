export async function loading() {
  const loadingContainer = $(".content");
  // TODO: Place Holder
  const loadingAnimation = $(`<h1 class="loading-animation">LOADING...</h1>`);

  loadingContainer.append(loadingAnimation);

  await new Promise((resolve) => setTimeout(resolve, 1000));
}
