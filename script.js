// Main Vars

var sessions = document.querySelector(".dataStore").innerHTML;
if(sessions = "\n        []")
{
    sessions = [];
}
console.log(sessions);

var currentSessionIdx = 0;
var curType;

localStorage.setItem("scrambletemp", JSON.stringify(""));

function createSession(type, nameStr) {
    let sessionTemp = {
        type: type,
        times: [],
        scrambles: [],
        name: nameStr
    }

    sessions.push(sessionTemp);
    currentSessionIdx = sessions.length - 1;
}

createSession("2x2", "Session 01");

// Scramble

var notation = [];
var mods = [];
var scrambleTemp = "";
var prevSamp;

var scramble = document.querySelector(".scramble");

// function callPHP(params) {
//     var httpc = new XMLHttpRequest(); // simplified for clarity
//     var url = "index.php";
//     httpc.open("POST", url, true); // sending as POST

//     httpc.onreadystatechange = function() { //Call a function when the state changes.
//         if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
//             console.log(httpc.responseText); // some processing here, or whatever you want to do with the response
//         }
//     };
//     httpc.send(params.join(", "));
// }

function callPHP(params)
{
    document.getElementById("dataStuff").value = params;

    document.data.submit();

}

window.addEventListener('click', function(){
    callPHP(sessions[currentSessionIdx].times);
    alert("bue")
})

