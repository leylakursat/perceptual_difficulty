Perception in Context
================

**Number of participants tested:**

    ## [1] 395

    ## 
    ## list1 list2 list3 list4 list5 list6 list7 list8 
    ##    50    50    35    51    56    53    50    50

**Stimuli check:**

    ##      
    ##            color material
    ##   no     0  3094     3055
    ##   yes    0  3049     3047

**Exclusions**

Remove responses from non-native speakers: TODO: fix this (for now, all
pt are native)

Participants with accuracy lower than 75% are
    excluded:

    ## `summarise()` ungrouping output (override with `.groups` argument)

![](analysis_files/figure-gfm/accexclusions-1.png)<!-- -->

    ## # A tibble: 24 x 7
    ##    workerid  Mean CILow CIHigh  YMin  YMax lowacc
    ##       <int> <dbl> <dbl>  <dbl> <dbl> <dbl> <chr> 
    ##  1     1122 0.581 0.161  0.161 0.419 0.742 1     
    ##  2     1124 0.548 0.161  0.161 0.387 0.710 1     
    ##  3     1171 0.742 0.161  0.129 0.581 0.871 1     
    ##  4     1182 0.484 0.161  0.161 0.323 0.645 1     
    ##  5     1211 0.742 0.161  0.129 0.581 0.871 1     
    ##  6     1234 0.742 0.161  0.129 0.581 0.871 1     
    ##  7     1242 0.645 0.161  0.161 0.484 0.806 1     
    ##  8     1326 0.710 0.161  0.161 0.548 0.871 1     
    ##  9     1330 0.581 0.161  0.161 0.419 0.742 1     
    ## 10     1334 0.548 0.194  0.161 0.355 0.710 1     
    ## # … with 14 more rows

## Critical trials

### Error Rates

**Proportion of correct responses by feature type and number
    match**

    ## `summarise()` regrouping output by 'featureQuestion' (override with `.groups` argument)

![](analysis_files/figure-gfm/proportion-1.png)<!-- --> **Proportion of
correct responses (by
    context)**

    ## `summarise()` regrouping output by 'contextID', 'featureQuestion' (override with `.groups` argument)

![](analysis_files/figure-gfm/propbyitem-1.png)<!-- -->

### Response Times

**Response time
    distribution**

    ## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.

    ## Warning: Removed 32 rows containing non-finite values (stat_bin).

    ## Warning: Removed 2 rows containing missing values (geom_bar).

![](analysis_files/figure-gfm/rtdist-1.png)<!-- --> **RTs by feature
type, number match and response
    correctness**

    ## `summarise()` regrouping output by 'featureQuestion', 'gaveRightAnswer' (override with `.groups` argument)

![](analysis_files/figure-gfm/collapsed-1.png)<!-- --> **RTs by feature
type, response correctness and
    context**

    ## `summarise()` regrouping output by 'contextID', 'featureQuestion' (override with `.groups` argument)

    ## Warning: Removed 2 rows containing missing values (geom_bar).

![](analysis_files/figure-gfm/byitem-1.png)<!-- -->

    ## Warning: Removed 2 rows containing missing values (geom_bar).

### Grouping

Proportion of correct answer(acceptance\&rejections) and RT of correct
answers

    ## `summarise()` regrouping output by 'contextID' (override with `.groups` argument)

    ## `summarise()` regrouping output by 'contextID', 'adjQuestion' (override with `.groups` argument)

    ## # A tibble: 124 x 6
    ## # Groups:   contextID [31]
    ##    contextID     adjQuestion MeanProp featureQuestion MeanRT targetsFeature
    ##    <fct>         <fct>          <dbl> <fct>            <dbl>          <dbl>
    ##  1 cmg_cmp_cwp   green          0.955 color            1803.              1
    ##  2 tmso_tmb_twb  blue           0.906 color            1858.              0
    ##  3 tmb_twb_twg   blue           0.937 color            1939.              1
    ##  4 tmg_tmb_twb   green          0.963 color            1979               1
    ##  5 bgg_bpg_bpco  green          0.952 color            1990               1
    ##  6 ppbo_ppb_ppg  blue           0.955 color            2000.              1
    ##  7 tmb_twb_twbo  brown          0.955 color            2117               0
    ##  8 cmg_cmp_cwp   purple         0.943 color            2119.              0
    ##  9 blg_blb_brb   brown          0.981 color            2179               0
    ## 10 blg_blbo_brbo green          0.932 color            2227.              1
    ## # … with 114 more rows
