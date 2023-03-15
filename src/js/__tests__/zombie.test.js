import Zombie from '../zombie';

test('check clase Zombie', () => {
  const received = new Zombie('Ivan');
  const expected = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Ivan', type: 'Zombie',
  };
  expect(received).toEqual(expected);
});
