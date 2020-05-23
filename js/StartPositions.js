class StartPositions {
    constructor() {
        Array.prototype.autoRefill = function (array = []) {
            const start = array[0];
            const end = array[array.length - 1];
            array.splice(array);

            for (let i = start; i <= end; i++) {
                array.push(i);
            }
            return array;
        }

        this.array = [];
        this.blackPawns = new CreateElement(['pawn'], this.array.autoRefill([1, 10]), true).result;
        this.whitePawns = new CreateElement(['pawn'], this.array.autoRefill([11, 20]), true).result;
        this.allPawns = this.blackPawns.concat(this.whitePawns);
        this.fields = [...document.querySelectorAll('.active')];
        this.readyBlackPawns = this.startPosition([0, 9], this.blackPawns);
        this.readyWhitePawns = this.startPosition([40, 49], this.whitePawns);

        this.whitePawns.forEach(pawn => pawn.dataset.color = 'fff');
        this.blackPawns.forEach(pawn => pawn.dataset.color = '000');

        this.whitePawns.forEach(pawn => pawn.style.backgroundColor = 'white');

        //dodanie data-position dla pol active
        this.fields.forEach((field, index) => {
            field.dataset.position = index;
        })

        //do przeniesienia i zweryfikowania
        for (let i = 0; i < this.blackPawns.length; i++) {
            this.blackPawns[i].dataset.move = i;
        }

    }

    startPosition(startFields = [], colorPawns) {
        const laps = startFields;
        const fields = [];

        for (let i = laps[0]; i <= laps[laps.length - 1]; i++) {
            fields.push(this.fields[i]);
        }

        fields.forEach((field, index) => {
            field.appendChild(colorPawns[index]);
        })
    }
}