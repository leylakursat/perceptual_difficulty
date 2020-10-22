library(tidyverse)
library(lme4)
library(languageR)

theme_set(theme_bw())

setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
setwd('../data/')
source('../rscripts/helpers.R')

df = read.csv("../data/df.csv")
df$logRT = log(df$rt)
df$gaveWrongAnswer=ifelse(df$gaveRightAnswer==1,0,1)

# 1. Predict error rate (log logs of making error) from propery - logistic regression
m = glmer(gaveWrongAnswer ~ feature_type + (1|workerid), data=df, family="binomial")
summary(m)

table(df$gaveWrongAnswer,df$feature_type)

# 2. Predict response time from property - linear regression
m2=lmer(logRT ~ feature_type + (1|workerid), data=df, REML=F)
summary(m2)

m3=lmer(rt ~ feature_type + (1|workerid), data=df, REML=F)
summary(m3)

# 3. extra -- 
# centered = cbind(df,myCenter(df[,c("feature_type","feature_matching")]))
# head(centered)
# logit2prop <- function(l){
#   exp(l)/(1+exp(l))
# }
# 
# df$PredictedRealization = predict(m)
# df$PredictedProbRealization = logit2prop(df$PredictedRealization)
# head(df)
