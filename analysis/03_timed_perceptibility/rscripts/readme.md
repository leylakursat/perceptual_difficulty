Perceptual Difficulty - Timed Perceptibility2 (difficulty analysis)
================

**Stimuli check**

    ##        
    ##            color material
    ##   'no'   0    81       81
    ##   'yes'  0    81       81

**Accuracy exclusions** Participants with accuracy lower than 75% are
excluded (29 participants)
![](difficulty_files/figure-gfm/accexclusions-1.png)<!-- -->

    ## # A tibble: 29 x 7
    ##    workerid  Mean  CILow CIHigh  YMin  YMax lowacc
    ##       <int> <dbl>  <dbl>  <dbl> <dbl> <dbl> <chr> 
    ##  1        2 0.630 0.0988 0.0988 0.531 0.728 1     
    ##  2        4 0.543 0.111  0.0988 0.432 0.642 1     
    ##  3        5 0.617 0.111  0.0988 0.506 0.716 1     
    ##  4       11 0.519 0.111  0.111  0.407 0.630 1     
    ##  5       12 0.444 0.111  0.111  0.333 0.556 1     
    ##  6       13 0.667 0.0988 0.0988 0.568 0.765 1     
    ##  7       14 0.519 0.111  0.111  0.407 0.630 1     
    ##  8       31 0.494 0.111  0.111  0.383 0.605 1     
    ##  9       38 0.568 0.111  0.0988 0.457 0.667 1     
    ## 10       39 0.395 0.0988 0.0988 0.296 0.494 1     
    ## # … with 19 more rows

# By response times

**Regardless of response correctness and feature matching**

    ## # A tibble: 15 x 7
    ##    label                   feature      Mean CILow CIHigh count group
    ##    <fct>                   <fct>       <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 bowl_metal_green        ['silver']  1239. 144.   135.     22 rt   
    ##  2 chair_metal_purple      ['metal']   1222. 129.   133.     24 rt   
    ##  3 pitcher_glass_blue      ['plastic'] 1190. 137.   148.     23 rt   
    ##  4 jacket_leather_green    ['denim']   1184.  97.3  109.     23 rt   
    ##  5 chair_metal_purple      ['silver']  1183. 156.   167.     22 rt   
    ##  6 jacket_leather_original ['rubber']  1160. 109.   111.     24 rt   
    ##  7 pitcher_plastic_blue    ['rubber']  1158. 132.   157.     23 rt   
    ##  8 jacket_denim_purple     ['denim']   1157. 135.   154.     23 rt   
    ##  9 chair_metal_purple      ['plastic'] 1149. 113.   119.     24 rt   
    ## 10 boot_leather_brown      ['rubber']  1149.  94.6   96.3    23 rt   
    ## 11 jacket_leather_green    ['leather'] 1144. 167.   171.     19 rt   
    ## 12 boot_leather_green      ['leather'] 1139. 110.   119.     23 rt   
    ## 13 jacket_leather_purple   ['leather'] 1135. 146.   164.     23 rt   
    ## 14 pitcher_metal_blue      ['metal']   1134. 144.   147.     24 rt   
    ## 15 jacket_denim_purple     ['blue']    1132. 146.   138.     23 rt

    ## # A tibble: 15 x 7
    ##    label                  feature        Mean CILow CIHigh count group
    ##    <fct>                  <fct>         <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 spoon_plastic_original ['red']        878.  84.5  106.     24 rt   
    ##  2 cup_metal_blue         ['blue']       877.  89.3   82.9    22 rt   
    ##  3 pitcher_glass_green    ['wood']       877.  76.6   79.2    24 rt   
    ##  4 chair_plastic_green    ['green']      874.  84.2   92.2    24 rt   
    ##  5 table_metal_blue       ['blue']       873.  94.6  111.     23 rt   
    ##  6 plate_plastic_original ['blue']       873. 104.   108.     19 rt   
    ##  7 pitcher_metal_green    ['green']      872.  93.2   96.0    24 rt   
    ##  8 box_cardboard_original ['cardboard']  866.  96.3  105.     19 rt   
    ##  9 chair_metal_original   ['paper']      863. 119.   122.     19 rt   
    ## 10 boot_leather_green     ['green']      863.  79.2   76.0    24 rt   
    ## 11 cup_plastic_blue       ['blue']       861.  92.2   97.1    20 rt   
    ## 12 cup_plastic_green      ['green']      860.  93.4   99.4    22 rt   
    ## 13 plate_plastic_green    ['green']      853   91.7  108.     24 rt   
    ## 14 spoon_metal_original   ['pink']       829.  62.8   60.2    24 rt   
    ## 15 spoon_plastic_blue     ['blue']       821.  62.9   64.3    24 rt

