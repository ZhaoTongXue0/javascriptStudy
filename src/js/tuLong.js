//初始化 经验，生命值，金币，武器
let xp = 0;
let Health = 100;
let Gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["拳头"];

//功能按钮
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//武器价格
const weapons = [
    {
        name: "棍子",
        power: 5
    },
    {
        name: "匕首",
        power: 30
    },
    {
        name: "锤子",
        power: 50
    },
    {
        name: "剑",
        power: 100
    }
];
// 怪物血量，与等级
const monsters = [
    {
        name: "哥布林",
        level: 2,
        health: 15
    }, {
        name: "狼人",
        level: 8,
        health: 60
    }, {
        name: "龙",
        level: 20,
        health: 300
    }
];
//功能构造体数组
const locations = [
    {
        name: "广场",
        "button text": ["前往商店", "探索洞穴", "屠龙"],
        "button functions": [goStore, goCave, fightDragon],
        text: "欢迎来到屠龙游戏"
    }, {
        name: "商店",
        "button text": ["恢复10生命值(10金币)", "购买武器(30金币)", "离开商店"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "这里是商店,可以恢复生命值与购买武器."
    }, {
        name: "洞穴",
        "button text": ["哥布林", "狼人", "结束探索"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "选择洞穴怪物战斗，以获取金币和经验值"
    }, {
        name: "战斗",
        "button text": ["攻击", "躲避", "逃跑"],
        "button functions": [attack, dodge, goTown],
        text: "你正在战斗中"
    }, {
        name: "击败怪物",
        "button text": ["前往城镇", "前往城镇", "前往城镇"],
        "button functions": [goTown, goTown, easterEgg],
        text: '怪物被击杀，你获得经验值并找到金币。'
    }, {
        name: "离开",
        "button text": ["重开?", "重开?", "重开?"],
        "button functions": [restart, restart, restart],
        text: "你噶了☠️"
    }, {
        name: "胜利",
        "button text": ["重开?", "重开?", "重开?"],
        "button functions": [restart, restart, restart],
        text: "恭喜你，你成功击败了巨龙 🎉游戏通关"
    }, {
        name: "秘密洞穴",
        "button text": ["2", "8", "放弃洞穴,前往城镇"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "你意外发现了一个洞穴。在上面选一个数字。从0到10之间随机抽取10个数字。如果你选择的数字与其中一个随机数匹配，你就赢了!"
    }
];
//按钮功能
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//初始界面
function update(locations) {
    monsterStats.style.display = "none";
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerText = locations.text;
}

//返回上一级
function goTown() {
    update(locations[0]);
}

//前往商店
function goStore() {
    update(locations[1]);
}

//探索洞穴
function goCave() {
    update(locations[2]);
}

// 购买生命
function buyHealth() {
    if (Gold >= 10) {
        //金币-10，生命+10
        Gold -= 10;
        Health += 10;
        goldText.innerText = Gold;
        healthText.innerText = Health;
    } else {
        text.innerText = "你没钱了，小菜鸡!"
    }
}

// 购买武器
function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (Gold >= 30) {
            Gold -= 30;
            goldText.innerText = Gold;
            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "你现在有了武器" + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += "你现在有的武器有:" + inventory;
        } else {
            text.innerText = "你没钱了，小菜鸡!"
        }
    } else {
        text.innerText = "你把所有武器都买完了!";
        button2.innerText = "武器回收(15金/件)";
        button2.onclick = sellWeapon;
    }
}

//武器回收
function sellWeapon() {
    if (inventory.length > 1) {
        Gold += 15;
        goldText.innerText = Gold;
        let currentWeapon = inventory.shift();
        text.innerText = "你回收了:" + currentWeapon + ".";
    } else {
        text.innerText = "你没有武器可以卖了!";
    }
}

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {
    text.innerText = "这 " + monsters[fighting].name + " 攻击.";
    text.innerText += " 你使用 " + weapons[currentWeapon].name + ".";

    if (isMonsterHit()) {
        Health -= getMonsterAttackValue(monsters[fighting].level);
    } else {
        text.innerText += " 你闪避了这次攻击.";
    }

    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    healthText.innerText = Health;
    monsterHealthText.innerText = monsterHealth;
    if (Health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        fighting === 2 ? winGame() : defeatMonster();
    }

    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " 你的 " + inventory.pop() + " breaks.";
        currentWeapon--;
    }
}


function getMonsterAttackValue(level) {
    let hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit;
}

function isMonsterHit() {
    return Math.random() > .2 || Health < 20;
}


function dodge() {
    text.innerText = "你避开了来自 " + monsters[fighting].name + ".";
}

function defeatMonster() {
    Gold += Math.floor(monsters[fighting].level * 6.7)
    xp += monsters[fighting].level;
    goldText.innerText = Gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function restart() {
    xp = 0;
    Health = 100;
    Gold = 50;
    currentWeapon = 0;
    inventory = ["棍子"];
    goldText.innerText = Gold;
    healthText.innerText = Health;
    xpText.innerText = xp;
    goTown();
}

function easterEgg() {
    update(locations[7]);
}

function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}

function pick(guess) {
    let numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }

    text.innerText = "你选择 " + guess + ". 随机数\n";

    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
    }

    if (numbers.indexOf(guess) !== -1) {
        text.innerText += "获得20金牌!"
        Gold += 20;
        goldText.innerText = Gold;
    } else {
        text.innerText += "获得10金币"
        Health -= 10;
        healthText.innerText = Health
        if (Health <= 0) {
            lose();
        }
    }
}
