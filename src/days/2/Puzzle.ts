import Puzzle from '../../types/AbstractPuzzle';


export default class ConcretePuzzle extends Puzzle {

  public solveFirst(): string {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    const array: any[] = [fs.readFileSync('./src/days/2/input.txt', 'utf8').toString().trim().split(/\s+/)];

    console.log(array);
    console.log(process.cwd());
    let myTotalScore = 0;

    let myCurrentMovePoints = 0;
    let opponentCurrentMovePoints = 0;
    array[0].forEach(function (currentMove: string) {
      if (currentMove as string === 'A' || currentMove as string === 'B' || currentMove as string === 'C') {
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

        }
      } else {
        switch (currentMove as string) {
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
      }
      if (opponentCurrentMovePoints && myCurrentMovePoints) {
        if (myCurrentMovePoints > opponentCurrentMovePoints) {
          myTotalScore = myTotalScore + myCurrentMovePoints + 6;
        } else if (opponentCurrentMovePoints > myCurrentMovePoints) {
          myTotalScore = myTotalScore + myCurrentMovePoints;
        } else if (opponentCurrentMovePoints === myCurrentMovePoints) {
          myTotalScore = myTotalScore + myCurrentMovePoints + 3;
        }
      }
    });

    console.log(myTotalScore);
    return;
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
