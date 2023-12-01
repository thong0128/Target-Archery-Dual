let athleteList = [];
function addAthlete(name,sex,div) {
    name = document.getElementById("name").value;
    sex = document.getElementById("gender").value;
    div = document.getElementById("division").value;
    athleteList.push(new Archer(name,sex,div));
}
function showAthleteList() {
    let content=""
    for (let i = 0; i < athleteList.length; i++) {
        content+=`<tr>
                        <td>${i+1}</td>
                        <td>${athleteList[i].name}</td>
                        <td>${athleteList[i].gender}</td>
                        <td>${athleteList[i].division}</td>
                        <td>${athleteList[i].win}</td>
                        <td>${athleteList[i].lose}</td>
                        <td>${athleteList[i].winRate}%</td>
                  </tr>`;
    }
    document.getElementById("athletelist").innerHTML= content;
}
function selectAthleteList() {
    let content="";
    for (let i = 0; i < athleteList.length; i++) {
        content+=`<option value="${athleteList[i].name}">${athleteList[i].name}</option>`;
    }
    document.getElementById("archer1").innerHTML= content;
    document.getElementById("archer2").innerHTML= content;
}
let scoreSheet;
function startMatch(athlete1,athlete2) {
    athlete1 = athleteList.find(Archer => {
        return Archer.name === document.getElementById("archer1").value});
    athlete2 = athleteList.find(Archer => {
        return Archer.name === document.getElementById("archer2").value});
    // athlete1 = athleteList.find(({name}) => name === document.getElementById("archer1").value);
    // athlete2 = athleteList.find(({name}) => name === document.getElementById("archer2").value);
    if (athlete1 === athlete2)
        alert("You can't beat your meat here :)");
    else {
        scoreSheet = new Scoresheet(athlete1, athlete2);
        document.getElementById("a1name").innerText = scoreSheet.athlete1.name;
        document.getElementById("a2name").innerText = scoreSheet.athlete2.name;
        document.getElementById("a1score").innerText = scoreSheet.athlete1.name;
        document.getElementById("a2score").innerText = scoreSheet.athlete2.name;
        activePoint = document.getElementById("a1Shot1");
    }
    resetCurrent();
    updateArcherSheet();
}
let activePoint;
function getActiveID() {
    activePoint = document.activeElement;
    console.log(activePoint);
}
function pointInput(x) {
    activePoint.value = x;
    // for (let i = 0; i < 3; i++) {
    //     scoreSheet.a1SetPoint[i] = +document.getElementById(`a1Shot${i+1}`).value;
    //     scoreSheet.a2SetPoint[i] = +document.getElementById(`a2Shot${i+1}`).value;
    // }
    updateTotalPoint();
    // console.log(scoreSheet.a1SetPoint);
    // console.log(scoreSheet.a2SetPoint);
}
function deletePoint() {
    activePoint.value = "";
    // for (let i = 0; i < 3; i++) {
    //     scoreSheet.a1SetPoint[i] = +document.getElementById(`a1Shot${i+1}`).value;
    //     scoreSheet.a2SetPoint[i] = +document.getElementById(`a2Shot${i+1}`).value;
    // }
    updateTotalPoint();
}
function updateTotalPoint() {
    for (let i = 0; i < 3; i++) {
        scoreSheet.a1SetPoint[i] = +document.getElementById(`a1Shot${i+1}`).value;
        scoreSheet.a2SetPoint[i] = +document.getElementById(`a2Shot${i+1}`).value;
    }
    scoreSheet.totalSetPoint();
    document.getElementById("a1total").innerText = scoreSheet.a1TotalSP;
    document.getElementById("a2total").innerText = scoreSheet.a2TotalSP;
}
function resetCurrent() {
    for (let i = 1; i <= 2; i++) {
        document.getElementById(`a${i}total`).innerText = 0;
        for (let j = 1; j <=3 ; j++) {
            document.getElementById(`a${i}Shot${j}`).value = 0;
            // console.log(document.getElementById(`a${i}Shot${j}`));
        }
    }
}
function setEnd() {
    scoreSheet.endSet();
    document.getElementById("a1setpoint").innerText = scoreSheet.matchScore[0];
    document.getElementById("a2setpoint").innerText = scoreSheet.matchScore[1];
    resetCurrent();
    updateArcherSheet();
}
function updateArcherSheet() {
    let a1Sheet="";
    let a2Sheet="";
    for (let i = 0; i < scoreSheet.a1Sheet.length; i++) {
        a1Sheet+=`<tr>
            <td>${i+1}</td>
            <td>${scoreSheet.a1Sheet[i][0]}</td>
            <td>${scoreSheet.a1Sheet[i][1]}</td>
            <td>${scoreSheet.a1Sheet[i][2]}</td>
            <td>${scoreSheet.a1Sheet[i][3]}</td>
        </tr>`;
        a2Sheet+=`<tr>
            <td>${i+1}</td>
            <td>${scoreSheet.a2Sheet[i][0]}</td>
            <td>${scoreSheet.a2Sheet[i][1]}</td>
            <td>${scoreSheet.a2Sheet[i][2]}</td>
            <td>${scoreSheet.a2Sheet[i][3]}</td>
        </tr>`;
    }
    document.getElementById("a1sheet").innerHTML= a1Sheet;
    document.getElementById("a2sheet").innerHTML= a2Sheet;
}