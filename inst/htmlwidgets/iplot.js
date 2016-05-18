// Generated by CoffeeScript 1.10.0
HTMLWidgets.widget({
  name: "iplot",
  type: "output",
  initialize: function(widgetdiv, width, height) {
    return d3.select(widgetdiv).append("svg").attr("width", width).attr("height", height).attr("class", "qtlcharts");
  },
  renderValue: function(widgetdiv, x) {
    var chartOpts, ref, ref1, ref2, svg, widgetid;
    svg = d3.select(widgetdiv).select("svg");
    svg.selectAll("*").remove();
    widgetid = d3.select(widgetdiv).attr('id');
    d3.selectAll("div.d3-tip." + widgetid).remove();
    chartOpts = (ref = x.chartOpts) != null ? ref : [];
    chartOpts.width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : svg.attr("width");
    chartOpts.height = (ref2 = chartOpts != null ? chartOpts.height : void 0) != null ? ref2 : svg.attr("height");
    svg.attr("width", chartOpts.width);
    svg.attr("height", chartOpts.height);
    return iplot(widgetdiv, x.data, chartOpts);
  },
  resize: function(widgetdiv, width, height) {
    return d3.select(widgetdiv).select("svg").attr("width", width).attr("height", height);
  }
});
