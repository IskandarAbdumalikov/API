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
                <p>${element.username}</p>
                <h3 class="title">
                    ${element.name}
                </h3>
                <p class="email">
                <span>Email:</span> 
                <a  target="_blank" class="link" href="${element.email}">${
      element.email
    }</a> 
                </p>
                <p class="address"><span>Address:</span>           
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
                </p>
                <p class="phone"><span>Phone number:</span> 
                  <a  target="_blank" class = "link" href="tel: ${
                    element.phone
                  }"> ${element.phone}</a>          
                </p>
                <p><span>Website: </span>
                    <a target="_blank" class="link" href="${element.website}">${
      element.website
    }</a>
                </p>
                <p class = "company"><span>Company:</span> ${
                  element.company.name + " company"
                }</p> 
                </div>     
            </div>
        `;
  });

  cards.innerHTML = cardsTag;
}
