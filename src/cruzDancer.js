var makeCruzDancer = function(top, left, timeBetweenSteps, danceStyle){
  makeDancer.call(this, top, left, timeBetweenSteps, danceStyle);
  //this.step();
};

makeCruzDancer.prototype = Object.create(makeDancer.prototype);
makeCruzDancer.prototype.constructor = makeCruzDancer;

makeCruzDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //this.step();
    
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    
  //this.blinkyDancer.$node.toggle();

  
  

  

  this.$node.toggleClass("bounce");
};

makeCruzDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top - 500,
    left: left - 500
  };

  this.$node.css(styleSettings);
};

