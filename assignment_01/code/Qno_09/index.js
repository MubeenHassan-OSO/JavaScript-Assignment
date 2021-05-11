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
    const rect_one_length = parseFloat(length_one);
    const rect_one_width = parseFloat(width_one);
    const rect_two_length = parseFloat(length_two);
    const rect_two_width = parseFloat(width_two);
    const areaof_rect_one = rect_one_length * rect_one_width;
    const areaof_rect_two = rect_two_length * rect_two_width;
    console.log(`Area of first rectangle is ${rect_one_length} * ${rect_one_width} = ${areaof_rect_one}`);
    console.log(`Area of second rectangle is ${rect_two_length} * ${rect_two_width} = ${areaof_rect_two}`);

    if (areaof_rect_one > areaof_rect_two) {
        console.log(`Area of first rectangle  ${areaof_rect_one} is greater then Area of second rectangle ${areaof_rect_two}`);
    } else if (areaof_rect_two > areaof_rect_one) {
        console.log(`Area of first rectangle  ${areaof_rect_two} is greater then Area of second rectangle ${areaof_rect_one}`);
    } else if (areaof_rect_one == areaof_rect_two) {
        console.log(`Area of first rectangle ${areaof_rect_two} is equal to Area of second rectangle ${areaof_rect_one}. Both Area's are same `);
    } else {
        console.log(`Enter Number Firstly`);
    }

}