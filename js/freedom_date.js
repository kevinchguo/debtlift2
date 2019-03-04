// var start = new Date("March 17, 2012"),
//     end = new Date(),
//     diff = 0,
//     days = 1000 * 60 * 60 * 24; 
// // divide by the milliseconds, sec, min, hours to get days 

// diff = end - start;
// totalDays = Math.floor(diff / days);
// daysExpressedAsYears = totalDays / 365;
// console.log(totalDays + " days have passed since wedding.");

// console.log(daysExpressedAsYears + " yrs have passed");

// if(totalDays % 365 !== 0){
//   var remainder = totalDays % 365;
//   var yearsOnly = (totalDays - remainder) / 365;
// }


// console.log(yearsOnly + " years and " + remainder + " days have passed.");




// var remainder = totalDays % 365;
// var yearsOnly = (totalDays - remainder) / 365;
// console.log(yearsOnly + " year(s) and " + remainder + " days have passed."); 


var currentPaymtEle = document.getElementById('currentPaymt').value;
// var newPymtEle = document.getElementById('newPayment');


function GetDays(){
  var freeDt = new Date(document.getElementById("freedomDate").value);
  var startDt = new Date(document.getElementById("startDate").value);
  return parseInt((freeDt - startDt) / (1000 * 60 * 60 * 24));

}
GetDays();
console.log(GetDays());

function calculateDebtFreedomDate(p, r, n){
  
    var totalDays = GetDays();

    var daysDiv = document.getElementById("numdays2");
    daysDiv.innerHTML = totalDays
    var monthsDiv = document.getElementById("numMonths2");
    monthsDiv.innerHTML = totalDays / 30;
    var yearsDiv = document.getElementById("numYears2");
    yearsDiv.innerHTML = totalDays / 365;
    // var Years = document.getElementById("numYears2").value;
   

    //convert this interest rate percentage to decimal
    r = percentToDecimal(r);
  
    //convert years to months
    // n = yearsToMonths(n);
    n = n * 12;
  
    var monthlyPmt = (r * p) / (1 - (Math.pow((1 + r), (-n))));
    return parseFloat(monthlyPmt.toFixed(2));
}
  
function percentToDecimal(percent) {
  return (percent/12)/100;

}
  
  
  
  // postPayments will post result to the html page
function postPayments(payment) {
  var totalSpanEle = document.getElementById("outMonthly");
  totalSpanEle.innerText = "$" + payment;

  var diff = payment - currentPaymtEle;
  console.log(diff);
  if(currentPaymtEle > payment){
    var goodJobEle = document.getElementById('goodJob');
    goodJobEle.innerText = "Great job on your payments, keep it up!";
    
  }else if(diff > 0){
    var payMoreEle = document.getElementById('payMore');
    payMoreEle.innerText = 'You need to pay ' + diff + ' more per month if you want to make that date.';

    var gigOptionEle = document.getElementById('gigOptions');
    gigOptionEle.innerText = "That's " + diff / 5 + " hours of doing online surveys, " + diff / 10 + " hours of teaching English online, or " + diff / 9 + " hours of working at Burger King.";

  }
}

var loan = document.getElementById("inAmount").value;
  var downPayment = document.getElementById("inDownP").value;
  var interest = document.getElementById("inAPR").value;
  var amountBorrowed = loan - downPayment;
  console.log(amountBorrowed + "amountBorrowed")

  
var btn = document.getElementById('btnCalculate');
btn.onclick = function() {
  console.log(loan + "LOAN");

  var Years = GetDays() / 365;

  var term = Years;

    if (loan == "") {
      alert("Invalid loan amount");
  
    }
  
    if (loan < 0) {
      alert("Invalid loan amount");
  
    }

    if (downPayment >= loan) {
      alert("Downpayment should be smaller than loan");
  
    }

    if (currentPaymtEle >= loan) {
      alert("Current payment should be smaller than loan");
  
    }
  
    
  
    var monthlyPmt = calculateDebtFreedomDate(amountBorrowed, interest, term);
  
    
    postPayments(monthlyPmt);
  }

  

