// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
       // Call server to get the name
 name = document.getElementById("mytext").value;
 if(name == "A")
{
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
             
              var attendance = (res.Attend_th + res.Attend_lab)*100/200;
              var message = +name+; 
                  if (attendance<80) {
                message += "Defaulter";
              }
              else {
                message += " Attendance " +attendance;
              }
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
});
        }
else
{
  $ajaxUtils
          .sendGetRequest("data/name2.json", 
            function (res) {
             
              var attendance = (res.Attend_th + res.Attend_lab)*100/200;
              var message =  +name+;
               
              if (attendance<80) {
                message += "Defaulter";
              }
              else {
                message += " Attendance " +attendance;
              }
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
});
}
            
      });
  }
);
