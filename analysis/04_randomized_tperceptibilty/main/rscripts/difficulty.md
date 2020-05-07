Perceptual Difficulty - Randomized and Timed Perceptibility2 (difficulty
analysis)
================

**Stimuli check**

    ##      
    ##       color material
    ##   no     81       81
    ##   yes    81       81

**Exclusions** Participants whose native language is not English are
excluded

    ##   workerid language
    ## 1       57  Chinese
    ## 2       82         
    ## 3       90  Spanish

Participants with accuracy lower than 75% are excluded (29 participants)
![](difficulty_files/figure-gfm/accexclusions-1.png)<!-- -->

    ## # A tibble: 24 x 7
    ##    workerid  Mean  CILow CIHigh  YMin  YMax lowacc
    ##       <int> <dbl>  <dbl>  <dbl> <dbl> <dbl> <chr> 
    ##  1        0 0.519 0.111  0.111  0.407 0.630 1     
    ##  2        1 0.746 0.104  0.0896 0.642 0.836 1     
    ##  3        3 0.506 0.102  0.114  0.405 0.620 1     
    ##  4        6 0.573 0.107  0.12   0.467 0.693 1     
    ##  5        7 0.593 0.0988 0.0988 0.494 0.691 1     
    ##  6       12 0.457 0.0988 0.111  0.358 0.568 1     
    ##  7       13 0.481 0.101  0.101  0.380 0.582 1     
    ##  8       16 0.556 0.127  0.111  0.429 0.667 1     
    ##  9       17 0.506 0.111  0.0988 0.395 0.605 1     
    ## 10       27 0.488 0.112  0.112  0.375 0.6   1     
    ## # … with 14 more rows

# By response times

**Regardless of response correctness and feature matching**

    ## # A tibble: 15 x 7
    ##    label                          condition     Mean CILow CIHigh count group
    ##    <fct>                          <chr>        <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 table_metal_blue               material yes 1266.  145.   153.    22 rt   
    ##  2 table_metal_green              material yes 1253.  174.   168.    20 rt   
    ##  3 chair_metal_purple             material yes 1244.  120.   125.    25 rt   
    ##  4 box_wood_blue                  material yes 1212.  151.   153.    23 rt   
    ##  5 plate_plastic_pink             material yes 1211.  128.   133.    20 rt   
    ##  6 table_metal_silver_original    material yes 1204.  131.   113.    20 rt   
    ##  7 table_wood_green               material yes 1201.  114.   118.    26 rt   
    ##  8 chair_metal_green              material yes 1187.  127.   137.    20 rt   
    ##  9 jacket_leather_green           material yes 1187.  129.   124.    24 rt   
    ## 10 bottle_glass_blue              material yes 1185.  123.   135.    23 rt   
    ## 11 pitcher_metal_blue             material yes 1185.  164.   172.    22 rt   
    ## 12 spoon_wood_green               material yes 1179.  134.   131.    24 rt   
    ## 13 plate_paper_blue               material no  1177.  122.   128.    25 rt   
    ## 14 boot_leather_green             material yes 1174.  116.   136.    19 rt   
    ## 15 pitcher_plastic_white_original material yes 1174.  119.   107.    20 rt

    ## # A tibble: 15 x 7
    ##    label                        condition     Mean CILow CIHigh count group
    ##    <fct>                        <chr>        <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 plate_paper_blue             color yes     943. 108.   121.     25 rt   
    ##  2 table_metal_blue             color yes     941. 103.   110.     26 rt   
    ##  3 box_cardboard_brown_original color yes     941.  94.0   98.6    26 rt   
    ##  4 table_wood_green             color no      940.  93.5  102.     20 rt   
    ##  5 table_metal_green            color yes     938.  75.2   84.6    20 rt   
    ##  6 cup_plastic_green            color no      932.  79.4   83.0    25 rt   
    ##  7 chair_plastic_blue_original  color yes     930.  91.0   80.7    20 rt   
    ##  8 table_wood_brown_original    material yes  928. 102.   108.     25 rt   
    ##  9 spoon_metal_green            color yes     924.  93.1  109.     25 rt   
    ## 10 jacket_denim_purple          color yes     922.  75.7   80.2    20 rt   
    ## 11 pitcher_metal_blue           color yes     922   91.0   99.8    20 rt   
    ## 12 cup_plastic_blue             material yes  918.  75.5   82.2    26 rt   
    ## 13 table_wood_brown_original    color yes     917.  75.0   80.7    24 rt   
    ## 14 cup_plastic_green            color yes     911. 118.   148.     20 rt   
    ## 15 plate_plastic_blue_original  color yes     875.  97.8  103.     24 rt

