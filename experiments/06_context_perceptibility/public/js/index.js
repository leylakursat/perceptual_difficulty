function make_slides(f) {
  var slides = {};

  slides.bot = slide({
    name: "bot",
    start: function () {
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
    button: function () {
      exp.text_input = document.getElementById("text_box").value;
      var lower = exp.listener.toLowerCase();
      var upper = exp.listener.toUpperCase();

      if ((exp.lives < 3) && ((exp.text_input == exp.listener) | (exp.text_input == lower) | (exp.text_input == upper))) {
        exp.data_trials.push({
          "slide_number_in_experiment": exp.phase,
          "utterance": "bot_check",
          "object": exp.listener,
          "rt": 0,
          "response": exp.text_input
        });
        exp.go();
      }
      else {
        exp.data_trials.push({
          "slide_number_in_experiment": exp.phase,
          "utterance": "bot_check",
          "object": exp.listener,
          "rt": 0,
          "response": exp.text_input
        });
        if (exp.lives == 0) {
          $('.err1').show();
        } if (exp.lives == 1) {
          $('.err1').hide();
          $('.err2').show();
        } if (exp.lives == 2) {
          $('.err2').hide();
          $('.disq').show();
          $('.button').hide();
        }
        exp.lives++;
      }
    },
  });

  slides.i0 = slide({
    name: "i0",
    start: function () {
      exp.startT = Date.now();
    }
  });

  slides.practicetrial = slide({
    name: "practicetrial",
    present:
      [{
        'targetName': '',
        'competitorName': '',
        'notCompetitorName': '',
        'condition': 'color_correct',
        'featureQuestion': 'color',
        'adjQuestion': 'blue',
        'numQuestion': '2',
        'correctAnsQuestion': 'yes',
        'contextID': 'practice_1'
      },
      {
        'targetName': '',
        'competitorName': '',
        'notCompetitorName': '',
        'condition': 'material_incorrect',
        'featureQuestion': 'material',
        'adjQuestion': 'plastic',
        'numQuestion': '4',
        'correctAnsQuestion': 'no',
        'contextID': 'practice_2',
      }],

    present_handle: function (stim) {
      this.trial_start = Date.now();
      $(".ptransition").hide();

      this.stim = stim;

      var sentence = `<p style="font-size:25px">${stim.numQuestion} ${stim.adjQuestion} objects</p>`
      var image = `<img src="images/${stim.contextID}.png" style="height:200px">`;

      $('.pword').html(sentence);
      $('.pimage').html(image);
      $('.pword').show();
      $('.pimage').show();
      $('.pyes_image').css('border', "");
      $('.pno_image').css('border', "");
      $('.pyes_image').show();
      $('.pno_image').show();

      var a = 0;
      exp.keyCode = "";

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;

        if (e.keyCode == 74) {
          exp.keyCode = "yes"
          e = 0;
        } if (e.keyCode == 70) {
          exp.keyCode = "no"
          e = 0;
        }

        if ((a == 0) && (exp.keyCode == "yes" || exp.keyCode == "no") && ($('.ptransition').is(":hidden"))) {
          e = 0;
          if (exp.keyCode == stim.correctAnsQuestion) { // gave right answer
            if (exp.keyCode == "yes")
              $('.pyes_image').css('border', 'solid 3px green'); // right answer is yes
            if (exp.keyCode == "no")
              $('.pno_image').css('border', 'solid 3px green');
          } if (exp.keyCode != stim.correctAnsQuestion) { // gave wrong answer
            if (exp.keyCode == "yes")
              $('.pyes_image').css('border', 'solid 3px red'); // wrong answer is yes
            if (exp.keyCode == "no")
              $('.pno_image').css('border', 'solid 3px red');
          }
          setTimeout(function () {
            $(".pword").hide();
            $(".pimage").hide();
            $('.pyes_image').hide();
            $('.pno_image').hide();
            $(".ptransition").show();
          }, 400)
          a = 1;
        }
        if (($('.ptransition').is(":visible")) && (e.keyCode == 32)) {
          e = 0;
          _s.button();
        }
      }
    },

    button: function () {
      this.log_responses();
      _stream.apply(this); //use exp.go() if and only if there is no "present" data.        
    },

    log_responses: function () {
      exp.data_trials.push({
        "slide_number_in_experiment": "practice_trial",
        "targetName": this.stim.targetName,
        "competitorName": this.stim.competitorName,
        "notCompetitorName": this.stim.notCompetitorName,
        "condition": this.stim.condition,
        "featureQuestion": this.stim.featureQuestion,
        "adjQuestion": this.stim.adjQuestion,
        "numQuestion": this.stim.numQuestion,
        "correctAnsQuestion": this.stim.correctAnsQuestion,
        "contextID": this.stim.contextID,
        "contextVar": exp.context,
        "response": [Date.now() - _s.trial_start, exp.keyCode]
      });
    }
  });

  slides.beforeobject = slide({
    name: "beforeobject",
    start: function () {

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;

        if (e.keyCode == 32)
          exp.go()

      }
    },

    // button : function() {
    //   exp.go(); 
    // }
  });

  slides.objecttrial = slide({
    name: "objecttrial",
    present: exp.all_stims,
    present_handle: function (stim) {

      this.trial_start = Date.now();
      $(".transition").hide();

      this.stim = stim;
      var random_num = Math.random() < 0.5 ? "1" : "2";
      var random_index = Math.random() < 0.5 ? "0" : "1";
      var num = stim.numQuestion
      exp.context = `${stim.contextID}_${random_num}`

      if (num.length > 1)
        num = stim.numQuestion[random_index]

      if (num == "1")
        obj = "object"
      else
        obj = "objects"


      var image = new Image();
      image.src = `images/${exp.context}.png`;
      image.style.cssText = 'height:200px; opacity:0';
      image.onload = () => {
        $('.image').show();
        $(image).css('opacity',1);
      }
      var sentence = `<p style="font-size:25px">${num} ${stim.adjQuestion} ${obj}</p>`

      $('.word').html(sentence);
      $('.image').html(image);
      $('.word').show();
      $('.yes_image').css('border', "");
      $('.no_image').css('border', "");
      $('.yes_image').show();
      $('.no_image').show();

      var a = 0;
      exp.keyCode = "";

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;

        if (e.keyCode == 74) {
          exp.keyCode = "yes"
          e = 0;
        } if (e.keyCode == 70) {
          exp.keyCode = "no"
          e = 0;
        }

        if ((a == 0) && (exp.keyCode == "yes" || exp.keyCode == "no") && ($('.ptransition').is(":hidden"))) {
          e = 0;
          if (exp.keyCode == stim.correctAnsQuestion) { // gave right answer
            if (exp.keyCode == "yes")
              $('.yes_image').css('border', 'solid 3px green'); // right answer is yes
            if (exp.keyCode == "no")
              $('.no_image').css('border', 'solid 3px green');
          } if (exp.keyCode != stim.correctAnsQuestion) { // gave wrong answer
            if (exp.keyCode == "yes")
              $('.yes_image').css('border', 'solid 3px red'); // wrong answer is yes
            if (exp.keyCode == "no")
              $('.no_image').css('border', 'solid 3px red');
          }
          setTimeout(function () {
            $(".word").hide();
            $(".image").hide();
            $('.yes_image').hide();
            $('.no_image').hide();
            $(".transition").show();
          }, 400)
          a = 1;
        }
        if (($('.transition').is(":visible")) && (e.keyCode == 32)) {
          e = 0;
          _s.button();
        }
      }
    },

    button: function () {
      this.log_responses();
      console.log(Date.now() - _s.trial_start, exp.keyCode)
      _stream.apply(this); //use exp.go() if and only if there is no "present" data.        
    },

    log_responses: function () {
      exp.data_trials.push({
        "slide_number_in_experiment": exp.phase,
        "targetName": this.stim.targetName,
        "competitorName": this.stim.competitorName,
        "notCompetitorName": this.stim.notCompetitorName,
        "condition": this.stim.condition,
        "featureQuestion": this.stim.featureQuestion,
        "adjQuestion": this.stim.adjQuestion,
        "numQuestion": this.stim.numQuestion,
        "correctAnsQuestion": this.stim.correctAnsQuestion,
        "contextID": this.stim.contextID,
        "contextVar": exp.context,
        "response": [Date.now() - _s.trial_start, exp.keyCode]
      });
    }
  });


  slides.subj_info = slide({
    name: "subj_info",
    submit: function (e) {
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language: $("#language").val(),
        enjoyment: $("#enjoyment").val(),
        asses: $('input[name="assess"]:checked').val(),
        color: $('input[name="color"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        comments: $("#comments").val(),
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name: "thanks",
    start: function () {
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "system": exp.system,
        "condition": exp.condition,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      setTimeout(function () { turk.submit(exp.data); }, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  //var items_target = _.shuffle([
  exp.all_stims = _.shuffle(exp.stims)

  console.log(exp.all_stims.length);

  exp.trials = [];
  exp.catch_trials = [];
  exp.condition = {}; //can randomize between subject conditions here
  exp.system = {
    Browser: BrowserDetect.browser,
    OS: BrowserDetect.OS,
    screenH: screen.height,
    screenUH: exp.height,
    screenW: screen.width,
    screenUW: exp.width
  };
  //blocks of the experiment:
  //exp.structure=["bot","i0", "demonstration", "demonstration2", "practicetrial", "beforeobject", "objecttrial", 'subj_info', 'thanks'];
  exp.structure = ["bot", "i0", "practicetrial", "beforeobject", "objecttrial", 'subj_info', 'thanks'];


  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
  //relies on structure and slides being defined
  $(".nQs").html(exp.nQs);

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function () {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function () { $("#mustaccept").show(); });
      exp.go();
    }
  });

  exp.go(); //show first slide
}
