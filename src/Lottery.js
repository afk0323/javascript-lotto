const { Console, Random } = require('@woowacourse/mission-utils');
const { INPUT } = require('./Constants');
const Lotto = require('./Lotto');

class Lottery {
  #lotto;
  #purchaseAmount;

  progress() {
    this.inputWinningNumber();

    /*
    const LOTTO = this.#lotto.getLotto();
    console.log(LOTTO)
    */
  }
  
  inputPurchaseAmount() {
    Console.readLine(INPUT.PURCHASE_AMOUNT, (amount) => {
      this.#purchaseAmount = new Lotto(amount);
    });
  }

  inputWinningNumber() {
    Console.readLine(INPUT.LOTTO_NUMBER, (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT.BONUS_NUMBER, (number) => {
      this.#lotto.setBonusNumber(number);
    });
  }


}

new Lottery().progress();

module.exports = Lottery;