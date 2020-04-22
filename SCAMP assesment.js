// this is a function to calculate the fibonacci equation
function fibonacci(num){
    if (num <= 1) return 1;
    num = 50;
    return fibonacci(num - 1) + fibonacci(num - 2)
}
fibonacci();