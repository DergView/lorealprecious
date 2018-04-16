Raphael.fn.pieChart = function (cx, cy, r, values,stroke,colors,colourids) {
    var paper = this,
        rad = Math.PI / 180,
        chart = this.set();
    function sector(cx, cy, r, startAngle, endAngle, params) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);

        return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    var angle = -275,
        total = 0,
        start = 0,
        colors = colors,
        process = function (j,colors) {
           

            var value = values[j],            
            sectorcolors= colors,
                angleplus = 353.25 * value / total,
                popangle = angle + (angleplus / 2),
                color = "hsb(" + start + ", 1, .5)",              
                ms = 100,
                delta = 30,
                bcolor = "hsb(" + start + ", 1, 1)",
                p = sector(cx, cy, r, angle, angle + angleplus,{gradient: "90-" + sectorcolors[i] + "-" + sectorcolors[i], stroke: stroke, "stroke-width": 0});
                
            p.click(function(event){
            
           // p.id = values[j];
            p.node.id = colourids[j];
            
           
            });

            p.hover(function() {                   
                     p.animate({stroke:"#7f345a","stroke-width": 2},{scale: [1.1, 1.1, cx, cy]}, ms, "elastic");
    },
   
                   function() {                   
                    p.animate({stroke:stroke,"stroke-width": 0},{scale: [1, 1, cx, cy]}, ms, "elastic");
    });
            angle += angleplus + 0.25;
            p.attr("id","5");
            //console.log(p.attr());
            //console.log(p.id);
            chart.push(p);           
            start += .1;
        };
    for (var i = 0, ii = values.length; i < ii; i++) {
        total += values[i];
    }
    for (var i = 0; i < ii; i++) {
        process(i,colors);
    }
    return chart;
};

/*(function (raphael) {
    $(function () {
        var values = [],
            labels = [],
            sectorsize = 3.5;
        $("tr").each(function () {            
            values.push(sectorsize);       
            
        });       
        $("table").hide();
        raphael("holder", 451, 451).pieChart(225.5, 225.5, 225.5, values, "#fff");
    });
})(Raphael.ninja());*/