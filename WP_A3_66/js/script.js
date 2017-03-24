// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
             name = document.getElementById("mytext").value; 
              var attendance = (res.Attend_th + res.Attend_lab)*100/200;
              var message = 
               name + " " + "has"
              if (attendance<80) {
                message += "Defaulter";
              }
              else {
                message += " Attendance is" +attendance;
              }
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);