let kelime1 = ["apolitik", "orman", "kış", "kol", "sandalye", "kürek"];
let kelime2 = ["politika", "roman", "pış", "defter", "masa", "ürkek"];

for (let i = 0; i < kelime1.length; i++){
    if (kelime1[i].length !== kelime2[i].length){
        console.log(`${kelime1[i]} ve ${kelime2[i]} uzunlukları eşit değil, anagram kontrolü yapılamaz.`);
        continue;
    }
}

let sortedWord1 = kelime1[i].split('').sort().join('');
let sortedWord2 = kelime2[i].split('').sort().join('');