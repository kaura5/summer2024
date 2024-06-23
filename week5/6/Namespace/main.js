const MYAPP = {
  x: 5,
  apikey: "",
  init: function () {
    //starting code or adding events,
    MYAPP.addition();
  },
  addition: function () {
    console.log(MYAPP.x);
    YourAPP.addition();
  },
};

const YourAPP = {
  x: 8,
  addition: function () {
    console.log(YourAPP.x);
  },
};

document.addEventListener("DOMContentLoaded", MYAPP.init);
