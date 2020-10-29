import copy 

contexts = {
    1 : {"targetLabel":"boot_leather_green","competitorLabel":"boot_leather_black_original","notcompetitorLabel":"boot_rubber_black_original"},
    2 : {"targetLabel":"boot_leather_green","competitorLabel":"boot_leather_brown","notcompetitorLabel":"boot_rubber_brown"},
    3 : {"targetLabel":"chair_metal_green","competitorLabel":"chair_metal_purple","notcompetitorLabel":"chair_plastic_purple"},
    4 : {"targetLabel":"chair_metal_green","competitorLabel":"chair_metal_purple","notcompetitorLabel":"chair_wood_purple"},
    5 : {"targetLabel":"chair_metal_purple","competitorLabel":"chair_metal_green","notcompetitorLabel":"chair_plastic_green"},
    6 : {"targetLabel":"chair_metal_purple","competitorLabel":"chair_metal_green","notcompetitorLabel":"chair_wood_green"},
    7 : {"targetLabel":"plate_paper_blue","competitorLabel":"plate_paper_green","notcompetitorLabel":"plate_plastic_green"},
    8 : {"targetLabel":"spoon_wood_green","competitorLabel":"spoon_wood_blue","notcompetitorLabel":"spoon_metal_blue"},
    9 : {"targetLabel":"spoon_wood_green","competitorLabel":"spoon_wood_blue","notcompetitorLabel":"spoon_plastic_blue"},
    10 : {"targetLabel":"table_metal_blue","competitorLabel":"table_metal_green","notcompetitorLabel":"table_wood_green"},
    11 : {"targetLabel":"table_metal_green","competitorLabel":"table_metal_blue","notcompetitorLabel":"table_wood_blue"},
    12 : {"targetLabel":"table_metal_silver_original","competitorLabel":"table_metal_blue","notcompetitorLabel":"table_wood_blue"},
    13 : {"targetLabel":"table_metal_silver_original","competitorLabel":"table_metal_green","notcompetitorLabel":"table_wood_green"},
    14 : {"targetLabel":"bottle_glass_green","competitorLabel":"bottle_plastic_green","notcompetitorLabel":"bottle_plastic_blue"},
    15 : {"targetLabel":"bottle_glass_green","competitorLabel":"bottle_plastic_green","notcompetitorLabel":"bottle_plastic_clear_original"},
    16 : {"targetLabel":"bottle_plastic_green","competitorLabel":"bottle_glass_green","notcompetitorLabel":"bottle_glass_blue"},
    17 : {"targetLabel":"bottle_plastic_green","competitorLabel":"bottle_glass_green","notcompetitorLabel":"bottle_glass_clear_original"},
    18 : {"targetLabel":"cup_plastic_green","competitorLabel":"cup_metal_green","notcompetitorLabel":"cup_metal_blue"},
    19 : {"targetLabel":"cup_plastic_green","competitorLabel":"cup_metal_green","notcompetitorLabel":"cup_metal_silver_original"},
    20 : {"targetLabel":"jacket_denim_purple","competitorLabel":"jacket_leather_purple","notcompetitorLabel":"jacket_leather_black_original"},
    21 : {"targetLabel":"jacket_denim_purple","competitorLabel":"jacket_leather_purple","notcompetitorLabel":"jacket_leather_green"},
    22 : {"targetLabel":"pitcher_metal_blue","competitorLabel":"pitcher_glass_blue","notcompetitorLabel":"pitcher_glass_clear_original"},
    23 : {"targetLabel":"pitcher_metal_blue","competitorLabel":"pitcher_glass_blue","notcompetitorLabel":"pitcher_glass_green"},
    24 : {"targetLabel":"pitcher_metal_blue","competitorLabel":"pitcher_plastic_blue","notcompetitorLabel":"pitcher_plastic_green"},
    25 : {"targetLabel":"pitcher_metal_blue","competitorLabel":"pitcher_plastic_blue","notcompetitorLabel":"pitcher_plastic_white_original"},
    26 : {"targetLabel":"plate_paper_blue","competitorLabel":"plate_plastic_blue_original","notcompetitorLabel":"plate_plastic_green"},
    27 : {"targetLabel":"plate_paper_blue","competitorLabel":"plate_plastic_blue_original","notcompetitorLabel":"plate_plastic_pink"},
    28 : {"targetLabel":"plate_plastic_blue_original","competitorLabel":"plate_paper_blue","notcompetitorLabel":"plate_paper_green"},
    29 : {"targetLabel":"plate_plastic_blue_original","competitorLabel":"plate_paper_blue","notcompetitorLabel":"plate_paper_white_original"},
    30 : {"targetLabel":"table_metal_blue","competitorLabel":"table_wood_blue","notcompetitorLabel":"table_wood_brown_original"},
    31 : {"targetLabel":"table_metal_blue","competitorLabel":"table_wood_blue","notcompetitorLabel":"table_wood_green"}
}

