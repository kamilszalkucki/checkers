const gameStatusLive = {
    playerStartPawn: 10,
    playerWonPawn: 0,
    aiStartPawn: 10,
    aiWonPawn: 0,
}

// const squares = [...document.querySelectorAll('.flap .square')];
const flaps = [...document.querySelectorAll('.flap')];
const pawnsStartPosition = [...document.querySelectorAll('.pawnsStartPosition')];

//funkcja zwracajaca pola do gry
const getFieldToPlay = () => {
    const oddSquares = [];
    const oddRowSquare = [];
    const oddSqm = [];
    const evenSqm = [];

    flaps.forEach((flap, index) => {
        if (index % 2 === 0)
            oddRowSquare.push(flap);

        let squares = flap.querySelectorAll('.square');
        oddSquares.push(squares);
    })

    oddSquares.forEach((square, key) => {
        if (key % 2 === 0) {
            square.forEach((sqm, index) => {
                if (index % 2 === 1)
                    oddSqm.push(sqm);
            })
        } else {
            square.forEach((sqm, index) => {
                if (index % 2 === 0)
                    evenSqm.push(sqm);
            })
        }
    })
    return {
        oddSqm,
        evenSqm
    };
}

const createPawns = () => {
    const pawns = [];
    pawnsStartPosition.forEach(startPostion => {
        const pawn = document.createElement('div');
        pawn.classList.add('pawn');
        startPostion.appendChild(pawn);
        pawns.push(pawn);
    });

    return pawns;
}

createPawns();

const movePawnToPositions = () => {
    const oddSqm = getFieldToPlay().oddSqm;
    const evenSqm = getFieldToPlay().evenSqm;
    const oddPawns = [];
    const evenPawns = [];

    for (const [key, startPosition] of pawnsStartPosition.entries()) {
        const {
            position = startPosition,
            element = startPosition.children[0],
            index = key % 2 == 0,
        } = startPosition;
        if (index) {
            oddPawns.push(element);
            const oddElement = element;
            oddElement.classList.add('oddStart');
        } else {
            evenPawns.push(element);
            const evenElement = element;
            evenElement.classList.add('evenStart');
        }
        
        if (position.children[0].classList.contains('oddStart') || position.children[0].classList.contains('evenStart')) {
            position.removeChild(element);
        }
        // console.log(element);
    }
    console.log(evenPawns);
    //wszystkie dane juz sa wystarczy dodac pionki na swoje miejsce
}

movePawnToPositions();