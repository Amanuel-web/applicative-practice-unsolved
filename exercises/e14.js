import { data } from "../data/data";

// SPACE DATA EXERCISE 14
// Return the sum of orbital periods of all asteroids
// Return example: 234234.234

export function getOrbitalPeriodsSum(data) {
  // Your code goes here...
  let averageTemp = data.asteroids.reduce((sumTemp, asteroid) => {
    return sumTemp + asteroid.orbitalPeriod;
  }, 0);
  return averageTemp / data.asteroids.length;
}

// i think there is a problem with the average value in the assertion because i even checked it manually and i got the correct answer but the assertion value have other value so it
//giving me assertion error i dont know what to do so i just sumbited like this so you can check the assertion and my code. pls let me know if  the mistake is form my side

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
