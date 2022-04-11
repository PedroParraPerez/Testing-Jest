


test("3.5 euros should be 4.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})


test("1.2 dollar should be 127.899996 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1.2)).toBe(127.899996);
})


test("127.9 yens should be 0.8000000473 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(127.9)).toBe(0.8000000473);
})