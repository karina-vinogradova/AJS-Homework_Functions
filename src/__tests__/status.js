import getLifeLevel from '../status';

test.each([
  [{ name: 'testName', health: 70 }, 'healthy'],
  [{ name: 'testName', health: 50 }, 'healthy'],
  [{ name: 'testName', health: 49 }, 'wounded'],
  [{ name: 'testName', health: 15 }, 'wounded'],
  [{ name: 'testName', health: 14 }, 'critical'],
  [{ name: 'testName', health: 0 }, 'critical'],
  [{ name: 'testName', health: -10 }, 'Game Over'],
])('chacked health level for %s level', (level, expected) => {
  const result = getLifeLevel(level);
  expect(result).toBe(expected);
});
