class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Eleitor extends Pessoa {
  constructor(nome, idade, titulo, zona, secao) {
    super(nome, idade);
    this.titulo = titulo;
    this.zona = zona;
    this.secao = secao;
    this.votou = false;
  }

  votar(candidato) {
    if (!this.votou) {
      candidato.receberVoto();
      this.votou = true;
    }
  }
}

class Candidato extends Pessoa {
  constructor(nome, idade, partido, numero, cargo) {
    super(nome, idade);
    this.partido = partido;
    this.numero = numero;
    this.cargo = cargo;
    this.votos = 0;
  }

  receberVoto() {
    this.votos++;
  }
}

class CandidatoPrefeito extends Candidato {
  constructor(nome, idade, partido, numero) {
    super(nome, idade, partido, numero, "Prefeito");
  }
}

class CandidatoVereador extends Candidato {
  constructor(nome, idade, partido, numero) {
    super(nome, idade, partido, numero, "Vereador");
  }
}

class CandidatoDeputado extends Candidato {
  constructor(nome, idade, partido, numero) {
    super(nome, idade, partido, numero, "Deputado");
  }
}

function apurarResultado(candidatos) {
  let maior = 0;
  let eleitos = [];

  for (let c of candidatos) {
    if (c.votos > maior) {
      maior = c.votos;
    }
  }

  for (let c of candidatos) {
    if (c.votos === maior) {
      eleitos.push(c);
    }
  }

  return eleitos;
}

const c1 = new CandidatoPrefeito("João", 50, "ABC", 10);
const c2 = new CandidatoPrefeito("Maria", 45, "XYZ", 20);

const e1 = new Eleitor("Carlos", 20, "123", 1, 1);
const e2 = new Eleitor("Ana", 22, "456", 1, 1);

e1.votar(c1);
e2.votar(c2);

const resultado = apurarResultado([c1, c2]);

for (let r of resultado) {
  console.log(r.nome, r.votos);
}