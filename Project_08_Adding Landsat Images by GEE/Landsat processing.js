var landsat = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
Map.centerObject(ROI, 12)
var clipped = landsat.filterBounds(ROI)
print(clipped.size())
var filterdata = ((clipped.filter(ee.Filter.lt('CLOUD_COVER', 1))).filterDate('2022-1-1' , '2026-7-28')).median().clip(ROI)

Map.addLayer(filterdata, imageVisParam5 , 'False')
Map.addLayer(filterdata, imageVisParam3 , 'True')
Map.addLayer(filterdata, imageVisParam , 'urban')