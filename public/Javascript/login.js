const usuarios = [
  //Controle de login de usuario (exemplo)
    {
      id: 1,
      nome: "Victor",
      email: "victor@exemplo.com",
      senha: "123456"
    },
    {
      id: 2,
      nome: "Maria",
      email: "maria@exemplo.com",
      senha: "senha123"
    }
  ];



  function fazerLogin(event) {
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário
  
    // Captura os valores digitados nos campos de email e senha
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    // Procura um usuário no array 'usuarios' que tenha o mesmo email e senha
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  
    // Se encontrar um usuário válido (login correto)
    if (usuario) {
      alert(`Bem-vindo, ${usuario.nome}!`); // Exibe uma mensagem de boas-vindas com o nome do usuário
      window.location.href = "index.html";  // Redireciona o usuário para a página principal (home)
    } else {
      alert("Email ou senha incorretos!"); // Exibe um alerta de erro caso o login não seja válido
    }
  }
  
  //OBS: O login Não funciona de fato pois ainda não foi criado um redirecionamento nem utilidade para ele, porem essa e a base logica por tras dele (20/04)