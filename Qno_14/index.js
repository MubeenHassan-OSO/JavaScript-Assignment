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
    const quantity = product_Quentity;
    const single_unit = 99;
    const total = quantity * single_unit;

    if (quantity <= 10) {
        const grand_total = total;
        console.log(`Total bill  = ${total}`);
        console.log("_______________________");
        console.log(`Grand Total = ${grand_total} `);
    } else if (quantity >= 10) {
        const discount = (20 / 100) * total;
        const grand_total = total - discount;
        console.log(`Total bill  = ${total}`);
        console.log(`Discount    = ${discount}`);
        console.log("_______________________");
        console.log(`Grand Total = ${grand_total} `);
    } else if (quantity >= 20) {
        const discount = (30 / 100) * total;
        const grand_total = total - discount;
        console.log(`Total bill  = ${total}`);
        console.log(`Discount    = ${discount}`);
        console.log("_______________________");
        console.log(`Grand Total = ${grand_total} `);
    } else if (quantity >= 50) {
        const discount = (40 / 100) * total;
        const grand_total = total - discount;
        console.log(`Total bill  = ${total}`);
        console.log(`Discount    = ${discount}`);
        console.log("_______________________");
        console.log(`Grand Total = ${grand_total} `);
    } else if (quantity >= 100) {
        const discount = (50 / 100) * total;
        const grand_total = total - discount;
        console.log(`Total bill  = ${total}`);
        console.log(`Discount    = ${discount}`);
        console.log("_______________________");
        console.log(`Grand Total = ${grand_total} `);
    } else {
        console.log('Invalid');
    }

}