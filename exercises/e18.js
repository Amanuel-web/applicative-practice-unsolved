/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const discoveryYears = data.asteroids.map(
    (asteroid) => asteroid.discoveryYear
  );
  const yearCount = {};

  discoveryYears.forEach((year) => {
    yearCount[year] = (yearCount[year] || 0) + 1;
  });

  let mostDiscoveriesYear = null;
  let maxDiscoveries = 0;

  for (const year in yearCount) {
    const numericYear = parseInt(year);
    if (yearCount[year] > maxDiscoveries) {
      maxDiscoveries = yearCount[year];
      mostDiscoveriesYear = numericYear;
    }
  }

  return mostDiscoveriesYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
