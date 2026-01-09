---
layout: default
title: Measurement Fundamentals
---

Measurement Fundamentals
========================

The *three R's of Measurement* are Range, Resolution, and Rate

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

 Note: Just because an ADC boasts a high resolution, doesn't mean all that resolution will be usable. Sometimes factors like noise might limit the usable resolution of a device. Or, if you're using a device that only gives signals in the 0-3.3V range, you won't realize the full range capabilities of your device unless you amplify the signal

## Rate

How fast you can take measurements. The is extremely important when frequency measures. As a general rule, your rate should be double that of the highest frequency.

## Types of Error in Measurement

### Systematic Error

### Random Error