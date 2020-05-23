class MovePawn {
    constructor() {
        this.goToField = [...document.querySelectorAll('.active')];
        this.lastMove = '';
        this.startPositions = new StartPositions();
        this.blackPawns = this.startPositions.blackPawns;
        this.whitePawns = this.startPositions.whitePawns;
        this.allPawns = this.startPositions.allPawns;;
        this.activeFields = this.startPositions.fields;
        this.activePawns = {};
        this.pawn = null;
        this.positionToMove = null;
        this.field = null;
        this.selectedPawn = this.selectPawn();
        this.selectedField = this.selectField();
    }

    selectPawn() {
        this.allPawns.forEach((eachPawn, key) => eachPawn.addEventListener('click', () => {
            let pawn = new Pawn(eachPawn, eachPawn.dataset.color);
            if (this.lastMove == pawn.color)
                return;

            this.activePawns[key] = pawn;
            this.pawn = pawn.pawn;
            this.positionToMove = this.checkIfCanMove(this.pawn.parentNode.dataset.position, this.pawn.dataset.color);
        }));
    }

    selectField() {
        this.activeFields.forEach(field => field.addEventListener('click', () => {
            if (field.childElementCount > 0)
                return

            const choosePawn = this.pawn;
            const choosePosition = parseInt(field.dataset.position);
            if (this.pawn == null)
                return;


            if (this.positionToMove.positionOne != choosePosition && this.positionToMove.positionTwo != choosePosition)
                return;

            this.move(choosePosition);
            this.positionToMove.positionOne = null;
            this.positionToMove.positionTwo = null;
            this.lastMove = this.pawn.dataset.color;
        }));
    }

    returnOperation(flag = true, x, y = 5) {
        if (flag)
            return x + y;
        else
            return x - y;
    }

    whoMove() {
        console.log(this.lastMove);
        console.log(this.pawn);
    }

    checkIfCanMove(from, color) {
        // this.whoMove();
        let gotoOne = null;
        let gotoTwo = null;
        let step = null;
        let availablePosition = null;
        const positions = from.toString().split('').map(Number);
        from = parseInt(from);
        let flag = true;

        if (color === 'fff')
            flag = false;

        if (positions < 10)
            availablePosition = positions[0];

        else
            availablePosition = positions[1];

        if (availablePosition >= 0 && availablePosition <= 3) {
            flag === false ? step = 4 : step = 6;

            gotoOne = this.returnOperation(flag, from);
            gotoTwo = this.returnOperation(flag, from, step);
        } else if (availablePosition >= 6 && availablePosition <= 9) {
            flag === false ? step = 6 : step = 4;

            gotoOne = this.returnOperation(flag, from, step);
            gotoTwo = this.returnOperation(flag, from);
        } else if (availablePosition === 4 || availablePosition === 5) {
            gotoOne = this.returnOperation(flag, from);
        } else {
            throw new Error('Nieprawidłowe działanie');
        }

        return {
            positionOne: gotoOne,
            positionTwo: gotoTwo
        };
    }

    move(fieldTo) {
        const moveTo = document.querySelector(`[data-position="${fieldTo}"]`);
        moveTo.appendChild(this.pawn);
    }

}