let pronoun = ['the', 'our'];
let adj = ['amazing', 'little'];
let noun = ['dog', 'guy'];

let nombresDominios = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
          let Formula = pronoun[i] + adj[j] + noun[k] + '.com';
          nombresDominios.push(Formula);
      }
  }
}

for (let f = 0; f < nombresDominios.length; f++) {
  console.log(nombresDominios[f]);
}
      