**Only correct responses, regardless of feature matching**

    ## # A tibble: 15 x 7
    ##    label                    feature      Mean CILow CIHigh count group     
    ##    <fct>                    <fct>       <dbl> <dbl>  <dbl> <int> <chr>     
    ##  1 bowl_metal_green         ['silver']  1246. 162    159.      7 correct_rt
    ##  2 bottle_plastic_blue      ['glass']   1232  148.   180.     15 correct_rt
    ##  3 jacket_leather_green     ['denim']   1205. 106.   117.     15 correct_rt
    ##  4 spoon_wood_green         ['plastic'] 1200. 181.   184.      9 correct_rt
    ##  5 jacket_denim_purple      ['denim']   1196. 130.   152.     20 correct_rt
    ##  6 chair_metal_purple       ['metal']   1185. 139.   146.     22 correct_rt
    ##  7 jacket_leather_original  ['rubber']  1176. 107.   114.     22 correct_rt
    ##  8 jacket_leather_purple    ['leather'] 1173. 147.   173.     18 correct_rt
    ##  9 table_metal_blue         ['metal']   1171. 172.   161.     10 correct_rt
    ## 10 chair_metal_purple       ['plastic'] 1169. 156.   159.     16 correct_rt
    ## 11 bottle_glass_original    ['plastic'] 1149. 157.   175.     19 correct_rt
    ## 12 boot_leather_green       ['leather'] 1144. 109.   116.     20 correct_rt
    ## 13 bowl_glass_green         ['blue']    1143. 116.   131.     22 correct_rt
    ## 14 pitcher_plastic_original ['plastic'] 1141. 169.   180.     19 correct_rt
    ## 15 boot_leather_brown       ['rubber']  1134.  94.8   97.9    20 correct_rt

    ## # A tibble: 15 x 7
    ##    label                  feature        Mean CILow CIHigh count group     
    ##    <fct>                  <fct>         <dbl> <dbl>  <dbl> <int> <chr>     
    ##  1 cup_plastic_original   ['clear']      878.  72.4   79.5    23 correct_rt
    ##  2 cup_metal_blue         ['blue']       877.  85.3   82.6    22 correct_rt
    ##  3 pitcher_glass_green    ['wood']       877.  76.7   81.6    24 correct_rt
    ##  4 chair_plastic_green    ['green']      874.  76.4   94.9    24 correct_rt
    ##  5 table_metal_blue       ['blue']       873.  95.0  108.     23 correct_rt
    ##  6 pitcher_metal_green    ['green']      872.  90.8   86.7    24 correct_rt
    ##  7 box_cardboard_original ['cardboard']  866.  93.7  102.     19 correct_rt
    ##  8 chair_metal_original   ['paper']      863. 123.   118.     19 correct_rt
    ##  9 boot_leather_green     ['green']      863.  78.2   82.1    24 correct_rt
    ## 10 cup_plastic_blue       ['blue']       861.  84.3  103.     20 correct_rt
    ## 11 cup_plastic_green      ['green']      860.  94.4  104.     22 correct_rt
    ## 12 plate_plastic_green    ['green']      848.  97.7  112.     23 correct_rt
    ## 13 plate_paper_original   ['white']      839.  66.1   74.2    21 correct_rt
    ## 14 spoon_metal_original   ['pink']       829.  65.7   62.6    24 correct_rt
    ## 15 spoon_plastic_blue     ['blue']       821.  62.3   65.1    24 correct_rt

