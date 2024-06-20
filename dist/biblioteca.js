"use strict";
class Biblioteca {
    constructor(livrosDisponiveisElement, emprestimosAtivosElement) {
        this.livrosDisponiveisElement = livrosDisponiveisElement;
        this.emprestimosAtivosElement = emprestimosAtivosElement;
        this.livros = [];
        this.alunos = [];
        this.emprestimos = [];
    }
    // --------- [Não mexer] Responsaveis por renderizar no html
    renderizarLivrosDisponiveis() {
        this.livrosDisponiveisElement.innerHTML = "";
        const disponiveis = this.livros.filter((livro) => livro.estaDisponivel);
        const selectLivro = document.getElementById("livro");
        selectLivro.innerHTML = "";
        disponiveis.forEach((livro) => {
            // Atualizar lista
            this.livrosDisponiveisElement.appendChild(livro.criarElementoHTML());
            // Preencher select
            const option = document.createElement("option");
            option.value = String(livro.id); // Define o valor da opção como o ID do livro
            option.textContent = livro.titulo; // Define o texto da opção como o título do livro
            selectLivro.appendChild(option);
        });
    }
    renderizarEmprestimosAtivos() {
        this.emprestimosAtivosElement.innerHTML = "";
        this.emprestimos.forEach((emprestimo) => {
            const li = document.createElement("li");
            li.textContent = `Livro: ${emprestimo.livro.titulo}, Usuário: ${emprestimo.aluno.nome}, Data de Devolução: ${emprestimo.dataDevolucao.toDateString()}`;
            this.emprestimosAtivosElement.appendChild(li);
        });
    }
    // --------- [Não mexer] Responsaveis por renderizar no html
    adicionarLivro(livro) {
        this.livros.push(livro);
        this.renderizarLivrosDisponiveis();
    }
    encontrarLivro(id) {
        const livroEncontrado = this.livros.find((livro) => livro.id === id);
        return livroEncontrado;
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    encontrarAluno(matricula) {
        return this.alunos.find((aluno) => aluno.matricula === matricula);
    }
    realizarEmprestimo(livro, aluno, senha) {
        if (!aluno.matricula) {
            alert("Matricula INEXISTENTE!");
            return false;
        }
        if (senha || senha == aluno.senha) {
            alert("Senha incorreta ou inexistente, da teus pulo.");
            return false;
        }
        if (!livro.estaDisponivel) {
            alert(`O livro ${livro.titulo} não está disponivel para emprestimo.`);
        }
        livro.emprestarLivro();
        const dataEmprestimo = new Date();
        const dataDevolucao = new Date();
        dataDevolucao.setDate(dataDevolucao.getDate() + 7);
        const emprestimo = {
            livro,
            aluno,
            dataEmprestimo,
            dataDevolucao,
        };
        this.emprestimos.push(emprestimo);
        this.renderizarEmprestimosAtivos();
        this.renderizarLivrosDisponiveis();
    }
}
