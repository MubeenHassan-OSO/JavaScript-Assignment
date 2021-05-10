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
    const name = customer_name
    const selected_package = package;
    const hours = no_0f_hours;


    if (selected_package === "A" || selected_package === "B" || selected_package === "C") {
        switch (selected_package) {
            case 'A':
                if (hours <= 10) {
                    const bill = 9.95;
                    console.log(`Thanks for Purchasing Our Package A Mr./Mrs. ${name}`);
                    console.log(`Your Bill for this Month is ${bill}$`);
                } else if (hours > 10) {
                    const additional_hours = hours - 10;
                    const new_bill = 9.95 + additional_hours * 2;
                    console.log(`Thanks for Purchasing Our Package A Mr./Mrs. ${name}`);
                    console.log(`Total Hours package Used is= ${hours} Hours`);
                    console.log(`Your Bill for this Month is ${new_bill}$`);
                }
                break;
            case 'B':
                if (hours <= 20) {
                    const bill_for_b = 14.95;
                    console.log(`Thanks for Purchasing Our Package A Mr./Mrs. ${name}`);
                    console.log(`Your Bill for this Month is ${bill_for_b}$`);
                } else if (hours > 20) {
                    const additional_hours_b = hours - 20;
                    const new_bill_for_b = 14.95 + additional_hours_b * 1;
                    console.log(`Thanks for Purchasing Our Package B Mr./Mrs. ${name}`);
                    console.log(`Total Hours package Used is= ${hours} Hours`);
                    console.log(`Your Bill for this Month is ${new_bill_for_b}$`);
                }
                break;
            case 'C':
                const bill_C = 19.95;
                console.log(`Thanks for Purchasing Our Package C Mr./Mrs. ${name}`);
                console.log(`Total Hours package Used is= ${hours} Hours`);
                console.log(`Your Bill for this Month is ${bill_C}$. because you Have Ultimate Access`);
                break;

            default:
                break;
        }
    } else {
        console.log('Invalid');
    }
}