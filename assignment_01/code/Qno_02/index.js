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

    const type_of_number = check_num;
    if (type_of_number > 0 && type_of_number % 1 == 0) {
        console.log(`${type_of_number} is Positive Number`);
    } else if (type_of_number < 0) {
        console.log(`${type_of_number} is Negative Number`);
    } else if (type_of_number % 1 !== 0) {
        console.log(`${type_of_number} is Decimal Number`);
    } else {
        console.log(`No Value Entered`);
    }
}