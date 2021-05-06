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
    const mass = mass_of_obj;
    const weight = mass * 9.8;
    Math.round(weight * 10 / 10);
    console.log(`Total Weight of Object in Newtons = ${weight}`);
    if (weight >= 1000) {
        console.log(`The Object is too Heavy`);
    } else if (weight <= 10) {
        console.log(`The Object is too Light`);
    } else {
        console.log(`The Weight of Object is Normal`);
    }

}