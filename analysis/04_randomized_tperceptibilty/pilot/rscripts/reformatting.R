library(tidyverse)
theme_set(theme_bw())
df = read.csv("../data/list4-example-trials.csv", header = TRUE)

df$object = 0
df$utterance = 0
df$rt = 0

write.csv(df, file = "list4-reformatted.csv")

View(df)
##

df$item <- as.character(gsub("\\']","",df$item))
df$item <- as.character(gsub("\\['","",df$item))

df$correct_answer <- as.character(gsub("\\['","",df$correct_answer))
df$correct_answer <- as.character(gsub("\\']","",df$correct_answer))

df$correct_material <- as.character(gsub("\\['","",df$correct_material))
df$correct_material <- as.character(gsub("\\']","",df$correct_material))

df$correct_color <- as.character(gsub("\\['","",df$correct_color))
df$correct_color <- as.character(gsub("\\']","",df$correct_color))

df$feature <- as.character(gsub("\\['","",df$feature))
df$feature <- as.character(gsub("\\']","",df$feature))

df$feature_type <- as.character(gsub("\\['","",df$feature_type))
df$feature_type <- as.character(gsub("\\']","",df$feature_type))