**Only correct responses, only matching features**

    ## # A tibble: 15 x 7
    ##    label                  feature      Mean CILow CIHigh count group            
    ##    <fct>                  <fct>       <dbl> <dbl>  <dbl> <int> <chr>            
    ##  1 jacket_denim_purple    ['denim']   1196. 133.   143.     20 correct_matching…
    ##  2 chair_metal_purple     ['metal']   1185. 137.   136.     22 correct_matching…
    ##  3 jacket_leather_purple  ['leather'] 1173. 144.   172.     18 correct_matching…
    ##  4 table_metal_blue       ['metal']   1171. 156.   164.     10 correct_matching…
    ##  5 boot_leather_green     ['leather'] 1144. 111.   110.     20 correct_matching…
    ##  6 pitcher_plastic_origi… ['plastic'] 1141. 156.   172.     19 correct_matching…
    ##  7 jacket_leather_green   ['leather'] 1127. 131.   149.     17 correct_matching…
    ##  8 spoon_wood_blue        ['wood']    1126. 129.   147.     18 correct_matching…
    ##  9 pitcher_metal_green    ['metal']   1122. 148.   164.     15 correct_matching…
    ## 10 chair_metal_green      ['metal']   1118.  84.4   93.2    21 correct_matching…
    ## 11 table_metal_green      ['metal']   1115. 153.   163.     16 correct_matching…
    ## 12 boot_rubber_brown      ['rubber']  1111. 130.   132.     23 correct_matching…
    ## 13 spoon_metal_green      ['metal']   1091. 134.   140.     19 correct_matching…
    ## 14 chair_plastic_original ['plastic'] 1087. 121.   150.     19 correct_matching…
    ## 15 chair_plastic_purple   ['plastic'] 1077.  77.6   78.0    20 correct_matching…

    ## # A tibble: 15 x 7
    ##    label                 feature       Mean CILow CIHigh count group            
    ##    <fct>                 <fct>        <dbl> <dbl>  <dbl> <int> <chr>            
    ##  1 bottle_glass_green    ['glass']     884.  86.4   96.5    24 correct_matching…
    ##  2 plate_plastic_origin… ['blue']      880. 114.   117.     18 correct_matching…
    ##  3 bag_plastic_blue      ['plastic']   879. 102.   117.     16 correct_matching…
    ##  4 cup_plastic_original  ['clear']     878.  74.4   76.2    23 correct_matching…
    ##  5 cup_metal_blue        ['blue']      877.  81.3   80.2    22 correct_matching…
    ##  6 chair_plastic_green   ['green']     874.  83.1   92.6    24 correct_matching…
    ##  7 table_metal_blue      ['blue']      873. 104.   105.     23 correct_matching…
    ##  8 pitcher_metal_green   ['green']     872.  84.1  105.     24 correct_matching…
    ##  9 box_cardboard_origin… ['cardboard…  866.  89.4  107.     19 correct_matching…
    ## 10 boot_leather_green    ['green']     863.  76.6   77.4    24 correct_matching…
    ## 11 cup_plastic_blue      ['blue']      861.  89.7   91.8    20 correct_matching…
    ## 12 cup_plastic_green     ['green']     860.  95.5   97.5    22 correct_matching…
    ## 13 plate_plastic_green   ['green']     848.  93.6  104.     23 correct_matching…
    ## 14 plate_paper_original  ['white']     839.  70.6   74.5    21 correct_matching…
    ## 15 spoon_plastic_blue    ['blue']      821.  64.3   69.2    24 correct_matching…

