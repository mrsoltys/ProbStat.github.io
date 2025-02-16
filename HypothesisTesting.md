---
layout: default
title: Guide To Hypothesis Testing
---

Guide to Hypothesis Testing
===========================

Hypothesis testing is a fundamental statistical tool used to make inferences about a population based on sample data. 


# The T-Test

The **T-Test** is commonly used to test hypotheses about population means, particularly when the sample size is small and/or the population standard deviation is unknown.

---


## One-Sample T-Test

The **One-Sample T-Test** is used to determine whether the mean of a single sample is significantly different from a known or hypothesized population mean.

### Assumptions:
1. **Independence**: Observations must be independent of each other.
2. **Normality**: The sample should be drawn from a normally distributed population (approximately true for small samples; for larger samples, the **Central Limit Theorem** applies).

### Hypotheses:
- **Null Hypothesis $ H_0 $**: The population mean is equal to the hypothesized mean.
  $$
  H_0: \mu = \mu_0
  $$
- **Alternative Hypothesis (\( H_a \))**:
  - **Two-tailed test**: The mean is different from the hypothesized value.
    $$
    H_a: \mu \neq \mu_0
    $$
  - **Left-tailed test**: The mean is less than the hypothesized value.
    $$
    H_a: \mu < \mu_0
    $$
  - **Right-tailed test**: The mean is greater than the hypothesized value.
    $$
    H_a: \mu > \mu_0
    $$

### Formula:
$$
t = \frac{\bar{x} - \mu_0}{\frac{s}{\sqrt{n}}}
$$
Where:
- $ \bar{x} $ = sample mean
- $ \mu_0 $ = hypothesized population mean
- $ s \) = sample standard deviation
- $ n $ = sample size

### Example:
A battery manufacturer claims that its batteries last **100 hours** on average. A sample of 10 batteries has a **mean lifespan of 95 hours** with a standard deviation of **8 hours**. We test:

$$
H_0: \mu = 100
$$
$$
H_a: \mu < 100
$$

Using the formula:

$$
t = \frac{95 - 100}{\frac{8}{\sqrt{10}}} = \frac{-5}{\frac{8}{3.162}} = \frac{-5}{2.53} = -1.975
$$

Using a **t-table** with **df = n - 1 = 9** at $ \alpha = 0.05 $, we find the critical value is **-1.833**. Since **-1.975 < -1.833**, we **reject \( H_0 \)** and conclude that the battery lifespan is significantly lower than 100 hours.

---