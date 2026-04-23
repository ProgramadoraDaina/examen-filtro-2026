// =====================
// VARIABLES DEL PERSONAJE
// =====================

const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;

let health = 80;
let mana = 120;

const attack = 45;
const defense = 30;

// =====================
// FUNCIONES
// =====================

// Función declarada
function calculateDamage(attack, defense) {
    const damage = attack - defense;
    return damage > 0 ? damage : 0;
}

// Arrow function
const isAlive = (health) => {
    return health > 0;
};

// Arrow function
const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};

// Función declarada
function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}

// =====================
// RESULTADOS
// =====================

const enemyDefense = defense;
const spellCost = 30;
const isStunned = false;

console.log("Daño causado:", calculateDamage(attack, enemyDefense));
console.log("¿El personaje sigue vivo?:", isAlive(health));
console.log(
    "¿Puede lanzar hechizo?:",
    canCastSpell(mana, spellCost, isStunned)
);
console.log("Presentación:", getPresentation(name, characterClass, level));
