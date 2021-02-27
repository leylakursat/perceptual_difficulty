library(devtools)
library(ngramr)
library(ggplot2)

ng  <- ngram(c("green_ADJ", "plastic_ADJ"))
ggplot(ng, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

# colors = "blue|green|red|brown|black|clear|purple|pink|silver|gray|grey|white|yellow|violet"
# materials = "wood|paper|metal|steel|plastic|rubber|leather|glass|cardboard|denim|jean"

#######

colors = c("green","blue","red","brown","black","clear","purple","pink","silver","gray","grey","white","yellow","violet")

materials = c("wood","paper","metal","steel","plastic","rubber","leather","glass","cardboard","denim","jean")

######

bag_colors = c("blue bag","brown bag","green bag")
bag_materials = c("plastic bag","paper bag")
ng_pd = ngram(c(bag_colors, bag_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

boot_colors = c("black boots","brown boots","green boots")
boot_materials = c("leather boots","rubber boots")
ng_pd = ngram(c(boot_colors, boot_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

bottle_colors = c("blue bottle","green bottle","clear bottle")
bottle_materials = c("glass bottle","plastic bottle")
ng_pd = ngram(c(bottle_colors, bottle_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

bowl_colors = c("blue bowl","green bowl","clear bowl")
bowl_materials = c("glass bowl","metal bowl")
ng_pd = ngram(c(bowl_colors, bowl_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

box_colors = c("blue box","green box","brown box")
box_materials = c("wooden box","cardboard box")
ng_pd = ngram(c(box_colors, box_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

chair_colors = c("purple chair","green chair","silver chair")
chair_materials = c("metal chair","plastic chair")
ng_pd = ngram(c(chair_colors, chair_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

chair_colors = c("purple chair","green chair","silver chair")
chair_materials = c("metal chair","plastic chair","wooden chair")
ng_pd = ngram(c(chair_colors, chair_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

cup_colors = c("blue cup","green cup","clear cup")
cup_materials = c("metal cup","plastic cup")
ng_pd = ngram(c(cup_colors, cup_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

jacket_colors = c("blue jacket","green jacket","purple jacket")
jacket_materials = c("denim jacket","leather jacket")
ng_pd = ngram(c(jacket_colors, jacket_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

pitcher_colors = c("blue pitcher","green pitcher","clear pitcher")
pitcher_materials = c("plastic pitcher","metal pitcher","glass pitcher")
ng_pd = ngram(c(pitcher_colors, pitcher_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

plate_colors = c("blue plate","green plate","white plate","pink plate")
plate_materials = c("paper plate","plastic plate")
ng_pd = ngram(c(plate_colors, plate_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

spoon_colors = c("blue spoon","green spoon","silver spoon")
spoon_materials = c("metal spoon","plastic spoon","wooden spoon")
ng_pd = ngram(c(spoon_colors, spoon_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

table_colors = c("blue table","green table","silver table")
table_materials = c("metal table", "wooden table")
ng_pd = ngram(c(table_colors, table_materials))
ggplot(ng_pd, aes(x=Year, y=Frequency, colour=Phrase)) +
  geom_line()

names  = "bag|boot|bottle|bowl|box|chair|cup|jacket|pitcher|plate|spoon|table";









