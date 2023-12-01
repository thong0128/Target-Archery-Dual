class Archer {
    constructor(name,sex, div) {
        this.name = name;
        this.gender = sex;
        this.division = div;
        this.win = 0;
        this.lose = 0;
        this.winRate = 0;
    }
    // matchWinVS(archer2){
    //     this.win ++;
    //     archer2.lose++;
    // }
    calWinRate(){
        if (this.lose !==0)
            this.winRate =  (this.win/(this.lose + this.win) * 100).toFixed(2);
        else if (this.win > 0)
            this.winRate = 100;
        else
            this.winRate = 0;
    }
    // matchLose(){
    //     Archer.lose ++;
    //     alert(`${Archer.name} Lose :(`)
    // }
}