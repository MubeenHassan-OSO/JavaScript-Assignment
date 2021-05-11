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
    num = number.split('');

    console.log(`Entered Number =  ${num}`);
    if (parseFloat(num) == parseFloat(num.reverse())) {
        console.log(`Its a palindrome number`);
    } else {
        console.log(`Its not a palindrome number`);
    }
}