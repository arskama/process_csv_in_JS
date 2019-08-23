var data = [30, 86, 168, 281, 303, 365];



d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
        .append("div")
        .style("width", function(d) { return d*2 + "px"; })
        .text(function(d) { return d; });

//handleFiles("file://home/amandy/Repos/WebTeam_2019/Documentation_make/process_csv_in_JS/contribution_june_2019.csv");
//handleFiles(null);
var allText = [];
var allTextLines = [];
var Lines = [];
var listOfFiles = [];
var currentChoice;

loadListOfFiles();
document.getElementById("rand_txt").innerHTML = "List of files:";
console.log(typeof(allTextLines));

function loadListOfFiles() {
    let txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://localhost/d3_testA/list_of_files.txt", true);
    txtFile.setRequestHeader('Access-Control-Allow-Headers', '*');
    txtFile.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            listOfFiles = txtFile.responseText;
            console.log("listOfFile is : " + typeof(listOfFiles));
            allTextLines = listOfFiles.split(/\n/);
            console.log("what " + allTextLines.length);
            for(let i = 0; i < allTextLines.length; i++) {
                console.log(i);
                if(allTextLines[i] != "") {
/*                    tmp = document.createElement('div');
                    tmp.className = 'files_' + i;
                    tmp.onclick = function() {
                        current_choice = this.innerHTML;
                        console.log("current_choice = " + current_choice + " or " + this.innerHTML);
                    };
                    tmp.innerHTML = allTextLines[i];
                    //document.getElementById("list_file").innerHTML = allTextLines[i];
                    document.getElementById("list_file").appendChild(tmp);
*/                }
              tmp = document.createElement('div');
                item = document.createElement('choice');
                    item.onclick = function() {
                        current_choice = this.innerHTML;
                        console.log("current_choice = " + current_choice + " or " + this.innerHTML);
                    };
                    item.innerHTML = allTextLines[i];
                tmp.appendChild(item);
                document.getElementById("list_file").appendChild(tmp);

                }
            console.log(listOfFiles);
            console.log(allTextLines);
        }
    };
    //txtFile.open("GET", "file://home/amandy/Repos/WebTeam_2019/Documentation_make/process_csv_in_JS/contribution_june_2019.csv", true);
    txtFile.send(null);
    console.log("YO!");

}

function loadDoc() {
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://localhost/d3_testA/contributions_june_2019.csv", true);
    txtFile.setRequestHeader('Access-Control-Allow-Headers', '*');
    txtFile.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            allText = txtFile.responseText;
            allTextLines = allText.split(/\r\n|\n/);
            console.log(allText);
        }
    };
    //txtFile.open("GET", "file://home/amandy/Repos/WebTeam_2019/Documentation_make/process_csv_in_JS/contribution_june_2019.csv", true);
    txtFile.send(null);
    console.log("YEP!");
};


function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        alert('FileReader supported in this browser.');
        getAsText(files[0]);
          // FileReader are supported.
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    let reader = new FileReader();
    reader.fileName = "file://home/amandy/Repos/WebTeam_2019/Documentation_make/process_csv_in_JS/contribution_june_2019.csv";
    reader.readAsText();
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event) {
    let csv = event.target.results;
    processData(csv);
}

function processData(csv) {
    let allTextLines = csv.split(/\r\n|\n/);
    let lines = [];
    for (let i = 0; i < allTextLines.length; i++) {
        let data = allTextLines[i].split(';');
            let tarr = [];
            for (let j = 0; j < data.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
            
    }
    console.log(lines)
}

function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Cannot Read File!!!");
    }
}











//d3.select("h1").text("hello_world");
/*let canvas = d3.select("body")
            .append("svg")
            .style("width", 500)
            .style("height", 500);


  let bars = canvas.selectAll("div")
             .data(data)
             .enter()
                 .append("div")
                 .style("width", function(d) { return d + "px"; })
                 .attr("y", function (d, i) {i * 50})
                 .text(function(d) { return d; });
*/