**Only correct responses, regardless of feature matching**

    ## # A tibble: 15 x 7
    ##    label                       condition     Mean CILow CIHigh count group     
    ##    <fct>                       <chr>        <dbl> <dbl>  <dbl> <int> <chr>     
    ##  1 table_metal_green           material yes 1316.  202.   231.    12 correct_rt
    ##  2 table_metal_blue            material yes 1305.  199.   216.    14 correct_rt
    ##  3 chair_metal_purple          material yes 1282.  135.   138.    19 correct_rt
    ##  4 table_wood_green            material yes 1206.  117.   138.    23 correct_rt
    ##  5 bottle_glass_clear_original color no     1190.  126.   143.    22 correct_rt
    ##  6 table_metal_silver_original material yes 1185.  154.   145.    15 correct_rt
    ##  7 jacket_leather_purple       material yes 1185.  179.   188.    17 correct_rt
    ##  8 chair_metal_green           material yes 1181.  125.   144.    19 correct_rt
    ##  9 boot_leather_green          material yes 1174.  122    132.    19 correct_rt
    ## 10 chair_metal_silver_original material yes 1165.  137.   152.    24 correct_rt
    ## 11 boot_leather_black_original material no  1164.  124.   135.    24 correct_rt
    ## 12 spoon_metal_green           material yes 1161.  179.   185.    18 correct_rt
    ## 13 spoon_wood_blue             color no     1160.  166.   170.    21 correct_rt
    ## 14 chair_wood_purple           material yes 1157.  160.   171.    21 correct_rt
    ## 15 table_wood_blue             material yes 1156.  138.   154.    25 correct_rt

    ## # A tibble: 15 x 7
    ##    label                       condition     Mean CILow CIHigh count group     
    ##    <fct>                       <chr>        <dbl> <dbl>  <dbl> <int> <chr>     
    ##  1 box_wood_brown_original     material yes  936   92.1  111.     23 correct_rt
    ##  2 bottle_plastic_green        color yes     935. 102.   113.     18 correct_rt
    ##  3 bowl_metal_silver_original  material yes  934.  98.2  118.     22 correct_rt
    ##  4 cup_plastic_green           color no      932.  77.2   74.0    25 correct_rt
    ##  5 table_wood_brown_original   material yes  928.  99.3  104.     25 correct_rt
    ##  6 jacket_denim_purple         color yes     922.  85.1   89.3    20 correct_rt
    ##  7 table_metal_blue            color yes     922.  98.6  101.     25 correct_rt
    ##  8 cup_plastic_blue            material yes  918.  77.6   86.7    26 correct_rt
    ##  9 cup_plastic_clear_original  color yes     917. 103.   124.     21 correct_rt
    ## 10 pitcher_metal_blue          color yes     915.  92.0  108.     19 correct_rt
    ## 11 cup_plastic_green           color yes     911. 119.   149.     20 correct_rt
    ## 12 bottle_glass_green          color yes     903.  79.5   85.1    19 correct_rt
    ## 13 chair_plastic_blue_original color yes     890.  74.4   72.4    18 correct_rt
    ## 14 table_wood_brown_original   color yes     876.  63.2   69.7    22 correct_rt
    ## 15 plate_plastic_blue_original color yes     875.  95.8   91.8    24 correct_rt

