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
const modals_lnk = document.querySelector("#modals-lnk");
const lists_lnk = document.querySelector("#lists-lnk");
const navigation_lnk = document.querySelector("#navigation-lnk");
const grids_lnk = document.querySelector("#grids-lnk");
const ratings_lnk = document.querySelector("#ratings-lnk");

const show_modal_btn = document.querySelector("#show-modal-btn");
const close_modal_btn = document.querySelector("#close-modal-btn");
const modal_element = document.querySelector("#modal-element");

const ratingStars = [...document.getElementsByClassName("rating-star")];

const scrollTo = (event) => window.scrollTo({ top: document.querySelector(`#${event.currentTarget.id.split("-")[0]}-section`).offsetTop, behavior: 'smooth' });

const giveRating = (star) => {
    let starIndex = parseInt(star.currentTarget.id.split("-")[1]);
    ratingStars.forEach(star => parseInt(star.id.split("-")[1]) <= starIndex ? star.classList.add("checked") : star.classList.remove("checked"));
}

const showModal = () => modal_element.style.display = 'flex';
const hideModal = () => modal_element.style.display = 'none';


link_array = [top_btn, typography_lnk, avatar_lnk, alerts_lnk, badges_lnk, buttons_lnk, cards_lnk, image_lnk, forms_lnk, toasts_lnk, sliders_lnk, modals_lnk, lists_lnk, navigation_lnk, grids_lnk, ratings_lnk];
link_array.forEach(element => element.addEventListener("click", scrollTo));

show_modal_btn.addEventListener("click", showModal);
close_modal_btn.addEventListener("click", hideModal);

ratingStars.forEach(star => star.addEventListener("click", giveRating));