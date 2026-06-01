export class Knobelscheit {
    public readonly flipped: Set<Number> = new Set;
    
    flip(toFlip: number[], diceResult: number): boolean {
        let totalToFlip = 0;
        toFlip.forEach(elementToFlip => {
            totalToFlip += elementToFlip
        });

       if (totalToFlip === diceResult) {
        toFlip.forEach(elementToFlip => {
            this.flipped.add(elementToFlip);
        });
        return true;
       } else {
        return false;
       }
    }

    checkWin() {
        if (this.flipped.size === 9) {
            return true;
        } else {
            return false;
        }
    }

    checkIfLost(n: number):boolean {
        let open = 0
        for(let i = 1; i <= 9; i++)
        {
            if(!this.flipped.has(i))
            {
                open += i
            }
        }
        if(n > open)
        {
            return true
        }
        else
        {
            return false
        }

    }

    notFlipped():Array<number> {
        const open: number[] = [];
        for (let i = 1; i <= 9; i++){
            if(!this.flipped.has(i))
            {
                open.push(i);
            }
        }
        return open
    }
}