export async function notFound() {
  const loadingContainer = $(".container");
  // TODO: Place Holder
  const notFoundImage = $(`<h1 class="not-found">NOT FOUND</h1>`);

  loadingContainer.append(notFoundImage);
}
