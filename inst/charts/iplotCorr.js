// Generated by CoffeeScript 1.7.1
var iplotCorr;

iplotCorr = function(data, chartOpts) {
  var cells, chartdivid, colorScale, corXscale, corYscale, corZscale, corcolors, corr, corr_tip, corrplot, cortitle, drawScatter, height, i, j, margin, nGroup, ncorrX, ncorrY, nind, nvar, pixel_height, pixel_width, rectcolor, scat_tip, scatcolors, scatterplot, scattitle, svg, totalh, totalw, width, zlim, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
  height = (_ref = chartOpts != null ? chartOpts.height : void 0) != null ? _ref : 450;
  width = (_ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? _ref1 : height;
  margin = (_ref2 = chartOpts != null ? chartOpts.margin : void 0) != null ? _ref2 : {
    left: 70,
    top: 40,
    right: 5,
    bottom: 70,
    inner: 5
  };
  corcolors = (_ref3 = chartOpts != null ? chartOpts.corcolors : void 0) != null ? _ref3 : ["darkslateblue", "white", "crimson"];
  zlim = (_ref4 = chartOpts != null ? chartOpts.zlim : void 0) != null ? _ref4 : [-1, 0, 1];
  rectcolor = (_ref5 = chartOpts != null ? chartOpts.rectcolor : void 0) != null ? _ref5 : "#E6E6E6";
  cortitle = (_ref6 = chartOpts != null ? chartOpts.cortitle : void 0) != null ? _ref6 : "";
  scattitle = (_ref7 = chartOpts != null ? chartOpts.scattitle : void 0) != null ? _ref7 : "";
  scatcolors = (_ref8 = chartOpts != null ? chartOpts.scatcolors : void 0) != null ? _ref8 : null;
  chartdivid = (_ref9 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? _ref9 : 'chart';
  totalh = height + margin.top + margin.bottom;
  totalw = (width + margin.left + margin.right) * 2;
  svg = d3.select("div#" + chartdivid).append("svg").attr("height", totalh).attr("width", totalw);
  corrplot = svg.append("g").attr("id", "corplot").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  scatterplot = svg.append("g").attr("id", "scatterplot").attr("transform", "translate(" + (margin.left * 2 + margin.right + width) + "," + margin.top + ")");
  nind = data.indID.length;
  nvar = data["var"].length;
  ncorrX = data.cols.length;
  ncorrY = data.rows.length;
  corXscale = d3.scale.ordinal().domain(d3.range(ncorrX)).rangeBands([0, width]);
  corYscale = d3.scale.ordinal().domain(d3.range(ncorrY)).rangeBands([height, 0]);
  corZscale = d3.scale.linear().domain(zlim).range(corcolors);
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
  scatterplot.append("rect").attr("height", height).attr("width", width).attr("fill", rectcolor).attr("stroke", "black").attr("stroke-width", 1).attr("pointer-events", "none");
  corr_tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
    return d3.format(".2f")(d.value);
  }).direction('e').offset([0, 10]);
  corrplot.call(corr_tip);
  cells = corrplot.selectAll("empty").data(corr).enter().append("rect").attr("class", "cell").attr("x", function(d) {
    return corXscale(d.col);
  }).attr("y", function(d) {
    return corYscale(d.row);
  }).attr("width", corXscale.rangeBand()).attr("height", corYscale.rangeBand()).attr("fill", function(d) {
    return corZscale(d.value);
  }).attr("stroke", "none").attr("stroke-width", 2).on("mouseover", function(d) {
    d3.select(this).attr("stroke", "black");
    corr_tip.show(d);
    corrplot.append("text").attr("class", "corrlabel").attr("x", corXscale(d.col) + pixel_width / 2).attr("y", height + margin.bottom * 0.2).text(data["var"][data.cols[d.col]]).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
    return corrplot.append("text").attr("class", "corrlabel").attr("y", corYscale(d.row) + pixel_height / 2).attr("x", -margin.left * 0.1).text(data["var"][data.rows[d.row]]).attr("dominant-baseline", "middle").attr("text-anchor", "end");
  }).on("mouseout", function(d) {
    corr_tip.hide(d);
    d3.selectAll("text.corrlabel").remove();
    return d3.select(this).attr("stroke", "none");
  }).on("click", function(d) {
    return drawScatter(d.col, d.row);
  });
  nGroup = d3.max(data.group);
  if (!(scatcolors != null) || scatcolors.length < nGroup) {
    if (nGroup === 1) {
      scatcolors = [d3.rgb(150, 150, 150)];
    } else if (nGroup <= 3) {
      scatcolors = ["crimson", "green", "darkslateblue"];
    } else {
      if (nGroup <= 10) {
        colorScale = d3.scale.category10();
      } else {
        colorScale = d3.scale.category20();
      }
      scatcolors = (function() {
        var _results;
        _results = [];
        for (i in d3.range(nGroup)) {
          _results.push(colorScale(i));
        }
        return _results;
      })();
    }
  }
  scat_tip = d3.tip().attr('class', 'd3-tip').html(function(d, i) {
    return data.indID[i];
  }).direction('e').offset([0, 10]);
  scatterplot.call(scat_tip);
  drawScatter = function(i, j) {
    var xScale, xticks, yScale, yticks;
    d3.selectAll("circle.points").remove();
    d3.selectAll("text.axes").remove();
    d3.selectAll("line.axes").remove();
    xScale = d3.scale.linear().domain(d3.extent(data.dat[data.cols[i]])).range([margin.inner, width - margin.inner]);
    yScale = d3.scale.linear().domain(d3.extent(data.dat[data.rows[j]])).range([height - margin.inner, margin.inner]);
    scatterplot.append("text").attr("id", "xaxis").attr("class", "axes").attr("x", width / 2).attr("y", height + margin.bottom * 0.7).text(data["var"][data.cols[i]]).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("fill", "slateblue");
    scatterplot.append("text").attr("id", "yaxis").attr("class", "axes").attr("x", -margin.left * 0.8).attr("y", height / 2).text(data["var"][data.rows[j]]).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("transform", "rotate(270," + (-margin.left * 0.8) + "," + (height / 2) + ")").attr("fill", "slateblue");
    xticks = xScale.ticks(5);
    yticks = yScale.ticks(5);
    scatterplot.selectAll("empty").data(xticks).enter().append("text").attr("class", "axes").text(function(d) {
      return formatAxis(xticks)(d);
    }).attr("x", function(d) {
      return xScale(d);
    }).attr("y", height + margin.bottom * 0.3).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
    scatterplot.selectAll("empty").data(yticks).enter().append("text").attr("class", "axes").text(function(d) {
      return formatAxis(yticks)(d);
    }).attr("x", -margin.left * 0.1).attr("y", function(d) {
      return yScale(d);
    }).attr("dominant-baseline", "middle").attr("text-anchor", "end");
    scatterplot.selectAll("empty").data(xticks).enter().append("line").attr("class", "axes").attr("x1", function(d) {
      return xScale(d);
    }).attr("x2", function(d) {
      return xScale(d);
    }).attr("y1", 0).attr("y2", height).attr("stroke", "white").attr("stroke-width", 1);
    scatterplot.selectAll("empty").data(yticks).enter().append("line").attr("class", "axes").attr("y1", function(d) {
      return yScale(d);
    }).attr("y2", function(d) {
      return yScale(d);
    }).attr("x1", 0).attr("x2", width).attr("stroke", "white").attr("stroke-width", 1);
    return scatterplot.selectAll("empty").data(d3.range(nind)).enter().append("circle").attr("class", "points").attr("cx", function(d) {
      return xScale(data.dat[data.cols[i]][d]);
    }).attr("cy", function(d) {
      return yScale(data.dat[data.rows[j]][d]);
    }).attr("r", function(d) {
      var x, y;
      x = data.dat[data.cols[i]][d];
      y = data.dat[data.rows[j]][d];
      if ((x != null) && (y != null)) {
        return 3;
      } else {
        return null;
      }
    }).attr("stroke", "black").attr("stroke-width", 1).attr("fill", function(d) {
      return scatcolors[data.group[d] - 1];
    }).on("mouseover", scat_tip.show).on("mouseout", scat_tip.hide);
  };
  corrplot.append("rect").attr("height", height).attr("width", width).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 1).attr("pointer-events", "none");
  scatterplot.append("rect").attr("height", height).attr("width", width).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 1).attr("pointer-events", "none");
  corrplot.append("text").text(cortitle).attr("id", "corrtitle").attr("x", width / 2).attr("y", -margin.top / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  scatterplot.append("text").text(scattitle).attr("id", "scattitle").attr("x", width / 2).attr("y", -margin.top / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  return d3.select("div#caption").style("opacity", 1);
};
