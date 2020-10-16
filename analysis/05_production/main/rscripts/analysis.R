library(tidyverse)
library(lme4)
library(languageR)
library(brms)
library(lmerTest)
library("writexl")
library("readxl")
source("helpers.R")
require(xlsx)
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)
theme_set(theme_bw())

demo = read.csv(file="../data/subject_info_merged.csv")
df = read.table(file="../data/data_merged.csv",sep="\t", header=T, quote="")

# exclude data from 1 non-native speaker
notnative = demo %>% filter(demo$nativeEnglish != "yes") #7754-6
df$gameid = as.character(df$gameid)
df = df %>%
  filter(gameid != "7754-6")

# get trialType, color&material of target and clicked obj
df$trialType = ifelse(df$clickedObjCondition=="high_difficulty"|df$alt1Condition=="high_difficulty"|df$alt2Condition=="high_difficulty"|df$alt3Condition=="high_difficulty","high_difficulty",ifelse(df$clickedObjCondition=="low_difficulty"|df$alt1Condition=="low_difficulty"|df$alt2Condition=="low_difficulty"|df$alt3Condition=="low_difficulty","low_difficulty","filler"))
df$clickedObjName = as.character(df$clickedObjName)
df$alt1Name = as.character(df$alt1Name)
df$alt2Name = as.character(df$alt2Name)
df$alt3Name = as.character(df$alt3Name)
df = df %>%
  mutate(targetname = ifelse(clickedObjTargetStatus=="target",clickedObjName,ifelse(alt1TargetStatus=="target",alt1Name,ifelse(alt2TargetStatus=="target",alt2Name,ifelse(alt3TargetStatus=="target",alt3Name,NA))))) %>%
  mutate(targetlabel = targetname) %>%
  separate(targetlabel, c("targetobject","targetmaterial","targetcolor","targetoriginal"), sep="_") %>%
  mutate(clickedObjlabel = clickedObjName) %>%
  separate(clickedObjlabel, c("clickedobject","clickedmaterial","clickedcolor","clickedoriginal"), sep = "_")
df$extra = NULL

#number of games played
length(unique(df$gameid))

#number of rounds for each game
round_no = df %>%
  group_by(gameid) %>%
  summarise(total_round_number = n())
table(round_no$total_round_number)

#excluding fillers
df = df %>%
  filter(clickedObjCondition =="high_difficulty"|clickedObjCondition=="low_difficulty"|clickedObjCondition =="difficulty_distractor")
dfrows = nrow(df)
dfrows 

# COLOR
# Was a color mentioned?
colors = "blue|green|red|brown|black|clear|purple|pink|silver|gray|white|yellow"
df$colorMention = ifelse(grepl(colors, df$speakerMessages, ignore.case = TRUE), 1,0)
table(df$colorMention)
# Was the color of the target object mentioned?
#df$targetcolorMention = ifelse(str_detect(df$speakerMessages,df$targetcolor),1,0)
#table(df$targetcolorMention)
# Was the color of the clicked object mentioned?
#df$clickedcolorMention = ifelse(str_detect(df$speakerMessages,df$clickedcolor),1,0)
#table(df$clickedcolorMention)