**Only correct responses, only matching features**

    ## # A tibble: 15 x 7
    ##    label                   condition    Mean CILow CIHigh count group           
    ##    <fct>                   <chr>       <dbl> <dbl>  <dbl> <int> <chr>           
    ##  1 table_metal_green       material y… 1316. 213.   218.     12 correct_matchin…
    ##  2 table_metal_blue        material y… 1305. 193.   197.     14 correct_matchin…
    ##  3 chair_metal_purple      material y… 1282. 146.   142.     19 correct_matchin…
    ##  4 table_wood_green        material y… 1206. 130.   136.     23 correct_matchin…
    ##  5 table_metal_silver_ori… material y… 1185. 159.   158.     15 correct_matchin…
    ##  6 jacket_leather_purple   material y… 1185. 167.   192.     17 correct_matchin…
    ##  7 chair_metal_green       material y… 1181. 140.   136.     19 correct_matchin…
    ##  8 boot_leather_green      material y… 1174. 127.   138.     19 correct_matchin…
    ##  9 chair_metal_silver_ori… material y… 1165. 147.   151      24 correct_matchin…
    ## 10 spoon_metal_green       material y… 1161. 167.   184.     18 correct_matchin…
    ## 11 chair_wood_purple       material y… 1157. 165.   172.     21 correct_matchin…
    ## 12 table_wood_blue         material y… 1156. 137.   148.     25 correct_matchin…
    ## 13 plate_paper_blue        material y… 1149. 146.   162.     16 correct_matchin…
    ## 14 bottle_glass_blue       material y… 1147. 129.   127.     21 correct_matchin…
    ## 15 jacket_denim_green      material y… 1146.  89.8   92.5    17 correct_matchin…

    ## # A tibble: 15 x 7
    ##    label                   condition     Mean CILow CIHigh count group          
    ##    <fct>                   <chr>        <dbl> <dbl>  <dbl> <int> <chr>          
    ##  1 box_cardboard_brown_or… material yes  936.  93.5  118.     23 correct_matchi…
    ##  2 box_wood_brown_original material yes  936   88.7  111.     23 correct_matchi…
    ##  3 bottle_plastic_green    color yes     935. 105.   109.     18 correct_matchi…
    ##  4 bowl_metal_silver_orig… material yes  934. 101.   115.     22 correct_matchi…
    ##  5 table_wood_brown_origi… material yes  928.  96.8   96.8    25 correct_matchi…
    ##  6 jacket_denim_purple     color yes     922.  81.4   82.5    20 correct_matchi…
    ##  7 table_metal_blue        color yes     922.  93.5  101.     25 correct_matchi…
    ##  8 cup_plastic_blue        material yes  918.  75.7   90.9    26 correct_matchi…
    ##  9 cup_plastic_clear_orig… color yes     917. 104.   125.     21 correct_matchi…
    ## 10 pitcher_metal_blue      color yes     915.  92.1  113.     19 correct_matchi…
    ## 11 cup_plastic_green       color yes     911. 118.   129.     20 correct_matchi…
    ## 12 bottle_glass_green      color yes     903.  75.1   82.2    19 correct_matchi…
    ## 13 chair_plastic_blue_ori… color yes     890.  75.1   76.1    18 correct_matchi…
    ## 14 table_wood_brown_origi… color yes     876.  60.8   64.6    22 correct_matchi…
    ## 15 plate_plastic_blue_ori… color yes     875.  94.9  107.     24 correct_matchi…

