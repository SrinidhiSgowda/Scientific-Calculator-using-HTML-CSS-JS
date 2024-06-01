let str=""
let num1,num2,result,opt;
function handleNumber(num)
{

      str=str+num;
     document.getElementById("t1").value=str;

}

function handleOp(op)
{
  
    opt=op;
   num1=parseInt(str);   
   document.getElementById("t1").value="";
   str="";
   console.log(num1);
}

function cal()
{
    num2=parseInt(str);  
    
    if(opt=='+')
    {
        result=num1+num2;
    }
    else if(opt=='-')
    {
        result=num1-num2;


    }
    else if(opt=='/')
    {
        result=num1/num2;


    }
    else if(opt=='*')
    {
        result=num1*num2;


    }
    else if(opt=='%')
    {
        result=num1%num2;
    }

  document.getElementById("t1").value=result;
}
function squareRoot() {
    num1 = parseFloat(document.getElementById("t1").value);
    result = Math.sqrt(num1);
    document.getElementById("t1").value = result;
  }
  
  function cubeRoot() {
    num1 = parseFloat(document.getElementById("t1").value);
    result = Math.cbrt(num1);
    document.getElementById("t1").value = result;
  }
  
  function cube() {
    num1 = parseFloat(document.getElementById("t1").value);
    result = num1 * num1 * num1;
    document.getElementById("t1").value = result;
  }
  
  function square() {
    num1 = parseFloat(document.getElementById("t1").value);
    result = num1 * num1;
    document.getElementById("t1").value = result;
  }
function rem()
{
    document.getElementById("t1").value="";
    str="";
}

function handleSin() {

  console.log(Math.PI);
  const angle = parseFloat(document.getElementById("t1").value);
  const result = Math.sin(angle * Math.PI / 180); 
  document.getElementById("t1").value = result;
}

function handleCos() {
  const angle = parseFloat(document.getElementById("t1").value);
  const result = Math.cos(angle * Math.PI / 180);
  document.getElementById("t1").value = result;
}

function handleTan() {
  const angle = parseFloat(document.getElementById("t1").value);
  const result = Math.tan(angle);
  document.getElementById("t1").value = result;
}


function handleLengthConversion(conversionType) {
  const value = parseFloat(document.getElementById("t1").value);
  let result;

  switch (conversionType) {
    case 'inToCm':
      result = value * 2.54;
      break;
    case 'cmToIn':
      result = value / 2.54;
      break;
    case 'cmToMm':
      result = value * 10;
      break;
    case 'mmToCm':
      result = value / 10;
      break;
  }

  document.getElementById("t1").value = result;
}

function handleWeightConversion(conversionType) {
  const value = parseFloat(document.getElementById("t1").value);
  let result;

  switch (conversionType) {
    case 'kgToG':
      result = value * 1000;
      break;
    case 'kgToPounds':
      result = value * 2.20462;
      break;
      case 'poundsToKg':
        result=value*0.453;
        break;
        case 'kgToOz':
      result = value *35.2739619496 ;
      break;
    case 'ozToKg':
      result = value * 0.0283495;
      break;
    case 'gToKg':
      result = value / 1000;
      break;
    case 'kgToTonne':
      result = value / 1000;
      break;
    case 'tonneToKg':
      result = value * 1000;
          break;
    default:
      console.error("Invalid conversion type:", conversionType);
      return;
  }

  document.getElementById("t1").value = result;
}