const max=require('./max');

describe('Max',() => {

    it('Max of [1,2,3] is  3',() => {
        expect(max([1,2,3])).toEqual(3)
    });
    
})