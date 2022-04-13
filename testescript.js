function numbers(number2){

    let number1 = document.getElementById('result').innerHTML;

   document.getElementById('result').innerHTML = number1 + number2;
}

function resultFinal(){

    let addNumbers = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = eval(addNumbers);
}

function cleanAll(){

    let cleanNumbers = document.getElementById('result').innerHTML = '';
}

function removeNumber(){

    let removeJustOneNumber = document.getElementById('result').innerHTML;


    if(removeJustOneNumber){

        document.getElementById('result').innerHTML = 
        removeJustOneNumber.substring(0, removeJustOneNumber.length -1);
    }
}