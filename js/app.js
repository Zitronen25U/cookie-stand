'use strict';

// SEE README FOR CREDIT

// var seattleList = document.getElementById('seattle');
// var tokyoList = document.getElementById('tokyo');
// var dubaiList = document.getElementById('dubai');
// var parisList = document.getElementById('paris');
// var limaList = document.getElementById('lima');
const newList = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   getRandomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCust = this.getRandomCust();
//       let hourlyTotal = Math.ceil(randomCust * this.avgCookies);
//       this.cookiesPerHourArray.push(hourlyTotal);
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} ${this.cookiesPerHourArray[i]} cookies`;
//       seattleList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleList.appendChild(li);
//   }
// };
// seattle.render();

// let tokyo = {
//   name: 'tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   getRandomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCust = this.getRandomCust();
//       let hourlyTotal = Math.ceil(randomCust * this.avgCookies);
//       this.cookiesPerHourArray.push(hourlyTotal);
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} ${this.cookiesPerHourArray[i]} cookies`;
//       tokyoList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     tokyoList.appendChild(li);
//   }
// };
// tokyo.render();

// let dubai = {
//   name: 'dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   getRandomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCust = this.getRandomCust();
//       let hourlyTotal = Math.ceil(randomCust * this.avgCookies);
//       this.cookiesPerHourArray.push(hourlyTotal);
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} ${this.cookiesPerHourArray[i]} cookies`;
//       dubaiList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiList.appendChild(li);
//   }
// };
// dubai.render();

// let paris = {
//   name: 'paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   getRandomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCust = this.getRandomCust();
//       let hourlyTotal = Math.ceil(randomCust * this.avgCookies);
//       this.cookiesPerHourArray.push(hourlyTotal);
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} ${this.cookiesPerHourArray[i]} cookies`;
//       parisList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisList.appendChild(li);
//   }
// };
// paris.render();

// let lima = {
//   name: 'Seattle',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookiesPerHourArray: [],
//   dailyTotal: 0,

//   getRandomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCust = this.getRandomCust();
//       let hourlyTotal = Math.ceil(randomCust * this.avgCookies);
//       this.cookiesPerHourArray.push(hourlyTotal);
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} ${this.cookiesPerHourArray[i]} cookies`;
//       limaList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaList.appendChild(li);
//   }
// };
// lima.render();

function NewCookieStand (name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesPerHourArray[] = cookiesPerHourArray[];
  this.dailyTotal = 0
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
    this.dailyTotal += this.hourlyTotal;
  }
};
NewCookieStand.prototype.render = function () {
  let tr = document.createElement('tr');
  NewCookieStand(tr);
  this.calcCookiesPerHour();
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    th.textContent = this.name;
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  tb.textContent = this.dailyTotal;
  tb.appendChild(td);
};

// Need to append each seperate value to different parts of the table (how looool)

let test = new NewCookieStand ('Duvall', 21, 65, 18);

test.render();
