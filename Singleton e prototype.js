class GerenciadorAlunos {
  // Singleton
  constructor() {
    if (GerenciadorAlunos.instance == null) {
      GerenciadorAlunos.instance = this;
      this.alunos = [];
    }
    return GerenciadorAlunos.instance;
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  listar() {
    console.log("Lista do SIGA");
    this.alunos.forEach(a => console.log(`${a.nome} - ${a.curso}`));
  }
}

class Aluno {
  constructor(nome, idade, curso, periodo) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.periodo = periodo;
  }

  // Prototype
  clone() {
    return new Aluno(this.nome, this.idade, this.curso, this.periodo);
  }
}


const siga1 = new GerenciadorAlunos();
const siga2 = new GerenciadorAlunos();

console.log(`Unicidade do Singleton: ${siga1 === siga2}`);


const prototipo = new Aluno("Novo Aluno", 0, "dsm", "Manha");


const joao = prototipo.clone();
joao.nome = "João da Silva";
joao.idade = 20;

const maria = prototipo.clone();
maria.nome = "Maria da Silva";
maria.idade = 22;


siga1.adicionarAluno(joao);
siga1.adicionarAluno(maria);

siga2.listar();

console.log("\nIntegridade do Protótipo:");
console.log(prototipo);