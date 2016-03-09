var AppleDancer = function(top, left, timeBetweenSteps, danceStyle) {
  makeDancer.call(this, top, left, timeBetweenSteps, danceStyle);
};

AppleDancer.prototype = Object.create(makeDancer.prototype);
AppleDancer.prototype.constructor = BananaDancer;

AppleDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

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
  
};
