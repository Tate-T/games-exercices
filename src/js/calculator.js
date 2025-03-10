document.addEventListener("DOMContentLoaded", function () {
    let num1 = document.querySelector(".calculator__input-1");
    let num2 = document.querySelector(".calculator__input-2");
    let result = document.querySelector(".calculator__input-3");
    let operator = null;
    function calculate() {
        let number1 = parseFloat(num1.value);
        let number2 = parseFloat(num2.value);
        if (isNaN(number1) || isNaN(number2)) {
            result.value = "";
            return;
        }
        switch (operator) {
            case "+":
                result.value = number1 + number2;
                break;
            case "-":
                result.value = number1 - number2;
                break;
            case "*":
                result.value = number1 * number2;
                break;
            case "/":
                result.value = number2 === 0 ? "На 0 не ділиться!" : number1 / number2;
                break;
            default:
                result.value = "Оберіть дію!";
        }
    }
    function setOperator(op) {
        operator = op;
    }
    function handleButtonClick(button) {
        document.querySelectorAll(".calculator__button").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
    }
    document.querySelector(".calculator__plus").addEventListener("click", (e) => {
        setOperator("+");
        handleButtonClick(e.target);
    });
    document.querySelector(".calculator__minus").addEventListener("click", (e) => {
        setOperator("-");
        handleButtonClick(e.target);
    });
    document.querySelector(".calculator__double").addEventListener("click", (e) => {
        setOperator("*");
        handleButtonClick(e.target);
    });
    document.querySelector(".calculator__dilenya").addEventListener("click", (e) => {
        setOperator("/");
        handleButtonClick(e.target);
    });
    document.querySelector(".calculator__dorivnue").addEventListener("click", (e) => {
        calculate();
        handleButtonClick(e.target);
    });
});