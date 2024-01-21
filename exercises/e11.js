import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  const planet = [];
  for (let i = 0; i < data.planets.length; i++) {
    if (!(data.planets[i].moons && data.planets[i].moonsCount > 10)) {
      planet.push(data.planets[i].name);
    }
  }
  return planet;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
