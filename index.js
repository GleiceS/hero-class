class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      // Define o tipo de ataque com base no tipo de herói
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "um ataque desconhecido";
          break;
      }
      
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const heroi1 = new Heroi("Aragorn", 87, "guerreiro");
  heroi1.atacar(); // Saída: "O guerreiro atacou usando espada"
  
  const heroi2 = new Heroi("Gandalf", 150, "mago");
  heroi2.atacar(); // Saída: "O mago atacou usando magia"
  
  const heroi3 = new Heroi("Liu Kang", 35, "monge");
  heroi3.atacar(); // Saída: "O monge atacou usando artes marciais"
  
  const heroi4 = new Heroi("Naruto", 16, "ninja");
  heroi4.atacar(); // Saída: "O ninja atacou usando shuriken"
  