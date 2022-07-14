let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/max-duzij-unsplash.jpg") {
    myImage.setAttribute("src", "images/roman-synkevych-unsplash.jpg");
  } else {
    myImage.setAttribute("src", "images/max-duzij-unsplash.jpg");
  }
};
