library(tidyverse)
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
setwd('../data')

d = read.csv("subject_info_merged.csv", header = TRUE)
df = read.table(file="../data/data_merged.csv",sep="\t", header=T, quote="")
d$gameid = d$gameID

table(d$role) # 101 participants - posted for 1 extra person because realized one person got got disconnected while in the waiting room

# games found in server
serverGameids =  df %>% select(gameid) %>% unique()
length(serverGameids$gameid)

# gameids in subject info data
uniqueS = d %>%select(gameid) 
length(uniqueS$gameid)
length(unique(uniqueS$gameid))

#gameids with single players (from subject info )
table(d$gameID)
gamesD = as.data.frame(table(d$gameID)) 
singlePlayerGameids = gamesD %>% filter(gamesD$Freq==1)
twoPlayerGameids = gamesD %>% filter(gamesD$Freq==2)
length(singlePlayerGameids$Var1) + 2*length(twoPlayerGames$Var1)
singlePlayerGameids
twoPlayerGameids

singlePlayerGames = df %>%
  filter(gameid %in% singlePlayerGameids$Var1)

uniqueD =  df %>% 
  select(gameid) %>% 
  unique() %>%
  mutate(singlePlayer = ifelse(gameid %in% c("0359-3","2808-d","5178-c","6915-5","8631-d","91s16-a"), 1,0))

allgames = merge(uniqueS,uniqueD,by="gameid",all.x = TRUE)

library(arsenal)

comparedf(uniqueS, uniqueD)
summary(comparedf(uniqueS, uniqueD))


#find not-unique
not_unique = d$workerid[duplicated(d$workerid)]
not_unique

#remove non-unique
d = d[!(d$workerid %in% not_unique),]