function generateScramble(type) {
    if (type == "3" || type == 3) {
        notation = ["R", "U", "F", "L", "D", "B"];
        mods = ["2", "'", ""];
        var scrambleTemp = [];

        var sample = "";
        var mod = "";

        scramble.innerHTML = "";

        for (i = 0; i < 18; i++) {
            if (sample != null) {
                prevSamp = sample;
            }
            sample = "";
            mod = "";

            sample = notation[Math.floor(Math.random() * notation.length)];

            var ok = true;

            while (scramble != "" && sample == prevSamp && ok) {
                sample = notation[Math.floor(Math.random() * notation.length)];
            }

            mod = mods[Math.floor(Math.random() * mods.length)];
            var temp = sample + mod
            scrambleTemp = scrambleTemp + temp + " ";

            var span = document.createElement("span");
            span.innerHTML = sample + mod + " ";
            span.classList.add(sample + mod);

            span.style.fontSize = "27px";

            var classFir = span.classList.toString();
            var classCur = classFir[0];
            if (classCur == "R") {
                span.style.color = "rgb(255,77,77)";
            } else if (classCur == "L") {
                span.style.color = "rgb(255,166,77)";
            } else if (classCur == "U") {
                span.style.color = "white";
            } else if (classCur == "D") {
                span.style.color = "rgb(255,255,128)";
            } else if (classCur == "F") {
                span.style.color = "lightgreen";
            } else if (classCur == "B") {
                span.style.color = "lightblue";
            }
            scramble.appendChild(span);
        }

        localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp))
    }
    else if (type == "2" || type == 2) {
        notation = ["R", "U", "F"];
        mods = ["2", "'", ""];
        var scrambleTemp = [];

        var sample = "";
        var mod = "";

        scramble.innerHTML = "";

        for (i = 0; i < 8; i++) {
            if (sample != null) {
                prevSamp = sample;
            }
            sample = "";
            mod = "";

            sample = notation[Math.floor(Math.random() * notation.length)];

            var ok = true;

            while (scramble != "" && sample == prevSamp && ok) {
                sample = notation[Math.floor(Math.random() * notation.length)];
            }

            mod = mods[Math.floor(Math.random() * mods.length)];
            var temp = sample + mod
            scrambleTemp = scrambleTemp + temp + " ";

            var span = document.createElement("span");
            span.innerHTML = sample + mod + " ";
            span.classList.add(sample + mod);

            span.style.fontSize = "30px";

            scramble.appendChild(span);
        }

        localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp))
    }
    else if (type == "4" || type == 4) {
        notation = ["R", "U", "F", "L", "D", "B", "Rw", "Fw", "Uw"];
        mods = ["2", "'", ""];
        var scrambleTemp = [];

        var sample = "";
        var mod = "";

        scramble.innerHTML = "";

        for (i = 0; i < 44; i++) {
            if (sample != null) {
                prevSamp = sample;
            }
            sample = "";
            mod = "";

            sample = notation[Math.floor(Math.random() * notation.length)];

            var ok = true;

            while (scramble != "" && sample == prevSamp && ok) {
                sample = notation[Math.floor(Math.random() * notation.length)];
            }

            mod = mods[Math.floor(Math.random() * mods.length)];
            var temp = sample + mod
            scrambleTemp = scrambleTemp + temp + " ";

            var span = document.createElement("span");
            span.innerHTML = sample + mod + " ";
            span.classList.add(sample + mod);

            span.style.fontSize = "24px";

            scramble.appendChild(span);
        }

        localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp))
    }
    else if (type == "5" || type == 5) {
        notation = ["R", "U", "F", "L", "D", "B", "Rw", "Fw", "Uw", "U","D","L","R","F","B", "Rw", "Fw", "Uw", "Bw", "Dw", "Lw"];
        mods = ["2", "'", ""];
        var scrambleTemp = [];

        var sample = "";
        var mod = "";

        scramble.innerHTML = "";

        for (i = 0; i < 50; i++) {
            if (sample != null) {
                prevSamp = sample;
            }
            sample = "";
            mod = "";

            sample = notation[Math.floor(Math.random() * notation.length)];

            var ok = true;

            while (scramble != "" && sample == prevSamp && ok) {
                sample = notation[Math.floor(Math.random() * notation.length)];
            }

            mod = mods[Math.floor(Math.random() * mods.length)];
            var temp = sample + mod
            scrambleTemp = scrambleTemp + temp + " ";

            var span = document.createElement("span");
            span.innerHTML = sample + mod + " ";
            span.classList.add(sample + mod);

            span.style.fontSize = "22px";

            scramble.appendChild(span);
        }

        localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp))
    }
    else if (type == "6" || type == 6) {
        notation = ["U","D","L","R","F","B", "Rw", "Fw", "Uw", "Bw", "Dw", "Lw", "3Rw", "3Fw", "3Uw"];
        mods = ["2", "'", ""];
        var scrambleTemp = [];

        var sample = "";
        var mod = "";

        scramble.innerHTML = "";

        for (i = 0; i < 65; i++) {
            if (sample != null) {
                prevSamp = sample;
            }
            sample = "";
            mod = "";

            sample = notation[Math.floor(Math.random() * notation.length)];

            var ok = true;

            while (scramble != "" && sample == prevSamp && ok) {
                sample = notation[Math.floor(Math.random() * notation.length)];
            }

            mod = mods[Math.floor(Math.random() * mods.length)];
            var temp = sample + mod
            scrambleTemp = scrambleTemp + temp + " ";

            var span = document.createElement("span");
            span.innerHTML = sample + mod + " ";
            span.classList.add(sample + mod);

            span.style.fontSize = "19px";

            scramble.appendChild(span);
        }

        localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp))
    }
    else if (type == "7" || type == 7) {
        notation = ["U","D","L","R","F","B", "Rw", "Fw", "Uw", "Bw", "Dw", "Lw", "3Rw", "3Fw", "3Uw", "3Bw", "3Dw", "3Lw"];
        mods = ["2", "'", ""];
        var scrambleTemp = [];

        var sample = "";
        var mod = "";

        scramble.innerHTML = "";

        for (i = 0; i < 75; i++) {
            if (sample != null) {
                prevSamp = sample;
            }
            sample = "";
            mod = "";

            sample = notation[Math.floor(Math.random() * notation.length)];

            var ok = true;

            while (scramble != "" && sample == prevSamp && ok) {
                sample = notation[Math.floor(Math.random() * notation.length)];
            }

            mod = mods[Math.floor(Math.random() * mods.length)];
            var temp = sample + mod
            scrambleTemp = scrambleTemp + temp + " ";

            var span = document.createElement("span");
            span.innerHTML = sample + mod + " ";
            span.classList.add(sample + mod);

            span.style.fontSize = "16px";

            scramble.appendChild(span);
        }

        localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp))
    }
}

generateScramble(sessions[currentSessionIdx].type.slice(0, 1));

// Timer

var timer = document.querySelector(".digits");

var timing = false;
var time = 0;
var running = 0;

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
});

function reset() {
    running = 0;
    time = 0;
    timer.innerHTML = "00:00.00";
}

function increment() {
    if (running == 1) {
        setTimeout(function () {
            time++;
            var mins = Math.floor(time / 100 / 60);
            if (mins <= 9) {
                mins = "0" + mins;
            }
            var secs = Math.floor(time / 100 % 60);
            if (secs <= 9) {
                secs = "0" + secs;
            }

            var hundredths = Math.floor(time % 100);
            if (hundredths <= 9) {
                hundredths = "0" + hundredths;
            }

            timer.innerHTML = mins + ":" + secs + "." + hundredths;
            increment();
        }, 10);
    }
}

