function init() {
  fetch(`https://picsum.photos/200/300`)
    .then((res) => {
      if (!res.ok) throw new Error("Carmen is crazy");

      return res.blob();
    })
    .then((data) => {
      console.log(data);
      let urlImage = URL.createObjectURL(data);
      displayImage(urlImage);
    })
    .catch((err) => {
      console.error(err);
    });
}

function displayImage(urlImage) {
  let img = document.createElement("img");
  //<img src="urlImage" alt="" />"
  img.setAttribute("src", urlImage);
  img.setAttribute("alt", "");

  document.querySelector("main").append(img);
}

window.addEventListener("DOMContentLoaded", init);
