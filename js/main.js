const xd = new StartPositions(['square', 'active'],[1,2,3,4,5]).result;
const pawn = new StartPositions(['pawn'],[1,2,3,4,5,6,7,8,9,10], true).result;

const playedDivs = [...document.querySelectorAll('.active')];
const arr = [];
const newArr = [];

//dodanie pierwszcyh 10 elementow startowych do tablicy
function test() {
    for (let i = 0; i < playedDivs.length; i++) {
    arr.push(playedDivs[i]);
    if (i === 9) {
        return;
        }
    }
}
test();


//dodanie pawn do elementow square
arr.forEach((x, index) => {
    x.appendChild(pawn[index]);
    newArr.push(x);
})