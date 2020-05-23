class CreateElement {
    constructor(classes = [], positions = [], dataSet) {
        this.positions = positions;
        this.result = this.createDivs(classes, dataSet);
        this.fields = [...document.querySelectorAll('.active')];
    }

    createDivs(classes, dataSet = false) {
        let divs = [];

        this.positions.forEach(position => {
            const div = document.createElement('div');
            classes.forEach(eachClass => {
                div.classList.add(eachClass);
            })
            if (dataSet)
                div.dataset.id = position;

            divs.push(div);
        })
        return divs;
    }
}