# iplotScanone_ci: lod curves + phe x gen (as mean +/- 2 SE) plot
# Karl W Broman

iplotScanone_ci = (lod_data, pxg_data, chartOpts) ->

  markers = (x for x of pxg_data.chrByMarkers)

  # chartOpts start
  height = chartOpts?.height ? 450 # height of image in pixels
  wleft = chartOpts?.wleft ? 700 # width of left panel in pixels
  wright = chartOpts?.wright ? 300 # width of right panel in pixels
  margin = chartOpts?.margin ? {left:60, top:40, right:40, bottom: 40, inner:5} # margins in pixels (left, top, right, bottom, inner)
  lod_axispos = chartOpts?.lod_axispos ? chartOpts?.axispos ? {xtitle:25, ytitle:30, xlabel:5, ylabel:5} # position of axis labels in pixels (xtitle, ytitle, xlabel, ylabel) in LOD curve panel
  lod_titlepos = chartOpts?.lod_titlepos ? chartOpts?.titlepos ? 20 # position of title for LOD curve panel, in pixels
  chrGap = chartOpts?.chrGap ? 8 # gap between chromosomes
  darkrect = chartOpts?.darkrect ? "#C8C8C8" # color of darker background rectangle
  lightrect = chartOpts?.lightrect ? "#E6E6E6" # color of lighter background rectangle
  lod_ylim = chartOpts?.lod_ylim ? null # y-axis limits in LOD curve panel
  lod_nyticks = chartOpts?.lod_nyticks ? 5 # number of ticks in y-axis in LOD curve panel 
  lod_yticks = chartOpts?.lod_yticks ? null # vector of tick positions for y-axis in LOD curve panel
  lod_linecolor = chartOpts?.lod_linecolor ? "darkslateblue" # line color for LOD curves
  lod_linewidth = chartOpts?.lod_linewidth ? 2 # line width for LOD curves
  lod_pointcolor = chartOpts?.lod_pointcolor ? "#E9CFEC" # color for points at markers in LOD curve panel
  lod_pointsize = chartOpts?.lod_pointsize ? 0 # size of points at markers (default = 0 corresponding to no visible points at markers)
  lod_pointstroke = chartOpts?.lod_pointstroke ? "black" # color of outer circle for points at markers in LOD curve panel
  lod_title = chartOpts?.lod_title ? "" # title of LOD curve panel
  lod_xlab = chartOpts?.lod_xlab ? "Chromosome" # x-axis label for LOD curve panel
  lod_ylab = chartOpts?.lod_ylab ? "LOD score" # y-axis label for LOD curve panel
  lod_rotate_ylab = chartOpts?.lod_rotate_ylab ? null # indicates whether to rotate the y-axis label 90 degrees, in LOD curve panel
  eff_ylim = chartOpts?.eff_ylim ? null # y-axis limits in effect plot panel
  eff_nyticks = chartOpts?.eff_nyticks ? 5 # number of ticks in y-axis in effect plot panel
  eff_yticks = chartOpts?.eff_yticks ? null # vector of tick positions for y-axis in effect plot panel
  eff_linecolor = chartOpts?.eff_linecolor ? "slateblue" # line color in effect plot panel
  eff_linewidth = chartOpts?.eff_linewidth ? "3" # line width in effect plot panel
  eff_xlab = chartOpts?.eff_xlab ? "Genotype" # x-axis label in effect plot panel
  eff_ylab = chartOpts?.eff_ylab ? "Phenotype" # y-axis label in effect plot panel
  eff_rotate_ylab = chartOpts?.eff_rotate_ylab ? null # indicates whether to rotate the y-axis label 90 degrees, in effect plot panel
  eff_segwidth = chartOpts?.eff_segwidth ? null # width of line segments in effect plot panel, in pixels
  eff_axispos = chartOpts?.eff_axispos ? chartOpts?.axispos ? {xtitle:25, ytitle:30, xlabel:5, ylabel:5} # position of axis labels in pixels (xtitle, ytitle, xlabel, ylabel) in effect plot panel
  eff_titlepos = chartOpts?.eff_titlepos ? chartOpts?.titlepos ? 20 # position of title for effect plot panel, in pixels
  # chartOpts end
  chartdivid = chartOpts?.chartdivid ? 'chart'

  totalh = height + margin.top + margin.bottom
  totalw = wleft + wright + (margin.left + margin.right)*2

  mylodchart = lodchart().lodvarname("lod")
                         .height(height)
                         .width(wleft)
                         .margin(margin)
                         .axispos(lod_axispos)
                         .titlepos(lod_titlepos)
                         .chrGap(chrGap)
                         .darkrect(darkrect)
                         .lightrect(lightrect)
                         .ylim(lod_ylim)
                         .nyticks(lod_nyticks)
                         .yticks(lod_yticks)
                         .linecolor(lod_linecolor)
                         .linewidth(lod_linewidth)
                         .pointcolor(lod_pointcolor)
                         .pointsize(lod_pointsize)
                         .pointstroke(lod_pointstroke)
                         .title(lod_title)
                         .xlab(lod_xlab)
                         .ylab(lod_ylab)
                         .rotate_ylab(lod_rotate_ylab)

  svg = d3.select("div##{chartdivid}")
          .append("svg")
          .attr("height", totalh)
          .attr("width", totalw)

  g_lod = svg.append("g")
             .attr("id", "lodchart")
             .datum(lod_data)
             .call(mylodchart)

  plotCI = (markername, markerindex) ->
    svg.select("g#cichart").remove()
    
    g = pxg_data.geno[markerindex]
    gabs = (Math.abs(x) for x in g)

    chr = pxg_data.chrByMarkers[markername]
    chrtype = pxg_data.chrtype[chr]
    genonames = pxg_data.genonames[chrtype]

    means = []
    se = []
    for j in [1..genonames.length]
      phesub = (p for p,i in pxg_data.pheno when gabs[i] == j)

      if phesub.length>0
        ave = (phesub.reduce (a,b) -> a+b)/phesub.length
        means.push(ave)
      else means.push(null)

      if phesub.length>1
        variance = (phesub.reduce (a,b) -> a+Math.pow(b-ave, 2))/(phesub.length-1)
        se.push((Math.sqrt(variance/phesub.length)))
      else
        se.push(null)

    low = (means[i]-2*se[i] for i of means)
    high = (means[i]+2*se[i] for i of means)

    range = [d3.min(low), d3.max(high)]
    if eff_ylim?
      eff_ylim = [d3.min([range[0],eff_ylim[0]]), d3.max([range[1],eff_ylim[1]])]
    else
      eff_ylim = range

    mycichart = cichart().height(height)
                         .width(wright)
                         .margin(margin)
                         .axispos(eff_axispos)
                         .titlepos(eff_titlepos)
                         .title(markername)
                         .xlab(eff_xlab)
                         .ylab(eff_ylab)
                         .rotate_ylab(eff_rotate_ylab)
                         .ylim(eff_ylim)
                         .nyticks(eff_nyticks)
                         .yticks(eff_yticks)
                         .segcolor(eff_linecolor)
                         .vertsegcolor(eff_linecolor)
                         .segstrokewidth(eff_linewidth)
                         .segwidth(eff_segwidth)
                         .rectcolor(lightrect)
  
    svg.append("g")
       .attr("id", "cichart")
       .attr("transform", "translate(#{wleft+margin.left+margin.right},0)")
       .datum({'means':means, 'low':low, 'high':high, 'categories':genonames})
       .call(mycichart)

  # animate points at markers on click
  mylodchart.markerSelect()
            .on "click", (d,i) ->
                  plotCI(markers[i], i)
