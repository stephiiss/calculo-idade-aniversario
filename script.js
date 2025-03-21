function calcularIdadeEAniversario() {
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    if (isNaN(dataNascimento)) {
        document.getElementById('resultado').innerText = "Por favor, insira uma data válida.";
        return;
    }
    
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const aniversarioEsteAno = new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate());
    
    if (hoje < aniversarioEsteAno) {
        idade--;
    }
    
    let proximoAniversario = new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate());
    if (hoje > proximoAniversario) {
        proximoAniversario.setFullYear(hoje.getFullYear() + 1);
    }
    
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const diaSemana = diasSemana[proximoAniversario.getDay()];
    
    document.getElementById('resultado').innerText = `Você tem ${idade} anos. Seu próximo aniversário cairá em uma ${diaSemana}.`;
}
