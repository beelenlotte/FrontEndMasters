window.onload = function () {
  var displayNumberArray = [];
  var arrayOfNumbers = [];

  var displayNumber;
  
  var solutionOutcome = 0;
  var getal1 = 0;
  var getal2 = 0;
  var outcome = 0;
  var operationSign = "";
  var solution = document.querySelector(".solution-area");

  document.querySelectorAll(".number").forEach((e) =>
    e.addEventListener("click", function (event) {
      //numbers that are pressed will be pushed to displayNumberArray
      const pressedSingleNumber = event.target.innerText;
      displayNumberArray.push(pressedSingleNumber);
      arrayOfNumbers.push(pressedSingleNumber);
      //aray number stored as one 'number' in displayNumber as string
      displayNumber = displayNumberArray.join("");
      //number stored in black box calculator
      solution.innerText = displayNumber;
    })
  );

  document.querySelector(".clear-btn ").addEventListener("click", function () {
    //value set to 0, will show 0 in black box calculator
    solution.innerText = 0;
    // array gets emptied
    displayNumberArray = [];
    arrayOfNumbers = [];
    displayNumber = 0;
    solutionOutcome = 0;
    getal1 = NaN;
    getal2 = 0;
  });

  document.querySelectorAll(".operation").forEach((e) =>
    e.addEventListener("click", function (event) {
      operationSign = event.target.innerText;
      var arrayOfNumberNotstring = arrayOfNumbers.join("");

      //getal1 is leeg
      if (isNaN(getal1)) {
        getal1 = parseInt(arrayOfNumberNotstring);
        arrayOfNumbers = [];
      }
      //getal! is niet leeg
      if (!isNaN(getal1)) {
        getal2 = parseInt(arrayOfNumberNotstring);
        arrayOfNumbers = [];
      }
      //value of operation sign is sotred in 'operation sign'
      // the number before given before the operation sign was pressed, gets stored in outcome as Integer
      // operation sign is pushed to array and displayed in black box calculator
      displayNumberArray.push(operationSign);
      outcome = displayNumberArray.join("");
      solution.innerText = outcome;
    })
  );

  document.querySelector(".equal").addEventListener("click", function () {
    var arrayOfNumberNotstring = arrayOfNumbers.join("");

    if (isNaN(getal1)) {
      getal1 = parseInt(arrayOfNumberNotstring);
      arrayOfNumbers = [];
    }
    if (!isNaN(getal1)) {
      getal2 = parseInt(arrayOfNumberNotstring);
      arrayOfNumbers = [];
    }

    if (operationSign === "+") {
      solutionOutcome = getal1 + getal2;
    }
    if (operationSign === "-") {
      solutionOutcome = getal1 - getal2;
    }
    if (operationSign === "X") {
      solutionOutcome = getal1 * getal2;
    }
    if (operationSign === "÷") {
      solutionOutcome = getal1 / getal2;
    }
    getal1 = solutionOutcome;
    getal2 = 0;
    solution.innerText = solutionOutcome;
    displayNumberArray = [];
    displayNumberArray.push(solutionOutcome)
  });

  document.querySelector(".back-space").addEventListener("click", function () {
    displayNumberArray.pop();
    arrayOfNumbers.pop()
    outcome = displayNumberArray.join("");
    solution.innerText = outcome;
  })
};
