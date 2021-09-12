function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

/*
        final_amount = principal;
    rate /= 100;
    for ( i=0; i < years; i++ ) {
            final_amount *= rate;
    }*/
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    
    var result = document.getElementById("result").value;
    document.getElementById("result").innerText = 
    "If you deposit " + principal +
        "at an interest rate of " + "rate" + "%" +
        "You will receive an amount of " + interest +
        "in the year " + year;
}        
function update_rate()
{
    //  var rate_val_elem = document.getElementById("rate_val");
        var rateval = document.getElementById("rate").value;  
        document.getElementById("rate_val").innerText=rateval;
}