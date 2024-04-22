import { images } from "./dataImg.js";

const API_URL = "https://jsonplaceholder.typicode.com/users";

let cards = document.querySelector(".city__cards");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => mapData(res))
    .catch((err) => console.log(err));
}

fetchData(API_URL);

function mapData(data) {
  let cardsTag = "";
  data.forEach((element) => {
    cardsTag += `
            <div class="city__card">
                <div class="img">
                    <img src="${images[element.id - 1]}" alt="">
                </div>
                <div class="card__info info">
                <h3 class="title">
                    ${element.name}
                </h3>
                <h4 class="email">Email: 
                <a  target="_blank" class="link" href="${element.email}">${
      element.email
    }</a> 
                </h4>
                <h4 class="address">Address:           
                ${
                  element.address.city +
                  " city" +
                  " " +
                  element.address.street +
                  " street" +
                  " " +
                  element.address.suite +
                  " suite"
                }                 
                </h4>
                <h4 class="phone">Phone number: 
                  <a  target="_blank" class = "link" href="tel: ${
                    element.phone
                  }"> ${element.phone}</a>          
                </h4>
                <h4>Website: 
                    <a target="_blank" class="link" href="${element.website}">${
      element.website
    }</a>
                </h4>
                <h4>Company: ${element.company.name+" company"}</h4> 
                </div>     
            </div>
        `;
  });

  cards.innerHTML = cardsTag;
}
