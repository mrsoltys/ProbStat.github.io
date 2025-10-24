---
layout: default
title: Guide To Regression Analysis
toc: true
---

# Regression Analysis

## Introduction
Regression analysis is a statistical technique used to model and analyze the relationships between a dependent variable ($$y$$) and one or more independent variables ($$x_1$$, $$x_2$$, etc...). 

## Key Regression Output Components
When performing regression analysis, statistical software provides several key outputs that help assess the model's performance.

### 1. **R-Squared ($$ R^2 $$)**
The coefficient of determination, $$ R^2 $$, measures how well the regression model explains the variability in the dependent variable. It ranges from 0 to 1:

- $$ R^2 = 1 $$ indicates a perfect fit, meaning all variability in $$ y $$ is explained by $$ x_1 $$, $$x_2$$, etc.
- $$ R^2 = 0 $$ suggests that the model does not explain any of the variability in $$ y $$.


Mathematically, \( R^2 \) is given by:

$$
R^2 = 1 - \frac{SS_{residual}}{SS_{total}}
$$

where:
- \( SS_{residual} \) is the sum of squared residuals,
- \( SS_{total} \) is the total sum of squares.

### 2. **P-Values and Statistical Significance**
The p-value tests whether the regression coefficient ($$ \beta_i $$) is significantly different from zero.

- A small p-value (typically $$ < 0.05 $$) suggests strong evidence against the null hypothesis ($$ H_0: \beta_1 = 0 $$), indicating that $$ x_i $$ is a significant predictor of $$ y $$.
- A large p-value ($$ > 0.05 $$) suggests weak evidence against $$ H_0 $$, implying that $$ x_i $$ may not be a significant predictor.

### 3. **ANOVA and the Significance of the Model**
Analysis of variance (ANOVA) helps assess whether the overall regression model is statistically significant. The F-statistic and its associated significance level (p-value) test the null hypothesis that all regression coefficients are zero.

- A very small significance $$ F $$-value (e.g., $$ < 0.05 $$) suggests that the model explains a significant portion of the variance in $$ y $$.
- A high significance $$ F $$-value (e.g., $$ > 0.05 $$) indicates the model may not provide a meaningful fit.

### 4. **Residual Analysis**
Residuals represent the differences between observed and predicted values. A residual plot helps assess whether assumptions like homoscedasticity (constant variance) and normality are met.

- **Patterns in residuals** may indicate non-linearity or model inadequacies.
- **Randomly scattered residuals** suggest a good model fit.



## The Regression Equation: Linear Regression
Simple linear regression focuses on the relationship between a single independent variable (predictor) and a dependent variable (response) using a linear equation. The general form of a simple linear regression model is:

$$
y = \beta_0 + \beta_1 x + \epsilon
$$

where:
- \( y \) is the dependent variable,
- \( x \) is the independent variable,
- \( \beta_0 \) (intercept) is the value of \( y \) when \( x = 0 \),
- \( \beta_1 \) (coefficient) represents the change in \( y \) for a one-unit change in \( x \),
- \( \epsilon \) represents the residual error.


## Conclusion
Simple linear regression provides a powerful tool for understanding relationships between variables. Key metrics such as \( R^2 \), p-values, and ANOVA results help assess model quality and significance. Analyzing residuals ensures that assumptions are met and helps refine model accuracy. Understanding these outputs enables informed decision-making based on data trends.

## Logistic (Binomial) Regression

### Introduction

While linear regression models the relationship between continuous dependent and independent variables, **logistic regression** is employed when the dependent variable is binary (e.g., success/failure, yes/no). This method estimates the probability that a given input point belongs to a particular category.

### The Logistic Function

At the heart of logistic regression is the logistic function (also known as the sigmoid function), which maps any real-valued number into the (0, 1) interval, making it suitable for probability estimation:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

In the context of logistic regression:

$$
z = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_n x_n
$$

Here:
- $$ \beta_0 $$ is the intercept.
- $$ \beta_1, \beta_2, \dots, \beta_n $$ are the coefficients for the independent variables $$ x_1, x_2, \dots, x_n $$.

### Model Interpretation

The output of the logistic function represents the probability of the dependent variable equaling 1 (e.g., success). To interpret the relationship between the independent variables and this probability, we often use the **odds ratio**:

$$
\text{Odds} = \frac{P(y=1)}{1 - P(y=1)}
$$

Taking the natural logarithm of the odds gives the **log-odds** or **logit**:

$$
\text{logit}(P(y=1)) = \ln\left(\frac{P(y=1)}{1 - P(y=1)}\right) = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n
$$

This linear relationship allows us to interpret $$ \beta_i $$ as the change in the log-odds for a one-unit change in $$ x_i $$.

### Assumptions of Logistic Regression

When using logistic regression, it's important to consider the following assumptions:

1. **Binary Dependent Variable**: The outcome should be dichotomous.
2. **Independence of Observations**: Each observation should be independent of others.
3. **Linearity of Independent Variables and Logit Transformation**: While the model doesn't assume a linear relationship between the independent variables and the outcome, it assumes a linear relationship between the independent variables and the logit of the outcome.
4. **No Multicollinearity**: Independent variables should not be too highly correlated with each other.
5. **Large Sample Size**: Logistic regression requires a sufficiently large sample size to provide reliable results.

Violations of these assumptions can lead to unreliable or invalid results.