**Only correct responses, only not matching features**

    ## # A tibble: 15 x 7
    ##    label                  condition    Mean CILow CIHigh count group            
    ##    <fct>                  <chr>       <dbl> <dbl>  <dbl> <int> <chr>            
    ##  1 bottle_glass_clear_or… color no    1190.  142.   140.    22 correct_notmatch…
    ##  2 boot_leather_black_or… material no 1164.  127.   135.    24 correct_notmatch…
    ##  3 spoon_wood_blue        color no    1160.  144.   172.    21 correct_notmatch…
    ##  4 plate_paper_blue       material no 1155.  141.   127.    23 correct_notmatch…
    ##  5 boot_leather_brown     color no    1150.  136.   149.    25 correct_notmatch…
    ##  6 bottle_glass_green     material no 1146.  138.   143.    22 correct_notmatch…
    ##  7 chair_metal_green      color no    1146.  149.   162.    25 correct_notmatch…
    ##  8 spoon_wood_green       material no 1144.  145.   145.    22 correct_notmatch…
    ##  9 table_wood_brown_orig… color no    1140.  145.   169.    23 correct_notmatch…
    ## 10 bottle_glass_green     color no    1137.  128.   139.    24 correct_notmatch…
    ## 11 bag_paper_brown_origi… material no 1135.  121.   131.    25 correct_notmatch…
    ## 12 cup_metal_green        color no    1131.  150.   169.    24 correct_notmatch…
    ## 13 boot_leather_green     material no 1126.  127.   129.    26 correct_notmatch…
    ## 14 jacket_denim_green     material no 1123.  132.   162.    27 correct_notmatch…
    ## 15 plate_paper_white_ori… material no 1122.  121.   123.    26 correct_notmatch…

    ## # A tibble: 15 x 7
    ##    label                   condition    Mean CILow CIHigh count group           
    ##    <fct>                   <chr>       <dbl> <dbl>  <dbl> <int> <chr>           
    ##  1 pitcher_glass_blue      material no  979.  93.0   96.2    17 correct_notmatc…
    ##  2 pitcher_plastic_white_… material no  978. 106.   117.     24 correct_notmatc…
    ##  3 chair_wood_brown_origi… color no     977. 104.   124.     20 correct_notmatc…
    ##  4 chair_plastic_blue_ori… color no     972. 105.   109.     24 correct_notmatc…
    ##  5 jacket_denim_purple     material no  968. 111.   140.     22 correct_notmatc…
    ##  6 cup_metal_silver_origi… color no     966   98.9  112.     22 correct_notmatc…
    ##  7 jacket_denim_blue_orig… color no     964.  83.7  105.     19 correct_notmatc…
    ##  8 chair_metal_purple      color no     962. 110.   135.     18 correct_notmatc…
    ##  9 table_wood_green        material no  961. 119.   138.     20 correct_notmatc…
    ## 10 table_wood_brown_origi… material no  961.  71.8   85.5    20 correct_notmatc…
    ## 11 jacket_leather_black_o… color no     960.  84.9   92.4    19 correct_notmatc…
    ## 12 bowl_glass_green        material no  954. 110.   114.     20 correct_notmatc…
    ## 13 boot_rubber_brown       color no     942.  82.0   97.2    23 correct_notmatc…
    ## 14 table_wood_green        color no     937. 101.   104.     19 correct_notmatc…
    ## 15 cup_plastic_green       color no     932.  75.5   82.3    25 correct_notmatc…

# By error rates

**Regardless of feature matching**

    ## # A tibble: 15 x 7
    ##    label                       condition     Mean CILow CIHigh count group
    ##    <fct>                       <chr>        <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 table_metal_green           material yes 0.6   0.25   0.2      20 er   
    ##  2 table_metal_blue            material yes 0.636 0.227  0.182    22 er   
    ##  3 plate_paper_blue            material yes 0.667 0.208  0.167    24 er   
    ##  4 spoon_wood_green            material yes 0.667 0.208  0.167    24 er   
    ##  5 box_cardboard_blue          material no  0.708 0.208  0.167    24 er   
    ##  6 boot_rubber_brown           material yes 0.72  0.160  0.16     25 er   
    ##  7 spoon_wood_blue             material yes 0.737 0.211  0.158    19 er   
    ##  8 bowl_glass_blue             material yes 0.75  0.200  0.15     20 er   
    ##  9 table_metal_silver_original material yes 0.75  0.200  0.200    20 er   
    ## 10 chair_metal_purple          material yes 0.76  0.16   0.16     25 er   
    ## 11 jacket_denim_purple         material yes 0.76  0.16   0.16     25 er   
    ## 12 bag_plastic_blue            material no  0.789 0.158  0.158    19 er   
    ## 13 plate_plastic_green         material yes 0.789 0.211  0.158    19 er   
    ## 14 bag_plastic_green           material no  0.792 0.167  0.125    24 er   
    ## 15 boot_rubber_green           color yes    0.792 0.167  0.167    24 er

    ## # A tibble: 15 x 7
    ##    label                        condition     Mean CILow CIHigh count group
    ##    <fct>                        <chr>        <dbl> <dbl>  <dbl> <int> <chr>
    ##  1 spoon_metal_silver_original  material yes     1     0      0    24 er   
    ##  2 spoon_plastic_green          color yes        1     0      0    25 er   
    ##  3 spoon_plastic_white_original color no         1     0      0    24 er   
    ##  4 spoon_wood_brown_original    material no      1     0      0    24 er   
    ##  5 spoon_wood_green             material no      1     0      0    22 er   
    ##  6 table_metal_blue             material no      1     0      0    20 er   
    ##  7 table_metal_green            material no      1     0      0    24 er   
    ##  8 table_metal_silver_original  material no      1     0      0    25 er   
    ##  9 table_wood_blue              color no         1     0      0    23 er   
    ## 10 table_wood_blue              color yes        1     0      0    27 er   
    ## 11 table_wood_blue              material no      1     0      0    20 er   
    ## 12 table_wood_blue              material yes     1     0      0    25 er   
    ## 13 table_wood_brown_original    material no      1     0      0    20 er   
    ## 14 table_wood_brown_original    material yes     1     0      0    25 er   
    ## 15 table_wood_green             color yes        1     0      0    25 er

