// Generated by CoffeeScript 1.12.5
var ipleiotropy;

ipleiotropy = function(widgetdiv, lod_data, pxg_data, chartOpts) {
  var button_color, callback, chartdivid, dark, g_lod, g_scat, g_slider, geno1, geno2, group, height, homozygotes, i, indtip, initial_value, k, l, light, linecolor, linewidth, lod2_data, lod_at_marker, lod_axispos, lod_nyticks, lod_points, lod_rotate_ylab, lod_title, lod_titlepos, lod_xlab, lod_ylab, lod_ylim, lod_yticks, m1_current, m2_current, margin, marker_pos, markers, my_second_curve, mylodchart, myscatter, myslider, n_color, n_geno, n_geno_sq, point_data, pointcolor, points, pointsize, pointstroke, rectcolor, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref3, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref4, ref5, ref6, ref7, ref8, ref9, results, scat_axispos, scat_nyticks, scat_rotate_ylab, scat_titlepos, scat_xlab, scat_ylab, scat_ylim, scat_yticks, slider_color, slider_height, svg, ticks_at_markers, widgetdivid, width, wleft, wright, x;
  markers = (function() {
    var results;
    results = [];
    for (x in pxg_data.chrByMarkers) {
      results.push(x);
    }
    return results;
  })();
  height = (ref = chartOpts != null ? chartOpts.height : void 0) != null ? ref : 450;
  width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : 900;
  wleft = (ref2 = chartOpts != null ? chartOpts.wleft : void 0) != null ? ref2 : width * 0.5;
  margin = (ref3 = chartOpts != null ? chartOpts.margin : void 0) != null ? ref3 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  lod_axispos = (ref4 = (ref5 = chartOpts != null ? chartOpts.lod_axispos : void 0) != null ? ref5 : chartOpts != null ? chartOpts.axispos : void 0) != null ? ref4 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  lod_titlepos = (ref6 = (ref7 = chartOpts != null ? chartOpts.lod_titlepos : void 0) != null ? ref7 : chartOpts != null ? chartOpts.titlepos : void 0) != null ? ref6 : 20;
  rectcolor = (ref8 = chartOpts != null ? chartOpts.rectcolor : void 0) != null ? ref8 : "#E6E6E6";
  lod_ylim = (ref9 = chartOpts != null ? chartOpts.lod_ylim : void 0) != null ? ref9 : null;
  lod_nyticks = (ref10 = chartOpts != null ? chartOpts.lod_nyticks : void 0) != null ? ref10 : 5;
  lod_yticks = (ref11 = chartOpts != null ? chartOpts.lod_yticks : void 0) != null ? ref11 : null;
  linecolor = (ref12 = chartOpts != null ? chartOpts.linecolor : void 0) != null ? ref12 : ["darkslateblue", "orchid"];
  linewidth = (ref13 = chartOpts != null ? chartOpts.linewidth : void 0) != null ? ref13 : 2;
  lod_title = (ref14 = chartOpts != null ? chartOpts.lod_title : void 0) != null ? ref14 : "";
  lod_xlab = (ref15 = chartOpts != null ? chartOpts.lod_xlab : void 0) != null ? ref15 : "Chromosome";
  lod_ylab = (ref16 = chartOpts != null ? chartOpts.lod_ylab : void 0) != null ? ref16 : "LOD score";
  lod_rotate_ylab = (ref17 = chartOpts != null ? chartOpts.lod_rotate_ylab : void 0) != null ? ref17 : null;
  pointcolor = (ref18 = chartOpts != null ? chartOpts.pointcolor : void 0) != null ? ref18 : null;
  pointstroke = (ref19 = chartOpts != null ? chartOpts.pointstroke : void 0) != null ? ref19 : "black";
  pointsize = (ref20 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? ref20 : 3;
  scat_ylim = (ref21 = chartOpts != null ? chartOpts.scat_ylim : void 0) != null ? ref21 : null;
  scat_nyticks = (ref22 = chartOpts != null ? chartOpts.scat_nyticks : void 0) != null ? ref22 : 5;
  scat_yticks = (ref23 = chartOpts != null ? chartOpts.scat_yticks : void 0) != null ? ref23 : null;
  scat_xlab = (ref24 = chartOpts != null ? chartOpts.scat_xlab : void 0) != null ? ref24 : null;
  scat_ylab = (ref25 = chartOpts != null ? chartOpts.scat_ylab : void 0) != null ? ref25 : null;
  scat_rotate_ylab = (ref26 = chartOpts != null ? chartOpts.scat_rotate_ylab : void 0) != null ? ref26 : null;
  scat_axispos = (ref27 = (ref28 = chartOpts != null ? chartOpts.scat_axispos : void 0) != null ? ref28 : chartOpts != null ? chartOpts.axispos : void 0) != null ? ref27 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  scat_titlepos = (ref29 = (ref30 = chartOpts != null ? chartOpts.scat_titlepos : void 0) != null ? ref30 : chartOpts != null ? chartOpts.titlepos : void 0) != null ? ref29 : 20;
  slider_height = (ref31 = chartOpts != null ? chartOpts.slider_height : void 0) != null ? ref31 : 80;
  slider_color = (ref32 = chartOpts != null ? chartOpts.slider_color : void 0) != null ? ref32 : "#E6E6E6";
  button_color = (ref33 = chartOpts != null ? chartOpts.button_color : void 0) != null ? ref33 : "#E6E6E6";
  ticks_at_markers = (ref34 = chartOpts != null ? chartOpts.ticks_at_markers : void 0) != null ? ref34 : true;
  chartdivid = (ref35 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? ref35 : 'chart';
  widgetdivid = d3.select(widgetdiv).attr('id');
  svg = d3.select(widgetdiv).select("svg");
  lod_at_marker = [null, null];
  if (lod_data.lod != null) {
    if (lod_ylim == null) {
      lod_ylim = [0, 1.05 * d3.max([d3.max(lod_data.lod), d3.max(lod_data.lod2)])];
    }
    lod_at_marker[0] = (function() {
      var results;
      results = [];
      for (i in lod_data.lod) {
        if (lod_data.marker[i] !== "") {
          results.push(lod_data.lod[i]);
        }
      }
      return results;
    })();
    lod_at_marker[1] = (function() {
      var results;
      results = [];
      for (i in lod_data.lod) {
        if (lod_data.marker[i] !== "") {
          results.push(lod_data.lod2[i]);
        }
      }
      return results;
    })();
    mylodchart = d3panels.lodchart({
      height: height - slider_height,
      width: wleft,
      margin: margin,
      axispos: lod_axispos,
      titlepos: lod_titlepos,
      chrGap: 0,
      altrectcolor: null,
      rectcolor: rectcolor,
      ylim: lod_ylim,
      nyticks: lod_nyticks,
      yticks: lod_yticks,
      linecolor: linecolor[0],
      linewidth: linewidth,
      pointcolor: null,
      pointsize: null,
      pointstroke: null,
      title: lod_title,
      xlab: lod_xlab,
      ylab: lod_ylab,
      rotate_ylab: lod_rotate_ylab,
      tipclass: widgetdivid
    });
    g_lod = svg.append("g").attr("id", "lodchart");
    mylodchart(g_lod, lod_data);
    my_second_curve = d3panels.add_lodcurve({
      linecolor: linecolor[1],
      linewidth: linewidth,
      pointcolor: null,
      pointsize: null,
      pointstroke: null,
      tipclass: widgetdivid
    });
    lod2_data = {
      chr: lod_data.chr,
      pos: lod_data.pos,
      lod: lod_data.lod2,
      marker: lod_data.marker
    };
    my_second_curve(mylodchart, lod2_data);
    lod_points = g_lod.selectAll("empty").data([0, 1]).enter().insert("circle").attr("cx", null).attr("cy", null).attr("r", pointsize).attr("fill", function(i) {
      return linecolor[i];
    }).attr("stroke", function(i) {
      return pointstroke;
    }).style("pointer-events", "none");
  }
  g_scat = svg.append("g").attr("id", "scatterplot");
  if (lod_data.lod != null) {
    g_scat.attr("transform", "translate(" + wleft + ",0)");
    wright = width - wleft;
  } else {
    wright = width;
    wleft = width;
  }
  if (scat_xlab == null) {
    scat_xlab = pxg_data.phenames[0];
  }
  if (scat_ylab == null) {
    scat_ylab = pxg_data.phenames[1];
  }
  myscatter = d3panels.scatterplot({
    height: height - slider_height,
    width: wright,
    margin: margin,
    pointcolor: pointcolor,
    pointstroke: pointstroke,
    pointsize: pointsize,
    ylim: scat_ylim,
    nyticks: scat_nyticks,
    yticks: scat_yticks,
    xlab: scat_xlab,
    ylab: scat_ylab,
    rotate_ylab: scat_rotate_ylab,
    axispos: scat_axispos,
    titlepos: scat_titlepos,
    xNA: {
      handle: false,
      force: false
    },
    yNA: {
      handle: false,
      force: false
    },
    rectcolor: rectcolor,
    tipclass: widgetdivid
  });
  point_data = {
    x: pxg_data.pheno1,
    y: pxg_data.pheno2,
    indID: pxg_data.indID
  };
  myscatter(g_scat, point_data);
  points = myscatter.points();
  indtip = myscatter.indtip();
  n_geno = d3panels.matrixMaxAbs(pxg_data.geno);
  n_geno_sq = n_geno * n_geno;
  if (pointcolor != null) {
    n_color = pointcolor.length;
    if (n_color < n_geno_sq) {
      d3.range(n_geno_sq - n_color).map(function(i) {
        return pointcolor.push("#aaa");
      });
    }
    dark = pointcolor.slice(0, n_geno);
    light = pointcolor.slice(n_geno, n_geno_sq);
  } else {
    dark = d3panels.selectGroupColors(n_geno, "dark");
    light = d3panels.selectGroupColors(n_geno_sq, "light").slice(n_geno, n_geno_sq);
  }
  pointcolor = [];
  dark.reverse();
  light.reverse();
  homozygotes = (function() {
    results = [];
    for (var k = 0; 0 <= n_geno ? k < n_geno : k > n_geno; 0 <= n_geno ? k++ : k--){ results.push(k); }
    return results;
  }).apply(this).map(function(i) {
    return i * n_geno + i;
  });
  for (i = l = 0, ref36 = n_geno_sq; 0 <= ref36 ? l < ref36 : l > ref36; i = 0 <= ref36 ? ++l : --l) {
    if (homozygotes.indexOf(i) > -1) {
      pointcolor.push(dark.pop());
    } else {
      pointcolor.push(light.pop());
    }
  }
  geno1 = [];
  geno2 = [];
  group = [];
  m1_current = -1;
  m2_current = -1;
  callback = function(sl) {
    var abs_g1, abs_g2, g1, g1_lab, g2, g2_lab, update, v;
    v = sl.stopindex();
    update = m1_current !== v[0] || m2_current !== v[1];
    m1_current = v[0];
    m2_current = v[1];
    if (update) {
      g1 = d3.range(point_data.x.length).map(function(i) {
        return pxg_data.geno[v[0]][i];
      });
      g2 = d3.range(point_data.x.length).map(function(i) {
        return pxg_data.geno[v[1]][i];
      });
      abs_g1 = (function() {
        var len, m, results1;
        results1 = [];
        for (m = 0, len = g1.length; m < len; m++) {
          x = g1[m];
          results1.push(Math.abs(x));
        }
        return results1;
      })();
      abs_g2 = (function() {
        var len, m, results1;
        results1 = [];
        for (m = 0, len = g2.length; m < len; m++) {
          x = g2[m];
          results1.push(Math.abs(x));
        }
        return results1;
      })();
      group = (function() {
        var results1;
        results1 = [];
        for (i in g1) {
          results1.push(abs_g1[i] - 1 + (abs_g2[i] - 1) * n_geno);
        }
        return results1;
      })();
      points.attr("fill", function(d, i) {
        return pointcolor[group[i]];
      });
      g1_lab = g1.map(function(g) {
        var glab;
        glab = pxg_data.genonames[Math.abs(g) - 1];
        if (g < 0) {
          return "(" + glab + ")";
        } else {
          return "" + glab;
        }
      });
      g2_lab = g2.map(function(g) {
        var glab;
        glab = pxg_data.genonames[Math.abs(g) - 1];
        if (g < 0) {
          return "(" + glab + ")";
        } else {
          return "" + glab;
        }
      });
      if (v[0] > v[1]) {
        indtip.html(function(d, i) {
          return pxg_data.indID[i] + ": " + g2_lab[i] + "&rarr;" + g1_lab[i];
        });
      } else {
        indtip.html(function(d, i) {
          return pxg_data.indID[i] + ": " + g1_lab[i] + "&rarr;" + g2_lab[i];
        });
      }
      if (lod_data.lod != null) {
        return lod_points.attr("cx", function(d, i) {
          return mylodchart.xscale()[lod_data.chr[0]](marker_pos[v[i]]);
        }).attr("cy", function(d, i) {
          return mylodchart.yscale()(lod_at_marker[i][v[i]]);
        });
      }
    }
  };
  g_slider = svg.insert("g").attr("transform", "translate(0," + (height - slider_height) + ")");
  myslider = d3panels.double_slider({
    width: wleft,
    height: slider_height,
    width: wleft,
    margin: margin,
    buttoncolor: button_color,
    rectcolor: rectcolor,
    ticks_at_stops: ticks_at_markers
  });
  marker_pos = (function() {
    var results1;
    results1 = [];
    for (i in lod_data.pos) {
      if (lod_data.marker[i] !== "") {
        results1.push(lod_data.pos[i]);
      }
    }
    return results1;
  })();
  if (lod_data.lod != null) {
    initial_value = [0, 1].map(function(j) {
      var max_index, max_lod;
      max_lod = d3.max(lod_at_marker[j]);
      max_index = lod_at_marker[j].indexOf(max_lod);
      return marker_pos[max_index];
    });
  } else {
    initial_value = null;
  }
  myslider(g_slider, callback, callback, d3.extent(lod_data.pos), marker_pos, initial_value);
  return callback(myslider);
};