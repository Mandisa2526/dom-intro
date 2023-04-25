// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var settingsBillAddBtnElem = document.querySelector(".billItemTypeWithSettingsBtn");
var callTotalElem = document.querySelector(".callTotalSettings");
var smsTotalElem = document.querySelector(".smsTotalSettings");
var totalElem = document.querySelector(".totalSettings");
var updateSettingsBtnElem = document.querySelector(".updateSettings");

var callsTotal = 0;
var smsTotal = 0;

var costPerSms = 0.75;
var costPerCall = 2.75;
var redTotalCost = 50;
var orangeTotalCost = 30;

function checkedSettingsBtn(){
    var checkedSettingBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingBtnElem){
        var billTypeEntered = checkedSettingBtnElem.value;
        if (billTypeEntered === "call"){
            callsTotal += costPerCall;
        }
        else if (billTypeEntered === "sms"){
            smsTotal += costPerSms;
        };
        
        callTotalElem.innerHTML = callsTotal.toFixed(2);
        smsTotalElem.innerHTML = smsTotal.toFixed(2);
        var totalCost = callsTotal + smsTotal;
        totalElem.innerHTML = totalCost.toFixed(2);
    
        if (totalCost >= redTotalCost){
            totalElem.classList.add("danger");
        }
        else if (totalCost >= orangeTotalCost && totalCost < redTotalCost){
            totalElem.classList.add("warning");
        }
    }
}

function updateSettingsBtn () {
    // var costPerSms = 0.75;
    // var costPerCall = 2.75;
    // var redTotalCost = 50;
    // var orangeTotalCost = 30;

}

updateSettingsBtnElem.addEventListener('click', updateSettingsBtn);
settingsBillAddBtnElem.addEventListener('click', checkedSettingsBtn);