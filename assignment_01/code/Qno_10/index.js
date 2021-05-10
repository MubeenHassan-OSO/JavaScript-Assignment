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
    const date = user_date;
    const month = user_month;
    const year = user_year;

    if (month * date == year) {
        console.log(`${month} / ${date} / ${year}. This is a magical date`);
    } else {
        console.log(`${month} / ${date} / ${year}. This is not a magical date`);
    }
}