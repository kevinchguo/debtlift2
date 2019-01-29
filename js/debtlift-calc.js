//DebtLift calculation

//Formula: c = (r * p) / (1 - (Math.pow((1 + r), (-n ))))
// Math.pow is exponent, 1+r raised to -n power
// p float Amount borrowed
// r interest as percentage
// n term or period in years
// test: alert("In debtlift.js")

function calculateMortgage(p, r, n){
  //convert this percent to decimal
  r = percentToDecimal(r);

  //convert years to months
  n = yearsToMonths(n);

  var monthlyPmt = (r * p) / (1 - (Math.pow((1 + r), (-n))));
  return parseFloat(monthlyPmt.toFixed(2));
}

function percentToDecimal(percent) {
  return (percent/12)/100;
}

// this will post result to the html page
function yearsToMonths(year) {
  return year * 12;
}

function postPayments(payment) {
  var htmlEl = document.getElementById("outMonthly");

  htmlEl.innerText = "$" + payment;
}

var btn = document.getElementById('btnCalculate');
btn.onclick = function() {
  var loan = document.getElementById("inAmount").value;

  if (loan == "") {
    alert("Invalid loan amount");

  }

  if (loan < 0) {
    alert("Invalid loan amount");

  }

  var downPayment = document.getElementById("inDownP").value;
  var interest = document.getElementById("inAPR").value;
  var term = document.getElementById("inPeriod").value;
  var amountBorrowed = loan - downPayment;

  var monthlyPmt = calculateMortgage(amountBorrowed, interest, term);

  postPayments(monthlyPmt);
}
