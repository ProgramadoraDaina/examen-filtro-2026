// =====================
// CONSTANTES DEL PERSONAJE
// =====================
const CHARACTER_NAME = "Zara Darkbane";
const CHARACTER_CLASS = "Hechicera";

const INITIAL_LEVEL = 7;
const INITIAL_HEALTH = 80;
const INITIAL_MANA = 120;

const BASE_ATTACK = 45;
const BASE_DEFENSE = 30;

// =====================
// ESTADO DEL PERSONAJE
// =====================
const characterLevel = INITIAL_LEVEL;
let currentHealth = INITIAL_HEALTH;
let currentMana = INITIAL_MANA;

const attackPower = BASE_ATTACK;
const defensePower = BASE_DEFENSE;

// =====================
// FUNCIONES
// =====================

// Función declarada
function calculateDamage(attackValue, defenseValue) {
  const damageResult = attackValue - defenseValue;
  return damageResult > 0 ? damageResult : 0;
}

// Arrow function
const isAlive = (healthValue) => {
  return healthValue > 0;
};

// Arrow function
const canCastSpell = (manaAvailable, spellManaCost, characterStunned) => {
  return manaAvailable >= spellManaCost && !characterStunned;
};

// Función declarada
function getPresentation(characterName, characterClass, levelValue) {
  return `${characterName} — ${characterClass} (Nivel ${levelValue})`;
}

// =====================
// RESULTADOS
// =====================
const enemyDefense = defensePower;
const SPELL_MANA_COST = 30;
const CHARACTER_STUNNED = false;

console.log(
  "Daño causado:",
  calculateDamage(attackPower, enemyDefense)
);

console.log(
  "¿El personaje sigue vivo?:",
  isAlive(currentHealth)
);

console.log(
  "¿Puede lanzar hechizo?:",
  canCastSpell(currentMana, SPELL_MANA_COST, CHARACTER_STUNNED)
);

console.log(
  "Presentación:",
  getPresentation(
    CHARACTER_NAME,
    CHARACTER_CLASS,
    characterLevel
  )
);