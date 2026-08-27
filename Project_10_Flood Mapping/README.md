\# Interactive Sentinel-2 NDWI Analysis \& Temporal Comparison Tool



An interactive \*\*Google Earth Engine (GEE)\*\* application for satellite-based water-body and flood-related analysis using \*\*Sentinel-2 Surface Reflectance imagery\*\*.



The application allows users to define a custom \*\*Area of Interest (AOI/ROI)\*\* and interactively analyze and compare NDWI-derived water information across different years, months, and days using a split-screen map interface.



\---



\## 🌍 Project Overview



This project demonstrates how Google Earth Engine can be used to develop an interactive remote-sensing application rather than performing satellite-image analysis as a static workflow.



The application integrates:



\- Sentinel-2 satellite imagery

\- Automated image filtering

\- Surface reflectance preprocessing

\- User-defined ROI selection

\- Temporal filtering

\- NDWI calculation

\- Multi-year comparison

\- Interactive split-screen visualization

\- Dynamic map-layer generation



The primary objective is to provide a simple interface through which GIS users can investigate changes in surface water conditions over time without manually downloading and processing individual satellite scenes.



\---



\## 🚀 Key Features



\### 1. Sentinel-2 Image Processing



The application uses:



`COPERNICUS/S2\_SR\_HARMONIZED`



The Sentinel-2 Surface Reflectance Harmonized dataset is used as the primary imagery source.



Images are filtered based on:



\- Spatial extent

\- Cloud percentage

\- Year

\- Month

\- Day



\---



\### 2. User-Defined Area of Interest



Users can interactively draw their own ROI directly on the map.



Supported geometries include:



\- Polygon

\- Rectangle



The selected geometry is stored dynamically and used as the spatial filter for the Sentinel-2 image collection.



Conceptually:



```text

User draws ROI

&#x20;      ↓

ROI stored as geometry

&#x20;      ↓

Sentinel-2 filterBounds(ROI)

&#x20;      ↓

Temporal filtering

&#x20;      ↓

Image composite

&#x20;      ↓

NDWI calculation

&#x20;      ↓

Visualization

