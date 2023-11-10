const WORDSY = ["space", "baker", "games", "clone", "bread", "crane", "jeeps"];

const chooseWord = (WORDS) => {
  // choose random item from words array
  const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  return randomWord;
};

let count = {
  space: 0,
  baker: 0,
  games: 0,
  clone: 0,
  bread: 0,
  crane: 0,
  jeeps: 0,
};

for (let i = 0; i < 2000; i++) {
  let randomness = chooseWord(WORDSY);
  count[randomness]++;
}
console.log(count);
