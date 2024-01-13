/* <-----Imports-----> */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

/* <-----global variables-----> */
const ROWS = 3;
const COLS = 3;
const SYMPOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMPOLS_VALUE = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

/* <-----Usable functions-----> */
/* getting the deposite amount from the user */
const getDepositAmount = () => {
  while (true) {
    const deposit = prompt("Enter a deposit amount: ");
    const numberOfDeposit = parseFloat(deposit);

    if (isNaN(numberOfDeposit) || numberOfDeposit <= 0) {
      console.log("Invalid deposite amount please try again");
    } else {
      return numberOfDeposit;
    }
  }
};

/* getting the number of lines user want to pit on */
const getLinesAmount = () => {
  while (true) {
    const lines = prompt(
      "Enter the number of lines you want to bet on (1-3): "
    );
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, please try again");
    } else {
      return numberOfLines;
    }
  }
};

/* getting the amount of bet */
const getBetAmount = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet amount per line: ");
    const numberOfBet = parseFloat(bet);

    if (
      isNaN(numberOfBet) ||
      numberOfBet <= 0 ||
      numberOfBet > balance / lines
    ) {
      console.log("Invalid bet, please try again");
    } else {
      return numberOfBet;
    }
  }
};

/* spinning the slot machine */
const spin = () => {
  const symbols = []; // holds all the possible symbols of the machine
  for (const [symbol, count] of Object.entries(SYMPOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]); // creates a new reel depending on number of columns
    const reelSymbols = [...symbols]; // a moc array to hold all the possible symbols
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length); // getting a random index for the slot machine
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

/* trasnpose the reels array to match the slot machine functionality */
const transpose = (reels) => {
  const temp = [];
  for (let i = 0; i < ROWS; i++) {
    temp.push([]);
    for (let j = 0; j < COLS; j++) {
      temp[i].push(reels[j][i]);
    }
  }

  return temp;
};

const printReels(reels) => {
  for (const row of reels){
    let 
  }
}

/* <-----Main App-----> */
let balance = getDepositAmount();
const numberOfLines = getLinesAmount();
const bet = getBetAmount(balance, numberOfLines);
const reels = spin();
const slot = transpose(reels);


