// add all your js here
var askButton = document.getElementById("askButton");
// var askButton refrences it to my html button
// change function picks a random between 0-19
function change()
{
  var theAnswer = Math.floor(19*Math.random());
  // change according to number picked
  if(theAnswer === 0)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/0.png";
    }
   if(theAnswer == 1)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/1.png";
    }
  if(theAnswer == 2)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/2.png";
    }
  if(theAnswer == 3)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/3.png";
    }
  if(theAnswer == 4)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/4.png";
    }
  if(theAnswer == 5)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/5.png";
    }
  if(theAnswer == 6)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/6.png";
    }
  if(theAnswer == 7)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/7.png";
    }
  if(theAnswer == 8)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/8.png";
    }
  if(theAnswer == 9)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/9.png";
    }
  if(theAnswer == 10)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/10.png";
   }
  if(theAnswer == 11)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/11.png";
   }
 if(theAnswer == 12)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/12.png";
   }
 if(theAnswer == 13)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/13.png";
   }
 if(theAnswer == 14)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/14.png";
   }
 if(theAnswer == 15)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/15.png";
   }
 if(theAnswer == 16)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/16.png";
   }
 if(theAnswer == 17)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/17.png";
   }
 if(theAnswer == 18)
   {
     document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/18.png";
   }
   if(theAnswer == 19)
    {
      document.getElementById("image").src = "http://planetoftheweb.com/i/8ball/19.png";
    }
    var theQuestion = document.getElementById('question').value;
    document.getElementById("previous").innerHTML = theQuestion;
}
function resetdoc()
{
  document.getElementById("question").value = "";
}

askButton.addEventListener("click", change);
askButton.addEventListener("click", resetdoc);

askButton.addEventListener("click", change);
askButton.addEventListener("click", resetdoc);
