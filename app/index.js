import * as routes from "./routes.js";
import { loading } from "./view/loadingView.js";

function getCurrrentHash() {
  const windowHash = window.location.hash;
  return Object.values(routes).find(({ hash }) => windowHash.startsWith(hash));
}

function goToRoute() {
  let route = getCurrrentHash();

  if (!route) {
    route = routes.hello;
  }

  route.init();
}

async function route() {
  clearPreviousView();
  await loading()
  clearPreviousView(),
  goToRoute();
}

function clearPreviousView() {
  $(".content").empty();
}

window.addEventListener("hashchange", route);

route();
