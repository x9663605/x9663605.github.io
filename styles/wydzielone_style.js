var size = 0;

var styleCache_wydzielone={}
var style_wydzielone = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(51,160,44,1.0)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_wydzielone[key]){
        var text = new ol.style.Text({
              font: '14.3px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_wydzielone[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_wydzielone[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};