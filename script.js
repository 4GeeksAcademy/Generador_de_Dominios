let pronouns = ['the', 'our'];
let adjs = ['amazing', 'little'];
let nouns = ['dog', 'guy'];
let extensions = ['.com', '.net', '.io', '.es', '.us'];

let nombresDominios = [];

pronouns.forEach(pronoun =>{
    adjs.forEach(adj =>{
        nouns.forEach(noun =>{
            extensions.forEach(extension =>{
                let formula = pronoun + adj + noun + extension;
                nombresDominios.push(formula);
            });
        });
    });
});
console.log(nombresDominios);