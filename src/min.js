const min = (ls) => {
    min_value = ls[0];
    for( i =1 ; i< ls.length ; i++)
    {
        if(min_value > ls[i])
        max_value=ls[i];
    }
    return min_value;
}
module.exports = min;