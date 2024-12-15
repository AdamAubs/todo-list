import logMessage from "./logger.js";

export class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max Calories exceeded");
    }
  }

  // This violates the single responsibility principle
  // By definition the single responsibility principle
  // states that a class, module, function should only have
  // one reason to change. If we needed to change
  // logCaloriesSurplus() this would effect how CalorieTracker
  // works. To fix this create a new module for
  // logCaloriesSurplus in logger.js file.
  //   logCalorieSurplus() {
  //     console.log("Max calories exceeded");
  //   }
}
