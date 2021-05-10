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
    array = number.split('');
    firstdigit = array[0];
    lastdigit = array[array.length - 1];


    if (number.length > 2) {
        console.log(`First digit is : ${firstdigit}`);
        console.log(`Last digit is : ${lastdigit}`);
        if (firstdigit == lastdigit) {
            console.log("The First and Last digit of number are same");
        } else {
            console.log("The First and Last digit of number are NOT same");
        }

    } else {
        console.log("Wrong Number Entered. Enter Number should be greater then Two digits");
    }

}