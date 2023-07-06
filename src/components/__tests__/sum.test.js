// There is a general convention to name a file as name.test.js

import {sum} from '../sum';

test("Check the sum of two numbers" , ()=>{
    
    expect(sum(2,5)).toBe(7);
});