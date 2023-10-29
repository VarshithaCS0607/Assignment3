const bill_t= document.querySelector("#bill_total");
const slider = document.querySelector("#tip");
const tip_percentage = document.querySelector("#tip_percentage");
const tip_amount = document.querySelector("#tip_amount");
const total_amount = document.querySelector("#total");

bill_t.addEventListener("change", calculateTip);
slider.addEventListener("input", calculateTip);

function calculateTip() {
    if (isNaN(bill_t.value)) {
        alert("You haven't entered number as an input, Enter number and retry!!")
    }
    bill_t.value = parseFloat(bill_t.value).toFixed(2);
    let bill = parseFloat(document.getElementById("bill_total").value);
    let tip = document.getElementById("tip").value;

    tip_percentage.value = tip;

    let total_tip = parseFloat(((tip * bill) / 100).toFixed(2));

    tip_amount.value = total_tip;

    total_amount.value = parseFloat(bill + total_tip).toFixed(2);
}

