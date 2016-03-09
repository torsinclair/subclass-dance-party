// Wait for the DOM to load
$(document).ready(function() {
  window.dancers = [];

  // Create New Dancers
  $('.addDancerButton').on('click', function(event) {

    // Assign dancer-maker-function-name to the variable dancerMakerFunctionName
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // Assign the string dancerMakerFunctionName on the window object into the variable dancerMakerFunction
    // This looks for a function that matches the dancerMakerFunction
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    var dancer = new dancerMakerFunction(
      250,
      650,
      Math.random() * 1000, dancerMakerFunctionName
      );

    // Push the dancer onto the array
    window.dancers.push(dancer);

    // Add the dancer to the DOM
    $('body').append(dancer.$node);
  });


  // Line Up Dancers
  $('.lineUp').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-names');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    console.log('unwanted');
    dancerMakerFunction();

  });

});

var lineUp = function(){
      console.log('got here');
      for(var i = 0; i < window.dancers.length; i++){
        console.log(window.dancers[i]);
        window.dancers[i].setPosition(250, 250);
        //console.log(window.dancers[i]);
      }
};
