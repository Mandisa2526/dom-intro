function BillWithSettings(){
    var callsSettingsTotal = 0;
    var smsSettingsTotal = 0;

    var costPerSms = 0.75;
    var costPerCall = 2.75;
    var redTotalCost = 50;
    var orangeTotalCost = 30;
    var checkedSettingsTotalCost = 0;

    var theCallCost = 0;
    var theSmsCost = 0;
    var warningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        //theCallCost = callCost;
        if (checkedSettingBtnElem[callCost]){
            var billTypeEntered = checkedSettingBtnElem.value;
            if (billTypeEntered === "call" && checkedSettingsTotalCost < redTotalCost){
                callsSettingsTotal += costPerCall;
            }
        }
    }

    function getCallCost(){
       return theCallCost ;
    }
    function setSmsCost(smsCost){
        //theSmsCost = smsCost
        if (checkedSettingBtnElem[smsCost]){
            var billTypeEntered = checkedSettingBtnElem.value;
            if (billTypeEntered === "sms" && checkedSettingsTotalCost < redTotalCost){
              smsSettingsTotal += costPerSms;
           };
        }
    }
    function getSmsCost(){
        //return theSmsCost;
        
    }
    function setWarningLevel(warninglevel){
        warningLevel = warninglevel;
    }
    function getWarningLevel(){
        return warningLevel;
    }
    function setCriticalLevel(criticallevel){
        theCriticalLevel = criticallevel;
    }
    function getCriticalLevel(){
        return theCriticalLevel;
    }
    function makeCall(){
        if(!hasReachedCritical()){
            callCostTotal += theCallCost;
        }
        

    }
    function getTotalCost(){
         return callCostTotal + smsCostTotal;
    }
    function getTotalCallCost(){
        return callCostTotal;
    }
    function getTotalSmsCost(){
        return smsCostTotal;
    }
    function sendSms(){
        if(!hasReachedCritical()){
             smsCostTotal += theSmsCost;
        }
    }
    function hasReachedCritical(){
       return getTotalCost() >= getCriticalLevel();

    }

    function totalClassName(){
       if(hasReachedCritical()){
           return "critical";
       }
       if (getTotalCost() >= getWarningLevel()){
          return "warning";
       }
    }
    return{
        getCallCost,
        setCallCost,
        getSmsCost,
        setSmsCost, 
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        hasReachedCritical,
        totalClassName


        
    }      
}