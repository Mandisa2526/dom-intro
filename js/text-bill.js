// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var billTypeTextElem = document.querySelector(".billTypeText");
var textTotalAddBtnElem = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
function textBillTotal(){
    var billTypeEntered = billTypeTextElem.value.trim();
    if (billTypeEntered === "call" || billTypeEntered === "CALL"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms" || billTypeEntered === "SMS"){
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

textTotalAddBtnElem .addEventListener('click', textBillTotal);