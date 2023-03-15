import Character from '../character';

test('check clase Character', () => {
  const received = new Character('Ivan');
  received.inputType('Swordsman');
  const expected = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Ivan', type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});

test('check clase Character with error name', () => {
  expect(() => {
    const received = new Character('O');
    received.inputType('Swords');
  }).toThrow('error name');
});

test('check clase Character with error type', () => {
  const received = new Character('Oleg');
  expect(() => {
    received.inputType('Swords');
  }).toThrow('error type');
});

test('check method levelUp', () => {
  const received = new Character('Ivan');
  received.inputType('Daemon');
  received.health = 10;
  received.levelUp();
  const expected = {
    attack: 12, defence: 48, health: 100, level: 2, name: 'Ivan', type: 'Daemon',
  };
  expect(received).toEqual(expected);
});

test('check method levelUp  with error', () => {
  const received = new Character('Ivan');
  received.inputType('Daemon');
  received.health = 0;
  expect(() => {
    received.levelUp();
  }).toThrow('нельзя повысить левел умершего');
});

test('check method damage(points)', () => {
  const received = new Character('Ivan');
  received.inputType('Daemon');
  received.health = 10;
  received.damage(3);
  const expected = {
    attack: 10, defence: 40, health: 8.2, level: 1, name: 'Ivan', type: 'Daemon',
  };
  expect(received).toEqual(expected);
});

test('check method damage(points) with error', () => {
  const received = new Character('Ivan');
  received.inputType('Daemon');
  received.health = -1;
  expect(() => {
    received.damage(6);
  }).toThrow('нельзя нанести урон. Персонаж мертв.');
});
