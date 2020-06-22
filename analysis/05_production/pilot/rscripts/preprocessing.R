library(tidyverse)
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)
theme_set(theme_bw())

df = read.table(file="../data/pilot_all.csv",sep="\t", header=T, quote="")

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

#number of games playes
length(unique(df$gameid))

#number of rounds for each game
round_no = df %>%
  group_by(gameid) %>%
  summarise(total_round_number = n())
round_no

#excluding fillers
df = df%>%
  filter(clickedObjCondition =="high_difficulty"|clickedObjCondition=="low_difficulty"|clickedObjCondition =="difficulty_distractor")
dfrows = nrow(df)
dfrows 

#optional - for simplicity - 
#df = df %>%
#  select(gameid,roundNum,trialType,clickedObjName,clickedObjTargetStatus,clickedObjCondition,speakerMessages,listenerMessages)
#df = df %>%
#  select(gameid,roundNum,trialType,clickedObjName,clickedObjTargetStatus,alt1Name, alt1TargetStatus, alt2Name, alt2TargetStatus, alt3Name, alt3TargetStatus, clickedObjCondition,speakerMessages,listenerMessages)

# COLOR
# Was a color mentioned?
colors = "blue|green|red|brown|black|clear|purple|pink|silver|white|yellow"
df$colorMention = ifelse(grepl(colors, df$speakerMessages, ignore.case = TRUE), 1,0)
table(df$colorMention)
# Was the color of the target object mentioned?
df$targetcolorMention = ifelse(str_detect(df$speakerMessages,df$targetcolor),1,0)
table(df$targetcolorMention)
# Was the color of the clicked object mentioned?
#df$clickedcolorMention = ifelse(str_detect(df$speakerMessages,df$clickedcolor),1,0)
#table(df$clickedcolorMention)

# MATERIAL
# Was a material mentinoed?
materials = "wood|paper|metal|plastic|rubber|leather|glass|cardboard|denim";
df$materialMention = ifelse(grepl(materials, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$materialMention)
# Was the material of the target object mentioned?
df$targetmaterialMention = ifelse(str_detect(df$speakerMessages,df$targetmaterial),1,0)
table(df$targetmaterialMention)
# Was the material of the clicked object mentioned?
#df$clickedmaterialMention = ifelse(str_detect(df$speakerMessages,df$clickedmaterial),1,0)
#table(df$clickedmaterialMention)

# Was an object name mentioned?
names  = "bag|boot|bottle|bowl|box|chair|cup|jacket|pitcher|plate|spoon|table";
df$objnameMention = ifelse(grepl(names, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$objnameMention)
# Was the name of the target object mentioned?
df$targetobjectMention = ifelse(str_detect(df$speakerMessages,df$targetobject),1,0)
table(df$targetobjectMention)

# Was a bleached noun used?
bleached = "one|thing|item|object"
df$oneMention = ifelse(grepl(bleached, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$oneMention)

# Was an article used?
article = "the|a|an"
df$theMention = ifelse(grepl(article, df$speakerMessages, ignore.case = TRUE), 1, 0)
table(df$theMention)

# Manual correction for typos
# How many trials were manually labelled as mentioning a pre-coded level of reference? (overlooked by grep search due to typos or grammatical modification of the expression)

# How often were articles omitted?
no_article_trials = dfrows - sum(df$objnameMention)
print(paste("percentage trials where articles were omitted: ", no_article_trials*100/dfrows)) #10.4"

# How often were nouns omitted?
df$article_Mention = ifelse(df$oneMention==1|df$theMention==1, 1, 0)
no_noun_trials = dfrows - sum(df$article_Mention)
print(paste("percentage of trials where nouns were omitted: ", no_noun_trials*100/dfrows)) #20.8

# In how many cases did the listener choose the right object?
df$clickTarget = ifelse(df$clickedObjTargetStatus == "target",1,0)
table(df$clickTarget)
non_target_click = dfrows-sum(df$clickTarget)
print(paste("percentage of trials where non-target was chosed: ", non_target_click*100/dfrows)) # 8.3

# How many unique pairs?
length(levels(df$gameid))

# Exclude trials where target wasn't selected
targets = df %>%filter(clickedObjTargetStatus=="target")
nrow(targets)

# Add typicality scores of targets
typicality = read.csv("../data/typicality.csv", header=T, check.names=F)

targets = targets %>%
  select(gameid,roundNum,trialType,clickedObjName) %>%
  merge(typicality, by.x="clickedObjName",by.y="object", all.x = TRUE)

# Prepare for visualizations
targets = targets %>%
  mutate(color_only = ifelse())



# Prepare for analysis

######################################################

#simplest plot of all times
# low difficulty --> easy to perceive color -- color is redundant
# high difficulty --> difficulty to perceive material -- material is redundant
agr = df %>%
  group_by(clickedObjCondition) %>%
  summarise(color=mean(colormention),material=mean(materialmention)) %>%
  gather(mentioned_feature,mean,color:material)

ggplot(agr,aes(x=clickedObjCondition,y=mean,fill=mentioned_feature)) +
  geom_bar(stat="identity",position=position_dodge()) +
  xlab("condition") +
  ylab("probability of mention") +
  labs(fill = "feature")

ggsave("../graphs/simple.png",width=6,height=4)
