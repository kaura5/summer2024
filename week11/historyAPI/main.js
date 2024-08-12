document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("nav").addEventListener("click", handleNavigation);
  window.addEventListener("popstate", handlePopState);

  function handleNavigation(ev) {
    ev.preventDefault();

    let url = ev.target.closest(".nav-link").getAttribute("data-url");
    console.log(url);
    updateActiveButton(url);
    history.pushState(url, null, url);
    loadContent(url);
  }

  function loadContent(url) {
    document.querySelector("h2").innerHTML = url;
  }

  function handlePopState(ev) {
    console.log(ev.state);
    if (ev.state) {
      updateActiveButton(ev.state);
      loadContent(ev.state);
    }
  }

  function updateActiveButton(url) {
    document.querySelectorAll(".nav-link").forEach((button) => {
      button.classList.remove("active");
    });
    let activeButton = document.querySelector(`.nav-link[data-url="${url}"]`);
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }
});
