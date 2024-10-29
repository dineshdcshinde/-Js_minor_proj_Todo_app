const form = document.querySelector("form");

let input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let unorder = document.querySelector("ul");

  unorder.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
});
