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

let sum_of_rand_nums;

function todisplay() {
    const max = 50;
    const min = 10;
    const rand_num_1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const rand_num_2 = Math.floor(Math.random() * (max - min + 1)) + min;
    sum_of_rand_nums = rand_num_1 + rand_num_2;

    console.log(`  ${rand_num_1}`);
    console.log(`+ ${rand_num_2}`);
    console.log(`_______`);
    return sum_of_rand_nums;
}

function main() {
    if (total_sum == sum_of_rand_nums) {
        console.log(`Congratulations! Your Answer is Correct`);
    } else {
        console.log(`Worng Answer! The Correct Answer is = ${sum_of_rand_nums}`);
    }
}