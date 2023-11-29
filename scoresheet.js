class Scoresheet {
    constructor(archer1,archer2) {
        this.athlete1= archer1;
        this.athlete2= archer2;
        this.a1Sheet= [];
        this.a2Sheet= [];
        this.matchScore= [0,0];
        this.a1SetPoint= [0,0,0];
        this.a2SetPoint= [0,0,0];
        this.a1TotalSP= 0;
        this.a2TotalSP= 0;
    }
    setPointA1(i,point){
        this.a1SetPoint[i] = point;
    }
    setPointA2(i,point){
        this.a2SetPoint[i] = point;
    }
    totalSetPoint(){
        this.a1TotalSP = this.a1SetPoint.reduce((a,b) => a + b, 0);
        this.a2TotalSP = this.a2SetPoint.reduce((a,b) => a + b, 0);
    }
    setCal(){
        this.totalSetPoint();
        if (this.a1TotalSP > this.a2TotalSP)
            this.matchScore[0] += 2;
        else if (this.a2TotalSP > this.a1TotalSP)
            this.matchScore[1] += 2;
        else{
            this.matchScore[0]++;
            this.matchScore[1]++;
        }
    }
}