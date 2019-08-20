var data = [30, 86, 168, 281, 303, 365];


d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
        .append("div")
        .style("width", function(d) { return d*2 + "px"; })
        .text(function(d) { return d; });
        
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
