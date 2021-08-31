document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();
    console.log('Formulário enviado!');

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    }

    console.log(json);

    let stringJson = JSON.stringify(json);
    
    console.log(stringJson);
});