const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
});


// function validarFormContato(){
//     let nome = formContato.name.value
//     let email = formContato.email.value
//     let mensgem = formContato.mensagem.value

//     if (nome === ''){
//         alert('O campo Nome é obrigatório')
//         formContato.nome.focus()
//         return false
//     }

//     if (email === ''){
//         alert('O campo E-mail é obrigatório')
//         formContato.email.focus()
//         return false
//     }
// }

document.querySelector("form").addEventListener("submit", event => {
    console.log('enviar formu')
})