order1 = 'color1_correct'
order2 = 'color1_incorrect'
order3 = 'color2_correct'
order4 = 'color2_incorrect'
order5 = 'material1_correct'
order6 = 'material1_incorrect'
order7 = 'material2_correct'
order8 = 'material2_incorrect'

all_colors = ['blue', 'green', 'red', 'brown', 'black', 'clear', 'purple', 'pink', 'silver', 'white', 'yellow']
all_materials = ['wood','paper','metal', 'plastic', 'rubber', 'leather', 'glass', 'cardboard', 'denim']

features = []
assign_list = [7,6,5,4,3,2,1,8,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1]
for a, context in contexts.items():
    t_names = context["targetLabel"].split("_")
    c_names = context["competitorLabel"].split("_")
    nc_names = context["notcompetitorLabel"].split("_")

    features = [t_names[1],t_names[2],c_names[1],c_names[2],nc_names[1],nc_names[2]]
    unique_features = list(dict.fromkeys(features))

    color_adj = []
    material_adj = []
    for feature in unique_features:
        for color in all_colors:
            if feature == color:
                color_adj.append(feature)
        for material in all_materials:
            if feature == material:
                material_adj.append(feature)

    color_num = []
    material_num = []
    names_concat = t_names + c_names + nc_names + nc_names
    for color in color_adj:
        num=0
        for name in names_concat:
            if color ==name:
                num += 1
        color_num.append(num)
    for material in material_adj:
        num=0
        for name in names_concat:
            if material ==name:
                num += 1
        material_num.append(num)

    tname = ""
    cname = ""
    ncname = ""
    for word in t_names:
        tname = tname + word[0]
    for word in c_names:
        cname = cname + word[0]
    for word in nc_names:
        ncname = ncname + word[0]
    label = tname + "_" + cname + "_" + ncname

    context["color_adj"] = color_adj
    context["color_num"] = color_num
    context["material_adj"] = material_adj
    context["material_num"] = material_num
    context['context_label'] = label
    context["group_no"] = assign_list.pop()

# ASSIGN 2 CONDITIONS TO EACH ITEM BASED ON DIC # ----------------------------------------
dic = {}
count = 0 
for a, context in contexts.items():
    dic[count] = copy.deepcopy(context)
    if context["group_no"] == 1:
        dic[count]["condition"] = order1
    if context["group_no"] == 2:
        dic[count]["condition"] = order2
    if context["group_no"] == 3:
        dic[count]["condition"] = order3
    if context["group_no"] == 4:
        dic[count]["condition"] = order4
    if context["group_no"] == 5:
        dic[count]["condition"] = order5
    if context["group_no"] == 6:
        dic[count]["condition"] = order6
    if context["group_no"] == 7:
        dic[count]["condition"] = order7
    if context["group_no"] == 8:
        dic[count]["condition"] = order8
    count += 1 

file = open("list1.txt", "a")

