// Your code here

document.addEventListener("keydown", function (event) {
    console.log(event);
  });

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
      dodger.style.left = `${left - 1}px`;
    }
  });


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});



function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {  // 400px game area - 40px dodger
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });