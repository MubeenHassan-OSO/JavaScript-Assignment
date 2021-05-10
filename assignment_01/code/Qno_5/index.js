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
    const num3 = parseFloat(third_num);
    const total = num1 + num2 + num3;
    const avg = total / 3;
    if (avg) {
        console.log(`Sum of ${num1} + ${num2} + ${num3} = ${total} `);
        console.log(` Average of ${total} is = ${avg}`);
        if (avg >= 100) {
            console.log(`Congratulations! That's a perfect score!`);
        } else {
            console.log(`Better luck next Time`);
        }
    } else {
        console.log(`No Value Entered`);
    }

}