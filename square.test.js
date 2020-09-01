const { TestScheduler } = require("jest");

var square = require("./square")
test("Test Square of a number 2", ()=>{
    expect(square(2)).toBe(4)
});
test("Test Square of a number -2", ()=>{
    expect(square(-2)).toBe(4)
});      
test("Test Square of a number 0", ()=>{
    expect(square(0)).toBe(0)
});

test("Test Square of a number 10", ()=>{
    expect(square(10)).toBe(100)
});

test("Test Square of a number 0", ()=>{
    expect(square(90)).toBe(8100)
});