const {test, expect} = require("@jest/globals");
const add = require("./app");

test("add 5+10 which is 15",()=>{
    expect(add(5,10)).toBe(15);
});