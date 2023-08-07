const pronouns = ["the", "my", "your"];
const adjectives = ["big", "small", "tall"];
const nouns = ["house", "car", "dog"];

const combinations = [];

for (const pronoun of pronouns) {
  for (const adjective of adjectives) {
    for (const noun of nouns) {
      const combination = `${pronoun}${adjective}${noun}`;
      combinations.push(combination);
    }
  }
}

const urls = [];

for (const combination of combinations) {
  urls.push(`${combination}.com`);
  urls.push(`${combination}.net`);
  urls.push(`${combination}.es`);
}

console.log(urls);