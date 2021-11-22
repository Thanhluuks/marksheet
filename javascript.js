var testScore = {
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
}
var stt = 1;
var table = document.getElementById("marksheet");
var rows = table.getElementsByTagName("tr");

function mySubmit() {
    var row = table.insertRow(stt);
    for (let i in testScore) {
        i != "name" ? testScore[i] = +document.getElementById(i).value : testScore[i] = document.getElementById(i).value;
        document.getElementById(i).value = "";
    }
    var cell0 = row.insertCell(0);
    cell0.innerHTML = stt
    var cell1 = row.insertCell(1);
    cell1.innerHTML = testScore.name;
    var cell2 = row.insertCell(2);
    cell2.innerHTML = testScore.math;
    var cell3 = row.insertCell(3);
    cell3.innerHTML = testScore.physical;
    var cell4 = row.insertCell(4);
    cell4.innerHTML = testScore.chemistry;
    var cell5 = row.insertCell(5);
    cell5.innerHTML = "?";
    stt++;
}


function myCal() {
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[5].innerHTML = ((Number(rows[i].cells[2].innerHTML) + Number(rows[i].cells[3].innerHTML) + Number(rows[i].cells[4].innerHTML)) / 3).toFixed(1);
        rows[i].cells[5].classList.add("tb");
    }
}


function myGood() {
    for (let i = 1, n = table.rows.length; i < n; i++) {
        if (Number(table.rows[i].cells[5].innerHTML) >= 8) {
            table.rows[i].classList.add("good");
        }

    }
}


function myBad() {
    for (let i = 1, n = table.rows.length; i < n; i++) {
        if (Number(table.rows[i].cells[5].innerHTML) <= 4) {
            table.rows[i].classList.add("bad");
        }

    }
}

function compareRows (a,b) {
    return (a<b) ? 1 : (a>b) ? -1 : 0;
}

function mySort() {
    let rowS=Array.from(rows);
    rowS=rowS.slice(1);
    rowS.sort( (r1,r2) => {
        let t1=r1.getElementsByClassName("tb")[0];
        let t2=r2.getElementsByClassName("tb")[0];
        return compareRows(Number(t1.innerHTML), Number(t2.innerHTML));
    });
    rowS.forEach( row => table.appendChild(row));
}

  