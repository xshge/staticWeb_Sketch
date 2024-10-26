
let val = " ";
let choice = document.getElementById("dropDown");
const submit = document.querySelector("input[type='submit']");
document.addEventListener("DOMContentLoaded",function(){
    //console.log("hello world");
    console.log(val);
        choice.addEventListener("change", function(){
            val = choice.value; 
           
        })
        submit.addEventListener("click",function(event){
            event.preventDefault(); 
            if(val != " "){
                
              
                localStorage.setItem("selectedZodiacIndex", val);
                //console.log("submited");
                window.location.href = "result.html";
            }else{
                
            }
           
        })

})






