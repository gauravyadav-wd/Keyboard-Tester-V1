const text = document.querySelector(".text");

document.addEventListener("keydown", (e) => {
  const active = document.querySelector(".active");
  active && active.classList.remove("active");

  // highlighting keys
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const key = e.key.toLowerCase();
    const el = document.querySelector(`.${key}`);
    el && el.classList.add("active");
  } else {
    const el = document.querySelector(`.${e.code}`);
    el && el.classList.add("active");
  }

  // Writing in div
  if ((e.keyCode >= 48 && e.keyCode <= 90) || e.keyCode === 32) {
    // Allowing numbers and characters to get printed
    text.innerHTML = text.innerHTML + e.key;
  } else if (e.keyCode >= 186 && e.keyCode <= 192) {
    // Allowing symbols to get printed
    text.innerHTML = text.innerHTML + e.key;
  } else if (e.keyCode >= 219 && e.keyCode <= 222) {
    // Allowing symbols to get printed
    text.innerHTML = text.innerHTML + e.key;
  } else if (e.keyCode === 27) {
    // Making Escape work for clear
    text.innerHTML = "";
  } else if (e.keyCode === 13) {
    // Making Enter work
    text.innerHTML = text.innerHTML + "<br>";
  } else if (e.keyCode === 8) {
    // Making backspace work
    text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
  }

  // Removing active class in a fraction of second after click
  setTimeout(() => {
    const active = document.querySelector(".active");
    active && active.classList.remove("active");
  }, 200);
});