**Only matching features**

    ## # A tibble: 15 x 7
    ##    label                       condition     Mean CILow CIHigh count group      
    ##    <fct>                       <chr>        <dbl> <dbl>  <dbl> <int> <chr>      
    ##  1 table_metal_green           material yes 0.6   0.200  0.2      20 matching_er
    ##  2 table_metal_blue            material yes 0.636 0.227  0.182    22 matching_er
    ##  3 plate_paper_blue            material yes 0.667 0.208  0.167    24 matching_er
    ##  4 spoon_wood_green            material yes 0.667 0.208  0.167    24 matching_er
    ##  5 boot_rubber_brown           material yes 0.72  0.160  0.16     25 matching_er
    ##  6 spoon_wood_blue             material yes 0.737 0.211  0.211    19 matching_er
    ##  7 bowl_glass_blue             material yes 0.75  0.200  0.15     20 matching_er
    ##  8 table_metal_silver_original material yes 0.75  0.200  0.200    20 matching_er
    ##  9 chair_metal_purple          material yes 0.76  0.16   0.16     25 matching_er
    ## 10 jacket_denim_purple         material yes 0.76  0.16   0.16     25 matching_er
    ## 11 plate_plastic_green         material yes 0.789 0.211  0.158    19 matching_er
    ## 12 boot_rubber_green           color yes    0.792 0.167  0.167    24 matching_er
    ## 13 spoon_wood_blue             color yes    0.792 0.167  0.125    24 matching_er
    ## 14 bowl_metal_blue             material yes 0.8   0.161  0.12     25 matching_er
    ## 15 bowl_metal_green            color yes    0.8   0.16   0.160    25 matching_er

    ## # A tibble: 15 x 7
    ##    label                       condition     Mean CILow CIHigh count group      
    ##    <fct>                       <chr>        <dbl> <dbl>  <dbl> <int> <chr>      
    ##  1 pitcher_metal_green         color yes        1     0      0    25 matching_er
    ##  2 pitcher_metal_green         material yes     1     0      0    19 matching_er
    ##  3 pitcher_plastic_blue        material yes     1     0      0    26 matching_er
    ##  4 plate_paper_blue            color yes        1     0      0    25 matching_er
    ##  5 plate_paper_green           color yes        1     0      0    26 matching_er
    ##  6 plate_paper_white_original  color yes        1     0      0    25 matching_er
    ##  7 plate_plastic_blue_original color yes        1     0      0    24 matching_er
    ##  8 plate_plastic_green         color yes        1     0      0    25 matching_er
    ##  9 spoon_metal_silver_original color yes        1     0      0    20 matching_er
    ## 10 spoon_metal_silver_original material yes     1     0      0    24 matching_er
    ## 11 spoon_plastic_green         color yes        1     0      0    25 matching_er
    ## 12 table_wood_blue             color yes        1     0      0    27 matching_er
    ## 13 table_wood_blue             material yes     1     0      0    25 matching_er
    ## 14 table_wood_brown_original   material yes     1     0      0    25 matching_er
    ## 15 table_wood_green            color yes        1     0      0    25 matching_er

