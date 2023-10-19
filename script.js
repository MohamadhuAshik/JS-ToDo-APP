
// index.html Form Validation

var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var mobile = document.getElementById("number");
var email = document.getElementById("email");
var nPass = document.getElementById("nPass");
var cPass = document.getElementById("cPass");
var error1 = document.getElementById("error1")
var error2 = document.getElementById("error2")
var error3 = document.getElementById("error3")
var error4 = document.getElementById("error4")
var error5 = document.getElementById("error5")
var error6 = document.getElementById("error6")
function validate() {
 // event.preventDefault()
  if (fName.value == "") {
    error1.textContent = "FirstName Is Required"
    return false;
  }


  if (lName.value == "") {
    error1.textContent = ""
    error2.textContent = "Last Name is Required"
    return false;
  }

  if (mobile.value == "") {
    error2.textContent = "";
    error3.textContent = "Enter Your Mobile Number"
    return false;
  }else if(mobile.value.length <= 9) {
        error3.textContent = "Plese Enter Valid Mobile Number"
        return false;
  }

  if (email.value == "") {
    error3.textContent = ""
    error4.textContent = "Enter Your Email.id"
    return false;
  }

  if (nPass.value == "") {
    error4.textContent = ""
    error5.textContent = "Enter Your New Passworld"
    return false;
  }else if(nPass.value.length<=7){
    error5.textContent = "Password Must Contain 8 Characters"
    return false
  }
  if (cPass.value == "") {
    error5.textContent = ""
    error6.textContent = "Plese Enter Your Password"
    return false;
  }else if(cPass.value !== nPass.value){
    error6.textContent = "Password Not Match "
     return false
  }
}

//login.html form validation

var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var error7 = document.getElementById("error7")
var error8 = document.getElementById("error8")
var input3 = document.getElementById("input3")
var error9 = document.getElementById("error9")

function Submitvalidate(){
  var cPass = document.getElementById("cPass");
  if(input1.value == ""){
    error7.textContent = "Enter Your UserName"
    return false;
  }
  if(input2.value=="" ){
    error7.textContent=""
    error8.textContent = "Enter your Password"
    return false;
  }else if(input2.value.length<=7){
    error8.textContent = "Password Must Contain 8 charactors"
    return false
  }
  if(input3.value == ""){
    error8.textContent=""
    error9.textContent = "Confirm your Password"
    return false
  }else if (input3.value !== input2.value){
    error9.textContent = "Password Not Match"
    return false
  }
}

//Todo List

var ol = document.getElementById("list")
var input=document.getElementById("input")
function add() {
    var listitem = document.createElement("li")
    listitem.innerHTML = input.value +" "+ "<button class='btn btn-success' onclick='del(event)'>Delete</button><br>"
    ol.append(listitem)
}
function del(event){
    event.target.parentElement.remove()
}