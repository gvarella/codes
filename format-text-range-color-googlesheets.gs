function getArray(){

    var a_arr  = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var aa_arr = ["AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ"];  
    var ar_arr = a_arr.concat(aa_arr,ba_arr);

    return ar_arr;
  
}

function findCol(p_sname, p_sterm, p_line) {

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(p_sname); 
    var range = sheet.getDataRange(); 
    var width = range.getWidth();
    var ar_arr = getArray();

    for (var i = 1; i <= width; i++) {
        var data = range.getCell(p_line,i).getValue();
        if (data == p_sterm) {
           return(ar_arr[i]);
        }
    }
    return(-1);
}



function getIndex(p_letter) {
    
    var ar_arr = getArray();
    var indx = ar_arr.indexOf(p_letter);
    return indx;

}

function getLetter(p_index) {

    var ar_arr = getArray();
    var lett = ar_arr[p_index];
    return lett;

}
