import Bowerman from '../bowerman';

test('check clase Bowerman', () => {
  const received = new Bowerman('Ivan');
  const expected = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Ivan', type: 'Bowerman',
  };
  expect(received).toEqual(expected);
});
