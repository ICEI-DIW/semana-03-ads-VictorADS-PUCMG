const usuarios = [
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
    event.preventDefault(); // evita o recarregamento da página
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  
    if (usuario) {
      alert(`Bem-vindo, ${usuario.nome}!`);
      window.location.href = "index.html"; // Redireciona para a home
    } else {
      alert("Email ou senha incorretos!");
    }
  }
  