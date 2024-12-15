import { greet } from "./utils";
// Single responsibility
import { CalorieTracker } from "./single_responsibility";

// Open/Closed principle
import { BooleanQuestion } from "./open-close";
import { MultipleChoiceQuestion } from "./open-close";
import { printQuiz } from "./open-close";

// Liskov Substitution
import { Rectangle } from "./Liskov_substitution";
import { increaseRectangleWidth } from "./Liskov_substitution";

export const appLogic = () => {
  const message = greet("Webpack User");
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = `<h2>${message}</h2>`;
};

// Single responsibility
// const tracker = new CalorieTracker(2000);
// tracker.trackCalories(500);
// tracker.trackCalories(1700);

// Open/Closed principle
// Without using the Open/Closed principle
// the adding items may look like this
// const questions = [
//   {
//     type: "boolean",
//     description: "This video is useful",
//   },
//   {
//     type: "multipleChoice",
//     description: "What is your favorite language?",
//     options: ["css", "html", "JS", "Python"],
//   },
//   {
//     type: "text",
//     description: "Describe your favorite JS feature",
//   },
//   {
//     type: "range",
//     description: "WHat is the speed limit in your city?",
//   },
// ];

// Using the Open/Closed principle
// const questions = [
//   new BooleanQuestion("This video is useful"),
//   new MultipleChoiceQuestion("What is your favorite language?", [
//     "Russian",
//     "Spanish",
//     "English",
//   ]),
// ];

// printQuiz(questions);

// Liskov substitution
// const rectangle1 = new Rectangle(10, 2);
// const rectangle2 = new Rectangle(5, 5);

// increaseRectangleWidth(rectangle1);
// increaseRectangleWidth(rectangle2);

// console.log(rectangle1.area());
// console.log(rectangle2.area());
