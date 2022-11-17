function validate()
{
    var un = document.getElementById('username').value
    var eml= document.getElementById('email').value
    var pswd= document.getElementById('password').value
    var cp= document.getElementById('cpassword').value
    
    checkusername(un)
    checkemail(eml)
    checkp(pswd)
    checkcp(pswd,cp)
} 
 function checkusername(un)
 {
    if(un.length>7){
         document.getElementById('username').classList.add('success')
         document.getElementById('username').classList.replace('error','success')         
         document.getElementById('username_error').innerHTML=''
         
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerHTML='username must be 8 letter long'
    }
 } 
 function checkemail(eml)
 {
    if(eml.length>10 && eml.includes('@gmail')){
         document.getElementById('email').classList.add('success')
         document.getElementById('email').classList.replace('error','success')         
         document.getElementById('e_error').innerHTML=''
         
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('e_error').innerHTML='Enter a valid email'
    }
 } 
 function checkp(pswd)
 {
    if(pswd.length>7 && pswd.includes('@')){
         document.getElementById('password').classList.add('success')
         document.getElementById('password').classList.replace('error','success')         
         document.getElementById('p_error').innerHTML=''
         
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('p_error').innerHTML='password must be 8 letter long and includes @'
    }
 } 
 function checkcp(pswd, cp)
 {
    if(pswd==cp && pswd!=''){
         document.getElementById('cpassword').classList.add('success')
         document.getElementById('cpassword').classList.replace('error','success')         
         document.getElementById('cp_error').innerHTML=''
         
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cp_error').innerHTML='password does not match'
    }
 } 