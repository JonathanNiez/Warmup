let words = "raceacar".split("");

let guessed = new Array(words.length).fill("_");

let lives = 5;

function guesseCharacter(character){

    if (words.includes(character)){
        character = guessed.map((data, i) => {
            if (guessed === guessed){
             
                return words;
            }
            return data;
        })
    }
    else{
        lives--;
    }
}

guesseCharacter("r");
guesseCharacter("e");
guesseCharacter("a");
guesseCharacter("b");
console.log(`${guessed}` , `${lives}`);