document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        timer.style.color = "lightgreen";
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        timer.style.color = "white";
        start();
    }
}

function start() {
    if (running == 0) {
        reset();
        running = 1;
        increment();
    } else {
        running = 0;
        getTime();
        generateScramble(sessions[currentSessionIdx].type.slice(0, 1));
    }
}

// Useful Functions

function getData(name, exeception) {
    if (localStorage.getItem(name) == null) {
        return exeception;
    } else {
        return localStorage.getItem(null);
    }
}

function set(name, variable) {
    localStorage.setItem(name, variable);
}

function format(time) {
    var temp = time.toString();
    var temp2;

    if (temp.length == 6) {
        temp2 = temp.slice(0, 2) + ":" + temp.slice(2, 4) + "." + temp.slice(4, 6);
        return temp2;
    } else if (temp.length == 5) {
        temp2 = "0" + temp.slice(0, 1) + ":" + temp.slice(1, 3) + "." + temp.slice(3, 5);
        return temp2;
    } else if (temp.length == 4) {
        temp2 = temp.slice(0, 2) + "." + temp.slice(2, 4);
        return temp2;
    } else if (temp.length == 3) {
        temp2 = temp.slice(0, 1) + "." + temp.slice(1, 3);
        return temp2;
    } else if (temp.length == 2) {
        temp2 = "0." + temp.slice(0, 2);
        return temp2;
    } else if (temp.length == 1) {
        temp2 = "0.0" + temp.slice(0, 1);
        return temp2;
    }

    //return time;
}

// Sessions

function getTime() {
    var timeFinish = timer.innerHTML.slice(0, 2) + timer.innerHTML.slice(3, 5);
    if (timer.innerHTML.slice(6, 7) == "0") {
        timeFinish = timeFinish + "0" + (parseInt(timer.innerHTML.slice(6, 8)) + 1).toString();
    } else {
        timeFinish = timeFinish + (parseInt(timer.innerHTML.slice(6, 8)) + 1).toString();
    }
    var timeofSolve = timeFinish.toString();

    sessions[currentSessionIdx].times.unshift(timeofSolve);
    sessions[currentSessionIdx].scrambles.unshift(JSON.parse(localStorage.getItem("scrambleTemp")));
    set("sessions", sessions);

    generateTimes();
    generateStats();
}

function generateTimes() {
    var container = document.querySelector(".solves");

    container.innerHTML = "";

    for (i = 0; i < sessions[currentSessionIdx].times.length; i++) {
        var solveBar = document.createElement("div");
        solveBar.id = sessions[currentSessionIdx].times.length - i - 1;
        solveBar.classList.add("solveBar");

        var begin = document.createElement("div");
        begin.classList.add("begin");

        var index = document.createElement("div");
        index.classList.add("index");
        index.innerHTML = (sessions[currentSessionIdx].times.length - i).toString() + ".&nbsp;";

        var time = document.createElement("div");
        time.classList.add("time");
        time.innerHTML = sessions[currentSessionIdx].times[i].slice(0, 2) + ":" + sessions[currentSessionIdx].times[i].slice(2, 4) + "." + sessions[currentSessionIdx].times[i].slice(4, 6);

        begin.appendChild(index);
        begin.appendChild(time);

        var icons = document.createElement("div");
        icons.classList.add("icons");

        var del = document.createElement("div");
        del.classList.add("del");
        del.innerHTML = "X";
        del.addEventListener("click", deleteSolve);

        var exInfo = document.createElement("div");
        exInfo.classList.add("exInfo");
        exInfo.innerHTML = "...";
        exInfo.addEventListener("click", showScram);

        icons.appendChild(del);
        icons.appendChild(exInfo);

        solveBar.appendChild(begin);
        solveBar.appendChild(icons);

        container.appendChild(solveBar);
    }
}