**Only correct responses, only not matching features**

    ## # A tibble: 15 x 7
    ##    label                feature       Mean CILow CIHigh count group             
    ##    <fct>                <fct>        <dbl> <dbl>  <dbl> <int> <chr>             
    ##  1 bowl_metal_green     ['silver']   1246. 156.    160.     7 correct_notmatchi…
    ##  2 bottle_plastic_blue  ['glass']    1232  168.    178.    15 correct_notmatchi…
    ##  3 jacket_leather_green ['denim']    1205. 108.    116.    15 correct_notmatchi…
    ##  4 spoon_wood_green     ['plastic']  1200. 169.    172.     9 correct_notmatchi…
    ##  5 jacket_leather_orig… ['rubber']   1176. 117.    111.    22 correct_notmatchi…
    ##  6 chair_metal_purple   ['plastic']  1169. 155.    154.    16 correct_notmatchi…
    ##  7 bottle_glass_origin… ['plastic']  1149. 155.    171.    19 correct_notmatchi…
    ##  8 bowl_glass_green     ['blue']     1143. 132.    124.    22 correct_notmatchi…
    ##  9 boot_leather_brown   ['rubber']   1134.  97.8   105.    20 correct_notmatchi…
    ## 10 spoon_wood_original  ['cardboard… 1107  108.    110.    22 correct_notmatchi…
    ## 11 chair_plastic_origi… ['wood']     1095.  94.8   103.    18 correct_notmatchi…
    ## 12 plate_paper_green    ['glass']    1094. 117.    140.    20 correct_notmatchi…
    ## 13 spoon_wood_original  ['clear']    1093. 105.    109.    22 correct_notmatchi…
    ## 14 chair_metal_purple   ['silver']   1091  147.    142.    19 correct_notmatchi…
    ## 15 bag_plastic_blue     ['purple']   1091. 125.    144.    23 correct_notmatchi…

    ## # A tibble: 15 x 7
    ##    label                feature      Mean CILow CIHigh count group              
    ##    <fct>                <fct>       <dbl> <dbl>  <dbl> <int> <chr>              
    ##  1 box_cardboard_green  ['denim']    902.  68.2   65.8    23 correct_notmatchin…
    ##  2 boot_rubber_brown    ['silver']   900.  78.9   87.3    22 correct_notmatchin…
    ##  3 bowl_metal_blue      ['wood']     900. 101.   118.     24 correct_notmatchin…
    ##  4 bottle_glass_origin… ['brown']    897.  74.0   81.4    23 correct_notmatchin…
    ##  5 bowl_metal_original  ['wood']     895.  95.7   94.5    19 correct_notmatchin…
    ##  6 jacket_leather_purp… ['red']      894.  76.8   91.8    22 correct_notmatchin…
    ##  7 table_metal_green    ['paper']    891.  76.2   83.8    18 correct_notmatchin…
    ##  8 boot_rubber_original ['red']      891.  93.5   88.6    22 correct_notmatchin…
    ##  9 bottle_plastic_green ['cardboar…  883.  76.2   80.7    20 correct_notmatchin…
    ## 10 boot_leather_green   ['pink']     880.  90.3  105.     19 correct_notmatchin…
    ## 11 bag_paper_blue       ['glass']    879.  79.0   78.3    19 correct_notmatchin…
    ## 12 spoon_plastic_origi… ['red']      878.  92.0   92.4    24 correct_notmatchin…
    ## 13 pitcher_glass_green  ['wood']     877.  78.2   84.8    24 correct_notmatchin…
    ## 14 chair_metal_original ['paper']    863. 119.   116.     19 correct_notmatchin…
    ## 15 spoon_metal_original ['pink']     829.  61.7   66.3    24 correct_notmatchin…

# By error rates

**Regardless of feature matching**

    ## # A tibble: 15 x 7
    ##    label                feature      Mean CILow CIHigh count group
    ##    <fct>                <fct>       <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 boot_rubber_original ['green']   0     0      0        24 er   
    ##  2 pitcher_glass_blue   ['clear']   0     0      0        23 er   
    ##  3 bowl_metal_green     ['silver']  0.318 0.182  0.182    22 er   
    ##  4 spoon_wood_green     ['plastic'] 0.474 0.211  0.211    19 er   
    ##  5 table_metal_blue     ['metal']   0.526 0.211  0.211    19 er   
    ##  6 pitcher_glass_blue   ['plastic'] 0.565 0.217  0.174    23 er   
    ##  7 bottle_plastic_blue  ['glass']   0.625 0.208  0.167    24 er   
    ##  8 pitcher_metal_blue   ['metal']   0.625 0.168  0.167    24 er   
    ##  9 jacket_leather_green ['denim']   0.652 0.217  0.174    23 er   
    ## 10 chair_metal_purple   ['plastic'] 0.667 0.167  0.167    24 er   
    ## 11 table_metal_green    ['metal']   0.667 0.167  0.167    24 er   
    ## 12 pitcher_metal_green  ['metal']   0.682 0.183  0.182    22 er   
    ## 13 plate_paper_green    ['paper']   0.7   0.200  0.2      20 er   
    ## 14 spoon_metal_blue     ['metal']   0.7   0.200  0.2      20 er   
    ## 15 bottle_glass_blue    ['plastic'] 0.714 0.190  0.143    21 er

    ## # A tibble: 15 x 7
    ##    label                  feature      Mean CILow CIHigh count group
    ##    <fct>                  <fct>       <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 spoon_plastic_blue     ['plastic']     1     0      0    23 er   
    ##  2 spoon_plastic_green    ['pink']        1     0      0    22 er   
    ##  3 spoon_plastic_original ['denim']       1     0      0    22 er   
    ##  4 spoon_plastic_original ['plastic']     1     0      0    19 er   
    ##  5 spoon_plastic_original ['red']         1     0      0    24 er   
    ##  6 spoon_wood_original    ['brown']       1     0      0    20 er   
    ##  7 table_metal_blue       ['blue']        1     0      0    23 er   
    ##  8 table_metal_blue       ['green']       1     0      0    24 er   
    ##  9 table_metal_green      ['blue']        1     0      0    24 er   
    ## 10 table_metal_green      ['green']       1     0      0    23 er   
    ## 11 table_metal_green      ['paper']       1     0      0    18 er   
    ## 12 table_wood_blue        ['leather']     1     0      0    23 er   
    ## 13 table_wood_original    ['brown']       1     0      0    24 er   
    ## 14 table_wood_original    ['plastic']     1     0      0    23 er   
    ## 15 table_wood_original    ['wood']        1     0      0    20 er

