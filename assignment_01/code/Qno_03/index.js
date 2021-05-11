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
    const temp = Celsius_temp;
    if (temp) {
        const cel_to_Far = temp * 9 / 5 + 32;
        const output = `${temp}°C is ${cel_to_Far}°F.`;
        console.log(`Celsius Temperatures to Fahrenheit Temperatures: ${output}`);
    } else {
        console.log('No Value Entered');
    }
}