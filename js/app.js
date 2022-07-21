const username = document.querySelector(`#username`),
  km = document.querySelector(`#km`),
  age = document.querySelector(`#age`),
  button = document.querySelector(`#generate-ticket`),
  ticketPrice = document.querySelector(`.price`);

const totalPrice = km.value * 0.21;
const discountUnder18 = totalPrice * 0.2;
const discountOver65 = totalPrice * 0.4;

button.addEventListener("click", function () {
  if (age.value < 18) {
    const discountedTicket = totalPrice - discountUnder18;
    ticketPrice.innerHTML = `${Math.round(discountedTicket * 100) / 100} €`;
  } else if (age.value > 65) {
    const discountedTicket = totalPrice - discountOver65;
    ticketPrice.innerHTML = `${Math.round(discountedTicket * 100) / 100} €`;
  } else {
    ticketPrice.innerHTML = `${Math.round(totalPrice * 100) / 100} €`;
  }
});