**Only matching features**

    ## # A tibble: 15 x 7
    ##    label                  feature      Mean CILow CIHigh count group      
    ##    <fct>                  <fct>       <dbl> <dbl>  <dbl> <int> <chr>      
    ##  1 boot_rubber_original   ['green']   0     0      0        24 matching_er
    ##  2 table_metal_blue       ['metal']   0.526 0.211  0.211    19 matching_er
    ##  3 pitcher_metal_blue     ['metal']   0.625 0.208  0.167    24 matching_er
    ##  4 table_metal_green      ['metal']   0.667 0.208  0.167    24 matching_er
    ##  5 pitcher_metal_green    ['metal']   0.682 0.183  0.182    22 matching_er
    ##  6 plate_paper_green      ['paper']   0.7   0.200  0.2      20 matching_er
    ##  7 spoon_metal_blue       ['metal']   0.7   0.200  0.2      20 matching_er
    ##  8 spoon_wood_blue        ['blue']    0.739 0.174  0.174    23 matching_er
    ##  9 bowl_metal_green       ['green']   0.75  0.167  0.167    24 matching_er
    ## 10 plate_plastic_original ['plastic'] 0.75  0.167  0.167    24 matching_er
    ## 11 bag_paper_green        ['paper']   0.783 0.174  0.174    23 matching_er
    ## 12 jacket_leather_purple  ['leather'] 0.783 0.174  0.174    23 matching_er
    ## 13 plate_paper_blue       ['paper']   0.783 0.174  0.174    23 matching_er
    ## 14 spoon_wood_blue        ['wood']    0.783 0.174  0.174    23 matching_er
    ## 15 table_metal_original   ['metal']   0.783 0.174  0.130    23 matching_er

    ## # A tibble: 15 x 7
    ##    label                    feature      Mean CILow CIHigh count group      
    ##    <fct>                    <fct>       <dbl> <dbl>  <dbl> <int> <chr>      
    ##  1 pitcher_metal_blue       ['blue']        1     0      0    21 matching_er
    ##  2 pitcher_metal_green      ['green']       1     0      0    24 matching_er
    ##  3 pitcher_plastic_blue     ['plastic']     1     0      0    24 matching_er
    ##  4 pitcher_plastic_green    ['green']       1     0      0    23 matching_er
    ##  5 pitcher_plastic_original ['white']       1     0      0    23 matching_er
    ##  6 spoon_metal_blue         ['blue']        1     0      0    23 matching_er
    ##  7 spoon_metal_original     ['silver']      1     0      0    22 matching_er
    ##  8 spoon_plastic_blue       ['blue']        1     0      0    24 matching_er
    ##  9 spoon_plastic_blue       ['plastic']     1     0      0    23 matching_er
    ## 10 spoon_plastic_original   ['plastic']     1     0      0    19 matching_er
    ## 11 spoon_wood_original      ['brown']       1     0      0    20 matching_er
    ## 12 table_metal_blue         ['blue']        1     0      0    23 matching_er
    ## 13 table_metal_green        ['green']       1     0      0    23 matching_er
    ## 14 table_wood_original      ['brown']       1     0      0    24 matching_er
    ## 15 table_wood_original      ['wood']        1     0      0    20 matching_er

