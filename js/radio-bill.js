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
var callTotalRadioElem = document.querySelector(".callTotalTwo");
var smsTotalRadioElem = document.querySelector(".smsTotalTwo");
var totalRadioElem = document.querySelector(".totalTwo");

var callsRadioTotal = 0;
var smsRadioTotal = 0;
function checkedRadioBtn(){
    var checkedRadioBtnElem = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtnElem){
        var billRadioItemType = checkedRadioBtnElem.value
        var billTypeEnteredR = billRadioItemType;
        if (billTypeEnteredR === "call"){
            callsRadioTotal += 2.75
        }
        else if (billTypeEnteredR === "sms"){
            smsRadioTotal += 0.75;
        }
        callTotalRadioElem.innerHTML = callsRadioTotal.toFixed(2);
        smsTotalRadioElem.innerHTML = smsRadioTotal.toFixed(2);
        var totalCost = callsRadioTotal + smsRadioTotal;
        totalRadioElem.innerHTML = totalCost.toFixed(2);
    
        if (totalCost >= 50){
         
            totalRadioElem.classList.add("danger");
        }
        else if (totalCost >= 30 && totalCost < 50){
            totalRadioElem.classList.add("warning");
        }
       
    }
}

radioBillAddBtnElem.addEventListener('click', checkedRadioBtn);