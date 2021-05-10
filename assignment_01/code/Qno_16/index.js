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
    const pie = 3.14;
    const area_of_circle = pie * (circle * circle);
    const area_of_rectangle = rectangle_Length * rectangle_Width;
    const area_of_triangle = triangle_length * triangle_height;

    console.log(`The Area of Circule is ${area_of_circle}`);
    console.log(`The Area of Rectangle is ${area_of_rectangle}`);
    console.log(`The Area of Triangle is ${area_of_triangle}`);

}