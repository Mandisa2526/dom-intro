function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var warningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
       return theCallCost ;
    }
    function setSmsCost(smsCost){
        theSmsCost = smsCost
    }
    function getSmsCost(){
        return theSmsCost;
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
           return "danger";
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