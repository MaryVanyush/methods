export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('error name');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  inputType(type) {
    const heroes = [
      { type: 'Bowerman', attack: 25, defence: 25 },
      { type: 'Swordsman', attack: 40, defence: 10 },
      { type: 'Magician', attack: 10, defence: 40 },
      { type: 'Daemon', attack: 10, defence: 40 },
      { type: 'Undead', attack: 25, defence: 25 },
      { type: 'Zombie', attack: 40, defence: 10 },
    ];

    for (const hero of heroes) {
      if (hero.type === type) {
        this.type = type;
        this.attack = hero.attack;
        this.defence = hero.defence;
      }
    }

    if (!this.type) {
      throw new Error('error type');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('нельзя нанести урон. Персонаж мертв.');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
