# project-three

Group 1: Darren Holzhausen, Aamir Shah, Henry Lemen

Data Set: https://www.kaggle.com/datasets/nathaniellybrand/chicago-car-crash-dataset

Questions Asked:
What is the distribution of car crashes by neighborhood in Chicago?
What is the frequency of car crashes across Chicago?
What are the major causes of car crashes in Chicago?
What times of day do car crashes most frequently happen?

Project Overiew: In this project, we are examining car crash data. This data is important to analyze, since it can help us to understand factors like areas of the city where car crashes are more likely to occur, time of day crashes are more likely to occur, and the major causes of car crashes. By understanding these things, a plan can be developed to help reduce the number of crashes, or funding for traffic safety programs can be allocated to the proper areas.

When examining the data, we found that the file was large, with almost 750,000 lines of data. We decided to keep only the columns that were relevant to the questions we asked. From there, we needed to convert the "CRASH_DATE" column to Datetime, and then we kept only the data from 2018, 2019, 2020, 2021, and 2022. Once the data was cleaned to only include information relevant to the questions posed, we wrote the dataframe to a CSV file, which we then used for the remainder of the project.

We then each began examining the questions we asked and determined the best visualizations to display that data. The purpose here was to accurately represent the data in a way that is easy to understand and easy to use. For example, when accessing the project files, if a user wanted to interact with the heatmap, they simply need to open the html file with the live server and interact with the drop-down menu to view the data for each year.

Taking into account ethical considerations, this dataset does not contain any personally identifiable information like names, addresses, or license plate numbers, making sure that the driver's personal information is kept safe. It was important to us also to make sure that data was not skewed in any way, and based on our analysis we did not find any bias.
