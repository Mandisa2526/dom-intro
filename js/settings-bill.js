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

var callsSettingsTotal = 0;
var smsSettingsTotal = 0;

var costPerSms = 0.75;
var costPerCall = 2.75;
var redTotalCost = 50;
var orangeTotalCost = 30;
var checkedSettingsTotalCost = 0;

function checkedSettingsBtn(){
    var checkedSettingBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingBtnElem){
        var billTypeEntered = checkedSettingBtnElem.value;
        if (billTypeEntered === "call" && checkedSettingsTotalCost < redTotalCost){
            callsSettingsTotal += costPerCall;
        }
        else if (billTypeEntered === "sms" && checkedSettingsTotalCost < redTotalCost){
            smsSettingsTotal += costPerSms;
        };
        
        callTotalSettingsElem.innerHTML = callsSettingsTotal.toFixed(2);
        smsTotalSettingsElem.innerHTML = smsSettingsTotal.toFixed(2);
        checkedSettingsTotalCost = callsSettingsTotal + smsSettingsTotal;
        totalSettingsElem.innerHTML = checkedSettingsTotalCost.toFixed(2);
        totalSettingsElem.classList.remove("warning");
        totalSettingsElem.classList.remove("danger");
        if (checkedSettingsTotalCost >= redTotalCost){
            totalSettingsElem.classList.add("danger");
        }
        else if (checkedSettingsTotalCost >= orangeTotalCost && checkedSettingsTotalCost < redTotalCost){
            totalSettingsElem.classList.add("warning");
        }
    }
}

function updateSettingsBtn () {
    var callCostSettingElem = document.querySelector(".callCostSetting");
    var smsCostSettingElem = document.querySelector(".smsCostSetting");
    var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
    var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
    if (callCostSettingElem.value) {
        costPerCall = Number(callCostSettingElem.value);
    }
    if (smsCostSettingElem.value) {
        costPerSms = Number(smsCostSettingElem.value);
    }
    if (warningLevelSettingElem.value) {
        orangeTotalCost = Number(warningLevelSettingElem.value);
    }
    if (criticalLevelSettingElem.value) {
        redTotalCost = Number(criticalLevelSettingElem.value);
    }

}

updateSettingsBtnElem.addEventListener('click', updateSettingsBtn);
settingsBillAddBtnElem.addEventListener('click', checkedSettingsBtn);