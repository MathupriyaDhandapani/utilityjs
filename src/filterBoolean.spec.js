const filterBoolean =require('./filterBoolean');

describe('FilterBoolean',() => {

    it('Filter of [1,2,3], true is  [1,2,3]',() => {
        expect(filterBoolean([1,2,3],true)).toEqual([1,2,3])
    });

    it('Filter of [1,2,3],false is  []',() => {
        expect(filterBoolean([1,2,3],false)).toEqual('[]')
    });

    it('Filter of [], true is  []',() => {
        expect(filterBoolean([],true)).toEqual([])
    });

    it('Filter of [1,2,3], 1 is  [2,3]',() => {
        expect(filterBoolean([1,2,3],1)).toEqual([2,3])
    });

    it('Filter of [a,B,c,D], filterUpperCase is  [B,D]',() => {
        expect(filterBoolean(['a','B','c','D'],'filterUpperCase')).toEqual(['B','D'])
    });
    
    
    
})