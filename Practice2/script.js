// ПЕРСОНАЖ
const player = {
    name: "Герой",
    hp: 100,
    maxHp: 100,
    attack: 12,
    defense: 5,
    level: 1,
    exp: 0,
    inventory: ["Зелье здоровья", "Малый меч"],
    gainExp(amount) {
        this.exp += amount;
        addLog(`Вы получили ${amount} опыта.`);
        if(this.exp >= this.level * 30) this.levelUp();
        updateStats();
    },
    levelUp() {
        this.level++;
        this.maxHp += 25;
        this.hp = this.maxHp;
        this.attack += 5;
        this.defense += 3;
        addLog(`Поздравляем! Вы достигли уровня ${this.level}!`);
    },
    useItem(item) {
        if(item === "Зелье здоровья" && this.hp < this.maxHp){
            this.hp += 40;
            if(this.hp > this.maxHp) this.hp = this.maxHp;
            this.inventory.splice(this.inventory.indexOf(item), 1);
            addLog(`Вы использовали ${item} и восстановили здоровье.`);
        } else {
            addLog(`Невозможно использовать ${item}.`);
        }
        updateStats();
    }
};

// ВРАГИ
const enemies = [
    {name:"Гоблин", hp:35, attack:6, defense:2, exp:12},
    {name:"Орк", hp:60, attack:10, defense:5, exp:25},
    {name:"Дракон", hp:120, attack:18, defense:10, exp:60}
];

let currentEnemy = null;

// ЛОКАЦИИ
const locations = [
    {name:"Лес", description:"Темный лес, полон тайн и опасностей."},
    {name:"Пещера", description:"Холодная и влажная пещера."},
    {name:"Горы", description:"Высокие скалы, ветер свистит в ушах."},
    {name:"Деревня", description:"Спокойная деревня с домиками и жителями."}
];
let currentLocation = {name:"Начало пути", description:"Вы стоите в начале своего пути."};

// ЖУРНАЛ
function addLog(message){
    const logDiv = document.getElementById("log-messages");
    const p = document.createElement("p");
    p.textContent = message;
    logDiv.appendChild(p);
    logDiv.scrollTop = logDiv.scrollHeight;
}

// ОБНОВЛЕНИЕ ИНТЕРФЕЙСА
function updateStats(){
    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-hp").textContent = player.hp + "/" + player.maxHp;
    document.getElementById("player-attack").textContent = player.attack;
    document.getElementById("player-defense").textContent = player.defense;
    document.getElementById("player-level").textContent = player.level;
    document.getElementById("player-exp").textContent = player.exp;
    document.getElementById("player-inventory").textContent = player.inventory.join(", ") || "Пусто";
    document.getElementById("current-location").textContent = currentLocation.name;
    document.getElementById("location-description").textContent = currentLocation.description;
}

// ИССЛЕДОВАНИЕ
function explore(){
    currentLocation = locations[Math.floor(Math.random() * locations.length)];
    addLog(`Вы переместились в ${currentLocation.name}.`);

    // Событие
    let chance = Math.random();
    if(chance < 0.5){
        startCombat({...enemies[Math.floor(Math.random()*enemies.length)]});
    } else if(chance < 0.8){
        // Найти предмет
        const loot = ["Зелье здоровья", "Малый меч", "Щит"][Math.floor(Math.random()*3)];
        player.inventory.push(loot);
        addLog(`Вы нашли ${loot}.`);
    } else {
        addLog("Ничего необычного не произошло.");
    }
    updateStats();
}

// БОЙ
function startCombat(enemy){
    currentEnemy = enemy;
    addLog(`Вас атаковал ${enemy.name}!`);
    document.getElementById("combat").style.display = "block";
    document.getElementById("enemy-name").textContent = enemy.name;
    document.getElementById("enemy-hp").textContent = enemy.hp;
}

// Игрок выбирает действие в бою
function playerAttack(){
    if(!currentEnemy) return;
    const damage = Math.max(player.attack - currentEnemy.defense, 1);
    currentEnemy.hp -= damage;
    addLog(`Вы нанесли ${damage} урона ${currentEnemy.name}.`);
    if(currentEnemy.hp <= 0){
        addLog(`Вы победили ${currentEnemy.name}!`);
        player.gainExp(currentEnemy.exp);
        currentEnemy = null;
        document.getElementById("combat").style.display = "none";
        return;
    }
    document.getElementById("enemy-hp").textContent = currentEnemy.hp;
    enemyAttack();
}

function playerDefend(){
    if(!currentEnemy) return;
    addLog("Вы защищаетесь и снижаете урон следующей атаки.");
    enemyAttack(0.5);
}

function useCombatItem(){
    if(player.inventory.length > 0){
        player.useItem(player.inventory[0]);
    } else {
        addLog("Инвентарь пуст.");
    }
}

// Враг атакует
function enemyAttack(multiplier = 1){
    if(!currentEnemy) return;
    const damage = Math.max(Math.floor(currentEnemy.attack - player.defense) * multiplier, 1);
    player.hp -= damage;
    addLog(`${currentEnemy.name} наносит ${damage} урона.`);
    if(player.hp <= 0){
        addLog("Вы погибли! Игра окончена.");
        document.getElementById("combat").style.display = "none";
    }
    updateStats();
}

// СОБЫТИЯ КНОПОК
document.getElementById("explore-btn").addEventListener("click", explore);
document.getElementById("use-item-btn").addEventListener("click", () => {
    if(player.inventory.length > 0) player.useItem(player.inventory[0]);
    else addLog("Инвентарь пуст.");
});
document.getElementById("reset-btn").addEventListener("click", () => location.reload());

document.getElementById("attack-btn").addEventListener("click", playerAttack);
document.getElementById("defend-btn").addEventListener("click", playerDefend);
document.getElementById("use-combat-item-btn").addEventListener("click", useCombatItem);

// ИНИЦИАЛИЗАЦИЯ
updateStats();
addLog("Добро пожаловать в текстовую RPG!");