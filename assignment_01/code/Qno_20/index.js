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
    const time = start_time;
    const minute = start_min
    const call_time = start_call_min;

    if (time > 0 && time < 7 && minute < 60) {
        const cost = call_time * 0.12;
        console.log(`Your Total cost is: $${cost}`);
        console.log(`You started call at ${time}:${minute} And the call lasted for ${call_time} Minutes`);
    } else if (time > 7 && time <= 19 && minute < 60) {
        const cost = call_time * 0.55;
        console.log(`Your Total cost is: $${cost}`);
        console.log(`You started call at ${time}:${minute} And the call lasted for ${call_time} Minutes`);
    } else if (time > 19 && time <= 23 && minute < 60) {
        const cost = call_time * 0.35;
        console.log(`Your Total cost is: $${cost}`);
        console.log(`You started call at ${time}:${minute} And the call lasted for ${call_time} Minutes`);
    } else {
        console.log("Invalid. Enter Correct Time");
    }

}