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
    const dollor = converter;
    const yen = 109.21;
    const euro = 0.83;
    if (dollor) {
        const YEN_PER_DOLLAR = dollor * yen;
        const EUROS_PER_DOLLAR = dollor * euro;
        console.log(`Converting US Dollar to Japanese Yen: ${dollor}$ is =  ¥ ${YEN_PER_DOLLAR}`);
        console.log(`Converting US Dollar to Euro: ${dollor}$ is =  € ${EUROS_PER_DOLLAR}`);
    } else {
        console.log(`No Value Entered`);
    }
}