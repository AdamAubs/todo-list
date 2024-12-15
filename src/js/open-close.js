// This code violates the Open/Closed principle because
// in order to add another type of question to the printQuiz
// function we have to update the printQuiz function. Instead
// printQuiz should not have to be updated when adding a different
// type of question. How do we fix this? Create separate classes for each
// type of question. Then when we

// CODE DOES NOT FOLLOW OPEN/CLOSED principle
// export const printQuiz = (questions) => {
//   questions.forEach((question) => {
//     console.log(question.description);
//     switch (question.type) {
//       case "boolean":
//         console.log("1. True");
//         console.log("2. False");
//         break;
//       case "multipleChoice":
//         question.options.forEach((option, index) => {
//           console.log(`${index + 1}. ${option}`);
//         });
//         break;
//       case "text":
//         console.log("Answer: ____________________");
//         break;
//       case "range":
//         console.log("Minimum: __________________");
//         console.log("Maximum: __________________");
//         break;
//     }
//     console.log("");
//   });
// };

// FIXED: CODE THAT DOES FOLLOW OPEN/CLOSED principle
export class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

export class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

export class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer: ______________");
  }
}

export class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Minimum: __________________ ");
    console.log("Maximum: __________________ ");
  }
}

export const printQuiz = (questions) => {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
};
