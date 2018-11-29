var wms_layers = [];
var format_Perairan_0 = new ol.format.GeoJSON();
var features_Perairan_0 = format_Perairan_0.readFeatures(json_Perairan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perairan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Perairan_0.addFeatures(features_Perairan_0);var lyr_Perairan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perairan_0, 
                style: style_Perairan_0,
    title: 'Perairan<br />\
    <img src="styles/legend/Perairan_0_0.png" /> 10 Meter<br />\
    <img src="styles/legend/Perairan_0_1.png" /> 15 Meter<br />\
    <img src="styles/legend/Perairan_0_2.png" /> 30 Meter<br />'
        });var format_Kepadatan_1 = new ol.format.GeoJSON();
var features_Kepadatan_1 = format_Kepadatan_1.readFeatures(json_Kepadatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kepadatan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Kepadatan_1.addFeatures(features_Kepadatan_1);var lyr_Kepadatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kepadatan_1, 
                style: style_Kepadatan_1,
    title: 'Kepadatan<br />\
    <img src="styles/legend/Kepadatan_1_0.png" /> Rendah<br />\
    <img src="styles/legend/Kepadatan_1_1.png" /> Sedang<br />\
    <img src="styles/legend/Kepadatan_1_2.png" /> Tinggi<br />'
        });var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_2_0.png" /> 1000 Meter<br />\
    <img src="styles/legend/Jalan_2_1.png" /> 200 Meter<br />\
    <img src="styles/legend/Jalan_2_2.png" /> 400 Meter<br />'
        });var lyr_citra_diy_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "BAPPEDA:citra_diy",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "citra_diy",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_citra_diy_3, 0]);var format_RTH_clip_4 = new ol.format.GeoJSON();
var features_RTH_clip_4 = format_RTH_clip_4.readFeatures(json_RTH_clip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTH_clip_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RTH_clip_4.addFeatures(features_RTH_clip_4);var lyr_RTH_clip_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RTH_clip_4, 
                style: style_RTH_clip_4,
    title: 'RTH_clip<br />\
    <img src="styles/legend/RTH_clip_4_0.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/RTH_clip_4_1.png" /> Sangat Sesuai<br />\
    <img src="styles/legend/RTH_clip_4_2.png" /> Sesuai<br />\
    <img src="styles/legend/RTH_clip_4_3.png" /> Tidak Sesuai<br />'
        });var format_RTH_sangat_sesuai_5 = new ol.format.GeoJSON();
var features_RTH_sangat_sesuai_5 = format_RTH_sangat_sesuai_5.readFeatures(json_RTH_sangat_sesuai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTH_sangat_sesuai_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RTH_sangat_sesuai_5.addFeatures(features_RTH_sangat_sesuai_5);var lyr_RTH_sangat_sesuai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RTH_sangat_sesuai_5, 
                style: style_RTH_sangat_sesuai_5,
                title: '<img src="styles/legend/RTH_sangat_sesuai_5.png" /> RTH_sangat_sesuai'
            });var format_Bangunan_terdampak_6 = new ol.format.GeoJSON();
var features_Bangunan_terdampak_6 = format_Bangunan_terdampak_6.readFeatures(json_Bangunan_terdampak_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_terdampak_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bangunan_terdampak_6.addFeatures(features_Bangunan_terdampak_6);var lyr_Bangunan_terdampak_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_terdampak_6, 
                style: style_Bangunan_terdampak_6,
                title: '<img src="styles/legend/Bangunan_terdampak_6.png" /> Bangunan_terdampak'
            });

