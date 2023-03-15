import Daemon from '../daemon';

test('check clase Daemon', () => {
  const received = new Daemon('Ivan');
  const expected = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Daemon',
  };
  expect(received).toEqual(expected);
});
