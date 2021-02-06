'use strict';

// SEE README FOR CREDIT
const newList = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tbody = document.getElementById('tb');
let myForm = document.querySelector('form');
console.log(myForm);

function NewCookieStand (name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHourArray = [];
  this.dailyTotal = 0;
  newList.push(this);
}

NewCookieStand.prototype.getRandomCust = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};


NewCookieStand.prototype.calcCookiesPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    let randomCust = this.getRandomCust();
    let hourlyTotal = Math.ceil(randomCust * this.avgCookies);
    this.cookiesPerHourArray.push(hourlyTotal);
    // console.log(this.cookiesPerHourArray);
    this.dailyTotal += hourlyTotal;
  }
};


NewCookieStand.prototype.render = function () {
  this.calcCookiesPerHour();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHourArray[i];
    tr.appendChild(td);
    console.log(this.cookiesPerHourArray[i]);
  }

  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  tbody.appendChild(tr);
};

function header(){
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Hours';
  tr.appendChild(th);
  tbody.appendChild(tr);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
    console.log(hours[i]);
  }

  let td = document.createElement('td');
  td.textContent = 'Daily Total';
  tr.appendChild(td);
  tbody.appendChild(tr);

}


function handleSubmit(event){
  event.preventDefault();

  let name = event.target.storelocation.value;
  let minCust = +event.target.mincustomer.value;
  let maxCust = +event.target.maxcustomer.value;
  let avgCookies = +event.target.avgcookies.value;

  let formNewStand = new NewCookieStand(name, minCust, maxCust, avgCookies);
  formNewStand.render();
}


let seattle = new NewCookieStand ('Seattle', 23, 65, 6.3);
let tokyo = new NewCookieStand ('Tokyo', 3, 24, 1.2);
let dubai = new NewCookieStand ('Dubai', 11, 38, 3.7);
let paris = new NewCookieStand ('Paris', 20, 38, 2.3);
let lima = new NewCookieStand ('Lima', 2, 16, 4.6);

header();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
myForm.addEventListener('submit', handleSubmit);