**Only not matching features**

    ## # A tibble: 15 x 7
    ##    label                      condition    Mean CILow CIHigh count group        
    ##    <fct>                      <chr>       <dbl> <dbl>  <dbl> <int> <chr>        
    ##  1 box_cardboard_blue         material no 0.708 0.167  0.167    24 notmatching_…
    ##  2 bag_plastic_blue           material no 0.789 0.211  0.158    19 notmatching_…
    ##  3 bag_plastic_green          material no 0.792 0.167  0.167    24 notmatching_…
    ##  4 pitcher_glass_green        color no    0.792 0.167  0.167    24 notmatching_…
    ##  5 box_cardboard_brown_origi… material no 0.8   0.2    0.150    20 notmatching_…
    ##  6 chair_metal_green          material no 0.815 0.148  0.148    27 notmatching_…
    ##  7 bag_paper_blue             material no 0.833 0.167  0.125    24 notmatching_…
    ##  8 cup_plastic_clear_original color no    0.833 0.167  0.125    24 notmatching_…
    ##  9 boot_rubber_brown          material no 0.84  0.160  0.12     25 notmatching_…
    ## 10 bag_paper_green            color no    0.85  0.15   0.15     20 notmatching_…
    ## 11 pitcher_glass_clear_origi… color no    0.85  0.15   0.15     20 notmatching_…
    ## 12 pitcher_plastic_blue       color no    0.85  0.200  0.15     20 notmatching_…
    ## 13 pitcher_metal_green        material no 0.852 0.148  0.111    27 notmatching_…
    ## 14 plate_plastic_pink         material no 0.852 0.148  0.111    27 notmatching_…
    ## 15 spoon_metal_green          material no 0.852 0.148  0.111    27 notmatching_…

    ## # A tibble: 15 x 7
    ##    label                       condition    Mean CILow CIHigh count group       
    ##    <fct>                       <chr>       <dbl> <dbl>  <dbl> <int> <chr>       
    ##  1 jacket_leather_purple       material no     1     0      0    23 notmatching…
    ##  2 pitcher_metal_blue          color no        1     0      0    24 notmatching…
    ##  3 pitcher_metal_silver_origi… color no        1     0      0    24 notmatching…
    ##  4 pitcher_plastic_green       material no     1     0      0    22 notmatching…
    ##  5 plate_paper_green           color no        1     0      0    23 notmatching…
    ##  6 plate_plastic_blue_original material no     1     0      0    24 notmatching…
    ##  7 spoon_plastic_white_origin… color no        1     0      0    24 notmatching…
    ##  8 spoon_wood_brown_original   material no     1     0      0    24 notmatching…
    ##  9 spoon_wood_green            material no     1     0      0    22 notmatching…
    ## 10 table_metal_blue            material no     1     0      0    20 notmatching…
    ## 11 table_metal_green           material no     1     0      0    24 notmatching…
    ## 12 table_metal_silver_original material no     1     0      0    25 notmatching…
    ## 13 table_wood_blue             color no        1     0      0    23 notmatching…
    ## 14 table_wood_blue             material no     1     0      0    20 notmatching…
    ## 15 table_wood_brown_original   material no     1     0      0    20 notmatching…

# Is there overlap?

    ## # A tibble: 60 x 3
    ## # Groups:   label [48]
    ##    label                       condition    count
    ##    <fct>                       <chr>        <int>
    ##  1 chair_metal_purple          material yes     5
    ##  2 table_metal_blue            material yes     5
    ##  3 table_metal_green           material yes     5
    ##  4 table_metal_silver_original material yes     5
    ##  5 boot_leather_green          material yes     3
    ##  6 chair_metal_green           material yes     3
    ##  7 plate_paper_blue            material yes     3
    ##  8 spoon_wood_green            material yes     3
    ##  9 table_wood_green            material yes     3
    ## 10 bag_plastic_blue            material no      2
    ## # … with 50 more rows

    ## # A tibble: 60 x 3
    ## # Groups:   label [42]
    ##    label                       condition    count
    ##    <fct>                       <chr>        <int>
    ##  1 table_wood_brown_original   material yes     5
    ##  2 plate_plastic_blue_original color yes        4
    ##  3 chair_plastic_blue_original color yes        3
    ##  4 cup_plastic_blue            material yes     3
    ##  5 cup_plastic_green           color no         3
    ##  6 cup_plastic_green           color yes        3
    ##  7 jacket_denim_purple         color yes        3
    ##  8 pitcher_metal_blue          color yes        3
    ##  9 table_metal_blue            color yes        3
    ## 10 table_wood_brown_original   color yes        3
    ## # … with 50 more rows
