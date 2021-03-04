const max = (ls) => {
    max_value = ls[0];
    for( i =1 ; i< ls.length ; i++)
    {
        if(max_value < ls[i])
        max_value=ls[i];
    }
    return max_value;
}
module.exports = max;