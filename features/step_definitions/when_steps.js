const { When } = require('cucumber');

function isItFriday(today) {
  if (today === "Friday") {
    return "Yes"; 
  } else {
    return "Nope";
  }
}

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});