lyr_Perairan_0.setVisible(true);lyr_Kepadatan_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_citra_diy_3.setVisible(true);lyr_RTH_clip_4.setVisible(true);lyr_RTH_sangat_sesuai_5.setVisible(true);lyr_Bangunan_terdampak_6.setVisible(true);
var layersList = [lyr_Perairan_0,lyr_Kepadatan_1,lyr_Jalan_2,lyr_citra_diy_3,lyr_RTH_clip_4,lyr_RTH_sangat_sesuai_5,lyr_Bangunan_terdampak_6];
lyr_Perairan_0.set('fieldAliases', {'FID_Perair': 'FID_Perair', 'Id': 'Id', 'Skor_P30': 'Skor_P30', 'FID_Pera_1': 'FID_Pera_1', 'Id_1': 'Id_1', 'Skor_P10': 'Skor_P10', 'FID_Pera_2': 'FID_Pera_2', 'Id_12': 'Id_12', 'Skor_P15': 'Skor_P15', 'Skor_Total': 'Skor_Total', 'Bobot_P': 'Bobot_P', 'SB_p': 'SB_p', 'Buffer': 'Buffer', });
lyr_Kepadatan_1.set('fieldAliases', {'Nama_Desa': 'Nama_Desa', 'Kode_Desa': 'Kode_Desa', 'Luas': 'Luas', 'Penduduk': 'Penduduk', 'Total_Area': 'Total_Area', 'luas_ha': 'luas_ha', 'luas_sqm': 'luas_sqm', 'Kecamatan': 'Kecamatan', 'Tingkat': 'Tingkat', 'Skor_pdd': 'Skor_pdd', 'Bobot_pdd': 'Bobot_pdd', 'SB_pdd': 'SB_pdd', });
lyr_Jalan_2.set('fieldAliases', {'FID_jalan_': 'FID_jalan_', 'Id': 'Id', 'FID_jalan1': 'FID_jalan1', 'Id_1': 'Id_1', 'FID_jala_1': 'FID_jala_1', 'Id_12': 'Id_12', 'Skor_jalan': 'Skor_jalan', 'Bobot_jala': 'Bobot_jala', 'SB_jln': 'SB_jln', 'Buffer': 'Buffer', });
lyr_RTH_clip_4.set('fieldAliases', {'FID_Kepada': 'FID_Kepada', 'Nama_Desa': 'Nama_Desa', 'Kode_Desa': 'Kode_Desa', 'Luas': 'Luas', 'Penduduk': 'Penduduk', 'Total_Area': 'Total_Area', 'luas_ha': 'luas_ha', 'luas_sqm': 'luas_sqm', 'Kecamatan': 'Kecamatan', 'Tingkat': 'Tingkat', 'Skor_pdd': 'Skor_pdd', 'Bobot_pdd': 'Bobot_pdd', 'SB_pdd': 'SB_pdd', 'FID_Perair': 'FID_Perair', 'FID_Pera_1': 'FID_Pera_1', 'Id': 'Id', 'Skor_P30': 'Skor_P30', 'FID_Pera_2': 'FID_Pera_2', 'Id_1': 'Id_1', 'Skor_P10': 'Skor_P10', 'FID_Pera_3': 'FID_Pera_3', 'Id_12': 'Id_12', 'Skor_P15': 'Skor_P15', 'Skor_Total': 'Skor_Total', 'Bobot_P': 'Bobot_P', 'SB_p': 'SB_p', 'FID_Jalan': 'FID_Jalan', 'FID_jalan_': 'FID_jalan_', 'Id_12_13': 'Id_12_13', 'FID_jalan1': 'FID_jalan1', 'Id_12_1_14': 'Id_12_1_14', 'FID_jala_1': 'FID_jala_1', 'Id_12_1_15': 'Id_12_1_15', 'Skor_jalan': 'Skor_jalan', 'Bobot_jala': 'Bobot_jala', 'SB_jln': 'SB_jln', 'bbt_ttl': 'bbt_ttl', 'Kesesuaian': 'Kesesuaian', });
lyr_RTH_sangat_sesuai_5.set('fieldAliases', {'FID_Kepada': 'FID_Kepada', 'Nama_Desa': 'Nama_Desa', 'Kode_Desa': 'Kode_Desa', 'Luas': 'Luas', 'Penduduk': 'Penduduk', 'Total_Area': 'Total_Area', 'luas_ha': 'luas_ha', 'luas_sqm': 'luas_sqm', 'Kecamatan': 'Kecamatan', 'Tingkat': 'Tingkat', 'Skor_pdd': 'Skor_pdd', 'Bobot_pdd': 'Bobot_pdd', 'SB_pdd': 'SB_pdd', 'FID_Perair': 'FID_Perair', 'FID_Pera_1': 'FID_Pera_1', 'Id': 'Id', 'Skor_P30': 'Skor_P30', 'FID_Pera_2': 'FID_Pera_2', 'Id_1': 'Id_1', 'Skor_P10': 'Skor_P10', 'FID_Pera_3': 'FID_Pera_3', 'Id_12': 'Id_12', 'Skor_P15': 'Skor_P15', 'Skor_Total': 'Skor_Total', 'Bobot_P': 'Bobot_P', 'SB_p': 'SB_p', 'FID_Jalan': 'FID_Jalan', 'FID_jalan_': 'FID_jalan_', 'Id_12_13': 'Id_12_13', 'FID_jalan1': 'FID_jalan1', 'Id_12_1_14': 'Id_12_1_14', 'FID_jala_1': 'FID_jala_1', 'Id_12_1_15': 'Id_12_1_15', 'Skor_jalan': 'Skor_jalan', 'Bobot_jala': 'Bobot_jala', 'SB_jln': 'SB_jln', 'bbt_ttl': 'bbt_ttl', 'Kesesuaian': 'Kesesuaian', });
lyr_Bangunan_terdampak_6.set('fieldAliases', {'FID_bangun': 'FID_bangun', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'access_roo': 'access_roo', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'building': 'building', 'building_m': 'building_m', 'name': 'name', 'roof_mater': 'roof_mater', 'FID_RTH_sa': 'FID_RTH_sa', 'FID_Kepada': 'FID_Kepada', 'Nama_Desa': 'Nama_Desa', 'Kode_Desa': 'Kode_Desa', 'Luas': 'Luas', 'Penduduk': 'Penduduk', 'Total_Area': 'Total_Area', 'luas_ha': 'luas_ha', 'luas_sqm': 'luas_sqm', 'Kecamatan': 'Kecamatan', 'Tingkat': 'Tingkat', 'Skor_pdd': 'Skor_pdd', 'Bobot_pdd': 'Bobot_pdd', 'SB_pdd': 'SB_pdd', 'FID_Perair': 'FID_Perair', 'FID_Pera_1': 'FID_Pera_1', 'Id': 'Id', 'Skor_P30': 'Skor_P30', 'FID_Pera_2': 'FID_Pera_2', 'Id_1': 'Id_1', 'Skor_P10': 'Skor_P10', 'FID_Pera_3': 'FID_Pera_3', 'Id_12': 'Id_12', 'Skor_P15': 'Skor_P15', 'Skor_Total': 'Skor_Total', 'Bobot_P': 'Bobot_P', 'SB_p': 'SB_p', 'FID_Jalan': 'FID_Jalan', 'FID_jalan_': 'FID_jalan_', 'Id_12_13': 'Id_12_13', 'FID_jalan1': 'FID_jalan1', 'Id_12_1_14': 'Id_12_1_14', 'FID_jala_1': 'FID_jala_1', 'Id_12_1_15': 'Id_12_1_15', 'Skor_jalan': 'Skor_jalan', 'Bobot_jala': 'Bobot_jala', 'SB_jln': 'SB_jln', 'bbt_ttl': 'bbt_ttl', 'Kesesuaian': 'Kesesuaian', });
lyr_Perairan_0.set('fieldImages', {'FID_Perair': 'TextEdit', 'Id': 'TextEdit', 'Skor_P30': 'TextEdit', 'FID_Pera_1': 'TextEdit', 'Id_1': 'TextEdit', 'Skor_P10': 'TextEdit', 'FID_Pera_2': 'TextEdit', 'Id_12': 'TextEdit', 'Skor_P15': 'TextEdit', 'Skor_Total': 'TextEdit', 'Bobot_P': 'TextEdit', 'SB_p': 'TextEdit', 'Buffer': 'TextEdit', });
lyr_Kepadatan_1.set('fieldImages', {'Nama_Desa': 'TextEdit', 'Kode_Desa': 'TextEdit', 'Luas': 'TextEdit', 'Penduduk': 'TextEdit', 'Total_Area': 'TextEdit', 'luas_ha': 'TextEdit', 'luas_sqm': 'TextEdit', 'Kecamatan': 'TextEdit', 'Tingkat': 'TextEdit', 'Skor_pdd': 'TextEdit', 'Bobot_pdd': 'TextEdit', 'SB_pdd': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'FID_jalan_': 'TextEdit', 'Id': 'TextEdit', 'FID_jalan1': 'TextEdit', 'Id_1': 'TextEdit', 'FID_jala_1': 'TextEdit', 'Id_12': 'TextEdit', 'Skor_jalan': 'TextEdit', 'Bobot_jala': 'TextEdit', 'SB_jln': 'TextEdit', 'Buffer': 'TextEdit', });
lyr_RTH_clip_4.set('fieldImages', {'FID_Kepada': 'TextEdit', 'Nama_Desa': 'TextEdit', 'Kode_Desa': 'TextEdit', 'Luas': 'TextEdit', 'Penduduk': 'TextEdit', 'Total_Area': 'TextEdit', 'luas_ha': 'TextEdit', 'luas_sqm': 'TextEdit', 'Kecamatan': 'TextEdit', 'Tingkat': 'TextEdit', 'Skor_pdd': 'TextEdit', 'Bobot_pdd': 'TextEdit', 'SB_pdd': 'TextEdit', 'FID_Perair': 'TextEdit', 'FID_Pera_1': 'TextEdit', 'Id': 'TextEdit', 'Skor_P30': 'TextEdit', 'FID_Pera_2': 'TextEdit', 'Id_1': 'TextEdit', 'Skor_P10': 'TextEdit', 'FID_Pera_3': 'TextEdit', 'Id_12': 'TextEdit', 'Skor_P15': 'TextEdit', 'Skor_Total': 'TextEdit', 'Bobot_P': 'TextEdit', 'SB_p': 'TextEdit', 'FID_Jalan': 'TextEdit', 'FID_jalan_': 'TextEdit', 'Id_12_13': 'TextEdit', 'FID_jalan1': 'TextEdit', 'Id_12_1_14': 'TextEdit', 'FID_jala_1': 'TextEdit', 'Id_12_1_15': 'TextEdit', 'Skor_jalan': 'TextEdit', 'Bobot_jala': 'TextEdit', 'SB_jln': 'TextEdit', 'bbt_ttl': 'TextEdit', 'Kesesuaian': 'TextEdit', });
lyr_RTH_sangat_sesuai_5.set('fieldImages', {'FID_Kepada': 'TextEdit', 'Nama_Desa': 'TextEdit', 'Kode_Desa': 'TextEdit', 'Luas': 'TextEdit', 'Penduduk': 'TextEdit', 'Total_Area': 'TextEdit', 'luas_ha': 'TextEdit', 'luas_sqm': 'TextEdit', 'Kecamatan': 'TextEdit', 'Tingkat': 'TextEdit', 'Skor_pdd': 'TextEdit', 'Bobot_pdd': 'TextEdit', 'SB_pdd': 'TextEdit', 'FID_Perair': 'TextEdit', 'FID_Pera_1': 'TextEdit', 'Id': 'TextEdit', 'Skor_P30': 'TextEdit', 'FID_Pera_2': 'TextEdit', 'Id_1': 'TextEdit', 'Skor_P10': 'TextEdit', 'FID_Pera_3': 'TextEdit', 'Id_12': 'TextEdit', 'Skor_P15': 'TextEdit', 'Skor_Total': 'TextEdit', 'Bobot_P': 'TextEdit', 'SB_p': 'TextEdit', 'FID_Jalan': 'TextEdit', 'FID_jalan_': 'TextEdit', 'Id_12_13': 'TextEdit', 'FID_jalan1': 'TextEdit', 'Id_12_1_14': 'TextEdit', 'FID_jala_1': 'TextEdit', 'Id_12_1_15': 'TextEdit', 'Skor_jalan': 'TextEdit', 'Bobot_jala': 'TextEdit', 'SB_jln': 'TextEdit', 'bbt_ttl': 'TextEdit', 'Kesesuaian': 'TextEdit', });
lyr_Bangunan_terdampak_6.set('fieldImages', {'FID_bangun': 'TextEdit', 'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'access_roo': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'name': 'TextEdit', 'roof_mater': 'TextEdit', 'FID_RTH_sa': 'TextEdit', 'FID_Kepada': 'TextEdit', 'Nama_Desa': 'TextEdit', 'Kode_Desa': 'TextEdit', 'Luas': 'TextEdit', 'Penduduk': 'TextEdit', 'Total_Area': 'TextEdit', 'luas_ha': 'TextEdit', 'luas_sqm': 'TextEdit', 'Kecamatan': 'TextEdit', 'Tingkat': 'TextEdit', 'Skor_pdd': 'TextEdit', 'Bobot_pdd': 'TextEdit', 'SB_pdd': 'TextEdit', 'FID_Perair': 'TextEdit', 'FID_Pera_1': 'TextEdit', 'Id': 'TextEdit', 'Skor_P30': 'TextEdit', 'FID_Pera_2': 'TextEdit', 'Id_1': 'TextEdit', 'Skor_P10': 'TextEdit', 'FID_Pera_3': 'TextEdit', 'Id_12': 'TextEdit', 'Skor_P15': 'TextEdit', 'Skor_Total': 'TextEdit', 'Bobot_P': 'TextEdit', 'SB_p': 'TextEdit', 'FID_Jalan': 'TextEdit', 'FID_jalan_': 'TextEdit', 'Id_12_13': 'TextEdit', 'FID_jalan1': 'TextEdit', 'Id_12_1_14': 'TextEdit', 'FID_jala_1': 'TextEdit', 'Id_12_1_15': 'TextEdit', 'Skor_jalan': 'TextEdit', 'Bobot_jala': 'TextEdit', 'SB_jln': 'TextEdit', 'bbt_ttl': 'TextEdit', 'Kesesuaian': 'TextEdit', });
lyr_Perairan_0.set('fieldLabels', {'FID_Perair': 'no label', 'Id': 'no label', 'Skor_P30': 'no label', 'FID_Pera_1': 'no label', 'Id_1': 'no label', 'Skor_P10': 'no label', 'FID_Pera_2': 'no label', 'Id_12': 'no label', 'Skor_P15': 'no label', 'Skor_Total': 'no label', 'Bobot_P': 'no label', 'SB_p': 'no label', 'Buffer': 'no label', });
lyr_Kepadatan_1.set('fieldLabels', {'Nama_Desa': 'no label', 'Kode_Desa': 'no label', 'Luas': 'no label', 'Penduduk': 'no label', 'Total_Area': 'no label', 'luas_ha': 'no label', 'luas_sqm': 'no label', 'Kecamatan': 'no label', 'Tingkat': 'no label', 'Skor_pdd': 'no label', 'Bobot_pdd': 'no label', 'SB_pdd': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'FID_jalan_': 'no label', 'Id': 'no label', 'FID_jalan1': 'no label', 'Id_1': 'no label', 'FID_jala_1': 'no label', 'Id_12': 'no label', 'Skor_jalan': 'no label', 'Bobot_jala': 'no label', 'SB_jln': 'no label', 'Buffer': 'no label', });
lyr_RTH_clip_4.set('fieldLabels', {'FID_Kepada': 'no label', 'Nama_Desa': 'no label', 'Kode_Desa': 'no label', 'Luas': 'no label', 'Penduduk': 'no label', 'Total_Area': 'no label', 'luas_ha': 'no label', 'luas_sqm': 'no label', 'Kecamatan': 'no label', 'Tingkat': 'no label', 'Skor_pdd': 'no label', 'Bobot_pdd': 'no label', 'SB_pdd': 'no label', 'FID_Perair': 'no label', 'FID_Pera_1': 'no label', 'Id': 'no label', 'Skor_P30': 'no label', 'FID_Pera_2': 'no label', 'Id_1': 'no label', 'Skor_P10': 'no label', 'FID_Pera_3': 'no label', 'Id_12': 'no label', 'Skor_P15': 'no label', 'Skor_Total': 'no label', 'Bobot_P': 'no label', 'SB_p': 'no label', 'FID_Jalan': 'no label', 'FID_jalan_': 'no label', 'Id_12_13': 'no label', 'FID_jalan1': 'no label', 'Id_12_1_14': 'no label', 'FID_jala_1': 'no label', 'Id_12_1_15': 'no label', 'Skor_jalan': 'no label', 'Bobot_jala': 'no label', 'SB_jln': 'no label', 'bbt_ttl': 'no label', 'Kesesuaian': 'inline label', });
lyr_RTH_sangat_sesuai_5.set('fieldLabels', {'FID_Kepada': 'no label', 'Nama_Desa': 'no label', 'Kode_Desa': 'no label', 'Luas': 'no label', 'Penduduk': 'no label', 'Total_Area': 'no label', 'luas_ha': 'no label', 'luas_sqm': 'no label', 'Kecamatan': 'no label', 'Tingkat': 'no label', 'Skor_pdd': 'no label', 'Bobot_pdd': 'no label', 'SB_pdd': 'no label', 'FID_Perair': 'no label', 'FID_Pera_1': 'no label', 'Id': 'no label', 'Skor_P30': 'no label', 'FID_Pera_2': 'no label', 'Id_1': 'no label', 'Skor_P10': 'no label', 'FID_Pera_3': 'no label', 'Id_12': 'no label', 'Skor_P15': 'no label', 'Skor_Total': 'no label', 'Bobot_P': 'no label', 'SB_p': 'no label', 'FID_Jalan': 'no label', 'FID_jalan_': 'no label', 'Id_12_13': 'no label', 'FID_jalan1': 'no label', 'Id_12_1_14': 'no label', 'FID_jala_1': 'no label', 'Id_12_1_15': 'no label', 'Skor_jalan': 'no label', 'Bobot_jala': 'no label', 'SB_jln': 'no label', 'bbt_ttl': 'no label', 'Kesesuaian': 'no label', });
lyr_Bangunan_terdampak_6.set('fieldLabels', {'FID_bangun': 'no label', 'osm_id': 'no label', 'osm_way_id': 'no label', 'access_roo': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'building_m': 'no label', 'name': 'no label', 'roof_mater': 'no label', 'FID_RTH_sa': 'no label', 'FID_Kepada': 'no label', 'Nama_Desa': 'no label', 'Kode_Desa': 'no label', 'Luas': 'no label', 'Penduduk': 'no label', 'Total_Area': 'no label', 'luas_ha': 'no label', 'luas_sqm': 'no label', 'Kecamatan': 'no label', 'Tingkat': 'no label', 'Skor_pdd': 'no label', 'Bobot_pdd': 'no label', 'SB_pdd': 'no label', 'FID_Perair': 'no label', 'FID_Pera_1': 'no label', 'Id': 'no label', 'Skor_P30': 'no label', 'FID_Pera_2': 'no label', 'Id_1': 'no label', 'Skor_P10': 'no label', 'FID_Pera_3': 'no label', 'Id_12': 'no label', 'Skor_P15': 'no label', 'Skor_Total': 'no label', 'Bobot_P': 'no label', 'SB_p': 'no label', 'FID_Jalan': 'no label', 'FID_jalan_': 'no label', 'Id_12_13': 'no label', 'FID_jalan1': 'no label', 'Id_12_1_14': 'no label', 'FID_jala_1': 'no label', 'Id_12_1_15': 'no label', 'Skor_jalan': 'no label', 'Bobot_jala': 'no label', 'SB_jln': 'no label', 'bbt_ttl': 'no label', 'Kesesuaian': 'no label', });
lyr_Bangunan_terdampak_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});