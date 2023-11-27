let newDisplay = document.getElementById("result");

let findTruth = document.getElementById("btnTruth");


let arrOfTruth = [true,true, false, true, false, false, true, true, false, false, true];

// function will only find booleans that is equivalent to true
function countTruthy(arrOfTruth) {
  let isTruth = 0;

  for (let x of arrOfTruth) {

    if (typeof x !== "boolean") {
      return "404 error";
    }

    if (x === true) {
      isTruth++;
    }

  }
  return isTruth;
}

function res () {

    let response = countTruthy(arrOfTruth);

    newDisplay.value = (typeof response === "number") ? response : "error 403";

}


findTruth.addEventListener("click",res);
