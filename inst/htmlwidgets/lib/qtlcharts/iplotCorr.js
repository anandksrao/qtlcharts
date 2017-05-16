// Generated by CoffeeScript 1.12.6
var iplotCorr;

iplotCorr = function(widgetdiv, data, chartOpts) {
  var cells, chartdivid, colorScale, corXscale, corYscale, corZscale, corcolors, corr, corr_tip, corrplot, cortitle, drawScatter, height, i, j, margin, min_paneldim, nGroup, ncorrX, ncorrY, nind, nvar, panelheight, panelwidth, pixel_height, pixel_width, pointsize, rectcolor, ref, ref1, ref10, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, scat_tip, scatcolors, scatterplot, scattitle, svg, widgetdivid, width, zlim;
  height = (ref = chartOpts != null ? chartOpts.height : void 0) != null ? ref : 560;
  width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : 1050;
  margin = (ref2 = chartOpts != null ? chartOpts.margin : void 0) != null ? ref2 : {
    left: 70,
    top: 40,
    right: 5,
    bottom: 70,
    inner: 5
  };
  corcolors = (ref3 = chartOpts != null ? chartOpts.corcolors : void 0) != null ? ref3 : ["darkslateblue", "white", "crimson"];
  zlim = (ref4 = chartOpts != null ? chartOpts.zlim : void 0) != null ? ref4 : [-1, 0, 1];
  rectcolor = (ref5 = chartOpts != null ? chartOpts.rectcolor : void 0) != null ? ref5 : "#E6E6E6";
  cortitle = (ref6 = chartOpts != null ? chartOpts.cortitle : void 0) != null ? ref6 : "";
  scattitle = (ref7 = chartOpts != null ? chartOpts.scattitle : void 0) != null ? ref7 : "";
  scatcolors = (ref8 = chartOpts != null ? chartOpts.scatcolors : void 0) != null ? ref8 : null;
  pointsize = (ref9 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? ref9 : 3;
  chartdivid = (ref10 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? ref10 : 'chart';
  margin = d3panels.check_listarg_v_default(margin, {
    left: 70,
    top: 40,
    right: 5,
    bottom: 70,
    inner: 5
  });
  panelheight = height - margin.top - margin.bottom;
  panelwidth = (width - 2 * margin.left - 2 * margin.right) / 2;
  min_paneldim = d3.min([panelheight, panelwidth]);
  panelheight = min_paneldim;
  panelwidth = min_paneldim;
  widgetdivid = d3.select(widgetdiv).attr('id');
  svg = d3.select(widgetdiv).select("svg");
  corrplot = svg.append("g").attr("id", "corplot").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  scatterplot = svg.append("g").attr("id", "scatterplot").attr("transform", "translate(" + (margin.left * 2 + margin.right + panelwidth) + "," + margin.top + ")");
  nind = data.indID.length;
  nvar = data["var"].length;
  ncorrX = data.cols.length;
  ncorrY = data.rows.length;
  corXscale = d3.scaleBand().domain(d3.range(ncorrX)).range([0, panelwidth]);
  corYscale = d3.scaleBand().domain(d3.range(ncorrY)).range([panelheight, 0]);
  corZscale = d3.scaleLinear().domain(zlim).range(corcolors);
  pixel_width = corXscale(1) - corXscale(0);
  pixel_height = corYscale(0) - corYscale(1);
  corr = [];
  for (i in data.corr) {
    for (j in data.corr[i]) {
      corr.push({
        row: i,
        col: j,
        value: data.corr[i][j]
      });
    }
  }
  scatterplot.append("rect").attr("height", panelheight).attr("width", panelwidth).attr("fill", rectcolor).attr("stroke", "black").attr("stroke-width", 1).attr("pointer-events", "none");
  corr_tip = d3.tip().attr('class', "d3-tip " + widgetdivid).html(function(d) {
    return d3.format(".2f")(d.value);
  }).direction('e').offset([0, 10]);
  corrplot.call(corr_tip);
  cells = corrplot.selectAll("empty").data(corr).enter().append("rect").attr("class", "cell").attr("x", function(d) {
    return corXscale(d.col);
  }).attr("y", function(d) {
    return corYscale(d.row);
  }).attr("width", Math.abs(corXscale(0) - corXscale(1))).attr("height", Math.abs(corYscale(0) - corYscale(1))).attr("fill", function(d) {
    return corZscale(d.value);
  }).attr("stroke", "none").attr("stroke-width", 2).on("mouseover", function(d) {
    d3.select(this).attr("stroke", "black");
    corr_tip.show(d);
    corrplot.append("text").attr("class", "corrlabel").attr("x", corXscale(d.col) + pixel_width / 2).attr("y", panelheight + margin.bottom * 0.2).text(data["var"][data.cols[d.col]]).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
    return corrplot.append("text").attr("class", "corrlabel").attr("y", corYscale(d.row) + pixel_height / 2).attr("x", -margin.left * 0.1).text(data["var"][data.rows[d.row]]).attr("dominant-baseline", "middle").attr("text-anchor", "end");
  }).on("mouseout", function(d) {
    corr_tip.hide(d);
    d3.selectAll("text.corrlabel").remove();
    return d3.select(this).attr("stroke", "none");
  }).on("click", function(d) {
    return drawScatter(d.col, d.row);
  });
  nGroup = d3.max(data.group);
  scatcolors = d3panels.expand2vector(scatcolors);
  if (!(scatcolors != null) || scatcolors.length < nGroup) {
    if (nGroup === 1) {
      scatcolors = ["#969696"];
    } else if (nGroup === 2) {
      scatcolors = ["MediumVioletRed", "slateblue"];
    } else if (nGroup === 3) {
      scatcolors = ["MediumVioletRed", "MediumSeaGreen", "slateblue"];
    } else {
      if (nGroup <= 10) {
        colorScale = d3.schemeCategory10;
      } else {
        colorScale = d3.schemeCategory20;
      }
      scatcolors = (function() {
        var results;
        results = [];
        for (i in d3.range(nGroup)) {
          results.push(colorScale[i]);
        }
        return results;
      })();
    }
  }
  scat_tip = d3.tip().attr('class', "d3-tip " + widgetdivid).html(function(d, i) {
    return data.indID[i];
  }).direction('e').offset([0, 10]);
  scatterplot.call(scat_tip);
  drawScatter = function(i, j) {
    var xScale, xticks, yScale, yticks;
    d3.selectAll("circle.points").remove();
    d3.selectAll("text.axes").remove();
    d3.selectAll("line.axes").remove();
    xScale = d3.scaleLinear().domain(d3.extent(data.dat[data.cols[i]])).range([margin.inner, panelwidth - margin.inner]);
    yScale = d3.scaleLinear().domain(d3.extent(data.dat[data.rows[j]])).range([panelheight - margin.inner, margin.inner]);
    scatterplot.append("text").attr("id", "xaxis").attr("class", "axes").attr("x", panelwidth / 2).attr("y", panelheight + margin.bottom * 0.7).text(data["var"][data.cols[i]]).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("fill", "slateblue");
    scatterplot.append("text").attr("id", "yaxis").attr("class", "axes").attr("x", -margin.left * 0.8).attr("y", panelheight / 2).text(data["var"][data.rows[j]]).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("transform", "rotate(270," + (-margin.left * 0.8) + "," + (panelheight / 2) + ")").attr("fill", "slateblue");
    xticks = xScale.ticks(5);
    yticks = yScale.ticks(5);
    scatterplot.selectAll("empty").data(xticks).enter().append("text").attr("class", "axes").text(function(d) {
      return d3panels.formatAxis(xticks)(d);
    }).attr("x", function(d) {
      return xScale(d);
    }).attr("y", panelheight + margin.bottom * 0.3).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
    scatterplot.selectAll("empty").data(yticks).enter().append("text").attr("class", "axes").text(function(d) {
      return d3panels.formatAxis(yticks)(d);
    }).attr("x", -margin.left * 0.1).attr("y", function(d) {
      return yScale(d);
    }).attr("dominant-baseline", "middle").attr("text-anchor", "end");
    scatterplot.selectAll("empty").data(xticks).enter().append("line").attr("class", "axes").attr("x1", function(d) {
      return xScale(d);
    }).attr("x2", function(d) {
      return xScale(d);
    }).attr("y1", 0).attr("y2", panelheight).attr("stroke", "white").attr("stroke-width", 1);
    scatterplot.selectAll("empty").data(yticks).enter().append("line").attr("class", "axes").attr("y1", function(d) {
      return yScale(d);
    }).attr("y2", function(d) {
      return yScale(d);
    }).attr("x1", 0).attr("x2", panelwidth).attr("stroke", "white").attr("stroke-width", 1);
    return scatterplot.selectAll("empty").data(d3.range(nind)).enter().append("circle").attr("class", "points").attr("cx", function(d) {
      return xScale(data.dat[data.cols[i]][d]);
    }).attr("cy", function(d) {
      return yScale(data.dat[data.rows[j]][d]);
    }).attr("r", function(d) {
      var x, y;
      x = data.dat[data.cols[i]][d];
      y = data.dat[data.rows[j]][d];
      if ((x != null) && (y != null)) {
        return pointsize;
      } else {
        return null;
      }
    }).attr("stroke", "black").attr("stroke-width", 1).attr("fill", function(d) {
      return scatcolors[data.group[d] - 1];
    }).on("mouseover", scat_tip.show).on("mouseout", scat_tip.hide);
  };
  corrplot.append("rect").attr("height", panelheight).attr("width", panelwidth).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 1).attr("pointer-events", "none");
  scatterplot.append("rect").attr("height", panelheight).attr("width", panelwidth).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 1).attr("pointer-events", "none");
  corrplot.append("text").text(cortitle).attr("id", "corrtitle").attr("x", panelwidth / 2).attr("y", -margin.top / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  scatterplot.append("text").text(scattitle).attr("id", "scattitle").attr("x", panelwidth / 2).attr("y", -margin.top / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  return d3.select("div#caption").style("opacity", 1);
};
