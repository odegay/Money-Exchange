// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    //NB! I do understand that the code is not optimal, but it works. Assuming that I can refactor it if this will be required
    // Return an object containing the minimum number of coins needed to make change
    // H, Q, D, N, P.
    // 50¢, 25¢, 10¢, 5¢, 1¢
    var o = {};
    if (currency <= 0) return o;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};    
    
    H = Math.floor(currency / 50);    
    currency = currency - H*50;
    if (H>0)
        o.H = H;
    
    Q = Math.floor(currency / 25);    
    currency = currency - Q*25;
    if (Q>0)
        o.Q = Q;

    D = Math.floor(currency / 10);    
    currency = currency - D*10;
    if (D>0)
        o.D = D;

    N = Math.floor(currency / 5);    
    currency = currency - N*5;
    if (N>0)
        o.N = N;

    P = currency;
    if (P>0)
        o.P = P;

    return o;
}
