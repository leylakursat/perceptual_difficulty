import random
from cv2 import cv2
import numpy as np

from objects import targets
from objects import distractors

# get possible competitor and non-competitor distractor options
competitorImgArray = {}
notcompetitorImgArray = {}
for numA,t in targets.items():
    a = 0
    b = 0
    targetItem = targets[numA]
    if targets[numA]["condition"] == "high_difficulty":
        sufficient = "color"
        redundant = "material"
    else:
        sufficient = "material"
        redundant = "color"
    
    for numB,d in distractors.items():
        if targets[numA]["item"] == distractors[numB]["item"]: 
            if targets[numA][sufficient] != distractors[numB][sufficient]: # competitor has different sufficient & same redundant
                if targets[numA][redundant] == distractors[numB][redundant]:
                    competitorImgArray[a] = distractors[numB]
                    a += 1
            if targets[numA][sufficient] != distractors[numB][sufficient]: # notcompetitor has different sufficient & different redundant
                if targets[numA][redundant] != distractors[numB][redundant]:
                    notcompetitorImgArray[b] = distractors[numB]
                    b +=1
    # get the sufficient feature that competitors and non-competitors share
    sufficientFeatures = []
    for numC,x in notcompetitorImgArray.items():
        for  numD,y in competitorImgArray.items():
            if notcompetitorImgArray[numC][sufficient] == competitorImgArray[numD][sufficient]:
                sufficientFeatures.append(competitorImgArray[numD][sufficient])
    #unique sufficient feature
    uniqueSufficient = list(dict.fromkeys(sufficientFeatures))
    randomSufficient = random.choice(uniqueSufficient)

    possibleComp = {}
    possibleNotComp = {}

    counterA = 0
    counterB = 0
    for numE,l in competitorImgArray.items():
        if competitorImgArray[numE][sufficient] == randomSufficient:
            possibleComp[counterA] = competitorImgArray[numE]
            counterA += 1
    for numE,l in notcompetitorImgArray.items():
        if notcompetitorImgArray[numE][sufficient] == randomSufficient:
            possibleNotComp[counterB] = notcompetitorImgArray[numE]
            counterB += 1
    
    # print("possibleComp: ", possibleComp)
    # print("possibleNotComp: ", possibleNotComp)
#TODO: make sure this stuff gets saved nicely to be used as stimuli
# f.write(...)

    # print("targetImg: ", targetItem)
    # print("competitorImgArray: ", competitorImgArray)
    # print("notcompetitorImgArray: ", notcompetitorImgArray)
    # print("sufficientFeatures: ", sufficientFeatures)
    # print("uniqueSufficientFeatures: ", uniqueSufficient)
    # print("randomSufficient: ", randomSufficient)
    # print("possibleCompetitors: ", possibleComp)
    # print("possibleNotCompetitors: ", possibleNotComp)
    # print("****************************************")

#TODO: run this for all possibleCompetitors and possibleNotCompetitors and save them accordingly
    print("NEW TARGET OBJECT: ", targetItem["label"])
    print('length of possibleComp: ', len(possibleComp))
    print('length of possibleNotComp: ', len(possibleNotComp))

    if len(possibleComp) == 1:
        for i,x in possibleNotComp.items():
            target = targetItem["label"]
            competitor = possibleComp[0]["label"]
            distractor = possibleNotComp[i]["label"]

            targetLabel = targetItem["label"]
            distractorLabel = possibleNotComp[i]["label"]

            targetImg = cv2.imread('images/'+targetItem["url"], cv2.IMREAD_UNCHANGED)
            competitorImg = cv2.imread('images/'+possibleComp[0]["url"], cv2.IMREAD_UNCHANGED)
            notcompetitorImg = cv2.imread('images/'+possibleNotComp[i]["url"], cv2.IMREAD_UNCHANGED)

            #put borders around objects
            targetImg = cv2.copyMakeBorder(targetImg, 1,1,1,1, cv2.BORDER_CONSTANT)
            competitorImg = cv2.copyMakeBorder(competitorImg, 1,1,1,1, cv2.BORDER_CONSTANT)
            notcompetitorImg = cv2.copyMakeBorder(notcompetitorImg, 1,1,1,1, cv2.BORDER_CONSTANT)

            # define a function for horizontally concatenating images of different heights  
            def hconcat_resize(img_list, interpolation = cv2.INTER_CUBIC): 
                h_min = min(img.shape[0]  
                            for img in img_list) 
                im_list_resize = [cv2.resize(img, 
                                (int(img.shape[1] * h_min / img.shape[0]), 
                                    h_min), interpolation 
                                            = interpolation)  
                                for img in img_list] 
                return cv2.hconcat(im_list_resize) 
            
            object_array = [targetImg,competitorImg,notcompetitorImg,notcompetitorImg]

            # to concatanate image id's and get label for each context - very messy
            t_names = target.split("_")
            c_names = competitor.split("_")
            nc_names = distractor.split("_")
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

            random.shuffle(object_array)
            img_resize = hconcat_resize(object_array) 
            cv2.imwrite('../context_images/'+label+'_1.png', img_resize)

            random.shuffle(object_array)
            img_resize = hconcat_resize(object_array) 
            cv2.imwrite('../context_images/'+label+'_2.png', img_resize)

            print(label)

            # cv2.imshow(targetLabel+'_context.png', img_resize) 
            
            # cv2.waitKey(0)
            # cv2.destroyAllWindows()
            # cv2.waitKey(1)

            # line = "{label: '" + targetItem 

            print("TARGET: ", target)
            print("COMPETITOR: ", competitor)
            print("DISTRACTOR: ", distractor)
            print("DISTRACTOR: ", distractor)
            print("***********")

    competitorImgArray = {}
    notcompetitorImgArray = {}
    print("******************************************************************")


    
#TODO: things to check at the end:
# 1) how many uniqueSufficientFeatures are there?
# 2) how many possible NotCompetitors are there 