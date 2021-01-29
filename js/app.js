'use strict';

console.log('hello world');

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,

  maximumCustomerEachHour: 65,

  avgerageCookiesSoldPerCustomer: 6.3,

  cookiesSoldPerHourArray: [],

  dailyStoreTotal: 0,

  randomCustomerPerHour: function(){
    // generates random number from my min and max values
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function(){
    let randomCustomerForOneHour =  this.randomCustomerPerHour();
    console.log(randomCustomerForOneHour);
    // multiply customer number by average customer
    // round up to the nearest number
    // push into the array cookoies sold per hour
  },
  render: function(){
    this.calcCookiesSoldEachHour();
  },
};

seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   minimumCustomerEachHour: 3,
//   maximumCustomerEachHour: 24,
//   avgerageCookiesSoldPerCustomer: 1.2,
// };

// let dubai = {
//   name: 'Dubai',
//   minimumCustomerEachHour: 11,
//   maximumCustomerEachHour: 38,
//   avgerageCookiesSoldPerCustomer: 3.7,
// };

// let paris = {
//   name: 'Paris',
//   minimumCustomerEachHour: 20,
//   maximumCustomerEachHour: 38,
//   avgerageCookiesSoldPerCustomer: 2.3,
// };

// let lima = {
//   name: 'Lima',
//   minimumCustomerEachHour: 2,
//   maximumCustomerEachHour: 16,
//   avgerageCookiesSoldPerCustomer: 4.6,
// };

