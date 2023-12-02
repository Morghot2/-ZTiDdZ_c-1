//Przypisanie elementów UI do zmiennych
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

//Obsługa zdarzenia kliknięcia przycisku logowania
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  //Pobranie wartości wprowadzonych przez użytkownika
  const username = loginForm.username.value;
  const password = loginForm.password.value;
//Sprawdzenie czy wprowadzone dane są poprawne
  if (username === "" && password === "") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
