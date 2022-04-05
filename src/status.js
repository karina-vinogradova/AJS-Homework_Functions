const characterHealth = {
  name: 'маг',
  health: 0,
};

export default function getLifeLevel(gameCharacterHealth) {
  if (gameCharacterHealth.health >= 50) {
    return 'healthy';
  }
  if (gameCharacterHealth.health < 50 && gameCharacterHealth.health >= 15) {
    return 'wounded';
  }
  if (gameCharacterHealth.health < 15 && gameCharacterHealth.health >= 0) {
    return 'critical';
  }
  return 'Game Over';
}

getLifeLevel(characterHealth);
