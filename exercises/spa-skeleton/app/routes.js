import charController from "./controller/charController.js";
import detailsController from "./controller/detailsController.js";

export const hello = {
  hash: "#hello",
  init: charController,
};

export const character = {
  hash: "#character",
  init: detailsController,
};

window.addEventListener("hashchange", getHash);

export function getHash() {
  const currentHash = window.location.hash.substring(1);
  // console.log("current hash: " + currentHash);
  return currentHash;
}
