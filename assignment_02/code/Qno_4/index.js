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
    console.log(`Here is the Entered Number ${number.split('')}`);
    console.log(`Now here is the Reverse ${array.reverse()}`);
}