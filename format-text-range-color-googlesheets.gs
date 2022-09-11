function getArray(){

    var a_arr  = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var aa_arr = ["AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ"];  
    var ba_arr = ["BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ"]; 
    var ar_arr = a_arr.concat(aa_arr,ba_arr);

    return ar_arr;
  
}


function teste3(pline) {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sName = 'Sheet1';
  var sheet = ss.getSheetByName(sName);
  var line = pline;
  var arr  = getArray();
  var rangeA  = sheet.getRange(arr[0] + line + ':' + (arr.length-1) + line);
  var rangeB  = sheet.getRange(arr[0] + (line-1) + ':' + (arr.length-1) + (line-1));
  var valuesA = rangeA.getValues();
  var valuesB = rangeB.getValues();
  var valueA  = valuesA[0][0];
  var valueB  = valuesB[0][0];
  var range1  = sheet.getRange(arr[0] + line + ":" + arr[0] + line);
  var range2  = sheet.getRange(arr[0] + (line-1) + ":" + arr[0] + (line-1));
  var n = 0;
  var nColor = "black";

  for (var i = 0; i < arr.length-1; i++){

    n = i + 1;
    valueA = valuesA[0][i]; 
    valueB = valuesB[0][i];

    Logger.log('valueA >>> ' + valueA); 
    Logger.log('valueB >>> ' + valueB); 

    range1 = sheet.getRange((arr[n]) + line + ":" + (arr[n]) + line)
    range2 = sheet.getRange((arr[n]) + (line-1) + ":" + (arr[n]) + (line-1))
    

     if (!isNaN(parseFloat(valueA)) && isFinite(valueA)) {
       Logger.log('valueA is Number!'); 

          if(valueA == 0){
            nColor = 'grey';  
            range1.setFontColor(nColor);
          }else if(valueA >= valueB){
            nColor = 'green'; 
            range1.setFontColor(nColor); 
          }else{
            nColor = 'red'; 
            range1.setFontColor(nColor);
          }

     }else{
       Logger.log('Not a Number');
     }


  }
}


teste3(17);