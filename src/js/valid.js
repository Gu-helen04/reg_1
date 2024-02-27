export default class Validator {
  constructor(user) {
    this.user = user;
  }

  validateUsername() {
    const lettersAccept = /^[a-zA-Z]/.test(this.user);
    const dashAccept = /[\w-]/.test(this.user);
    const underscopeAccept = /[\w_]/.test(this.user);
    const numbersAccept = /[\d]/.test(this.user);
    const exeptThreeNumbersInRow = !/\d{4,}/.test(this.user);
    const endRow = /[a-zA-Z]+$/.test(this.user);

    // eslint-disable-next-line max-len
    if (lettersAccept && dashAccept && underscopeAccept && numbersAccept && exeptThreeNumbersInRow && endRow) {
      return true;
    }
    return false;
  }
}