# MATERIAL
# Was a material mentinoed?
materials = "wood|paper|metal|plastic|rubber|leather|glass|cardboard|denim|jean";
df$materialMention = ifelse(grepl(materials, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$materialMention)
# Was the material of the target object mentioned?
#df$targetmaterialMention = ifelse(str_detect(df$speakerMessages,df$targetmaterial),1,0)
#table(df$targetmaterialMention)
# Was the material of the clicked object mentioned?
#df$clickedmaterialMention = ifelse(str_detect(df$speakerMessages,df$clickedmaterial),1,0)
#table(df$clickedmaterialMention)'

# Was both a color and material mentioned?
df$colormaterialMention = ifelse(df$colorMention==1&df$materialMention==1,1,0)
table(df$colormaterialMention)

# Was an object name mentioned?
names  = "bag|boot|bottle|bowl|box|chair|cup|jacket|pitcher|plate|spoon|table";
df$objnameMention = ifelse(grepl(names, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$objnameMention)
# Was the name of the target object mentioned?
#df$targetobjectMention = ifelse(str_detect(df$speakerMessages,df$targetobject),1,0)
#table(df$targetobjectMention)

# Was a bleached noun used?
bleached = "one|thing|item|object"
df$oneMention = ifelse(grepl(bleached, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$oneMention)

# Was an article used?
article = "the|a|an"
df$theMention = ifelse(grepl(article, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$theMention)

# How often were articles omitted?
no_article_trials = dfrows - sum(df$objnameMention)
print(paste("percentage trials where articles were omitted: ", no_article_trials*100/dfrows)) 

# How often were nouns omitted?
df$article_Mention = ifelse(df$oneMention==1|df$theMention==1, 1, 0)
no_noun_trials = dfrows - sum(df$article_Mention)
print(paste("percentage of trials where nouns were omitted: ", no_noun_trials*100/dfrows))

# Write this dataset for manual correction of typos like "pruple"
tinfo = df %>% mutate(id = row_number()) %>% select(id,trialType)
#manual = df %>% 
#  mutate(id = row_number()) %>%
#  select(id,speakerMessages, colorMention,materialMention,colormaterialMention)
#write_xlsx(manual,"../rscripts/manual.xlsx")

# Read manually corrected dataset
manual = read.xlsx("../data/manual_correction.xlsx",1)
manual = merge(tinfo,manual, by="id", all.x=TRUE, all.y=FALSE)
manual$otherMod = ifelse(is.na(manual$otherModifier),"0","1")

shade  = "dark|light|shade|lite|sky|violet|bright|pale";
manual$shade = ifelse(grepl(shade, manual$otherModifier, ignore.case = TRUE), "1", "0")
size = "big|small|long|short|lengthy|tall|large";
manual$size = ifelse(grepl(size, manual$otherModifier, ignore.case = TRUE), "1", "0")
shape = "rectengular|rectengle|square";
manual$shape = ifelse(grepl(shape, manual$otherModifier, ignore.case = TRUE), "1", "0")

print(paste("percentage of trials where other modifiers were used: ", sum(as.numeric(manual$otherMod))*100/dfrows))

manual = manual %>% mutate(trialType=fct_recode(trialType,"high difficulty\nmaterial redundant"="high_difficulty","low difficulty\ncolor redundant"="low_difficulty"))

#manual$otherMod = as.factor(manual$otherMod)
ggplot(manual,aes(x=otherMod, fill=otherMod)) +
  geom_bar() +
  facet_grid(~trialType) +
  scale_fill_manual(values = c("lightblue","darkblue")) +
  xlab("other modifier") +
  theme(legend.position = "none")
  
ggsave(file="../graphs/other_mod.pdf",width=4,height=3)

only_other = manual %>%
  filter(otherMod=="1") %>%
  mutate(other=ifelse(shade=="0" & size=="0" & shape=="0",1,0)) %>%
  gather(modifier_type,value,shade:other) %>%
  group_by(modifier_type) %>%
  summarize(Mean=mean(value),CILow=ci.low(value),CIHigh=ci.high(value),count=n()) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh)

ggplot(only_other, aes(x=modifier_type, y=Mean)) +
  geom_bar(stat = "identity", position=position_dodge())

ggsave(file="../graphs/other_mod_type.pdf",width=6,height=2.8)

# In how many cases did the listener choose the right object?
df$clickTarget = ifelse(df$clickedObjTargetStatus == "target",1,0)
table(df$clickTarget)
non_target_click = dfrows-sum(df$clickTarget)
print(paste("percentage of trials where non-target was chosed: ", non_target_click*100/dfrows)) 

# Exclude trials where target wasn't selected
targets = df %>%filter(clickedObjTargetStatus=="target")
nrow(targets) #729 updated)

# Add typicality scores of targets
# typicality = read.csv("../data/typicality.csv", header=T)
# typicality$X = NULL
# 
# targets = targets %>%
#   merge(typicality, by.x="clickedObjName",by.y="object")

# Prepare for visualizations and analysis
targets = targets %>%
  mutate(UtteranceType = ifelse(colorMention==1 & materialMention==1,"color and material",ifelse(colorMention==1,"only color",ifelse(materialMention==1,"only material","other")))) %>%
  filter(UtteranceType!="other") %>%
  mutate(rowNum = row_number()) %>%
  mutate(onlyColorMention = ifelse(UtteranceType=="only color",1,0)) %>%
  mutate(onlyMaterialMention = ifelse(UtteranceType =="only material",1,0)) %>%
  mutate(RedundantProperty = ifelse(trialType=="high_difficulty","material redundant", ifelse(trialType=="low_difficulty","color redundant", NA))) %>%
  mutate(SufficientProperty = ifelse(trialType=="high_difficulty","color", ifelse(trialType=="low_difficulty","material", NA))) %>%
  mutate(RedExp3Cat = ifelse(UtteranceType=="color and material","redundant",ifelse((SufficientProperty=="color"&UtteranceType=="only color"),"minimal",ifelse((SufficientProperty=="material"&UtteranceType=="only material"),"minimal","underinformative")))) %>%
  mutate(RedExp2Cat = ifelse(RedExp3Cat=="redundant","redundant","not_redundant")) %>%
  mutate(redundant = ifelse(RedExp2Cat=="redundant",1,0)) %>%
  select(rowNum,gameid,roundNum,trialType,clickedObjName,speakerMessages,UtteranceType,SufficientProperty,RedundantProperty,RedExp3Cat,RedExp2Cat,redundant,clickedobject,clickedcolor,clickedmaterial,clickedoriginal,onlyColorMention,onlyMaterialMention,colormaterialMention,objnameMention,oneMention,theMention,article_Mention)

##################################################################
# VISUALIZATIONS AND ANALYSIS 
# low difficulty -> easy to perceive color - color is redundant
# high difficulty -> difficulty to perceive material - material is redundant
##################################################################
agr = targets %>%
  select(rowNum,trialType,UtteranceType,RedundantProperty,RedExp3Cat,RedExp2Cat,redundant,onlyColorMention,onlyMaterialMention,colormaterialMention) %>%
  gather(MentionType,mention,onlyColorMention:colormaterialMention) %>%
  group_by(RedundantProperty,trialType,MentionType) %>%
  summarise(Mean=mean(mention),CIlow=ci.low(mention),CIhigh=ci.high(mention)) %>%
  ungroup() %>%
  mutate(Ymin=Mean-CIlow, Ymax=Mean+CIhigh) %>%
  mutate(MentionType=fct_recode(MentionType,"color and material"="colormaterialMention","only color"="onlyColorMention","only material"="onlyMaterialMention")) %>%
  mutate(trialType=fct_recode(trialType,"high difficulty\nmaterial redundant"="high_difficulty","low difficulty\ncolor redundant"="low_difficulty"))

ggplot(agr, aes(x=trialType,y=Mean,fill=RedundantProperty)) +
  geom_bar(stat = "identity") +
  geom_errorbar(aes(ymin = Ymin, ymax = Ymax),width=.25) +
  xlab("Trial type") +
  ylab("Proportion of utterance") +
   facet_grid(~MentionType) + 
  scale_fill_manual(values=c("darkgreen","orange")) +
  theme(legend.position = "none",axis.title.x = element_blank(),axis.text.x = element_text(size=7))

ggsave("../graphs/p_trial.png",width =6,height=3)

# mixed effects logistic regression predicting redundant adjective use from fixed effects of redundant property, with random by-subject and by-item intercepts and slopes for redundant property

m = glmer(redundant ~ trialType + (1|gameid) + (1|clickedobject), data=targets, family="binomial")
summary(m)

# going from high difficulty-material redundant(0) to low difficulty-color redundant(1)
# no redundancy(0) to redundancy(1)
# should be positive: 2.1080


