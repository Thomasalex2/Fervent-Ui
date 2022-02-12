// Linking the button elements
const top_btn = document.querySelector("#top-btn");
const typography_lnk = document.querySelector("#typography-lnk");
const avatar_lnk = document.querySelector("#avatar-lnk");
const alerts_lnk = document.querySelector("#alerts-lnk");
const badges_lnk = document.querySelector("#badges-lnk");
const buttons_lnk = document.querySelector("#buttons-lnk");
const cards_lnk = document.querySelector("#cards-lnk");
const image_lnk = document.querySelector("#images-lnk");
const forms_lnk = document.querySelector("#forms-lnk");
const toasts_lnk = document.querySelector("#toasts-lnk");
const sliders_lnk = document.querySelector("#sliders-lnk");
const ratings_lnk = document.querySelector("#ratings-lnk");

const scrollTo = (event) => window.scrollTo({ top: document.querySelector(`#${event.currentTarget.id.split("-")[0]}-section`).offsetTop, behavior: 'smooth' });

link_array = [top_btn, typography_lnk, avatar_lnk, alerts_lnk, badges_lnk, buttons_lnk, cards_lnk, image_lnk, forms_lnk, toasts_lnk, sliders_lnk, ratings_lnk];
link_array.forEach(element => element.addEventListener("click", scrollTo));