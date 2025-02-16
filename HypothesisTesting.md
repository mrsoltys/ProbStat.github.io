---
layout: default
title: Guide To Hypothesis Testing
---

Guide to Hypothesis Testing
===========================

Hypothesis testing is a fundamental statistical tool used to make inferences about a population based on sample data. In this class, we'll take a 7-step approach to hypothesis testing:
### Summary of the 7-Step Hypothesis Testing Process:
1. **State the null and alternative hypotheses**.
2. **Choose the significance level** \( \alpha \).
3. **Determine the appropriate test statistic**.
4. **Identify the random sampling distribution (RSD)**.
5. **Find the critical value** or decide to use a **p-value approach**.
6. **Perform the calculations** for the test statistic and/or p-value.
7. **Draw a conclusion** based on the comparison of the test statistic with the critical value or the p-value with \( \alpha \). Write an appropriate "We Have Sufficient Statistical Evidence To Infer That..." Statement



# The T-Test (Location)

The **T-Test** is commonly used to test hypotheses about population means, particularly when the sample size is small and/or the population standard deviation is unknown.

---


## One-Sample T-Test

The **One-Sample T-Test** is used to determine whether the mean of a single sample is significantly different from a known or hypothesized population mean.

### Assumptions:
1. **Independence**: Observations must be independent of each other.
2. **Normality**: The sample should be drawn from a normally distributed population (approximately true for small samples; for larger samples, the **Central Limit Theorem** applies).

### Hypotheses:
- **Null Hypothesis $$( H_0 ) $$**: The population mean is equal to the hypothesized mean.
  $$
  H_0: \mu = \mu_0
  $$
- **Alternative Hypothesis $$( H_a )$$**:
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
- $$ \bar{x} $$ = sample mean
- $$ \mu_0 $$$ = hypothesized population mean
- $$ s $$ = sample standard deviation
- $$ n $$ = sample size

### Example (Left-Tailed Test):
A battery manufacturer claims that its batteries last **100 hours** on average. A sample of 10 batteries has a **mean lifespan of 95 hours** with a standard deviation of **8 hours**. 
#### Step 1: State Null and Alternative Hypothesis

$$
H_0: \mu = 100
$$

$$
H_a: \mu < 100
$$

#### Step 2: State the Maximum Risk You Are Willing TO Accept of Committing A Type 1 ($$\alpha$$) error:

We set **$$ \alpha = 0.05 $$**, meaning we are willing to accept a **5% chance** of incorrectly rejecting the null hypothesis.


#### Step 3: State the Test Statistics

The test statistic for a one-sample t-test is: $$ t = \frac{\bar{x} - \mu_0}{\frac{s}{\sqrt{n}}} $$

#### Step 4: Identify the Random Sampling Distribution (RSD) of the Test Statistic When H0 Is True; and Whether This is an Exact or Approximate Test 

- The test statistic follows a **t-distribution** with \( df = n - 1 \).
- Since we have \( n = 10 \), the **degrees of freedom (df) = 9**.
- This is an **exact test**, assuming the normality assumption holds.

#### Step 5: State the Criteria for Rejecting the Null Hypothesis 


- **Critical value approach**: Reject $$ H_0 $$ if **$$ t $$ is less than** the critical value at $$ \alpha = 0.05 $$
- **p-value approach**: Reject $$ H_0 $$ if p-value < $$\alpha$$.

#### Step 6: Calculations

$$
t = \frac{95 - 100}{\frac{8}{\sqrt{10}}} = -1.976
$$

Using a **one-tailed t-table** with **df = n - 1 = 9** at $$ \alpha = 0.05 $$, (`=T.INV(0.05,9)`), we find the critical value is **-1.833**.

Using a **one-tailed t-table** with **df = n - 1 = 9** at $$ t=-1.976$$, (`=T.DIST(B2,9,TRUE)``), we find the p-value is $$0.040$$

![One-Tailed T-Test](./Figures/oneTailedT-test.png)


#### Step 7: Conclusions
Since **-1.976 < -1.833** and that **$$p=0.04 < \alpha =0.05 $$**, we **reject $$ H_0 $$** and conclude that **We Have Sufficient Statistical Evidence To Infer that** the battery lifespan is significantly lower than 100 hours.

---
