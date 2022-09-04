let dice = document.querySelector(".dice-color");

async function changeQuote() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let quote = await response.json();

  let newQuote = quote.slip.advice;
  let number = quote.slip.id;
  document.querySelector(
    ".advice-number"
  ).innerHTML = `<h1 class="advice-number">ADVICE #${number}</h1>`;
  document.querySelector(
    ".advice-text"
  ).innerHTML = `<p class="advice-text">"${newQuote}"</p>`;
}

dice.addEventListener("click", changeQuote);
