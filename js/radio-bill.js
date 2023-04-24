// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
var calltotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

var callsTotal = 0;
var smsTotal = 0;
function textBillTotal(){
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        
    }
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
     
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30 && totalCost < 50){
        totalCostElem.classList.add("warning");
    }

}

radioBillAddBtnElem.addEventListener('click', textBillTotal);