var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({title: 'OSM',
                                              source: new ol.source.OSM()
                                            })]});
var format_kodyfinal2 = new ol.format.GeoJSON();
var features_kodyfinal2 = format_kodyfinal2.readFeatures(geojson_kodyfinal2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kodyfinal2 = new ol.source.Vector();
jsonSource_kodyfinal2.addFeatures(features_kodyfinal2);var lyr_kodyfinal2 = new ol.layer.Vector({
                source:jsonSource_kodyfinal2, 
                style: style_kodyfinal2,
                title: "kody_final_2"
            });var format_dziury = new ol.format.GeoJSON();
var features_dziury = format_dziury.readFeatures(geojson_dziury, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dziury = new ol.source.Vector();
jsonSource_dziury.addFeatures(features_dziury);var lyr_dziury = new ol.layer.Vector({
                source:jsonSource_dziury, 
                style: style_dziury,
                title: "dziury"
            });var format_wydzielone = new ol.format.GeoJSON();
var features_wydzielone = format_wydzielone.readFeatures(geojson_wydzielone, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wydzielone = new ol.source.Vector();
jsonSource_wydzielone.addFeatures(features_wydzielone);var lyr_wydzielone = new ol.layer.Vector({
                source:jsonSource_wydzielone, 
                style: style_wydzielone,
                title: "wydzielone"
            });

lyr_kodyfinal2.setVisible(true);lyr_dziury.setVisible(true);lyr_wydzielone.setVisible(true);
var layersList = [baseLayer,lyr_kodyfinal2,lyr_dziury,lyr_wydzielone];
