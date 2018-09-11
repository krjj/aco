

var url = "http://18.191.185.122:3001/";
$(document).ready(function () {
    var email = "";
   // alert(window.location);
    var str = String(window.location);
    if(str.includes("Active")){
        $("#dvSignUp").hide();
        $("#dvAcntVerif").show();
        $("#dvPwdRec").hide();
        var res = str.split("=");
        email = res[1];
    } else{
        $("#dvSignUp").show();
        $("#dvAcntVerif").hide();
        $("#dvPwdRec").hide();
    }
   
   
    if(email != ""){
        $("#dvSignUp").hide();
        $("#dvAcntVerif").show();
        $("#dvPwdRec").hide(); 
    }


    $('#btnSubmit').click(function () {
//function onclickSubmit(){


        function validateForm(){
            if ($('#firstName').val() == "") {alert('First Name is required.');$("input#firstName").focus();return false;}
    
            if ($('#lastName').val() == "") {alert('Last Name is required.');$("input#lastName").focus();return false;}
    
            if ($('#email').val() == "") {alert('Email address is required.');$("input#email").focus();return false;}
    
            if($('#chkCondn').prop('checked')==false){alert('Please agree terms of service');$("input#chkCondn").focus();return false;}
            if ($('#email').val().indexOf("@") < 1 || $('#email').val().indexOf(".") < 1) {alert('Please enter a valid email address.');$("input#email").focus();return false;}
    
            if($('#pwd').val() != "" && $('#pwd').val() == $('#cnfPwd').val()) {
                if($('#email').val().length < 6) {
                    alert("Error: Password must contain at least six characters!");
                    $("input#pwd").focus();
                    return false;
                }
                re = /[0-9]/;
                if(!re.test($('#pwd').val())) {
                    alert("Error: password must contain at least one number (0-9)!");
                    $("input#pwd").focus();
                    return false;
                }
                re = /[a-z]/;
                if(!re.test($('#pwd').val())) {
                    alert("Error: password must contain at least one lowercase letter (a-z)!");
                    $("input#pwd").focus();
                    return false;
                }
                re = /[A-Z]/;
                if(!re.test($('#pwd').val())) {
                    alert("Error: password must contain at least one uppercase letter (A-Z)!");
                    $("input#pwd").focus();
                    return false;
                }
                } else {
                alert("Error: Entered password is not matching with confirmed password!");
                $("input#pwd").focus();
                return false;
                }
               /*  if(chkEmail()){
                    alert("Email ID already exist.");return false;
                } else{
                    return true;
                } */
                return true;
        }
        function chkEmail(){

           
        }
       
        if(validateForm()){
            const reqParam = {
                "email": $('#email').val()
            }

            $.post( url + "user", reqParam)
                .done(function( data,status ) {
                   // alert("data " +JSON.stringify(data.data[0].COUNT));
                    if(data.data[0].COUNT != 0){
                        alert("Email ID already exist.")
                        //return false;                         
                     } else{   
                        var minNumber = 1111;
                        var maxNumber = 99999999;
            
                        var randomNumber = randomNumberFromRange(minNumber, maxNumber);
            
                        function randomNumberFromRange(min,max)
                        {
                            return Math.floor(Math.random()*(max-min+1)+min);
                        }
            
                        console.log(randomNumber);
                        const req = {
                            "First_Name": $('#firstName').val(),
                            "Last_Name": $('#lastName').val(),
                            "Email": $('#email').val(),
                            "Password": $('#pwd').val(),
                            "UID": "ACO" + randomNumber,
                            "Remarks": "",
                            "Is_Active": 0
                        }
                        console.log("rewyes", req)
                        $.post(url + "signup", req)
                         .done(function (data, status) {
                            
                            console.log("data", data);
                            console.log("data -1--1-1-1", status);
                            if(status === "success"){
                                email = $('#email').val();
                               // alert("Registraion successful.");
                                $("#dvSignUp").hide();
                                $("#dvAcntVerif").show();
                                $("#dvPwdRec").hide();
                            } else{
                                //alert("Registraion Failed.");
                            }
                
                        })
                     }

            });
            
        
        }
    
        
    });
    $('#btnAccountVerify').click(function () {
        if($('#txtPIN').val() === "1212"){
            const req = {
                "Email": email
            }
           // alert(email);
            $.post(url + "updateuser", req)
            .done(function (data, status) {
                
                console.log("data", data);
                console.log("data -1--1-1-1", status);
                if(status === "success"){
                   // alert("active");
                   window.location.href = '/index_5.html';
                    
                } else{
                    
                }
    
            })
            
            
        } else{
            $("#dvSignUp").hide();
            $("#dvAcntVerif").show();
            $("#dvPwdRec").hide();
            //alert("PIN is incorrect");
            
            $('#txtPIN').val("");
        }
    });
});
