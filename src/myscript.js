function validate() 
{
    var username=document.getElementById("uname");
    var password=document.getElementById("password");
    

    if(username.value==""||password.value==""){
        alert("Blank values are not allowed");
        return false;
    }
    else if(password.value.length<8){
        alert("password should be minimum of 8 characters")
        return false;

    }
    else{
        alert("Logged in successfully!");
        return true;
    }
}
function valblog(){
    var text=document.getElementById("textarea");

    if(text.value == ""){
        alert("The text box must have minimun of 50 words");
        return false;
    }
    if (text.value.length<50){
        alert("The text box must have minimum of 50 words")

    }
    else{
        alert("your blog is posted successfully!");
        return true;
    }
}
function valbook(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var phoneno=document.getElementById("phoneno");
    var title=document.getElementById("title");
    var date=document.getElementById("date");
    var time=document.getElementById("time");
    var ticket=document.getElementById("no");
    var regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;
    var regName = /\d+$/g;

    if(name.value==""|| regName.test(name)){
        alert("Please enter your name.");
        name.focus();
        return false;
    }
    if(email.value==""|| regemail.test(email)){
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }
    if(ticket.value==""){
        alert("Please enter number of ticket you want to book.");
        ticket.focus();
        return false;
    }
    if(phoneno.value==""|| regPhone.test(phoneno)){
        alert("Please enter a valid phonenumber.");
        phoneno.focus();
        return false;
    }
    if(title.value==""){
        alert("Please choose title of movie.");
        title.focus();
        return false;
    }
    if(date.selectedIndex==-1){
        alert("Please choose date");
        date.focus();
        return false;
    }
    if(time.selectedIndex==-1){
        alert("Please choose time");
        date.focus();
        return false;
    }
    else{
        alert("You have booked a ticket");
        return true;
    }
}
function valcont(){
    var fname=document.getElementById("fname");
    var phoneno=document.getElementById("pno");
    var text=document.getElementById("message");
    var regPhone=/^\d{10}$/;
    var regName = /\d+$/g;

    if(fname.value==""||regName.test(fname)){
        alert("enter your name");
        fname.focus();
        return false;

    }
    if(phoneno.value==""||regPhone.test(phoneno)){
        alert("enter a valid phone number");
        phoneno.focus();
        return false;

    }
    if(text.value==""){
        alert("write a message");

        return false;

    }
    else{
        return(true);
    }

}
function valpay(){
    var file =document.getElementById("file");

    if(file.value==null|| file.value==""){
        alert("please attach you reciept!");
        return false;

    }
    else{
        return true;
    }
}
function valsign(){
    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var email=document.getElementById("email");
    var phoneno=document.getElementById("no");
    var pass=document.getElementById("pass");
    var cpass=document.getElementById("cpass");
    var regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;
    var regName = /\d+$/g;

    if(fname.value==""||regName.test(fname)){
        alert("Please enter your first name.");
        return false;
    }
    if(lname.value==""||regName.test(lname)){
        alert("Please enter your last name.");
        return false;

    }
    if(email.value==""||regemail.test(email)){
        alert("please enter a valid email address.");
        return false;
    }
    if(phoneno.value==""||regPhone.test(phoneno)){
        alert("please enter a valid phone number" );
        return false;
    }
    if(pass.value=""){
        alert("enter your password.");
        return false;
    }
    if(cpass.value==""){
        alert("Re-enter password.")
        return false;
    }
    if(pass.value!=cpass.value){
        document.getElementById("submit").disabled = true;
        $('.missmatch').html("Entered Password is not matching!! Try Again");
        alert("passwords donot match.")
        return false;
    }
    

    if(pass.value.length<8){
        alert("password should be minimum of 8 characters.");
        return false;
    }
    
    
    else{
        alert("registered successfully.")
        return(true)
    }
}
