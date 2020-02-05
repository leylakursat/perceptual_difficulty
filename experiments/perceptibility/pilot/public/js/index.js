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
      $('.pressedyes').hide();
      $('.pressedno').hide();
      $('.instruction2').hide();
      $('.dtransition').hide();
      $('.yes_image').hide();
      $('.no_image').hide();

      setTimeout(function(){
        $('.demo_word').html('<font size="6">green</font>');
        $('.demo_image').html('<img src="images/ball_plastic_green.png" style="height:330px;">');
      },800)

      setTimeout(function(){
        $('.instruction').show();
        $('.yes_image').show();
        $('.no_image').show();
      },2000)

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == 74){
          e = 0;
          $('.pressedno').hide();
          $('.pressedyes').show();
          $(".yes_image").css('border', "2px solid black");  
          $('.instruction').hide();
          
          setTimeout(function(){
            $('.instruction').hide();
            $('.pressedyes').hide();
            $('.pressedno').hide();
            $('.demo_word').hide();
            $('.demo_image').hide()
            $('.yes_image').hide();
            $('.no_image').hide();
            //$('.instruction2').show();
            //$('.button').show();
            $('.dtransition').show();
            //_s.button();
          },2000)
        }
        else if (e.keyCode == 70){
          e = 0;
          $('.pressedno').show();
          $(".no_image").css('border', "2px solid black"); 
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
      $('.instruction').hide();
      $('.pressedyes').hide();
      $('.pressedno').hide();
      $('.instruction2').hide();
      $('.yes_image').hide();
      $('.no_image').hide();

      setTimeout(function(){
        $('.demo_word2').html('<font size="6">metal</font>');
        $('.demo_image2').html('<img src="images/vase_glass_blue.png" style="height:330px;">');
        $('.yes_image').show();
        $('.no_image').show();
      },800)

      setTimeout(function(){
        $('.instruction').show();
      },2000)

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == 74){
          e = 0;
          $('.pressedyes').show(); 
        }
        else if (e.keyCode == 70){
          e = 0;
          $('.pressedno').show();
          $('.pressedyes').hide();
          $('.instruction').hide();

          setTimeout(function(){
            $('.instruction').hide();
            $('.pressedyes').hide();
            $('.pressedno').hide();
            $('.demo_word2').hide();
            $('.demo_image2').hide()
            $('.instruction2').show();
            $('.button').show();
          },3000)
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
    "correct": ["no"]
    },
    {
    "label": "door_wood_yellow", // yes to color 
    "item": ["door"],
    "feature": ["yellow"],
    "correct": ["yes"]
    },
    {
    "label": "ruler_metal_blue", // no to color
    "item": ["bag"],
    "feature": ["red"],
    "correct": ["no"]
    },
    {
    "label": "vase_glass_green", // yes to material 
    "item": ["vase"],
    "feature": ["glass"],
    "correct": ["yes"]
    }],

    present_handle : function(stim) {
      this.trial_start = Date.now();
      $(".pkeys").hide();
      $(".ptransition").hide();
  
      this.stim = stim;
      var contextsentence = '<font size="6">'+stim.feature+'</font>';
      var objimagehtml = '<img src="images/'+stim.label+'.png" style="height:330px;">';
      document.onkeydown = checkKey;

      $("#pcontextsentence").html(contextsentence);
      $("#pobjectimage").html(objimagehtml);  
      $("#pcontextsentence").show();
      $("#pobjectimage").show()
        
      setTimeout(function(){
        $("#pcontextsentence").hide();
        $("#pobjectimage").hide()
        $(".pkeys").show();
      },1000)

      function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == 74){
          e = 0;
          exp.keyCode = "Yes",
          $(".pkeys").hide();
          $('.ptransition').show();
          //_s.button();
        }
        else if (e.keyCode == 70){
          e = 0;
          exp.keyCode = "No",
          $(".pkeys").hide();
          $('.ptransition').show();
          //_s.button();
        }
        else if (($('.ptransition').is(":visible")) && (e.keyCode == 32)) {
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
          "slide_number_in_experiment" : "practice_trial",
          "utterance": this.stim.item,
          "object": this.stim.label,
          "feature": this.stim.feature,
          "rt" : Date.now() - _s.trial_start,
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