for x, item in dic.items():
    # print(item)
    targetName = item['targetLabel']
    competitorName = item['competitorLabel']
    notCompetitorName = item['notcompetitorLabel']
    condition = item['condition']
    contextID = item['context_label']

    colorAdj = item['color_adj']
    colorNum = item['color_num']
    materialAdj = item['material_adj']
    materialNum = item['material_num']

    if condition == "color1_correct":
        featureQuestion = 'color'
        adjQuestion = colorAdj[0]
        numQuestion = colorNum[0]
        correctAnsQuestion = 'yes'
    if condition == "color1_incorrect":
        featureQuestion = 'color'
        adjQuestion = colorAdj[0]
        numQuestion = [(colorNum[0])+1, (colorNum[0])+2]
        correctAnsQuestion = 'no'
    if condition == "color2_correct":
        featureQuestion = 'color'
        adjQuestion = colorAdj[1]
        numQuestion = colorNum[1]
        correctAnsQuestion = 'yes'
    if condition == "color2_incorrect":
        featureQuestion = 'color'
        adjQuestion = colorAdj[1]
        numQuestion = [(colorNum[1])+1, (colorNum[1])+2]
        correctAnsQuestion = 'no'
    if condition == "material1_correct":
        featureQuestion = 'material'
        adjQuestion = materialAdj[0]
        numQuestion = materialNum[0]
        correctAnsQuestion = 'yes'
    if condition == "material1_incorrect":
        featureQuestion = 'material'
        adjQuestion = materialAdj[0]
        numQuestion = [(materialNum[0])+1, (materialNum[0])+2]
        correctAnsQuestion = 'no'
    if condition == "material2_correct":
        featureQuestion = 'material'
        adjQuestion = materialAdj[1]
        numQuestion = materialNum[1]
        correctAnsQuestion = 'yes'
    if condition == "material2_incorrect":
        featureQuestion = 'material'
        adjQuestion = materialAdj[1]
        numQuestion = [(materialNum[1])+1,(materialNum[1])+2]
        correctAnsQuestion = 'no'

    line1 = "'targetName' : '" + targetName + "',"
    line2 = "'competitorName' : '" + competitorName + "',"
    line3 = "'notCompetitorName' : '" + notCompetitorName + "',"
    line4 = "'condition' : '" + condition + "',"
    line5 = "'featureQuestion' : '" + featureQuestion + "',"
    line6 = "'adjQuestion' : '" + adjQuestion + "',"
    if isinstance(numQuestion, list):
        line7 = "'numQuestion' : ['" + str(numQuestion[0]) + "','" + str(numQuestion[1]) + "'],"
    else:
        line7 = "'numQuestion' : '" + str(numQuestion) + "',"
    line8 = "'correctAnsQuestion' : '" + correctAnsQuestion + "',"
    line9 = "'contextID' : '" + contextID + "',"

    file.write("{")
    file.write("\n")
    file.write(line1)
    file.write("\n")
    file.write(line2)
    file.write("\n")
    file.write(line3)
    file.write("\n")
    file.write(line4)
    file.write("\n")
    file.write(line5)
    file.write("\n")
    file.write(line6)
    file.write("\n")
    file.write(line7)
    file.write("\n")
    file.write(line8)
    file.write("\n")
    file.write(line9)
    file.write("\n")
    file.write("},")
    file.write("\n")

    # string = str(item)
    # file.write(string)
    # file.write("\n")
#  based on condition generate adj_question, num_question and correct_answer

    
#from each context we can create 8 different trials with coloraA, colorB, materialA, materialB

# targetLabel: x
# competitorLabel: y
# distractorLabel: z
# contextId: x_y_z
# feature_type: color or material
# adj_question: (plastic, green, metal, purple, .. etc)
# correct_number: 1, 2 or 3
# number_question: (2,3 or 4 --always more than correct_number)
# correct_answer: yes or no

# do inside the experiment
# contextVar: 1 or 2 (randomly sample from two variations of each context)
