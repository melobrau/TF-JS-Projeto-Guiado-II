document.addEventListener("DOMContentLoaded", () => {
    const livrosDisponiveisElement = document.getElementById(
      "livrosDisponiveis"
    ) as HTMLUListElement;
    const emprestimosAtivosElement = document.getElementById(
      "emprestimosAtivos"
    ) as HTMLUListElement;
  
    const biblioteca = new Biblioteca(
      livrosDisponiveisElement,
      emprestimosAtivosElement
    );
  
    const livro1 = new Livro(1, "A Revolução dos Bichos", "George Orwell");
    const livro2 = new Livro(2, "O Senhor dos Anéis", "J.R.R. Tolkien");
    const livro3 = new Livro(3, "Harry Potter", "J.K. Rowling");
    const livro4 = new Livro(4, "1984", "George Orwell");
    const livro5 = new Livro(5, "Dom Quixote", "Miguel de Cervantes");
    const livro6 = new Livro(6, "Orgulho e Preconceito", "Jane Austen");
    const livro7 = new Livro(7, "Crime e Castigo", "Fyodor Dostoevsky");
    const livro8 = new Livro(8, "O Pequeno Príncipe", "Antoine de Saint-Exupéry");
    const livro9 = new Livro(9, "Cem Anos de Solidão", "Gabriel García Márquez");
  
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);
    biblioteca.adicionarLivro(livro4);
    biblioteca.adicionarLivro(livro5);
    biblioteca.adicionarLivro(livro6);
    biblioteca.adicionarLivro(livro7);
    biblioteca.adicionarLivro(livro8);
    biblioteca.adicionarLivro(livro9);
  
    const aluno1 = new Aluno("Lisandra", "lisandra@example.com", "A28", "123");
    const aluno2 = new Aluno("Maria", "maria@example.com", "A29", "123");
  
    biblioteca.adicionarAluno(aluno1);
    biblioteca.adicionarAluno(aluno2);
  
    const alugarLivroForm = document.getElementById(
      "alugarLivroForm"
    ) as HTMLFormElement;
  
    alugarLivroForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const idLivroSelecionado = parseInt(
        (document.getElementById("livro") as HTMLSelectElement).value
      );
      const matricula = (document.getElementById("matricula") as HTMLInputElement)
        .value;
      const senha = (document.getElementById("senha") as HTMLInputElement).value;
  
      const livro = (biblioteca.encontrarLivro(idLivroSelecionado) ||
        {}) as Livro;
      const aluno = (biblioteca.encontrarAluno(matricula) || {}) as Aluno;
  
      //biblioteca.realizarEmprestimo(livro, aluno, senha);
    });
  });
  