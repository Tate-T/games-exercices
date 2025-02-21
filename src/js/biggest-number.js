const checkInput = document.querySelectorAll(".sug-num-text");
const bigNumRes = document.querySelector(".big-num-res");

const res = [];

for (let i = 0; i < checkInput.length; i++) {
  checkInput[i].addEventListener("blur", (event) => {
    const value = parseFloat(event.target.value);

    if (value > 0) {
      console.log("good num");
      res.push(value);
    }

    const maxNum = Math.max(...res)
    bigNumRes.textContent = maxNum
  });
}
