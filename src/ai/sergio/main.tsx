import {
  generateMachineNumber,
  checkGuess,
  generateNumberList,
  updateLeaderboard,
  getFourDifferentDigits,
} from "../../utils/gameUtils";
import {GameStatus} from "@/ai/sergio/gameStatus";

export const generateNumber = (gameStatus: GameStatus) : string => {

  return generateNumberRandom(gameStatus);
};

export const generateNumberRandom = (gameStatus: GameStatus) : string => {

  const initialNumberList = generateNumberList();
  const newNumberList = initialNumberList.filter((number) => {
    return gameStatus.guesses.every(
        ({ guess, feedback }) => checkGuess(guess, number).equals(feedback)
    );
  });
  return generateMachineNumber(newNumberList);
};
