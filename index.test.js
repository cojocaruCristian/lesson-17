const sum = require('./index');

test ('adding 1+3 result 4', () =>{
    expect(sum(1,3)) .toBe(4);
} );

test('calling sum without params', () =>{
    expect(sum()).toBe('Both parameters should be present');
});

test('Calling sum with string',() =>{
    expect(sum('Hello','wold')).toBe('Parameters should be numbers');

});
