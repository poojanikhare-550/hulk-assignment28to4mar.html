
    
</style>functon fizzBuzz(){
    var num =parseInt(prompt("Enter a number"));
    document.write("<br>"+ Entered Number by user is:"+num);
    if(isNaN(num)){
        alert("please enter a valid number");
    }
    else{
        for (var i=1;i<=num;i++){
            if(i%3==0 && i%5==0){
                document.write("<br>"+"FizzBuzz"+",");
            }
            else if (i%3==0){
                document.write("<br>"+"FoizzBuZZ"+",");
            }
            else if (i%5==0){
                document.write("<br>"+",");

            }
            else{
                document.write("<br>"+"Buzz"+",")
            }
            else{
                document.write("<br>"+i+",");

            }
        }