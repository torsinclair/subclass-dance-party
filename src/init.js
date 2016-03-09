$(document).ready(function() {
  
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(400,650,Math.random() * 1000, dancerMakerFunctionName);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('line-up-dancers');

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
      }
};
