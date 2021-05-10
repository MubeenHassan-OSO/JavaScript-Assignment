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
    const Calories_from_fat = total_fats * 9;
    const percentage = (Calories_from_fat / total_calories) * 100;

    if (percentage > 30 && percentage < 100) {
        console.log(`Total Number of Calories in food = ${total_calories}`);
        console.log(`Total Number of Fats in food = ${Calories_from_fat}`);
        console.log(`Total Percentage of Fats in Calories =  ${percentage}%`);
        console.log('The food is High in fat');
    } else if (percentage < 30) {
        console.log(`Total Number of Calories in food = ${total_calories}`);
        console.log(`Total Number of Fats in food = ${Calories_from_fat}`);
        console.log(`Total Percentage of Fats in Calories =  ${percentage}%`);
        console.log('The food is low in fat');
    } else if (Calories_from_fat >= total_calories) {
        console.log('The calories or fat grams were incorrectly entered');
    } else {
        console.log('Invalid Values');
    }

}