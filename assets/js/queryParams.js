const urlParameters = new URLSearchParams(window.location.search);
const headerText = document.querySelector("header .text");
const attendanceForm = document.querySelector(".attendance-form form");
const inputFirstName = attendanceForm.querySelector("input#first-name");
const inputlastName = attendanceForm.querySelector("input#last-name");

export function firstNameActions() {
  if (urlParameters.has("first-name")) {
    const firstName = capitalize(urlParameters.get("first-name").toLowerCase());
    const nameTag = document.createElement("p");
    nameTag.classList.add("welcome");
    nameTag.innerHTML = `Välkommen <span class="orange">${firstName}!</span>`;
    headerText.append(nameTag);
    inputFirstName.setAttribute("placeholder", firstName);
  }
}

export function lastNameActions() {
  if (urlParameters.has("last-name")) {
    const lastName = capitalize(urlParameters.get("last-name").toLowerCase());
    inputlastName.setAttribute("placeholder", lastName);
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
