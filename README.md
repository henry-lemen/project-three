# Project-three

Group 1: Darren Holzhausen, Aamir Shah, Henry Lemen

Data Set: https://www.kaggle.com/datasets/nathaniellybrand/chicago-car-crash-dataset

Presentation: https://docs.google.com/presentation/d/1sdLj7BpsWEdizmvTpcWEHE6fpqeCFgwmXJ-guA5fKC4/edit?usp=sharing 

When examining the data, we found that the file was large, with almost 750,000 lines of data. We decided to keep only the columns that were relevant to the questions we asked. From there, we needed to convert the "CRASH_DATE" column to Datetime, and then we kept only the data from 2018, 2019, 2020, 2021, and 2022. Once the data was cleaned to only include information relevant to the questions posed, we wrote the dataframe to a CSV file, which we then used for the remainder of the project.

We then each began examining the questions we asked and determined the best visualizations to display that data. The purpose here was to accurately represent the data in a way that is easy to understand and easy to use. For example, when accessing the project files, if a user wanted to interact with the heatmap, they simply need to open the html file with the live server and interact with the drop-down menu to view the data for each year.

Taking into account ethical considerations, this dataset does not contain any personally identifiable information like names, addresses, or license plate numbers, making sure that the driver's personal information is kept safe. It was important to us also to make sure that data was not skewed in any way, and based on our analysis we did not find any bias.


Questions Asked:
What is the distribution of car crashes by neighborhood in Chicago?

## What is the frequency of car crashes across Chicago?
Based on the data, we saw an overall decrease in the number of crashes over time, with the lowest number of crashes in occurring in 2020 likey due to the Covid-19 pandemic with more people staying home and less cars on the road. However, even with the overall decrease in crashes, the data still shows the same area with higher crash frequency year over year, including the neighborhoods of the Loop, River North, and parts of the West Loop. This shows that these are the areas with the highest frequency of car crashes year over year.

## What are the major causes of car crashes in Chicago?
Based on the bar chart analysis:
Failing to Yield Right-of-Way – A leading cause across all years.
Following Too Closely – Frequently results in rear-end collisions.
Improper Overtaking/Passing – Dangerous lane changes and risky maneuvers.
Improper Lane Usage – Lane discipline violations contribute to crashes.
Failing to Reduce Speed to Avoid a Crash – Speeding or late braking leads to accidents.

## What times of day do car crashes most frequently happen?
From the pie chart analysis:
Evening Rush Hour (4:00 – 5:00 PM) – The highest number of crashes occur during this period, likely due to traffic congestion and driver fatigue.
Morning Commute (8:00 – 11:00 AM) – Another peak time as people travel to work and school.
Late Night & Early Morning (After 8:00 PM, Before 7:00 AM) – Lower crash frequency due to reduced traffic.

## GeoJSON map
Clicking through the different neighborhoods and years, it can be seen that in the year 2020 there was a significant decrease in the amount of traffic accidents. This can be seen in almost any neighborhood that is clicked on. One outlier was the Austin neighborhood in the west central part of the city where accidents actually increased. In the year that there was less traffic in general, the amount of accidents decreased.

Some links used for reference:
PapaParse
https://thaekeh.medium.com/processing-csv-files-with-javascript-and-papa-parse-5e69fd951baa
GeoPandas
https://geopandas.org/en/v0.5.0/gallery/create_geopandas_from_pandas.html
GeoJSON file source
https://github.com/blackmad/neighborhoods/blob/master/chicago.geojson?short_path=5e4e158





Project Overiew: In this project, we are examining car crash data. This data is important to analyze, since it can help us to understand factors like areas of the city where car crashes are more likely to occur, time of day crashes are more likely to occur, and the major causes of car crashes. By understanding these things, a plan can be developed to help reduce the number of crashes, or funding for traffic safety programs can be allocated to the proper areas.
