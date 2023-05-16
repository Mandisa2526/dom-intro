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
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var updateSettingsBtnElem = document.querySelector(".updateSettings");

// var callsSettingsTotal = 0;
// var smsSettingsTotal = 0;

// var costPerSms = 0.75;
// var costPerCall = 2.75;
// var redTotalCost = 50;
// var orangeTotalCost = 30;
// var checkedSettingsTotalCost = 0;

//checkedSettingsBtn
var billSettings = BillWithSettings();
billSettings.setCallCost(2.75); //setting default setting
billSettings.setSmsCost(0.75);
billSettings.setCriticalLevel(50);
billSettings.setWarningLevel(30);

function BillWithSettingsBtn(){
    var checkedSettingBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingBtnElem){
        var billTypeEntered = checkedSettingBtnElem.value;
        if (billTypeEntered === "call"){
            billSettings.makeCall();
        }
        else if (billTypeEntered === "sms"){
            //smsSettingsTotal += costPerSms;
            billSettings.sendSms();
        };
        
        callTotalSettingsElem.innerHTML = billSettings.getTotalCallCost().toFixed(2);
        smsTotalSettingsElem.innerHTML = billSettings.getTotalSmsCost().toFixed(2);
        totalSettingsElem.innerHTML = billSettings.getTotalCost().toFixed(2);
        totalSettingsElem.classList.remove("warning");
        totalSettingsElem.classList.remove("danger");
        totalSettingsElem.classList.add(billSettings.totalClassName());
    }
}

settingsBillAddBtnElem.addEventListener('click', BillWithSettingsBtn);

function updateSettingsBtn () {
    var callCostSettingElem = document.querySelector(".callCostSetting");
    var smsCostSettingElem = document.querySelector(".smsCostSetting");
    var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
    var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
    if (callCostSettingElem.value) {
        billSettings.setCallCost( Number(callCostSettingElem.value))
    }
    if (smsCostSettingElem.value) {
       billSettings.setSmsCost(Number(smsCostSettingElem.value))
    }
    if (warningLevelSettingElem.value) {
        billSettings.setWarningLevel(Number(warningLevelSettingElem.value));
    }
    if (criticalLevelSettingElem.value) {
        billSettings.setCriticalLevel(Number(criticalLevelSettingElem.value));
    }

}

updateSettingsBtnElem.addEventListener('click', updateSettingsBtn);
