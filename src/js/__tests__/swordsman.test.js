import Swordsman from '../swordsman';

test('check clase Swordsman', () => {
  const received = new Swordsman('Ivan');
  const expected = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Ivan', type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});
