let urlParameters = new URLSearchParams(window.location.search);
const headerText = document.querySelector("header .text");
const attendanceForm = document.querySelector(".attendance-form form");
const inputFirstName = attendanceForm.querySelector("input#first-name");
const inputlastName = attendanceForm.querySelector("input#last-name");

if (urlParameters.has("first-name")) {
  let firstName = capitalize(urlParameters.get("first-name").toLowerCase());
  let nameTag = document.createElement("p");
  nameTag.classList.add("welcome");
  nameTag.innerHTML = `Välkommen <span class="orange">${firstName}!</span>`;
  headerText.append(nameTag);
  inputFirstName.setAttribute("placeholder", firstName);
}

if (urlParameters.has("last-name")) {
  let lastName = capitalize(urlParameters.get("last-name").toLowerCase());
  inputlastName.setAttribute("placeholder", lastName);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
