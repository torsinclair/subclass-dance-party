var makeScootDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.step();
};

makeScootDancer.prototype = Object.create(makeDancer.prototype);
makeScootDancer.prototype.constructor = makeBlinkyDancer;

makeScootDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.scoot.call(this);
  //this.step();
    
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    
  //this.blinkyDancer.$node.toggle();
  this.$node.toggle();
};