function generateStats() {
    var best = document.querySelector(".bestTime");
    var avg = document.getElementById("avg");
    var worst = document.getElementById("worst");
    var ao5 = document.getElementById("ao5");
    var ao12 = document.getElementById("ao12");
    var ao100 = document.getElementById("ao100");
    var range = document.getElementById("range");

    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };

    Array.max = function (array) {
        return Math.max.apply(Math, array);
    };

    //Default

    if (sessions[currentSessionIdx].times.length == 0) {
        best.innerHTML = "-";
        avg.innerHTML = "-";
        worst.innerHTML = "-";
        ao5.innerHTML = "-";
        ao12.innerHTML = "-";
        ao100.innerHTML = "-";
        range.innerHTML = "-";
    } else {

        // Best

        best.innerHTML = format(Array.min(sessions[currentSessionIdx].times));

        // Avg

        var total = 0;
        var avgTemp = 0;
        for (i = 0; i < sessions[currentSessionIdx].times.length; i++) {
            total += parseInt(sessions[currentSessionIdx].times[i]);
        }
        avgTemp = Math.round(total / sessions[currentSessionIdx].times.length);

        avg.innerHTML = format(avgTemp);

        // Worst

        worst.innerHTML = format(Math.max.apply(Math, sessions[currentSessionIdx].times))

        // Range

        if (sessions[currentSessionIdx].times.length >= 2) {
            var temp = sessions[currentSessionIdx].times;

            avgTemp = Math.max.apply(Math, temp) - Array.min(temp);

            range.innerHTML = format(avgTemp);
        } else {
            ao5.innerHTML = "-";
            ao12.innerHTML = "-";
            ao100.innerHTML = "-";
            range.innerHTML = "-";
        }

        // ao5

        if (sessions[currentSessionIdx].times.length >= 5) {
            // var temp = sessions[currentSessionIdx].times.sort(function (a, b) {
            //     return a - b
            // });

            // var total = 0;
            // var avgTemp = 0;
            // for (i = 0; i < 5; i++) {
            //     total += parseInt(temp[i]);
            // }

            // total -= Array.min(temp);
            // total -= Array.max(temp);
            // avgTemp = Math.round(total / 3);

            // ao5.innerHTML = format(avgTemp);

            var temp = sessions[currentSessionIdx].times;

            var duTemp = temp.slice(0, 5);
            console.log(duTemp)

            var total = 0;
            var avgTemp = 0;
            for (i = 0; i < 5; i++) {
                total += parseInt(duTemp[i]);
            }

            total -= Array.min(duTemp);
            total -= Array.max(duTemp);
            avgTemp = Math.round(total / 3);

            ao5.innerHTML = format(avgTemp);
        } else {
            ao5.innerHTML = "-";
            ao12.innerHTML = "-";
            ao100.innerHTML = "-";
        }

        // ao12

        if (sessions[currentSessionIdx].times.length >= 12) {
            var temp = sessions[currentSessionIdx].times;

            var duTemp = temp.slice(0, 12);
            console.log(duTemp)

            var total = 0;
            var avgTemp = 0;
            for (i = 0; i < 12; i++) {
                total += parseInt(duTemp[i]);
            }

            total -= Array.min(duTemp);
            total -= Array.max(duTemp);
            avgTemp = Math.round(total / 10);

            ao12.innerHTML = format(avgTemp);
        } else {
            ao12.innerHTML = "-";
            ao100.innerHTML = "-";
        }

        // ao100

        if (sessions[currentSessionIdx].times.length >= 100) {
            var temp = sessions[currentSessionIdx].times;

            var duTemp = temp.slice(0, 100);
            console.log(duTemp)

            var total = 0;
            var avgTemp = 0;
            for (i = 0; i < 100; i++) {
                total += parseInt(duTemp[i]);
            }

            total -= parseInt(duTemp[0]) + parseInt(duTemp[1]) + parseInt(duTemp[2]) + parseInt(duTemp[3]) + parseInt(duTemp[4]);
            total -= parseInt(duTemp[99]) + parseInt(duTemp[98]) + parseInt(duTemp[97]) + parseInt(duTemp[96]) + parseInt(duTemp[95]);
            avgTemp = Math.round(total / 90);

            ao100.innerHTML = format(avgTemp);
        } else {
            ao100.innerHTML = "-";
        }
    }
}

function deleteSolve() {
    if (confirm('Are You Sure You Want To Delete This Solve?')) {
        var uppParent1 = this.parentElement;
        var uppParent2 = uppParent1.parentElement;

        var idx = parseInt(uppParent2.id[-1]);
        sessions[currentSessionIdx].times.splice(idx, 1);

        uppParent2.style.display = "none";

        generateStats();
        generateTimes();
    }
}

function showScram() {
    var uppParent1 = this.parentElement;
    var uppParent2 = uppParent1.parentElement;

    var idx = parseInt(uppParent2.id);

    console.log(idx)

    alert(format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]) + "\n" + sessions[currentSessionIdx].scrambles[sessions[currentSessionIdx].scrambles.length - idx - 1]);
}