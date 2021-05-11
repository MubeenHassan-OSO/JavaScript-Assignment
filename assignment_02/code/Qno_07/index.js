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
    arr_len = array.length;
    cube = 0;
    sum = 0;
    console.log(`Entered Number is = ${number}`);
    if (arr_len == 3) {
        for (let index = 0; index <= arr_len - 1; index++) {
            cube = array[index] * array[index] * array[index];
            console.log(`Cube of ${array[index]}^3 =  ${cube}`);
            sum = sum + cube;
        }
        console.log(`The Sum of all cubed numbers =  ${sum}`);
        if (sum == number) {
            console.log(`The Number is Armstrong Number`);
        } else {
            console.log(`The Number is not an Armstrong Number`);
        }
    } else {
        console.log('Wrond Value Entered. Please Enter 3 Digit Number.');
    }
}