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
    const number = parseFloat(marks);

    if (number >= 90) {
        console.log(`Congratulations! You got an A. You are the topper of this class`);
    } else if (number >= 80) {
        console.log(`Congratulations! You got a B. But you can do better`);
    } else if (number >= 70) {
        console.log(`You got a B-. You should work harder`);
    } else if (number >= 60) {
        console.log(`You got a C. You should work harder `);
    } else if (number >= 50) {
        console.log(`You got an D. You need to Study`);
    } else if (number < 50) {
        console.log(`You got an F. You failed in this Subject`);
    } else {
        console.log(`Invalid Number`);
    }

}