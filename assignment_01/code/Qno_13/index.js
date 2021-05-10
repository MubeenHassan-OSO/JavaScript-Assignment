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
    const days = num_of_seconds / 86400;
    const hours = num_of_seconds / 3600;
    const minutes = num_of_seconds / 60;
    if (num_of_seconds >= 86400) {
        console.log(`There are ${days} days in  ${num_of_seconds} seconds`);
    } else if (num_of_seconds >= 3600) {
        console.log(`There are ${hours} hours in  ${num_of_seconds} seconds`);
    } else if (num_of_seconds >= 60) {
        console.log(`There are ${minutes} minutes in  ${num_of_seconds} seconds`);
    } else {
        console.log(`First Enter Number of Seconds`);
    }
}