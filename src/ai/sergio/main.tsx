import {
  generateMachineNumber,
  checkGuess,
  generateNumberList,
  updateLeaderboard,
  getFourDifferentDigits,
} from "../../utils/gameUtils";
import {GameStatus} from "@/ai/sergio/gameStatus";

export const generateNumber = (gameStatus: GameStatus, initialNumberList: Array<string>) : string => {

  return generateNumberMinSpaceHeuristic(gameStatus, initialNumberList);
};

export const generateNumberRandom = (gameStatus: GameStatus, initialNumberList: Array<string>) : string => {

  const newNumberList = initialNumberList.filter((number) => {
    return gameStatus.guesses.every(
        ({ guess, feedback }) => checkGuess(guess, number).equals(feedback)
    );
  });
  return generateMachineNumber(newNumberList);
};