**Only not matching features**

    ## # A tibble: 15 x 7
    ##    label                    feature      Mean CILow CIHigh count group         
    ##    <fct>                    <fct>       <dbl> <dbl>  <dbl> <int> <chr>         
    ##  1 pitcher_glass_blue       ['clear']   0     0      0        23 notmatching_er
    ##  2 bowl_metal_green         ['silver']  0.318 0.182  0.227    22 notmatching_er
    ##  3 spoon_wood_green         ['plastic'] 0.474 0.211  0.211    19 notmatching_er
    ##  4 pitcher_glass_blue       ['plastic'] 0.565 0.217  0.217    23 notmatching_er
    ##  5 bottle_plastic_blue      ['glass']   0.625 0.167  0.208    24 notmatching_er
    ##  6 jacket_leather_green     ['denim']   0.652 0.175  0.174    23 notmatching_er
    ##  7 chair_metal_purple       ['plastic'] 0.667 0.167  0.167    24 notmatching_er
    ##  8 bottle_glass_blue        ['plastic'] 0.714 0.190  0.190    21 notmatching_er
    ##  9 table_metal_original     ['black']   0.75  0.200  0.200    20 notmatching_er
    ## 10 jacket_denim_purple      ['blue']    0.783 0.174  0.130    23 notmatching_er
    ## 11 pitcher_plastic_blue     ['rubber']  0.826 0.174  0.130    23 notmatching_er
    ## 12 pitcher_plastic_original ['rubber']  0.826 0.174  0.130    23 notmatching_er
    ## 13 bag_plastic_green        ['rubber']  0.85  0.15   0.15     20 notmatching_er
    ## 14 chair_metal_green        ['clear']   0.85  0.15   0.15     20 notmatching_er
    ## 15 bottle_glass_original    ['plastic'] 0.864 0.136  0.136    22 notmatching_er

    ## # A tibble: 15 x 7
    ##    label                  feature      Mean CILow CIHigh count group         
    ##    <fct>                  <fct>       <dbl> <dbl>  <dbl> <int> <chr>         
    ##  1 plate_plastic_pink     ['silver']      1     0      0    20 notmatching_er
    ##  2 spoon_metal_blue       ['paper']       1     0      0    23 notmatching_er
    ##  3 spoon_metal_blue       ['pink']        1     0      0    24 notmatching_er
    ##  4 spoon_metal_green      ['black']       1     0      0    20 notmatching_er
    ##  5 spoon_metal_green      ['paper']       1     0      0    24 notmatching_er
    ##  6 spoon_metal_original   ['pink']        1     0      0    24 notmatching_er
    ##  7 spoon_metal_original   ['wood']        1     0      0    19 notmatching_er
    ##  8 spoon_plastic_green    ['pink']        1     0      0    22 notmatching_er
    ##  9 spoon_plastic_original ['denim']       1     0      0    22 notmatching_er
    ## 10 spoon_plastic_original ['red']         1     0      0    24 notmatching_er
    ## 11 table_metal_blue       ['green']       1     0      0    24 notmatching_er
    ## 12 table_metal_green      ['blue']        1     0      0    24 notmatching_er
    ## 13 table_metal_green      ['paper']       1     0      0    18 notmatching_er
    ## 14 table_wood_blue        ['leather']     1     0      0    23 notmatching_er
    ## 15 table_wood_original    ['plastic']     1     0      0    23 notmatching_er

# Is there overlap?

    ## # A tibble: 49 x 3
    ## # Groups:   label [36]
    ##    label                 feature     count
    ##    <fct>                 <fct>       <int>
    ##  1 bag_paper_green       ['paper']       1
    ##  2 bag_plastic_blue      ['purple']      1
    ##  3 bag_plastic_green     ['rubber']      1
    ##  4 boot_leather_brown    ['rubber']      3
    ##  5 boot_leather_green    ['leather']     3
    ##  6 boot_rubber_brown     ['rubber']      1
    ##  7 boot_rubber_original  ['green']       2
    ##  8 bottle_glass_blue     ['plastic']     2
    ##  9 bottle_glass_original ['plastic']     3
    ## 10 bottle_plastic_blue   ['glass']       4
    ## # … with 39 more rows

    ## # A tibble: 54 x 3
    ## # Groups:   label [40]
    ##    label                 feature       count
    ##    <fct>                 <fct>         <int>
    ##  1 bag_paper_blue        ['glass']         1
    ##  2 bag_plastic_blue      ['plastic']       1
    ##  3 boot_leather_green    ['green']         3
    ##  4 boot_leather_green    ['pink']          1
    ##  5 boot_rubber_brown     ['silver']        1
    ##  6 boot_rubber_original  ['red']           1
    ##  7 bottle_glass_green    ['glass']         1
    ##  8 bottle_glass_original ['brown']         1
    ##  9 bottle_plastic_green  ['cardboard']     1
    ## 10 bowl_metal_blue       ['wood']          1
    ## # … with 44 more rows
