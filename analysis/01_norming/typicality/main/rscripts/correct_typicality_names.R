library(tidyverse)
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)
theme_set(theme_bw())

typ = read.csv("../data/typicality_summary.csv", header=T)
View(typ)

typ$object = as.character(typ$object)


#typ$original= ifelse(grepl("original", typ$object, ignore.case = TRUE), 1, 0)
#sum(typ$original)

typ$object[typ$object== "bag_paper_original"] = "bag_paper_brown_original"
typ$object[typ$object== "bag_plastic_original"] = "bag_plastic_white_original"
typ$object[typ$object== "boot_leather_original"] = "boot_leather_black_original"
typ$object[typ$object== "boot_rubber_original"] = "boot_rubber_black_original"
typ$object[typ$object== "bottle_glass_original"] = "bottle_glass_clear_original"
typ$object[typ$object== "bottle_plastic_original"] = "bottle_plastic_clear_original"
typ$object[typ$object== "bowl_glass_original"] = "bowl_glass_clear_original"
typ$object[typ$object== "bowl_metal_original"] = "bowl_metal_silver_original"
typ$object[typ$object== "box_cardboard_original"] = "box_cardboard_brown_original"
typ$object[typ$object== "box_wood_original"] = "box_wood_brown_original"
typ$object[typ$object== "chair_metal_original"] = "chair_metal_silver_original"
typ$object[typ$object== "chair_plastic_original"] = "chair_plastic_blue_original"
typ$object[typ$object== "chair_wood_original"] = "chair_wood_brown_original"
typ$object[typ$object== "cup_metal_original"] = "cup_metal_silver_original"
typ$object[typ$object== "cup_plastic_original"] = "cup_plastic_clear_original"
typ$object[typ$object== "jacket_denim_original"] = "jacket_denim_blue_original"
typ$object[typ$object== "jacket_leather_original"] = "jacket_leather_black_original"
typ$object[typ$object== "pitcher_glass_original"] = "pitcher_glass_clear_original"
typ$object[typ$object== "pitcher_metal_original"] = "pitcher_metal_silver_original"
typ$object[typ$object== "pitcher_plastic_original"] = "pitcher_plastic_white_original"
typ$object[typ$object== "plate_paper_original"] = "plate_paper_white_original"
typ$object[typ$object== "plate_plastic_original"] = "plate_plastic_blue_original"
typ$object[typ$object== "spoon_metal_original"] = "spoon_metal_silver_original"
typ$object[typ$object== "spoon_plastic_original"] = "spoon_plastic_white_original"
typ$object[typ$object== "spoon_wood_original"] = "spoon_wood_brown_original"
typ$object[typ$object== "table_metal_original"] = "table_metal_silver_original"
typ$object[typ$object== "table_wood_original"] = "table_wood_brown_original"

write.csv(typ,"../data/typicality.csv")

          