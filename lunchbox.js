var Snack = require("./snack.js")

class LunchBox {
  constructor(lunchBoxObj) {
    this.owner = lunchBoxObj.owner;
    this.material = lunchBoxObj.madeOf;
    this.shape = lunchBoxObj.shape;
    this.color = lunchBoxObj.color;
    this.handle = true;
    this.snacks = [];
  }

  acquireSnack(snack) {
    snack.isInLunchBox = true;
    this.snacks.push(snack);
  }

findHealthySnacks() {
  var healthySnacks = this.snacks.filter(snack => {
    if (snack.healthy === true) {
      return snack
    } else {
      return
    }
  })
    return healthySnacks;
}

}

module.exports = LunchBox;
