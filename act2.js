let characters = 'Hello World'.split('');

const vowels = ['a', 'e', 'i', 'o', 'u'];

characters = characters.filter((char) => {

    if(vowels.includes(char)){

        return characters;

    }

});

console.log(characters.length, characters);