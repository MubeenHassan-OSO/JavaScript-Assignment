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
    const num = parseFloat(number);

    switch (num) {
        case 1:
            console.log(`${num} in Roman is = I`);
            break;
        case 2:
            console.log(`${num} in Roman is = II`);
            break;
        case 3:
            console.log(`${num} in Roman is = III`);
            break;
        case 4:
            console.log(`${num} in Roman is = IV`);
            break;
        case 5:
            console.log(`${num} in Roman is = V`);
            break;
        case 6:
            console.log(`${num} in Roman is = VI`);
            break;
        case 7:
            console.log(`${num} in Roman is = VII`);
            break;
        case 8:
            console.log(`${num} in Roman is = VIII`);
            break;
        case 9:
            console.log(`${num} in Roman is = IX`);
            break;
        case 10:
            console.log(`${num} in Roman is = X`);
            break;

        default:
            console.log(`Invalid Number`);
            break;
    }
}