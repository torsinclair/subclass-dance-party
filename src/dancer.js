var makeDancer = function(top, left, timeBetweenSteps, danceStyle) {
  this.$node = $('<span class="dancer ' + danceStyle + '"></span>');
  this.timer = timeBetweenSteps;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(this.timer);
  this.setPosition.call(this, top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};




