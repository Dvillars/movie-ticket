function Movie(movieName, timeOfDay, age) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

function calc(movieName, timeOfDay, age) {
  var finalPrice = 6;
  if (movieName === 'pd' || movieName === 'xxx' || movieName === 're' || movieName === 'mt') {
    finalPrice += 3;
  } else {
    console.log('cheap1');
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
      " at " +
      newState.timeOfDay +
      " for a " +
      newState.age +
      " is " +
      calc(movieName, timeOfDay, age) +
     "</span>")
  });
});
