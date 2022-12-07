import Puzzle from '../../types/AbstractPuzzle';


export default class ConcretePuzzle extends Puzzle {

  public solveFirst(): string {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    const input: unknown[] = fs.readFileSync('./src/days/2/input.txt', 'utf8').toString().trim().split(/\s+/);
    let myTotalScore = 0;
    let myCurrentMovePoints = 0;
    let opponentCurrentMovePoints = 0;

    input.forEach(function (currentMove: string) {
      switch (currentMove as string) {
        case 'A': {
          opponentCurrentMovePoints = 1;
          break;
        }
        case 'B': {
          opponentCurrentMovePoints = 2;
          break;
        }
        case 'C': {
          opponentCurrentMovePoints = 3;
          break;
        }
        case 'X': {
          myCurrentMovePoints = 1;
          break;
        }
        case 'Y': {
          myCurrentMovePoints = 2;
          break;
        }
        case 'Z': {
          myCurrentMovePoints = 3;
          break;
        }
      }

      if (opponentCurrentMovePoints && myCurrentMovePoints) {
        if (myCurrentMovePoints > opponentCurrentMovePoints) {
          myTotalScore = myTotalScore + myCurrentMovePoints + 6;
          console.log('win', myCurrentMovePoints, opponentCurrentMovePoints);
          console.log(myTotalScore);
        } else if (opponentCurrentMovePoints > myCurrentMovePoints) {
          myTotalScore = myTotalScore + myCurrentMovePoints;
          console.log('loss', myCurrentMovePoints, opponentCurrentMovePoints);
          console.log(myTotalScore);
        } else if (opponentCurrentMovePoints === myCurrentMovePoints) {
          myTotalScore = myTotalScore + myCurrentMovePoints + 3;
          console.log('tie', myCurrentMovePoints, opponentCurrentMovePoints);
          console.log(myTotalScore);
        }
        myCurrentMovePoints = 0;
        opponentCurrentMovePoints = 0;
      }
    });
    console.log(myTotalScore);
    return `solution ${myTotalScore.toString()}`;
  }

  public getFirstExpectedResult(): string {
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    return 'day 1 solution 2';
  }

  public getSecondExpectedResult(): string {
    return 'day 1 solution 2';
  }
}
