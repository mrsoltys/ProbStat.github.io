# Calibration Types


**Calibration** is the process of converting a measured value from an instrument into a best estimate of the true value. In this course, we will focus on three common calibration approaches, each making different assumptions about how the instrument behaves.

## 1. Single Point Calibration

Single-point calibration assumes the instrument has a constant offset error.

### **What we do**

 * Measure the instrument output at one known true value
 * Compute the difference between the measured value and the true value
 * Apply that offset to all future measurements

### **Key assumptions**

 * The instrument response is linear with slope = 1

 * The only error is a constant offset

** Calibration Curve Form **

x_{true}=x_{measured}+b

where:

*  b is the measured offset.

### When to use this

* Quick field calibrations
* Example: Using the Tare button on a scale is a single-point calibaration.
* This is the _minimum_ calibration we should perform with any sensor.


### Limitations

* Does not correct for gain (slope) errors
* Errors grow if the instrument response is not perfectly linear

## 2. Two-Point Calibration

Two-point calibration corrects both offset and scale error by assuming a linear relationship.

### What we do

* Measure the instrument output at two known true values across the range of your insturment
* Fit a straight line between those points
* Use that line as a correction curve

### Key assumptions

* The instrument response is linear over the calibration range

** Calibration Curve Form **

x_{true}=m x_{measured}+b

where:
*  m is the slope (Gain)
*  b is th offset correction.

### When to use this
 *
 * Instruments with linear output
 * Calibrations over a limited operating range

### Limitations

* Cannot correct for nonlinear behavior
* Accuracy degrades outside the calibration range


## 3. Multipoint Calibration

Multipoint calibration is used when the instrument response is not linear.

What we do

Measure the instrument output at many known true values

Fit a curve (polynomial, spline, or interpolation)

Use that curve to convert measured values to true values

Key assumption

The instrument may have nonlinear behavior

More data improves the correction

Mathematical form (example)

A polynomial calibration might look like:

𝑥
𝑡
=
𝑎
0
+
𝑎
1
𝑥
𝑚
+
𝑎
2
𝑥
𝑚
2
+
…
x
t
	​

=a
0
	​

+a
1
	​

x
m
	​

+a
2
	​

x
m
2
	​

+…
When this works well

Sensors with nonlinear physics

Wide operating ranges

High-accuracy requirements

Limitations

Requires more data

Risk of overfitting

Calibration is only valid within the measured range

# Some warnings on calibration

Calibration Is a Model (and All Models Are Wrong)

Calibration Coefficients Have Uncertainty Too

Calibration doesn’t produce a “perfect” equation.

Slope and offset are estimates

They have uncertainty

That uncertainty propagates into final 

Random scatter remains after calibration

A perfectly calibrated sensor can still produce very noisy data.

Calibration Conditions Matter (Context Dependence)

Sensors are rarely calibrated in a vacuum.

Calibration may depend on:

Temperature

Load

Orientation

Environmental conditions

Sensor aging or drift



