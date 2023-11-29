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