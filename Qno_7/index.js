// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input:not(input[type=submit])");
    const refresh_values = () => {
        for (const input of inputs) {
            window[input.name] = input.value;
        }
    };

    document.getElementById("submit").onclick = () => {
        refresh_values();
        main();
    };
});


function main() {
    const num1 = parseFloat(first_num);
    const num2 = parseFloat(second_num);
    if (num1 > num2) {
        console.log(`${num1} is greater then ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is greater then ${num1}`);
    } else if (num2 == num1) {
        console.log(`${num2} is equal to ${num1}`);
    } else {
        console.log(`No Number Entered`);
    }

}