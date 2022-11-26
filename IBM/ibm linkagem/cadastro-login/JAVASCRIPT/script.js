function menuShow(){
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
Document.querySelector('.icon').src = "img/menu|_white_36dp.svg";
   }
   else
{
    menuMobile.classList.add('open');
    Document.querySelector('.icon').src = "img/close_white36dp.svg";
}
}





let Email = document.querySelector('#Email')
let labelEmail = document.querySelector('#labelEmail')


let Senha = document.querySelector('#Senha')
let labeleSenha = document.querySelector('#labelSenha')


let confirmSenha = document.querySelector('#confirmSenha')
let labeleconfirmSenha = document.querySelector('#labelconfirmSenha')


let Tel = document.querySelector('#Tel')
let labelTel = document.querySelector('#labelTel')


let Date = document.querySelector('#Date')
let labelDate = document.querySelector('#labelDate')


Email.addEventListener('keyup', () => {
if(Email.value.length <=15){
    labelEmail.setAttribute('style', 'color:red')
    labelEmail.innerHTML='<strong>Email *  Insira no minimo 15 letras</strong>'
    Email.setAttribute('style', 'border-color:red')
    
}
else{
    labelEmail.setAttribute('style', 'color:#3dff0c') 
    labelEmail.innerHTML='<strong>Email </strong>'
    Email.setAttribute('style', 'border-color:#3dff0c')
    
}
})

Senha.addEventListener('keyup', () => {
    if(Senha.value.length <=8){
        labeleSenha.setAttribute('style', 'color:red')
        labeleSenha.innerHTML='<strong>Senha *  Insira no minimo 8 letras ou Números</strong>'
        Senha.setAttribute('style', 'border-color:red')
       
    }
    else{
        labelSenha.setAttribute('style', 'color:#3dff0c') 
        labeleSenha.innerHTML='<strong>Senha </strong>'
        Senha.setAttribute('style', 'border-color:#3dff0c')
       
    }
    })

        confirmSenha.addEventListener('keyup', () => {
            if(Senha.value != confirmSenha.value){
                labelconfirmSenha.setAttribute('style', 'color:red')
                labelconfirmSenha.innerHTML='<strong>Consirme sua Senha * Senha não conferem</strong>'
                confirmSenha.setAttribute('style', 'border-color:red')
                
            }
            else{
                labelconfirmSenha.setAttribute('style', 'color:#3dff0c') 
                labelconfirmSenha.innerHTML='<strong>Confirme sua Senha </strong>'
                confirmSenha.setAttribute('style', 'border-color:#3dff0c')
                
            }
            })

            Tel.addEventListener('keyup', () => {
                if(Tel.value.length <=8 ) {
                    labelTel.setAttribute('style', 'color:red')
                    labelTel.innerHTML='<strong>Telefone *  Insira no minimo 9 Números</strong>'
                    Tel.setAttribute('style', 'border-color:red')
                    
                }
                else{
                    labelTel.setAttribute('style', 'color:#3dff0c') 
                    labelTel.innerHTML='<strong>Telefone </strong>'
                    Tel.setAttribute('style', 'border-color:#3dff0c')
                    
                }
                })

            Date.addEventListener('keyup', () => {
                if(Date.value.length ==00/00/0000){
                    labelDate.setAttribute('style', 'color:red')
                    Date.setAttribute('style', 'border-color:red')
                   
                }
                else{
                    labelDate.setAttribute('style', 'color:#3dff0c') 
                    labelDate.innerHTML='<strong></strong>'
                    Date.setAttribute('style', 'border-color:#3dff0c')
                    
                }
                })

            let btn = document.querySelector('.fa-eye')
            
            btn.addEventListener('click', ()=>{
                let inputSenha = document.querySelector('#Senha')
                
                if(inputSenha.getAttribute('type')== 'password'){
                    inputSenha.setAttribute('type', 'text')
                }else{
                inputSenha.setAttribute('type', 'password')
            }
        })
 



