const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const loginSubmit = document.querySelector("#login-form input:nth-child(2)");
const greeting = document.querySelector("#greeting");
const hiddenItem = document.getElementById("hiddenItem");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(HIDDEN_CLASSNAME);
  loginSubmit.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  loginInput.classList.add(HIDDEN_CLASSNAME);
  loginSubmit.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
