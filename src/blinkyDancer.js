/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/

var makeBlinkyDancer = function(top, left, timeBetweenSteps, danceStyle) {
  makeDancer.call(this, top, left, timeBetweenSteps, danceStyle);
  //this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  
  makeDancer.prototype.step.call(this);

  //this.step(); jquery add class remove class css transitions
    
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    
  //this.blinkyDancer.$node.toggle();
  //console.log('hello');

  this.$node.toggleClass('rotate');
  
  var topSize = Number((this.$node.css('top').slice(0, this.$node.css('top').length -2)));
  var leftSize = Number((this.$node.css('left').slice(0, this.$node.css('left').length -2)));

  var multi = Math.random() * 10;

  if(topSize > 500){
    // nearing the edge of bottom
    multi = Math.random() * multi * -1;
    makeDancer.prototype.setPosition.call(this, topSize + multi, leftSize + 1);
  } else {
    multi = Math.random() * multi;
    makeDancer.prototype.setPosition.call(this, topSize + multi, leftSize - 10);
    
  }

  //console.log(this.$node.css('top'));
  
  //console.log(this.$node.css('left'));

  //console.log(this.$node.top);
  
  
};
