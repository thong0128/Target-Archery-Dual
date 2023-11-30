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
                        <td>${athleteList[i].winRate}</td>
                  </tr>`;
    }
    document.getElementById("athletelist").innerHTML= content;
}
function selectAthleteList() {
    let content=""
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
    }
}
