function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u"
    ) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
  var result = removeVowels('samuel');
  console.log(result)



/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/

var names1 =removeVowels('Irina');
console.log(names1)

var names2 =removeVowels('Etza');
console.log(names2)

var names3 =removeVowels('Daniel');
console.log(names3)

/* las funcion removeVowels separa las vocales con de las consonante de los strings */
