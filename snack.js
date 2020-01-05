class Snack {
  constructor(type){
    this.deliciousLevel = "extra";
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.healthy = this.checkIfHealthy();
  }
  getEaten() {
    this.amount -= 10;
    if (this.amount <= 20) {
      this.cuttingItClose = true;
    }
  }

checkIfHealthy() {
  var words = this.type.split(" ");
  return words.some(word => word === "Fruit")
}

}

module.exports = Snack;
