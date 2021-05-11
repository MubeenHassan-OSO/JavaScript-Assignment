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
    const check_val = check_num;
    if (check_val) {
        if (check_val % 2 == 1) {
            console.log(`${check_val} is Odd`);
        } else {
            console.log(`${check_val} is Even`);
        }
    } else {
        console.log(`No Value Entered. Please Enter a Number first.`);
    }
}