function RadioBill(){
    //addcall
    //addsms
    //getsms
    //getcall
    //getTotalCost
    //return an object
    var radioSms = 0;
    var radioCall = 0;
    var radioTotalSms = 0;
    var radioTotalCall = 0;
    var totalRadioCost = 0;

    function makeCall(){
        radioCall += totalRadioCost;
    }
    function sendSms(){
        radioSms += totalRadioCost;
    }
    function addCall(){
        return radioTotalCall;
    }
    function addSms(){
        return radioTotalSms;
    }
    function smsAndCallTotal(){
        radioTotalSms += radioTotalCall; 
    }
    return {
      makeCall,
      sendSms,
      addCall,
      addSms,
      smsAndCallTotal
    }
}