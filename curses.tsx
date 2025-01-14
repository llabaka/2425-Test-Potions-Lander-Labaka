import Curse from "./curse";

class Curses {

    curses: Curse[];

    constructor(curses: any){
        this.curses = curses;
    }

    static load(data: any) {
        return new Curses(data.data.map(Curse.from))
    }
}

module.exports = Curses;