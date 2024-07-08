function Enviar(){
    let name = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    let data = document.getElementById("data").value
    let email = document.getElementById("email").value

    let tecnologia = document.querySelector("input[name='gg']:checked").value

    alert('seu nome é: '+ name + '\n' +
    'seu Email é:' + email + '\n' +
    'sua data é: ' + data + '\n' + 
    'Sua Senha é: ' + senha + '\n' + 
    'Curso: ' + tecnologia)

    window.location.href = 'ti.html'
}

function Voltar(){

    window.location.href = 'fm.html'

}