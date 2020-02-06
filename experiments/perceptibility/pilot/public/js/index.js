function make_slides(f) {
  var slides = {};

  slides.bot = slide({
    name : "bot",
    start: function() {
      $('.err1').hide();
      $('.err2').hide();
      $('.disq').hide();
      exp.speaker = _.shuffle(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"])[0];
      exp.listener = _.shuffle(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"])[0];
      exp.lives = 0;
      var story = exp.speaker + ' says to ' + exp.listener + ': "It\'s a beautiful day, isn\'t it?"'
      var question = 'Who does ' + exp.speaker + ' talk to?';
      document.getElementById("s").innerHTML = story;
      document.getElementById("q").innerHTML = question;
    },
    button : function() {
      exp.text_input = document.getElementById("text_box").value;
      var lower = exp.listener.toLowerCase();
      var upper = exp.listener.toUpperCase();

      if ((exp.lives < 3) && ((exp.text_input == exp.listener)|(exp.text_input == lower) | (exp.text_input== upper))){
        exp.data_trials.push({
          "slide_number_in_experiment" : exp.phase,
          "utterance": "bot_check",
          "object": exp.listener,
          "rt" : 0,
          "response" : exp.text_input
        });
        exp.go();
      }
      else {
        exp.data_trials.push({
          "slide_number_in_experiment" : exp.phase,
          "utterance": "bot_check",
          "object": exp.listener,
          "rt" : 0,
          "response" : exp.text_input
        });
        if (exp.lives == 0){
          $('.err1').show();
        }if (exp.lives == 1){
          $('.err1').hide();
          $('.err2').show();
        }if (exp.lives == 2){
          $('.err2').hide();
          $('.disq').show();
          $('.button').hide();
        }
        exp.lives++;
      } 
    },
  });

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.demonstration = slide({
    name : "demonstration",
    start: function() {
      $('.button').hide();
      $('.instruction').hide();
      $('.correct').hide();
      $('.incorrect').hide();
      $('.instruction2').hide();
      $('.dtransition').hide();

      $('.demo_word').html('<font size="6">green</font>'); 
      $('.demo_image').html('<img src="images/ball_plastic_green.png" align="center" style="height:330px;">');

      setTimeout(function(){
        $('.instruction').show();
      },1200)

      var a = 0;

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        if ((a==0) && (e.keyCode == 74)){ // pressed J (YES) --> correct answer
          e = 0;
          $('.incorrect').hide();
          $('.correct').show();
          $('.instruction').hide();
          $('.no_image').css('border','');
          $('.yes_image').css('border', "solid 3px green");
          a=1;
          
          setTimeout(function(){
            $('.instruction').hide();
            $('.correct').hide();
            $('.incorrect').hide();
            $('.demo_word').hide();
            $('.demo_image').hide()
            $('.yes_image').hide();
            $('.no_image').hide();
            $('.dtransition').show();
          },1000)
        }
        else if ((a==0) &&  (e.keyCode == 70)){ // pressed F (NO) --> incorrect
          e = 0;
          $('.incorrect').show();
          $('.yes_image').css('border','');
          $('.no_image').css('border', "solid 3px red");
        }
        else if (($('.dtransition').is(":visible")) && (e.keyCode == 32)) {
          _s.button();
        }
      }
    },
    button : function() {
      exp.go(); 
    }
  });

  slides.demonstration2 = slide({
    name : "demonstration2",
    start: function() {
      $('.button').hide();
      $('.instruction2').hide();
      $('.correct2').hide();
      $('.incorrect2').hide();
      $('.instruction22').hide();
      
      $('.demo_word2').html('<font size="6">metal</font>');
      $('.demo_image2').html('<img src="images/vase_wood_original.png" style="height:330px;">');

      setTimeout(function(){
        $('.instruction2').show();
      },1200)

      var a = 0;

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        if ((a==0) && (e.keyCode == 70)){  // pressed F (NO) --> correct
          e = 0;
          $('.incorrect2').hide();
          $('.correct2').show();
          $('.no_image2').css('border','solid 3px green');
          $('.yes_image2').css('border', "");
          $('.instruction2').hide();
          a=1;
        
          setTimeout(function(){
            $('.instruction2').hide();
            $('.correct2').hide();
            $('.incorrect2').hide();
            $('.demo_word2').hide();
            $('.demo_image2').hide()
            $('.yes_image2').hide();
            $('.no_image2').hide();
            $('.instruction22').show();
          },1000)
        }
        else if ((a==0) && (e.keyCode == 74)) { // pressed J (YES) --> incorrect
          e = 0;
          $('.incorrect2').show();
          $('.yes_image2').css('border','solid 3px red');
          $('.no_image2').css('border', "");
        }
        else if (($('.instruction22').is(":visible")) && (e.keyCode == 32)) {
          _s.button();
        }
      }
    },
    button : function() {
      exp.go(); 
    }
  });

  slides.practicetrial = slide({
    name : "practicetrial",
    present: 
    [{
    "label": "ball_plastic_red", // no to material
    "item": ["ball"],
    "feature": ["glass"],
    "feature_type": ["material"],
    "correct_answer": ["no"]
    },
    {
    "label": "door_wood_yellow", // yes to color 
    "item": ["door"],
    "feature": ["yellow"],
    "feature_type": ["color"],
    "correct_answer": ["yes"]
    },
    {
    "label": "ruler_metal_blue", // no to color
    "item": ["bag"],
    "feature": ["red"],
    "feature_type": ["color"],
    "correct_answer": ["no"]
    },
    {
    "label": "vase_glass_green", // yes to material 
    "item": ["vase"],
    "feature": ["glass"],
    "feature_type": ["material"],
    "correct_answer": ["yes"]
    }],

    present_handle : function(stim) {
      this.trial_start = Date.now();
      $(".ptransition").hide();
  
      this.stim = stim;
      console.log(stim.feature);
      console.log(stim.label);

      var pword = '<font size="6">'+stim.feature+'</font>';
      var pimage = '<img src="images/'+stim.label+'.png" style="height:330px;">';

      $('.pword').html('<font size="6">'+stim.feature+'</font>');
      $('.pimage').html('<img src="images/'+stim.label+'.png" style="height:330px;">');
      $('.pword').show();
      $('.pimage').show();
      $('.pyes_image').css('border', "");
      $('.pno_image').css('border', "");
      $('.pyes_image').show();
      $('.pno_image').show();
      
      var a = 0;

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        console.log(e.keyCode);

        if (e.keyCode == 74)
          exp.keyCode = "yes"
        if (e.keyCode  == 70)
          exp.keyCode = "no"

        if ((a==0) && (["yes","no"].includes(exp.keyCode)) && ($('.ptransition').is(":hidden"))){
          if (exp.keyCode == stim.correct_answer) { // gave right answer
            if (exp.keyCode == "yes")
              $('.pyes_image').css('border','solid 3px green'); // right answer is yes
            if (exp.keyCode == "no") {
              console.log("no")
              $('.pno_image').css('border','solid 3px green');
              console.log("border around no")
            }
          } if (exp.keyCode != stim.correct_answer) { // gave wrong answer
            if (exp.keyCode == "yes")
              $('.pyes_image').css('border','solid 3px red'); // wrong answer is yes
            if (exp.keyCode == "no")
            $('.pno_image').css('border','solid 3px red');
          }
          setTimeout(function(){
            $(".pword").hide();
            $(".pimage").hide();
            $('.pyes_image').hide();
            $('.pno_image').hide();
            $(".ptransition"). show();
          },700)
          a=1;
        }
        if (($('.ptransition').is(":visible")) && (e.keyCode == 32)) {
          e = 0;
          _s.button();
        }  

        // if ((a==0) && ($('.ptransition').is(":hidden")) && (exp.keyCode == stim.correct_answer)) {   // CORRECT 
        //   if (exp.keyCode == "yes") { // correct answer is yes
        //     e = 0;
        //     $('.pyes_image').css('border','solid 3px green');
        //   } if (exp.keyCode == "no") { // correct answer is no
        //     e = 0;
        //     $('.pno_image').css('border','solid 3px green');
        //   }  
        //   setTimeout(function(){
        //     $(".pword").hide();
        //     $(".pimage").hide();
        //     $('.pyes_image').hide();
        //     $('.pno_image').hide();
        //     $(".ptransition"). show();
        //   },700)
        //   a=1;
        // } if ((a==0) && ($('.ptransition').is(":hidden")) && (exp.keyCode != stim.correct_answer)) { // INCORRECT
        //   if (exp.keyCode == "yes") { // incorrect answer is yes
        //     e = 0;
        //     $('.pyes_image').css('border','solid 3px red');
        //   } if (exp.keyCode == "no") { // incorrect answer is no
        //     e = 0;
        //     $('.pno_image').css('border','solid 3px red');
        //   }
        //   setTimeout(function(){
        //     $(".pword").hide();
        //     $(".pimage").hide();
        //     $('.pyes_image').hide();
        //     $('.pno_image').hide();
        //     $(".ptransition"). show();
        //   },700)
        //   a=1;
        // }
        // if (($('.ptransition').is(":visible")) && (e.keyCode == 32)) {
        //   e = 0;
        //   _s.button();
        // }
      
      }
     }, 
    
    button : function() {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.        
    }, 

    log_responses : function() {
        exp.data_trials.push({
          "slide_number_in_experiment" : "practice_trial",
          "label": this.stim.label,
          "item": this.stim.item,
          "feature": this.stim.feature,
          "feature_type": this.stim.feature_type,
          "correct_answer": this.correct_answer,
          "response" : [Date.now() - _s.trial_start, exp.keyCode]
        });
    }
  });

  slides.beforeobject = slide({
    name : "beforeobject",
    button : function() {
      exp.go(); 
    }
  });

  slides.objecttrial = slide({
    name : "objecttrial",
    present : exp.all_stims,
    start : function() {
	     $(".keys").hide();
       $(".transition").hide();
    },
    present_handle : function(stim) {

    	this.trial_start = Date.now();
      $(".keys").hide();
      $('.transition').hide();
  
      this.stim = stim;
      var contextsentence = '<font size="6">'+stim.feature+'</font>';
      var objimagehtml = '<img src="images/'+stim.label+'.png" style="height:330px;">';

      document.onkeydown = checkKey;
      
      $("#contextsentence").html(contextsentence);
      $("#objectimage").html(objimagehtml);
      $("#contextsentence").show();
      $("#objectimage").show()
        
      setTimeout(function(){
        $("#contextsentence").hide();
        $("#objectimage").hide()
        $(".keys").show();
      },1000)

      function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == 74){
          e = 0;
          exp.keyCode = "Yes",
          $(".keys").hide();
          $('.transition').show();
          //_s.button();
        }
        else if (e.keyCode == 70){
          e = 0;
          exp.keyCode = "No",
          $(".keys").hide();
          $('.transition').show();
          //_s.button();
        }
        else if (($('.transition').is(":visible")) && (e.keyCode == 32)) {
          _s.button();
        }
      }
	   },

    button : function() {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.        
    }, 

    log_responses : function() {
        exp.data_trials.push({
          "slide_number_in_experiment" : exp.phase,
          "utterance": this.stim.item,
          "object": this.stim.label,
          "feature": this.stim.feature,
          "rt" : Date.now() - _s.trial_start,
          "response" : [Date.now() - _s.trial_start, exp.keyCode]
        });
    }
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  //var items_target = _.shuffle([
  exp.all_stims = _.shuffle([
{
"label": "bag_paper_blue",
"item": ["bag"],
"feature": ["blue"]
},
{
"label": "bag_plastic_original",
"item": ["bag"],
"feature": ["plastic"]
},
{
"label": "bag_paper_blue",
"item": ["bag"],
"feature": ["plastic"]
},
{
"label": "bag_plastic_original",
"item": ["bag"],
"feature": ["green"]
},
]);

console.log(exp.all_stims.length);

  // function makeTargetStim(i) {
  //   console.log(items_target.length);
  //   //get item
  //   var item = items_target[i];
  //   var item_id = item.item[0];
  //   var object_label = item.label;
  //   var object_feature = item.feature;
      
  //   return {
	 //  "item": item_id,
  //   "label": object_label,
  //   "feature" : object_feature,
  //   }
  // }
  
  // exp.all_stims = [];
  // for (var i=0; i<items_target.length; i++) {
  //   exp.all_stims.push(makeTargetStim(i));
  // }

  // exp.all_stims = _.shuffle(exp.all_stims);

  exp.trials = [];
  exp.catch_trials = [];
  exp.condition = {}; //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  //exp.structure=["bot","i0", "demonstration", "demonstration2", "practicetrial", "beforeobject", "objecttrial", 'subj_info', 'thanks'];
  exp.structure=["demonstration", "demonstration2", "practicetrial", "beforeobject", "objecttrial", 'subj_info', 'thanks'];
  // 
  
  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined
  $(".nQs").html(exp.nQs);

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
