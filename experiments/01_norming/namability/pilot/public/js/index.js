//https://www.ncbi.nlm.nih.gov/pmc/articles/doi/10.3389/fpsyg.2014.00399/full// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function make_slides(f) {
  var slides = {};

function startsWith(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
       var substring = substrings[i];
       if (str.indexOf(substring) == 0) {
         return 1;
       }
    }
    return -1; 
}

function getArticleItem(item_id) {
  var article = "";
  if (startsWith(item_id, ["a","e","i","o","u"]) == 1) {
    article = "an ";
  } else {
    article = "a ";
  }
  return article;
}

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

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); 
    }
  });

  slides.objecttrial = slide({
    name : "objecttrial",
    present : exp.all_stims,
    start : function() {
	   $(".err").hide();
    },
      present_handle : function(stim) {
    	this.trial_start = Date.now();
      $(".err").hide();
      $("#answer").val("");
      console.log("new pic");
      $(".err").hide();
      // exp.sliderPost = {};
	   //$("#objectlabel").val("");	
	  this.stim = stim;
    // stim.item = _.shuffle(stim.item);
	  console.log(this.stim);
    var article = getArticleItem(stim.item);
   //  console.log(stim.item);
   //  console.log(stim.label);
	var contextsentence = "What is this?";
	//var contextsentence = "How typical is this for "+stim.basiclevel+"?";
	//var objimagehtml = '<img src="images/'+stim.basiclevel+'/'+stim.item+'.jpg" style="height:190px;">';
	var objimagehtml = '<img src="images/'+stim.label+'.png" style="height:300px;">';

	$("#contextsentence").html(contextsentence);
	$("#objectimage").html(objimagehtml);

  //ENTER TO CONTINUE/
 var input = document.getElementById("answer");
 input.addEventListener("keyup", function(event) {
 if (event.keyCode == 13) {
   _s.button();
 }
 });
//
	},

	button : function() {
	  if ($("#answer").val().length > 1) {
        console.log("logging resp");
        $(".err").hide();
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      }
      // } else {
      //   $(".err").show();
      // }
    },
    // init_sliders : function() {
    //   utils.make_slider("#single_slider", function(event, ui) {
    //     exp.sliderPost = ui.value;
    //     //$("#number_guess").html(Math.round(ui.value*N));
    //   });
    // },
    log_responses : function() {
        exp.data_trials.push({
          "slide_number_in_experiment" : exp.phase,
          "utterance": this.stim.item,
          "object": this.stim.label,
          "rt" : Date.now() - _s.trial_start,
          "response" : $("#answer").val()
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
  var items_target = _.shuffle([
{
"label": "bag_canvas",
"item": ["bag"]
},
{
"label": "bag_leather",
"item": ["bag"]
},
{
"label": "bag_paper",
"item": ["bag"]
},
{
"label": "bag_plastic",
"item": ["bag"]
},
{
"label": "ball_fabric",
"item": ["ball"]
},
{
"label": "ball_metal",
"item": ["ball"]
},
{
"label": "ball_plastic",
"item": ["ball"]
},
{
"label": "ball_wood",
"item": ["ball"]
},
{
"label": "ball_wool",
"item": ["ball"]
},
{
"label": "boots_canvas",
"item": ["boots"]
},
{
"label": "boots_leather",
"item": ["boots"]
},
{
"label": "boots_rubber",
"item": ["boots"]
},
{
"label": "bottle_glass",
"item": ["bottle"]
},
{
"label": "bottle_metal",
"item": ["bottle"]
},
{
"label": "bottle_plastic",
"item": ["bottle"]
},
{
"label": "bowl_glass",
"item": ["bowl"]
},
{
"label": "bowl_metal",
"item": ["bowl"]
},
{
"label": "bowl_wood",
"item": ["bowl"]
},
{
"label": "box_canvas",
"item": ["box"]
},
{
"label": "box_cardboard",
"item": ["box"]
},
{
"label": "box_leather",
"item": ["box"]
},
{
"label": "box_wood",
"item": ["box"]
},
{
"label": "box_metal",
"item": ["box"]
},
{
"label": "chair_metal",
"item": ["chair"]
},
{
"label": "chair_plastic",
"item": ["chair"]
},
{
"label": "chair_wood",
"item": ["chair"]
},
{
"label": "cup_clay",
"item": ["cup"]
},
{
"label": "cup_ceramic",
"item": ["cup"]
},
{
"label": "cup_glass",
"item": ["cup"]
},
{
"label": "cup_metal",
"item": ["cup"]
},
{
"label": "cup_paper",
"item": ["cup"]
},
{
"label": "cup_plastic",
"item": ["cup"]
},
{
"label": "door_glass",
"item": ["door"]
},
{
"label": "door_steel",
"item": ["door"]
},
{
"label": "door_wood",
"item": ["door"]
},
{
"label": "jacket_canvas",
"item": ["jacket"]
},
{
"label": "jacket_denim",
"item": ["jacket"]
},
{
"label": "jacket_leather",
"item": ["jacket"]
},
{
"label": "pitcher_glass",
"item": ["pitcher"]
},
{
"label": "pitcher_metal",
"item": ["pitcher"]
},
{
"label": "pitcher_plastic",
"item": ["pitcher"]
},
{
"label": "pitcher_porcelain",
"item": ["pitcher"]
},
{
"label": "plate_metal",
"item": ["plate"]
},
{
"label": "plate_paper",
"item": ["plate"]
},
{
"label": "plate_plastic",
"item": ["plate"]
},
{
"label": "pot_ceramic",
"item": ["pot"]
},
{
"label": "pot_clay",
"item": ["pot"]
},
{
"label": "pot_metal",
"item": ["pot"]
},
{
"label": "pot_wood",
"item": ["pot"]
},
{
"label": "ruler_glass",
"item": ["ruler"]
},
{
"label": "ruler_metal",
"item": ["ruler"]
},
{
"label": "ruler_plastic",
"item": ["ruler"]
},
{
"label": "ruler_wooden",
"item": ["ruler"]
},
{
"label": "spoon_metal",
"item": ["spoon"]
},
{
"label": "spoon_plastic",
"item": ["spoon"]
},
{
"label": "spoon_wood",
"item": ["spoon"]
},
{
"label": "table_glass",
"item": ["table"]
},
{
"label": "table_metal",
"item": ["table"]
},
{
"label": "table_wood",
"item": ["table"]
},
{
"label": "vase_ceramic",
"item": ["vase"]
},
{
"label": "vase_glass",
"item": ["vase"]
},
{
"label": "vase_wood",
"item": ["vase"]
},
]);

  function makeTargetStim(i) {
    console.log(items_target.length);
    //get item
    var item = items_target[i];
    var item_id = item.item[0];
    var object_label = item.label;
      
      return {
	  "item": item_id,
    "label": object_label
    }
  }
  
  exp.all_stims = [];
  for (var i=0; i<items_target.length; i++) {
    exp.all_stims.push(makeTargetStim(i));
  }

  exp.all_stims = _.shuffle(exp.all_stims);

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
  exp.structure=["bot","i0", "objecttrial", 'subj_info', 'thanks'];
  
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
