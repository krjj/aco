var url = "http://18.191.185.122:3001/";
$(document).ready(function () {
    $('#btnSignIn').click(function () {
        
            const reqParam = {
                "email": $('#email').val(),
                "password":$('#pwd').val()
            }
            $.post( url + "signin", reqParam)
                .done(function( data,status ) {
                  //  alert( "Data Loaded: "+ JSON.stringify(data.data[0].COUNT) );
                    if(data.data[0].COUNT != 0){
                    $.post( url + "useractive", reqParam)
                        .done(function( data,status ) {
                  //  alert( "Data Loaded: "+ JSON.stringify(data.data[0].COUNT) );
                    if(data.data[0].COUNT != 0){
                        
                        window.location.href = '/index_5.html';
                    } else{
                        window.location.href = '/sign_up.html?Active='+ $('#email').val();    
                    }

            });
                        
                    } else{
                        alert("Wrong Email ID or Password.");    
                    }

            });
          /*  alert($('#email').val());
           alert($('#pwd').val());
            $.post(url + "signin",req, function (data, status) {
                alert("123",status);
                alert("d ",data);
                
                console.log("data", data);
                console.log("data -1--1-1-1", status);
                if(status === "success"){

                    //alert("1 ",data["COUNT"]);
                   // alert("2 ",data[0]("COUNT"));
                   alert("3 ",status);
                  //  alert("4 ",data.COUNT);
                   // alert("5 ",data[0].COUNT);
                    window.location.href = '/index_5.html';
                    //event.preventDefault(); 
                    //var url1 = $(this).data('target');
                    //location.replace(url1);
                    
                } else{
                    alert("Wrong Email ID or Password.");
                }
    
            }); */

            
      
    });
});
