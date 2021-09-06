let testString = "ifailuhkqq";
let diccionary = {};
for(let i=0; i<testString.length; i++){

    let temporalString = "";
    //Aca vamos tomando letra a letra 
    if(testString[i] in diccionary){
        diccionary[testString[i]]++;
    }else{
        diccionary[testString[i]]=1;
    }
    if(i>0){
        let k = i;
        let j = i;
        let contador = 0;
        while(k>0){
            while(j>=contador){
                temporalString += testString[j];
                j--;
            }
            if(temporalString in diccionary){
                diccionary[temporalString]++;
            }else{
                diccionary[temporalString] = 1;
            }
            temporalString="";
            k--;
            contador++;
            j = i;
        }
    }
    //Verifico si el elemento testString[i] esta en dicc y tmb si temporalString esta en dicc
}   


function tiposYcantidadLetras (palabra){
    let diccionary = {};
    for(let i=0; i<palabra.length; i++){
        if(palabra[i] in diccionary){
            diccionary[palabra[i]]++;
        }else{
            diccionary[palabra[i]] = 1;
        }
    }
    return diccionary;
}
    
function consolearProperties (diccionary) {
    for (const property in diccionary) {
        console.log(`${property}`);
      }
}


function groupByLetterAmount (substringsObject) {
    let diccionary = {}
    for(const property in substringsObject){
        if(property.length in diccionary){
            //Si la propiedad es de una sola letra necesite captar su cantidad tmb
            if(property.length === 1){
                diccionary[property.length].push({letter: property, cantidad: substringsObject[property]});
            }else{
                diccionary[property.length].push(property.split('').sort().join(''));
            }
        }else{
            diccionary[property.length] = [];
            if(property.length === 1){
                diccionary[property.length].push({letter: property, cantidad: substringsObject[property]});
            }else{
                diccionary[property.length].push(property.split('').sort().join(''));
            }
        }
    }
    console.log(diccionary);
}

function orderLetters (word) {
    let 
}