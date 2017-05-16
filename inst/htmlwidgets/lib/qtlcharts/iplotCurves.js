// Generated by CoffeeScript 1.12.6
var iplotCurves;

iplotCurves = function(widgetdiv, curve_data, scatter1_data, scatter2_data, chartOpts) {
  var allpoints, axispos, chartdivid, curves, curves_nxticks, curves_nyticks, curves_title, curves_xlab, curves_xlim, curves_xticks, curves_ylab, curves_ylim, curves_yticks, g, g_curves, g_scat1, g_scat2, group, hbot, height, htop, i, linecolor, linecolorhilit, linewidth, linewidthhilit, margin, mycurvechart, myscatterplot1, myscatterplot2, ngroup, nind, nscatter, pointcolor, pointcolorhilit, points1, points2, pointsize, pointsizehilit, pointstroke, rectcolor, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref3, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref37, ref38, ref39, ref4, ref40, ref41, ref42, ref43, ref44, ref45, ref46, ref47, ref48, ref49, ref5, ref50, ref51, ref52, ref53, ref54, ref6, ref7, ref8, ref9, scan1_yNA, scan2_yNA, scat1_nxticks, scat1_nyticks, scat1_title, scat1_xNA, scat1_xlab, scat1_xlim, scat1_xticks, scat1_yNA, scat1_ylab, scat1_ylim, scat1_yticks, scat2_nxticks, scat2_nyticks, scat2_title, scat2_xNA, scat2_xlab, scat2_xlim, scat2_xticks, scat2_yNA, scat2_ylab, scat2_ylim, scat2_yticks, svg, titlepos, wbot, widgetdivid, width, wtop;
  height = (ref = chartOpts != null ? chartOpts.height : void 0) != null ? ref : 1000;
  width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : 1000;
  htop = (ref2 = chartOpts != null ? chartOpts.htop : void 0) != null ? ref2 : height / 2;
  margin = (ref3 = chartOpts != null ? chartOpts.margin : void 0) != null ? ref3 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  axispos = (ref4 = chartOpts != null ? chartOpts.axispos : void 0) != null ? ref4 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  titlepos = (ref5 = chartOpts != null ? chartOpts.titlepos : void 0) != null ? ref5 : 20;
  rectcolor = (ref6 = chartOpts != null ? chartOpts.rectcolor : void 0) != null ? ref6 : "#E6E6E6";
  pointcolor = (ref7 = (ref8 = chartOpts != null ? chartOpts.pointcolor : void 0) != null ? ref8 : chartOpts != null ? chartOpts.color : void 0) != null ? ref7 : null;
  pointstroke = (ref9 = chartOpts != null ? chartOpts.pointstroke : void 0) != null ? ref9 : "black";
  pointsize = (ref10 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? ref10 : 3;
  pointcolorhilit = (ref11 = (ref12 = chartOpts != null ? chartOpts.pointcolorhilit : void 0) != null ? ref12 : chartOpts != null ? chartOpts.colorhilit : void 0) != null ? ref11 : null;
  pointsizehilit = (ref13 = chartOpts != null ? chartOpts.pointsizehilit : void 0) != null ? ref13 : 6;
  linecolor = (ref14 = (ref15 = chartOpts != null ? chartOpts.linecolor : void 0) != null ? ref15 : chartOpts != null ? chartOpts.color : void 0) != null ? ref14 : null;
  linecolorhilit = (ref16 = (ref17 = chartOpts != null ? chartOpts.linecolorhilit : void 0) != null ? ref17 : chartOpts != null ? chartOpts.colorhilit : void 0) != null ? ref16 : null;
  linewidth = (ref18 = chartOpts != null ? chartOpts.linewidth : void 0) != null ? ref18 : 2;
  linewidthhilit = (ref19 = chartOpts != null ? chartOpts.linewidthhilit : void 0) != null ? ref19 : 2;
  curves_xlim = (ref20 = chartOpts != null ? chartOpts.curves_xlim : void 0) != null ? ref20 : null;
  curves_ylim = (ref21 = chartOpts != null ? chartOpts.curves_ylim : void 0) != null ? ref21 : null;
  curves_nxticks = (ref22 = chartOpts != null ? chartOpts.curves_nxticks : void 0) != null ? ref22 : 5;
  curves_xticks = (ref23 = chartOpts != null ? chartOpts.curves_xticks : void 0) != null ? ref23 : null;
  curves_nyticks = (ref24 = chartOpts != null ? chartOpts.curves_nyticks : void 0) != null ? ref24 : 5;
  curves_yticks = (ref25 = chartOpts != null ? chartOpts.curves_yticks : void 0) != null ? ref25 : null;
  curves_title = (ref26 = chartOpts != null ? chartOpts.curves_title : void 0) != null ? ref26 : "";
  curves_xlab = (ref27 = (ref28 = chartOpts != null ? chartOpts.curves_xlab : void 0) != null ? ref28 : chartOpts != null ? chartOpts.xlab : void 0) != null ? ref27 : "X";
  curves_ylab = (ref29 = (ref30 = chartOpts != null ? chartOpts.curves_ylab : void 0) != null ? ref30 : chartOpts != null ? chartOpts.ylab : void 0) != null ? ref29 : "Y";
  scat1_xlim = (ref31 = chartOpts != null ? chartOpts.scat1_xlim : void 0) != null ? ref31 : null;
  scat1_ylim = (ref32 = chartOpts != null ? chartOpts.scat1_ylim : void 0) != null ? ref32 : null;
  scat1_xNA = (ref33 = chartOpts != null ? chartOpts.scat1_xNA : void 0) != null ? ref33 : {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  };
  scat1_yNA = (ref34 = chartOpts != null ? chartOpts.scat1_yNA : void 0) != null ? ref34 : {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  };
  scat1_nxticks = (ref35 = chartOpts != null ? chartOpts.scat1_nxticks : void 0) != null ? ref35 : 5;
  scat1_xticks = (ref36 = chartOpts != null ? chartOpts.scat1_xticks : void 0) != null ? ref36 : null;
  scat1_nyticks = (ref37 = chartOpts != null ? chartOpts.scat1_nyticks : void 0) != null ? ref37 : 5;
  scat1_yticks = (ref38 = chartOpts != null ? chartOpts.scat1_yticks : void 0) != null ? ref38 : null;
  scat1_title = (ref39 = chartOpts != null ? chartOpts.scat1_title : void 0) != null ? ref39 : "";
  scat1_xlab = (ref40 = chartOpts != null ? chartOpts.scat1_xlab : void 0) != null ? ref40 : "X";
  scat1_ylab = (ref41 = chartOpts != null ? chartOpts.scat1_ylab : void 0) != null ? ref41 : "Y";
  scat2_xlim = (ref42 = chartOpts != null ? chartOpts.scat2_xlim : void 0) != null ? ref42 : null;
  scat2_ylim = (ref43 = chartOpts != null ? chartOpts.scat2_ylim : void 0) != null ? ref43 : null;
  scat2_xNA = (ref44 = chartOpts != null ? chartOpts.scat2_xNA : void 0) != null ? ref44 : {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  };
  scat2_yNA = (ref45 = chartOpts != null ? chartOpts.scat2_yNA : void 0) != null ? ref45 : {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  };
  scat2_nxticks = (ref46 = chartOpts != null ? chartOpts.scat2_nxticks : void 0) != null ? ref46 : 5;
  scat2_xticks = (ref47 = chartOpts != null ? chartOpts.scat2_xticks : void 0) != null ? ref47 : null;
  scat2_nyticks = (ref48 = chartOpts != null ? chartOpts.scat2_nyticks : void 0) != null ? ref48 : 5;
  scat2_yticks = (ref49 = chartOpts != null ? chartOpts.scat2_yticks : void 0) != null ? ref49 : null;
  scat2_title = (ref50 = chartOpts != null ? chartOpts.scat2_title : void 0) != null ? ref50 : "";
  scat2_xlab = (ref51 = chartOpts != null ? chartOpts.scat2_xlab : void 0) != null ? ref51 : "X";
  scat2_ylab = (ref52 = chartOpts != null ? chartOpts.scat2_ylab : void 0) != null ? ref52 : "Y";
  chartdivid = (ref53 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? ref53 : 'chart';
  widgetdivid = d3.select(widgetdiv).attr('id');
  margin = d3panels.check_listarg_v_default(margin, {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  });
  axispos = d3panels.check_listarg_v_default(axispos, {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  });
  scat1_xNA = d3panels.check_listarg_v_default(scat1_xNA, {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  });
  scan1_yNA = d3panels.check_listarg_v_default(scat1_yNA, {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  });
  scat2_xNA = d3panels.check_listarg_v_default(scat2_xNA, {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  });
  scan2_yNA = d3panels.check_listarg_v_default(scat2_yNA, {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  });
  nscatter = (scatter1_data != null) + (scatter2_data != null);
  htop = nscatter === 0 ? height : htop;
  hbot = height - htop;
  htop = htop;
  hbot = hbot;
  wtop = width;
  wbot = width / 2;
  svg = d3.select(widgetdiv).select("svg");
  nind = curve_data.y.length;
  group = (ref54 = curve_data != null ? curve_data.group : void 0) != null ? ref54 : (function() {
    var j, len, ref55, results;
    ref55 = curve_data.data;
    results = [];
    for (j = 0, len = ref55.length; j < len; j++) {
      i = ref55[j];
      results.push(1);
    }
    return results;
  })();
  ngroup = d3.max(group);
  group = (function() {
    var j, len, results;
    results = [];
    for (j = 0, len = group.length; j < len; j++) {
      g = group[j];
      results.push(g != null ? g - 1 : g);
    }
    return results;
  })();
  pointcolor = pointcolor != null ? pointcolor : d3panels.selectGroupColors(ngroup, "light");
  pointcolorhilit = pointcolorhilit != null ? pointcolorhilit : d3panels.selectGroupColors(ngroup, "dark");
  linecolor = linecolor != null ? linecolor : d3panels.selectGroupColors(ngroup, "light");
  linecolorhilit = linecolorhilit != null ? linecolorhilit : d3panels.selectGroupColors(ngroup, "dark");
  mycurvechart = d3panels.curvechart({
    width: wtop,
    height: htop,
    margin: margin,
    axispos: axispos,
    titlepos: titlepos,
    rectcolor: rectcolor,
    linecolor: linecolor,
    linecolorhilit: linecolorhilit,
    linewidth: linewidth,
    linewidthhilit: linewidthhilit,
    xlim: curves_xlim,
    ylim: curves_ylim,
    nxticks: curves_nxticks,
    xticks: curves_xticks,
    nyticks: curves_nyticks,
    yticks: curves_yticks,
    title: curves_title,
    xlab: curves_xlab,
    ylab: curves_ylab,
    tipclass: widgetdivid
  });
  if (nscatter > 0) {
    myscatterplot1 = d3panels.scatterplot({
      width: wbot,
      height: hbot,
      margin: margin,
      axispos: axispos,
      titlepos: titlepos,
      rectcolor: rectcolor,
      pointcolor: pointcolor,
      pointstroke: pointstroke,
      pointsize: pointsize,
      xlim: scat1_xlim,
      ylim: scat1_ylim,
      xNA: scat1_xNA,
      yNA: scat1_yNA,
      nxticks: scat1_nxticks,
      xticks: scat1_xticks,
      nyticks: scat1_nyticks,
      yticks: scat1_yticks,
      title: scat1_title,
      xlab: scat1_xlab,
      ylab: scat1_ylab,
      tipclass: widgetdivid
    });
  }
  if (nscatter === 2) {
    myscatterplot2 = d3panels.scatterplot({
      width: wbot,
      height: hbot,
      margin: margin,
      axispos: axispos,
      titlepos: titlepos,
      rectcolor: rectcolor,
      pointcolor: pointcolor,
      pointstroke: pointstroke,
      pointsize: pointsize,
      xlim: scat2_xlim,
      ylim: scat2_ylim,
      xNA: scat2_xNA,
      yNA: scat2_yNA,
      nxticks: scat2_nxticks,
      xticks: scat2_xticks,
      nyticks: scat2_nyticks,
      yticks: scat2_yticks,
      title: scat2_title,
      xlab: scat2_xlab,
      ylab: scat2_ylab,
      tipclass: widgetdivid
    });
  }
  g_curves = svg.append("g").attr("id", "curvechart");
  mycurvechart(g_curves, curve_data);
  if (nscatter > 0) {
    g_scat1 = svg.append("g").attr("id", "scatterplot1").attr("transform", "translate(0," + htop + ")");
    myscatterplot1(g_scat1, scatter1_data);
  }
  if (nscatter === 2) {
    g_scat2 = svg.append("g").attr("id", "scatterplot2").attr("transform", "translate(" + wbot + "," + htop + ")");
    myscatterplot2(g_scat2, scatter2_data);
  }
  if (nscatter > 0) {
    points1 = myscatterplot1.points();
  }
  if (nscatter === 2) {
    points2 = myscatterplot2.points();
  }
  if (nscatter === 1) {
    allpoints = [points1];
  }
  if (nscatter === 2) {
    allpoints = [points1, points2];
  }
  curves = mycurvechart.curves();
  pointcolor = d3panels.expand2vector(pointcolor, ngroup);
  pointcolorhilit = d3panels.expand2vector(pointcolorhilit, ngroup);
  linecolor = d3panels.expand2vector(linecolor, ngroup);
  linecolorhilit = d3panels.expand2vector(linecolorhilit, ngroup);
  curves.on("mouseover", function(d, i) {
    d3.select(this).attr("stroke", linecolorhilit[group[i]]).raise();
    if (nscatter > 0) {
      d3.selectAll("circle.pt" + i).attr("r", pointsizehilit);
    }
    if (nscatter > 0) {
      return d3.selectAll("circle.pt" + i).attr("fill", pointcolorhilit[group[i]]);
    }
  }).on("mouseout", function(d, i) {
    d3.select(this).attr("stroke", linecolor[group[i]]).lower();
    if (nscatter > 0) {
      d3.selectAll("circle.pt" + i).attr("r", pointsize);
    }
    if (nscatter > 0) {
      return d3.selectAll("circle.pt" + i).attr("fill", pointcolor[group[i]]);
    }
  });
  if (nscatter > 0) {
    return allpoints.forEach(function(points) {
      return points.on("mouseover", function(d, i) {
        d3.selectAll("circle.pt" + i).attr("r", pointsizehilit);
        d3.selectAll("circle.pt" + i).attr("fill", pointcolorhilit[group[i]]);
        return d3.select("path.path" + i).attr("stroke", linecolorhilit[group[i]]).raise();
      }).on("mouseout", function(d, i) {
        d3.selectAll("circle.pt" + i).attr("r", pointsize);
        d3.selectAll("circle.pt" + i).attr("fill", pointcolor[group[i]]);
        return d3.select("path.path" + i).attr("stroke", linecolor[group[i]]).lower();
      });
    });
  }
};
