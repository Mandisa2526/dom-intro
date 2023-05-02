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
var callsTextElem = document.querySelector(".callTotalOne");
var smsTextlElem = document.querySelector(".smsTotalOne");
var totalCostTextElem = document.querySelector(".totalOne");

var callsTextTotal = 0;
var smsTextTotal = 0;
function textBillTotal(){
    var billTypeEntered = billTypeTextElem.value.trim();
    if (billTypeEntered === "call" || billTypeEntered === "CALL"){
        callsTextTotal += 2.75
    }
    else if (billTypeEntered === "sms" || billTypeEntered === "SMS"){
        smsTextTotal += 0.75;
    }
    callsTextElem.innerHTML = callsTextTotal.toFixed(2);
    smsTextlElem.innerHTML = smsTextTotal.toFixed(2);
    var totalTextCost = callsTextTotal + smsTextTotal;
    totalCostTextElem.innerHTML = totalTextCost.toFixed(2);

    if (totalTextCost >= 50){
     
        totalCostTextElem.classList.add("danger");
    }
    else if (totalTextCost >= 30 && totalCost < 50){
        totalCostTextElem.classList.add("warning");
    }

}

textTotalAddBtnElem .addEventListener('click', textBillTotal);