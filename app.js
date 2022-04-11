


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromDollarToYen = function(valueinDollar){
    let valueinYen = valueinDollar * 106.58333
    ;
    return valueinYen;
}
const fromYenToPound = function(valueinYen){
    let valueinPound = valueinYen * 0.006254887

    ;
    return valueinPound;
}


module.exports = {  fromEuroToDollar, fromDollarToYen, fromYenToPound }