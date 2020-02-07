var name = document.getElementById("inputName").value
var email = document.getElementById("inputEmail")
var phone = document.getElementById("inputPhone")
console.log(name, email, phone)
$("#submitbtn").on('click', function(){

    var newTableObj = {
        name: name,
        email: email,
        phone: phone
    }
    console.log(newTableObj);
return newTableObj;


})
