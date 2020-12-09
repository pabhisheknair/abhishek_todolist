var user = document.getElementById("user");
var pass = document.getElementById("pass");

function valid()
{
    if(user.value=="admin" && pass.value=="12345")
    {
        return true;
    }
    else
    {
        alert("incorrect username or password");
        return false;
    }
}



   
  $(document).ready(function(){
      $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data)
      {
      var output="";
      
      $.each(data,function(key,value) 
      {
         output +='<tr>';
         output +='<td>' + value.id + '</td>';
         output +='<td>' + value.title + '</td>';
         if(value.completed==false)
         {
            output +='<td><input id="hello" type="checkbox" onchange="done()">completed</td>';
         }
         if(value.completed==true)
         {
            output +='<td><input type="checkbox"checked disabled>completed</td>';
         }
         output +='</tr>';
      });
      $('#output_tab').append(output);
    });
  });


  function done()
  {
    var check=$('input:checkbox:checked').length;
    var values=check-90;
    if (values==5)
    {
        alert("Congrats.you have succesfully completed  5  tasks");
    }
  }
