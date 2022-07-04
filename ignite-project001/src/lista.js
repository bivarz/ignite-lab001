// Primeiro desafio:
// Crie uma função com Javascript que filtre uma lista de items pelo tipo de filtragem que o usuário escolher:
// O usuário pode escolher entre, Titulo, Preço, Cor , Tamanho ou Ordem Alfabética.
// o retorno da função deve mostrar 1 ou mais itens.
// não é necessário nesse desafio mostrar no HTML, essa função será utilizada no desafio 2 (se estiver pronta)

const list = [
  {
    title: "Camisa Polo",
    Price: "30,00",
    color: ["branca", "preta", " amarela", "cinza"],
    size: ["PP", " P", " M", " G", "GX"],
  },
  {
    title: "Camisa Regata",
    Price: "35,00",
    color: ["branca", "preta", " amarela", "cinza", "vermelha"],
    size: ["PP", " P", " M", " G"],
  },
  {
    title: "Short",
    Price: "45,00",
    color: ["branca", "preta", " amarela", "cinza", "vermelha"],
    size: ["PP", " P", " M", " G", "GG"],
  },
  {
    title: "Mini Saia",
    Price: "95,00",
    color: ["branca", "preta", " amarela", "cinza", "vermelha"],
    size: ["PP", " P", " M", " G", "GG"],
  },
  {
    title: "Biquini",
    Price: "95,00",
    color: ["branca", "preta", " amarela", "cinza", "verde", "roxo"],
    size: ["PP", " P", " M", " G", "GG"],
  },
  {
    title: "Sunga",
    Price: "95,00",
    color: ["branca", "preta", " amarela", "cinza", "verde", "roxo"],
    size: ["PP", " P", " M", " G", "GG"],
  },
  {
    title: "Sandália Havaiana",
    Price: "25,00",
    color: ["branca", "preta", " amarela", "cinza", "vermelha", "rosa"],
    size: ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
  },
];
