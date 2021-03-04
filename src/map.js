const map = (ls,fun) => {
    if(fun === 'cube')
    return ls.map(cube);
    if(fun === 'identity')
    return ls;

    function cube(num){
    return num*num*num;
    }
 };
 module.exports = map;