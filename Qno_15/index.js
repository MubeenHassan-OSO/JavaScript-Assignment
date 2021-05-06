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

    const quantity = no_of_checks;

    if (quantity < 20) {
        const fees = quantity * 0.10;
        console.log(`Total No of Checks of past Month = ${quantity}`);
        console.log(`The bank’s fees for the month = ${fees.toFixed(1)}$`);
    } else if (quantity >= 20) {
        const fees = quantity * 0.08;
        console.log(`Total No of Checks of past Month = ${quantity}`);
        console.log(`The bank’s fees for the month = ${fees}$`);
    } else if (quantity < 40) {
        const fees = quantity * 0.06;
        console.log(`Total No of Checks of past Month = ${quantity}`);
        console.log(`The bank’s fees for the month = ${fees}$`);
    } else if (quantity < 60) {
        const fees = quantity * 0.04;
        console.log(`Total No of Checks of past Month = ${quantity}`);
        console.log(`The bank’s fees for the Month = ${fees}$`);
    } else {
        console.log(`Enter Number of Checks.`);
    }
}