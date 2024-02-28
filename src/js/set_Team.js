export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(heros) {
    if (this.members.has(heros)) {
      throw new Error('Герой уже добавлен');
    } else {
      this.members.add(heros);
    }
  }

  addAll(...heros) {
    for (const hero of heros) {
      this.members.add(hero);
    }
  }

  toArray() {
    return [...this.members];
  }
}
