import { fetchCharDetails, hasNext, hasPrevious } from "../service/service.js";
import { renderDetails } from "../view/characterDetailView.js";
import * as routing from "/app/routes.js";

function goBackButton() {
  window.location.hash = routing.hello.hash;
}

export async function loadCharacter(characterId) {
  const character = await fetchCharDetails(characterId);
  await renderDetails(character);
}

export function hasNextPage() {
  return hasNext();
}

export function hasPreviousPage() {
  return hasPrevious();
}

export default async function init() {
  const characterId = window.location.hash.substring(
    routing.character.hash.length
  );
  await loadCharacter(characterId);
  $(".home-button").click(goBackButton);
}
