var fibo = (stopNumber) =>
    {
        if (!stopNumber)
        {
            stopNumber = 10;
        }
        if(stopNumber==1) 
            console.log(0);
        if(stopNumber==2) 
            console.log(1);
        var num1=0; 
        var num2=1; 
        var sum=0; 
        while (stopNumber>sum)   
        { 
            console.log(num1);
            console.log(num2);
            sum=num1+num2; 
            num1=num2; 
            num2=sum; 

        }   
    } 

var evenNumbers = (arrayOfArrays) =>
{
    let evenNumbersArrays = [];
    for (numArr of arrayOfArrays)
    {
        let arr = numArr.filter(number => number % 2 == 0);
        evenNumbersArrays.push(arr);
    }
    return evenNumbersArrays;
}
setInterval(fibo , 1000, 8);
arrayOfArrays = [[9,6,4], [3,2,1]];
console.log(evenNumbers(arrayOfArrays));