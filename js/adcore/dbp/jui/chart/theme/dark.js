jui.define("chart.theme.dark", [], function() {

    var themeColors = [
        "#12f2e8",
        "#26f67c",
        "#e9f819",
        "#b78bf9",
        "#f94590",
        "#8bccf9",
        "#9228e4",
        "#06d9b6",
        "#fc6d65",
        "#f199ff",
        "#c8f21d",
        "#16a6e5",
        "#00ba60",
        "#91f2a1",
        "#fc9765",
        "#f21d4f"
    ];

    return {
        // common styles
    	backgroundColor : "#222222",
    	fontSize : "12px",
    	fontColor : "#c5c5c5",
		fontFamily : "arial,Tahoma,verdana",
        colors : themeColors,

        // grid styles
    	gridFontColor : "#868686",
    	gridActiveFontColor : "#ff762d",
        gridBorderColor : "#464646",
        gridBorderWidth : 1,
        /** @cfg Grid Border Dash Array */
        gridBorderDashArray : "none",
        /** @cfg  Grid Bar Size */
        gridTickSize : 3,

        gridTickPadding : 5,

        /** @cfg Grid Rect Color */
        gridRectColor : "#ababab",
		gridAxisBorderColor : "#464646",
		gridAxisBorderWidth : 2,
    	gridActiveBorderColor : "#ff7800",

        gridTickBorderWidth : 1.5,

        // brush styles
        tooltipPointRadius : 5, // common
        tooltipPointBorderWidth : 1, // common
        tooltipPointFontWeight : "bold", // common
        barBorderColor : "none",
        barBorderWidth : 0,
        barBorderOpacity : 0,
        barBorderRadius : 3,
        barActiveBackgroundColor : "#fc6d65",
        barPointBorderColor : "white",
        barDisableBackgroundOpacity : 0.4,
    	gaugeBackgroundColor : "#3e3e3e",
        gaugeArrowColor : "#a6a6a6",
        gaugeFontColor : "#c5c5c5",
        gaugeFontSize : "20px",
        gaugeFontWeight : "bold",
        gaugeTitleFontSize : "12px",
        gaugeTitleFontWeight : "normal",
        gaugeTitleFontColor : "#c5c5c5",
        bargaugeBackgroundColor : "#3e3e3e",
        bargaugeFontSize : "11px",
        bargaugeFontColor : "#c5c5c5",
    	pieBorderColor : "#232323",
        pieBorderWidth : 1,
        pieOuterFontSize : "11px",
        pieOuterLineColor : "#a9a9a9",
        pieOuterLineSize : 8,
        pieOuterLineRate : 1.3,
        pieActiveDistance : 5,
        areaBackgroundOpacity : 0.5,
        areaSplitBackgroundColor : "#ebebeb",
        bubbleBackgroundOpacity : 0.5,
        bubbleBorderWidth : 1,
        candlestickBorderColor : "#14be9d",
        candlestickBackgroundColor : "#14be9d",
        candlestickInvertBorderColor : "#ff4848",
        candlestickInvertBackgroundColor : "#ff4848",
        ohlcBorderColor : "#14be9d",
        ohlcInvertBorderColor : "#ff4848",
        ohlcBorderRadius : 5,
        lineBorderWidth : 2,
        lineBorderDashArray : "none",
        lineDisableBorderOpacity : 0.3,
        linePointBorderColor : "white",
        lineSplitBorderColor : null,
        lineSplitBorderOpacity : 0.5,
        pathBackgroundOpacity : 0.2,
        pathBorderWidth : 1,
        scatterBorderColor : "none",
        scatterBorderWidth : 1,
        scatterHoverColor : "#222222",
        waterfallBackgroundColor : "#26f67c",
        waterfallInvertBackgroundColor : "#f94590",
        waterfallEdgeBackgroundColor : "#8bccf9",
        waterfallLineColor : "#a9a9a9",
        waterfallLineDashArray : "0.9",
        focusBorderColor : "#FF7800",
        focusBorderWidth : 1,
        focusBackgroundColor : "#FF7800",
        focusBackgroundOpacity : 0.1,
        pinFontColor : "#FF7800",
        pinFontSize : "10px",
        pinBorderColor : "#FF7800",
        pinBorderWidth : 0.7,

        topologyNodeRadius : 12.5,
        topologyNodeFontSize : "14px",
        topologyNodeFontColor : "#c5c5c5",
        topologyNodeTitleFontSize : "11px",
        topologyNodeTitleFontColor : "#c5c5c5",
        topologyEdgeColor : "#b2b2b2",
        topologyActiveEdgeColor : "#905ed1",
        topologyEdgeFontSize : "10px",
        topologyEdgeFontColor : "#c5c5c5",
        topologyEdgePointRadius : 3,
        topologyTooltipBackgroundColor : "#222222",
        topologyTooltipBorderColor : "#ccc",
        topologyTooltipFontSize : "11px",
        topologyTooltipFontColor : "#c5c5c5",

        // widget styles
        titleFontColor : "#ffffff",
        titleFontSize : "14px",
        titleFontWeight : "normal",
        legendFontColor : "#ffffff",
        legendFontSize : "11px",
        legendIconRadius : 5.5,
        tooltipFontColor : "#333333",
        tooltipFontSize : "12px",
        tooltipBackgroundColor : "white",
        tooltipBorderColor : "white",
        tooltipBackgroundOpacity : 1,
        scrollBackgroundSize : 7,
        scrollBackgroundColor : "#3e3e3e",
        scrollThumbBackgroundColor : "#666666",
        scrollThumbBorderColor : "#686868",
        zoomBackgroundColor : "red",
        zoomFocusColor : "gray",
        zoomScrollBackgroundSize : 50,
        zoomScrollBackgroundColor : "#000",
        zoomScrollFocusColor : "#fff",
        zoomScrollBrushColor : "#000",
        crossBorderColor : "#a9a9a9",
        crossBorderWidth : 1,
        crossBorderOpacity : 0.8,
        crossBalloonFontSize : "11px",
        crossBalloonFontColor : "#333",
        crossBalloonBackgroundColor : "white",
        crossBalloonBackgroundOpacity : 1,

        mapPathBackgroundColor : "#67B7DC",
        mapPathBackgroundOpacity : 1,
        mapPathBorderColor : "white",
        mapPathBorderWidth : 0,
        mapPathBorderOpacity : 0,
        mapControlButtonColor : "#3994e2",
        mapControlScrollColor : "#000",
        mapControlScrollLineColor : "#fff",
        mapBubbleBackgroundOpacity : 0.5,
        mapBubbleBorderWidth : 1
    }
});