var makeBounceDancer = function(top, left, timeBetweenSteps, danceStyle){
  makeDancer.call(this, top, left, timeBetweenSteps, danceStyle);
  //this.step();
};

makeBounceDancer.prototype = Object.create(makeDancer.prototype);
makeBounceDancer.prototype.constructor = makeBounceDancer;

makeBounceDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //this.step();
    
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    
  //this.blinkyDancer.$node.toggle();
  

  this.$node.toggleClass("bounce");
};