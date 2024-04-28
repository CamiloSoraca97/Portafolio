const nombre = document.getElementById ("nombre")
const email = document.getElementById ("email")
const asunto = document.getElementById ("asunto")
const mensagem = document.getElementById ("mensagem")
const form = document.getElementById ("form")
const parrafo= document.getElementById  ("warnings")



form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ 
    if(nombre.value.length <6 ){
    warnings +=`El nombre no es valido`
    entrar = true
    }
    
    if (asunto.value.length <10 ){
        warnings +=`\n El asunto no es valido `
        entrar = true
    }

       if (!regexEmail.test(email.value))   {
        warnings +=`\n El email no es valido `
        entrar = true
     }

     if  (entrar){
        alert (warnings);
     } 
     
     else {
        alert ("Su solicitud a sido enviada gracias")
        form.submit();
     }
})