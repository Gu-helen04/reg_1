import Team from '../set_Team';

test('test_1', () => {
  const hero_1 = {
    super_hero_name: 'Iron Man',
  };

  const hero_2 = {
    super_hero_name: 'Spider',
  };

  const heroSet = new Team();
  heroSet.add(hero_1);
  heroSet.add(hero_2);

  const heroNumber = heroSet.members.size;
  expect(heroNumber).toBe(2);
});

test('test_2', () => {
  const hero = {
    super_hero_name: 'Iron Man',
  };

  const heroSet = new Team();
  heroSet.add(hero);

  expect(() => {
    heroSet.add(hero);
  }).toThrow('Герой уже добавлен');
});

test('test_3', () => {
  const hero_1 = {
    super_hero_name: 'Iron Manher',
  };

  const hero_2 = {
    super_hero_name: 'Spiderman',
  };

  const hero_3 = {
    super_hero_name: 'Doctor Strange',
  };

  const heroSet = new Team();
  heroSet.addAll(hero_1, hero_2, hero_3, hero_1, hero_2,hero_3,hero_2);

  const heroNumber = heroSet.members.size;

  expect(heroNumber).toBe(3);
});

test('test_4', () => {
  const hero_1 = {
    super_hero_name: 'Iron Man',
  };

  const hero_2 = {
    super_hero_name: 'Spiderman',
  };

  const hero_3 = {
    super_hero_name: 'Doctor Strange',
  };

  const heroSet = new Team();
  heroSet.addAll(hero_1, hero_2, hero_3, hero_1, hero_2);
  heroSet.toArray();

  const result = [
    { super_hero_name: 'Iron Man' },
    { super_hero_name: 'Spiderman' },
    { super_hero_name: 'Doctor Strange' },
  ];

  expect(heroSet.toArray()).toEqual(result);
});
