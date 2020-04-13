class StartPositions {
    constructor(classes = [], positions = [], dataSet) {
        this.positions = positions;
        this.result = this.createDiv(classes, dataSet);
    }

    createDiv(classes, dataSet = false) {
        let divs = [];

        this.positions.forEach(position => {
            const div = document.createElement('div');
            classes.forEach(eachClass => {
                div.classList.add(eachClass);
            })
            if (dataSet)
                div.dataset.number = position;

            divs.push(div);
        })
        return divs;
    }
}