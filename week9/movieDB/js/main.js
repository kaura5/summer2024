import { API_KEY } from "./key.js";

function init() {
  loadData();
  //something
  window.addEventListener("popstate", handlePopState);
}

function loadData() {
  const BASE_URL = "https://api.themoviedb.org/3/trending/movie/";
  let time_window = "day"; //week

  fetch(`${BASE_URL}${time_window}?api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // let data1={data" ", url:""}
      history.pushState(data, "movies", "#trending_movies");
      displayData(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayData(data) {
  let trendingMovies = document.querySelector(".searchResults");
  trendingMovies.innerHTML = "";

  let df = new DocumentFragment();

  data.results.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let poster = document.createElement("img");
    let title = document.createElement("h2");

    title.textContent = item.title;
    poster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
    );
    poster.setAttribute("alt", `${item.title} poster`);

    card.setAttribute("data-id", item.id);
    card.append(poster, title);
    df.append(card);
  });

  trendingMovies.addEventListener("click", showDetails);
  trendingMovies.append(df);
}

function showDetails(ev) {
  console.log("details");
  console.log(ev.target.closest(".card"));
  console.log(ev.target.closest(".card").getAttribute("data-id"));
  let id = ev.target.closest(".card").getAttribute("data-id");

  if (id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        history.pushState(data, "cast", "#cast");
        displayCast(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please click on a card.");
  }
}
function displayCast(data) {
  let details = document.querySelector(".searchResults");
  details.innerHTML = "";
  let df = new DocumentFragment();

  data.cast.forEach((cast) => {
    let card = document.createElement("div");

    let cardInfo = `
        <img src="https://image.tmdb.org/t/p/w200/${cast.profile_path} alt ="poster of ${cast.name}">
        <p class="castName">Name: ${cast.name}</p>
        <p>Character Name: ${cast.character}</p>
        `;

    card.innerHTML = cardInfo;
    df.append(card);
  });
  details.append(df);
}

function handlePopState(ev) {
  console.log(document.location);
  console.log(ev);
  if (document.location.hash === "#cast") {
    displayCast(ev.state);
  } else if (document.location.hash === "#trending_movies") {
    displayData(ev.state);
  }
}

window.addEventListener("DOMContentLoaded", init);
