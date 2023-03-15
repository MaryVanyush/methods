import Undead from '../undead';

test('check clase Undead', () => {
  const received = new Undead('Ivan');
  const expected = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Ivan', type: 'Undead',
  };
  expect(received).toEqual(expected);
});
