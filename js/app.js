const username = document.querySelector(`#username`),
  km = document.querySelector(`#km`),
  age = document.querySelector(`#age`),
  button = document.querySelector(`#generate-ticket`),
  ticketPrice = document.querySelector(`.price`),
  travelerName = document.querySelector(`.traveler`);

const PRICE_FOR_KM = 0.21,
  DISCOUNT_UNDER_18 = 0.2,
  DISCOUNT_OVER_65 = 0.4;

const totalPrice = km.value * PRICE_FOR_KM;
let discount = 0;

button.addEventListener("click", function () {
  if (!isNaN(km.value)) {
    if (age.value === `minorenne`) {
      discount = totalPrice * DISCOUNT_UNDER_18;
    } else if (age.value === `over65`) {
      discount = totalPrice * DISCOUNT_OVER_65;
    }

    ticketPrice.innerHTML = `${
      Math.round((totalPrice - discount) * 100) / 100
    } €`;
  } else {
    alert(`I dati inseriti devono essere numeri`);
  }

  travelerName.innerHTML = username.value;
});
