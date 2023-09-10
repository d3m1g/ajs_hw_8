import Team from '../set';

describe('class Team.add() /.toThrow()', () => {
 test('add', () => {
  const demik = new Team('demik');
  const xeq = new Team('xeq');
  const ghost = new Team('ghost');

  demik.add('demik');
  xeq.add('xeq');
  ghost.add('ghost');
  expect(demik.members.has('demik')).toEqual(true);
  expect(xeq.members.has('xeq')).toEqual(true);
  expect(ghost.members.has('ghost')).toEqual(true);
  expect(() => {
   ghost.add('ghost');
  }).toThrow();
 });
});

describe('addAll', () => {
 test('addAll()', () => {
  const demik = new Team('demik');
  const xeq = new Team('xeq');
  const ghost = new Team('ghost');

  demik.addAll('demik', 'dob', 'dust', 'dob');
  xeq.addAll('xeq', 'dob', 'dust', 'dob', 'dust');
  ghost.addAll('ghost', 'dust', 'dust', 'dob', 'dust', 'dob', 'dust');

  expect(demik.members.size).toEqual(3);
  expect(xeq.members.size).toEqual(3);
  expect(ghost.members.size).toEqual(3);
 });
});

describe('Team arr', () => {
 test('array', () => {
  const demik = new Team('demik');
  const xeq = new Team('xeq');
  const ghost = new Team('ghost');

  demik.addAll('demik', 'dust', 'dob', 'dust');
  xeq.addAll('xeq', 'dust', 'dust', 'dob', 'dust');
  ghost.addAll('ghost', 'dust', 'dob', 'dust', 'dust', 'dob', 'dust');

  expect(demik.toArray()).toEqual(['demik', 'dust', 'dob']);
  expect(xeq.toArray()).toEqual(['xeq', 'dust', 'dob']);
  expect(ghost.toArray()).toEqual(['ghost', 'dust', 'dob']);
 });
});