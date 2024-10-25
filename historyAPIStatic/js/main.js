// window.history
// history

// history.back()
// history.forward()

// history.pushState(state, title, url)
// state: any data (object) {searchTerm : "userInput"}
// url: /home /recipes
// history.replaceState()

// to switch the content of the page
// popstate =>{

// }
// window.addEventListener("popstate", handlepopstate)

// handlepopstate (){
//     we will check the value of the state and depending on the value we can change the content on the page
// }

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("nav").addEventListener("click", handleNavigation);

  function handleNavigation(ev) {
    ev.preventDefault();

    let url = ev.target.closest(".nav-button").getAttribute("data-page");
    console.log(url);

    history.pushState({ url }, "", `#${url}`);

    loadPage(url);
  }
});

function loadPage(page) {
  document.querySelectorAll(".page").forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(page).style.display = "block";
}

// popstate

window.addEventListener("popstate", (ev) => {
  let url;
  console.log(ev.state);
  if (ev.state) {
    url = ev.state.url;
    // if(url==="on"){
    //     loadPage(url)
    // }else if(url==="two"){
    //     loadPage2(url)
    // }
  }
  loadPage(url);
});
