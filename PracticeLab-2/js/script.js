function Compute()
{
	 var A = parseInt(document.getElementById("A").value);
     var B = parseInt(document.getElementById("B").value);
     var Op = document.getElementById("Op").value;

     if(Op=='+')
     {
     	 var result = A+B;
     }
     if(Op == '-')
     {
     	var result = A-B;
     }
     if(Op == '*')
     { 
        var result = A*B;      
     }
     if(Op == '/')
     { 
        var result = A/B;      
     }
     var message = "<h1>The Result is " + result + "!</h1>";
     document.getElementById("content").innerHTML = message;

}