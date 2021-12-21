function palindrome(str) {
    let regex = /\W|_/g;
    let replacedString = str.replace(regex, "").toLowerCase().split('');
    let fhalf=[];
    let shalf=[];
    if(replacedString.length%2==0){
        fhalf=replacedString.slice(0,replacedString.length/2).join('')
        shalf=replacedString.slice(replacedString.length/2).reverse().join('')
    }
    else{
        fhalf=replacedString.slice(0,(replacedString.length/2)-0.5).join('')
        shalf=replacedString.slice((replacedString.length/2)+0.5).reverse().join('')
    }


    if(fhalf===shalf){
        return true;
    }
    else{
        return false;
    }

    //return replacedString;
    //return shalf;

  }
  
console.log(palindrome("_not a palindrome"));