jui.define("chart.brush.map.core", [ "jquery", "util.base" ], function($, _) {
    /**
     * @class chart.brush.map.core
     *
     * implements core method for brush
     *
     * @abstract
     * @extends chart.brush.core
     * @requires jquery
     * @requires util.base
     */
	var MapCoreBrush = function() {

        /*/
        this.drawAfter = function(g) {
            this.axis.map.group().append(g);
        }
        /**/

	}

	return MapCoreBrush;
}, "chart.brush.core");