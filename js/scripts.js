function Movie(movieName, timeOfDay, age) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

function calc(movieName, timeOfDay, age) {

  var finalPrice = 6;

  if (movieName === 'Patriots Day' || movieName === 'XXX' || movieName === 'Resident Evil' || movieName === 'Monster Trucks') {
    finalPrice += 3;
  } else {
    console.log('cheap1');
  }

  if (timeOfDay === "after 4pm") {
    finalPrice += 2;
  } else {
    console.log('cheap2');
  }

  if (age === "an adult"){
    finalPrice += 3;
  } else {
    console.log('cheap3');
  }

  return finalPrice;
};
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;

$(document).ready(function(){
  $('form#movie-price').submit(function(event){
    event.preventDefault();
    $('#result').text("");
    var movieName = $('#movie-name').val();
    var timeOfDay = $('#time-of-day').val();
    var age = $('#age').val();

    var newState = new Movie(movieName, timeOfDay, age);

    $('#result').append("<span>The price of " +
      newState.movieName +
      " " +
      newState.timeOfDay +
      " for " +
      newState.age +
      " is " +
      calc(newState.movieName, newState.timeOfDay, newState.age) +
      " dollars" +
     "</span>")
  });
});
