---
layout: default
title: Probability and Statistics Guide
---


Hello World
===========

Population Vs. Sample
=====================

### Population

The entire set of items or outcomes that can be studied or observed.
E.g., All possible hands in a game of blackjack, or the streamflow measurements for all years in Boulder Creek’s history. It is rare that we have the entire population to study, so more often we look at the Sample

### Sample
A subset of the population used to _infer_ information about the whole population.
E.g., The peak annual streamflows for Boulder Creek over the past 100 years (as opposed to all possible years).

> _Most_ datasets we encounter are _Samples_!


<iframe src="Figures/chi_squared_interactive.html" width="800" height="600"></iframe>
> Figure: The blue line shows the PDF of a Chi-Squared Distribution (DF=4). The Orange bars represent a frequency histogram of randomly sampled values from the population. Notice as the sample size increases, the histogram of the __Sample__ looks more and more like the PDF of the __Population__. A take home message from this is _small data sets can provide an innacurate view of the big picture!_

Summary Statistics
==================
When describing a friend, you might use a few generalized terms to simplify their whole being into a few adjectives. (_He_'s got _white glasses_ and _thin_ build.)

Similarly we describe large data sets with __summary statistics__ to give us a general idea of the shape of the data. These statistics include:

Measures of Center
----
<iframe src="Figures/chi_squared_pdf_corrected_mode.html" width="800" height="600"></iframe>
> The _Mean_, _Median_, and _Mode_ all different ways to estimate the center of a data set. They all come with their strengths and weaknesses.

### Mean

The sum of all data points divided by the number of points. It represents the 'balance point' of the data, and is especially meaningful if the data is follows a _normal distribution_.

$$\mu=\frac{\sum x_i}{n}$$


Where:


$$x_i$$: Each data point
$$n$$: Number of data points


### Median

The middle value in a dataset when arranged in ascending order. If the number of data points is even, the median is the average of the two middle values. The median corresponds to the value at the 2nd quartile (50th percentile).

Example: For the dataset [2, 3, 7], the median is 3. For [2, 3, 7, 8], the median is (3 + 7) / 2 = 5.


### Mode

The most frequently occurring value(s) in a dataset.
Example: For the dataset [1, 2, 2, 3, 4], the mode is 2. 


Measures of Spread
---

### Standard Deviation

### Inter Quartile Range (IQR)

### Max / Min

Data Types
==========
Understanding data types is crucial for selecting appropriate statistical methods and visualizations.

## Continuous Data
Quantitative Data that can take any value within a range. Examples: Streamflow measurements, temperature.
## Discrete Data
Quantitative Data that can take only specific values, often counted as whole numbers. Examples: Number of cards in a hand, number of students in a class.
## Ordinal Data
Categorical Data with a specific order but no consistent difference between categories. Examples: Rankings, customer satisfaction levels, T-shirt sizes (Small, Medium, Large)
## Nominal Data
Categorical Data without a specific order. Examples: Types of playing cards (hearts, diamonds, etc.), colors.





$$ \int_{-\infty}^{\infty} P(X) dX$$


Basics of Measurement
=====================

## Range

Range refers to the limits within which a measurement system can accurately operate.

Most digital data acquisition devices use an Analog to Digital converter (ADC), and the resolution of the measurement is limited by the ADC. 

* The Arduino Uno's ADC has a range of 0 V to 5 V
* The NI USB-6002 has a range of -10 V to 10 V

## Resolution

The smallest distinguishable change in a measured quantity that an instrument or method can reliably detect. Higher resolution enables finer distinctions in data.

Most digital data acquisition devices use an Analog to Digital converter (ADC), and the resolution of the measurement is limited by the ADC. 

 * *Arduino Uno*'s ADC has a resolution of 10 bits (2^10=1024 unique possible bins)
 * *Teensy 3.2* is an Arduino-based micro-controller with a ADC resolution of 13 bits (2^13=8192 unique possible bins).
 * *NI USB-6002* has a ADC resolution of 16 bits (2^16 = 65536 unique possible bins)

 Note: Just because an ADC boasts a high resolution, doesn't mean all that resolution will be usable. Sometimes factors like noise might limit the usable resolution of a device. 

## Rate

## Types of Error in Measurement

### Systematic Error

### Random Error