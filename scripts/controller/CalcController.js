class CalcController {
    
    constructor() {

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEL = document.querySelector("#hora");

        displayCalcEl.innerHTML = "12345"
        dateEl.innerHTML = "01/05/2020"
        timeEL.innerHTML = "12:00"
    }

    get displayCalc() {

        return this._displayCalc;

    }

    set displayCalc(value) {

        this._displayCalc = value;

    }

    get currentDate() {

        return this._currentDate;

    }

    set currentDate(value) {

        this._currentDate = value;

    }

}