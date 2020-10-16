library(tidyverse)
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
setwd('../data')

d = read.csv("subject_info_merged.csv", header = TRUE)
df = read.table(file="../data/data_merged.csv",sep="\t", header=T, quote="")
d$gameid = d$gameID

table(d$role) # 101 participants - posted for 1 extra person because realized one person got got disconnected while in the waiting room


#find not-unique
not_unique = d$workerid[duplicated(d$workerid)]
not_unique

#remove non-unique
d = d[!(d$workerid %in% not_unique),]

# look at comments
unique(d$comments,d$workerid)

# partner human?
table(d$thinksHuman)

# partner rating
table(d$ratePartner)

# native language
notnative = d %>% filter(d$nativeEnglish != "yes")
notnative$gameID # 7754-6

# average time 
d$totalMin = d$totalLength/60000

ggplot(d, aes(x=totalMin)) +
  geom_histogram()
