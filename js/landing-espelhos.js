var pagination =  function(){	
	$('.next').on('click', function(){
		var step = $(this).attr('data-value');
		var int = parseInt(step) + 1;

		$('#step' + step).removeClass('step-active').addClass('step-active-left');
		$('#step' + int).addClass('step-active');

	});

	$('.previous').on('click', function(){
		var step = $(this).attr('data-value');
		var int = parseInt(step) + 1;

		$('#step' + step).removeClass('step-active-left').addClass('step-active');
		$('#step' + int).removeClass('step-active step-active-left');

	});

	$('.last').on('click', function(){
		$('#step2, #step3').hide();
		$('#step1, #step2, #step3').removeClass('step-active').addClass('step-active-left');
		$('#step4').addClass('step-active');
		$('#step4 .previous').attr('data-value', '1');
    $('.switch--final--composition, .switch--final--choice, #step4 .composition-view, #step4 .other, #step4 .save').addClass('hide');
    $('.switch--final--other').removeClass('hide');
	});

	$('#step4 .previous').on('click', function(){
    $('#step4 .composition-view, .switch--final--choice, #step4 .save').removeClass('hide');
    $('#step4 .back, .switch--final--composition').addClass('hide');    

		var data = $(this).attr('data-value');

		if (data == '1'){
			$('#step1').removeClass('step-active-left').addClass('step-active');
			$('#step2, #step3, #step4').removeClass('step-active step-active-left');
			$('#step2, #step3').show();
		} 
	});

};

var popups = function(){

   $("#checkSaved").on('click', function(){
		$('#recoverPopup').removeClass('hidden');
   });
   
   $("#closePopup").on('click', function(){
      $('#recoverPopup').addClass('hidden');
      $("#recoverForm").removeClass("hide");
      $('.recoverList').addClass("hide");
      $('.recoverListAppend').empty();
	});

   $("#savePersonalization").on('click', function(){
      $('#step4 .composition-view').click();
      cloneDiv();
      setTimeout(function(){ 
         $('#savePopup').removeClass('hidden');
      }, 300);
   });
   
   $("#closeSavePopup").on('click', function(){
      $('#savePopup').addClass('hidden');
      $("#saveForm").removeClass("hide");
	});
};

var cloneDiv = function (){
   var finalSwitchComposition = $('#finalSwitchComposition').html();
   // console.log(finalSwitchComposition);
   var savedCompositionDiv = $('#savedCompositionDiv');
   savedCompositionDiv.val(finalSwitchComposition);
};

var switchesSlider = function() {
   	$('#step2 .switches__display').slick({
      		slidesToShow: 3,     
            arrows: true,
            centerMode: true,
            centerPadding: '0'
    });
};

var chooseSwitch = function(){
	$('#step2 .next').on('click', function(){
		$('.modules-list').removeClass('active');
		$('#step3 .organize--switch').removeClass('activeSwitch');
		var currentSwitchID = $('#step2 .slick-current').attr('id');
    var currentSwitchName = $('#step2 .slick-current figcaption').text();
		var currentSwitchData = $('#step2 .slick-current').attr('data');

		$('#step3 .organize--switch').each(function(){
			var data = $(this).attr('data');
			if (data == currentSwitchData) {
				$(this).addClass('activeSwitch').attr('data-name', currentSwitchName);
			}
		});

		$('#step3 #module' + currentSwitchData).addClass('active');
		
	});
};

var draggable = function(){
	$('.modules-list li img').draggable({ 
        revert: "invalid",
        snap: ".organize--switch--placeholder" ,
        // snapTolerance: 100 ,      
    });


    $('.placeholder--35050392').droppable({
       hoverClass: 'hover',
       accept: "#module35050392 img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module');
          var module1 = $('.ui-draggable-dragging').attr('src');
          var module1Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module1Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" );
          $(this).find('img').addClass('img').attr('src', module1).attr('data-name', module1Name).attr('data-link', module1Link);
		      $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );
       }
    });



    $('.placeholder--35050394--1').droppable({
       hoverClass: 'hover',
       accept: "#module35050394 .modules-list--top img",
       drop: function(e, ui) {
          $('.ui-draggable-dragging').addClass('selected-module selected-module1');
          var module1 = $('.ui-draggable-dragging').attr('src'); 
          var module1Name = $('.ui-draggable-dragging').next('figcaption').html(); 
          var module1Link = $('.ui-draggable-dragging').closest('li').attr('data-link');                  
          $(this).addClass( "fill" );
          $(this).find('img').addClass('img').attr('src', module1).attr('data-name', module1Name).attr('data-link', module1Link);
          $('#module35050394 .modules-list--top').addClass('hide'); 
          $('#module35050394 .modules-list--bottom').removeClass('hide'); 

       }
    });
    $('.placeholder--35050394--2').droppable({
       hoverClass: 'hover',
       accept: "#module35050394 .modules-list--bottom img",
       drop: function(e, ui) {
          $('.ui-draggable-dragging').addClass('selected-module selected-module2');
          var module2 = $('.ui-draggable-dragging').attr('src'); 
          var module2Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module2Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" );
          $(this).find('img').addClass('img').attr('src', module2).attr('data-name', module2Name).attr('data-link', module2Link);
		      $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );
       }
    });


    $('.placeholder--35050399--1').droppable({
       hoverClass: 'hover',
       accept: "#module35050399 .modules-list--top--left img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module1');
          var module1 = $('.ui-draggable-dragging').attr('src'); 
          var module1Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module1Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" );	
          $(this).find('img').addClass('img').attr('src', module1).attr('data-name', module1Name).attr('data-link', module1Link);
          $('#module35050399 .modules-list--top--left').addClass('hide'); 
          $('#module35050399 .modules-list--center--left').removeClass('hide');	  
       }
    });
    $('.placeholder--35050399--2').droppable({
       hoverClass: 'hover',
       accept: "#module35050399 .modules-list--center--left img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module2');
          var module2 = $('.ui-draggable-dragging').attr('src'); 
          var module2Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module2Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module2).attr('data-name', module2Name).attr('data-link', module2Link);
          $('#module35050399 .modules-list--center--left').addClass('hide'); 
          $('#module35050399 .modules-list--bottom--left').removeClass('hide');  
       }
    });
    $('.placeholder--35050399--3').droppable({
       hoverClass: 'hover',
       accept: "#module35050399 .modules-list--bottom--left img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module3');
          var module3 = $('.ui-draggable-dragging').attr('src'); 
          var module3Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module3Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module3).attr('data-name', module3Name).attr('data-link', module3Link);
          $('#module35050399 .modules-list--bottom--left').addClass('hide'); 
          $('#module35050399 .modules-list--top--right').removeClass('hide');		  
       }
    });
    $('.placeholder--35050399--4').droppable({
       hoverClass: 'hover',
       accept: "#module35050399 .modules-list--top--right img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module4');
          var module4 = $('.ui-draggable-dragging').attr('src');
          var module4Name = $('.ui-draggable-dragging').next('figcaption').html(); 
          var module4Link = $('.ui-draggable-dragging').closest('li').attr('data-link');          
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module4).attr('data-name', module4Name).attr('data-link', module4Link);
          $('#module35050399 .modules-list--top--right').addClass('hide'); 
          $('#module35050399 .modules-list--center--right').removeClass('hide');		  
       }
    });
    $('.placeholder--35050399--5').droppable({
       hoverClass: 'hover',
       accept: "#module35050399 .modules-list--center--right img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module5');
          var module5 = $('.ui-draggable-dragging').attr('src'); 
          var module5Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module5Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module5).attr('data-name', module5Name).attr('data-link', module5Link);
          $('#module35050399 .modules-list--center--right').addClass('hide'); 
          $('#module35050399 .modules-list--bottom--right').removeClass('hide');		  
       }
    });
    $('.placeholder--35050399--6').droppable({
       hoverClass: 'hover',
       accept: "#module35050399 .modules-list--bottom--right img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module6');
          var module6 = $('.ui-draggable-dragging').attr('src'); 
          var module6Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module6Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module6).attr('data-name', module6Name).attr('data-link', module6Link);
          $('#module35050399 .modules-list--bottom--right').addClass('hide');		  
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );

       }
    });


    $('.placeholder--35050387--1').droppable({
       hoverClass: 'hover',
       accept: "#module35050387 .modules-list--top img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module1');
          var module1 = $('.ui-draggable-dragging').attr('src'); 
          var module1Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module1Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module1).attr('data-name', module1Name).attr('data-link', module1Link);
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );
          $('#module35050387 .modules-list--top').addClass('hide');
          $('#module35050387 .modules-list--center').removeClass('hide');             		  
       }
    });
    $('.placeholder--35050387--2').droppable({
       hoverClass: 'hover',
       accept: "#module35050387 .modules-list--center img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module2');
          var module2 = $('.ui-draggable-dragging').attr('src'); 
          var module2Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module2Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module2).attr('data-name', module2Name).attr('data-link', module2Link);
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );
          $('#module35050387 .modules-list--center').addClass('hide');
          $('#module35050387 .modules-list--bottom').removeClass('hide');  
       }
    });
    $('.placeholder--35050387--3').droppable({
       hoverClass: 'hover',
       accept: "#module35050387 .modules-list--bottom img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module3');
          var module3 = $('.ui-draggable-dragging').attr('src'); 
          var module3Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module3Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module3).attr('data-name', module3Name).attr('data-link', module3Link);
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );
          $('#module35050387 .modules-list--bottom').addClass('hide');  
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );		  
       }
    });


    $('.placeholder--35050394B--1').droppable({
       hoverClass: 'hover',
       accept: "#module35050394B .modules-list--top img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module1');
          var module1 = $('.ui-draggable-dragging').attr('src'); 
          var module1Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module1Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module1).attr('data-name', module1Name).attr('data-link', module1Link);
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );
          $('#module35050394B .modules-list--top').addClass('hide');
          $('#module35050394B .modules-list--bottom').removeClass('hide');  
       }
    });
    $('.placeholder--35050394B--2').droppable({
       hoverClass: 'hover',
       accept: "#module35050394B .modules-list--bottom img",
       drop: function(e, ui) {
          $(this).droppable('destroy');
          $('.ui-draggable-dragging').addClass('selected-module selected-module2');
          var module2 = $('.ui-draggable-dragging').attr('src'); 
          var module2Name = $('.ui-draggable-dragging').next('figcaption').html();
          var module2Link = $('.ui-draggable-dragging').closest('li').attr('data-link');
          $(this).addClass( "fill" ); 
          $(this).find('img').addClass('img').attr('src', module2).attr('data-name', module2Name).attr('data-link', module2Link);
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );
          $('#module35050394B .modules-list--bottom').addClass('hide');
          $(this).parents().find('.organize .cta--blue').addClass( "nextstep" );		  
       }
    });
};

var resetDrag = function(){
    $('.clear').on('click', function(){    	
    	  $(".ui-draggable").animate({ top: "0px", left: "0px" });
        $('.liststep').addClass('hide');
        $('.liststep1').removeClass('hide');
        $('.organize--switch--placeholder').removeClass('fill');
        $('#step3 .next').removeClass('nextstep');
        $('.organize--switch--module').attr('src', "");
        draggable();

        for ( var i=1; i <= 6; i++ ){
          $('.ui-draggable').removeClass('selected-module');
          $('.ui-draggable').removeClass('selected-module' + i);          
        };
    });
};

var finalChoice = function(){

  $('#step3 .next').on('click', function(){
    $('#step4 .organize--switch').remove();
    $('#step4 .previous').attr('data-value', '3');
    $('#step4 .other').removeClass('hide');

    var final = $('.organize--switch.activeSwitch').clone();
    $('#step4 .switch--final--choice').append(final);

    if ($('.switch--final--other').is(':visible')){
      $('.switch--final--other').addClass('hide');
    }
  });

  $('#step4 .composition-view').on('click', function(){
    $('#step4 .other, .switch--final--choice').addClass('hide');
    $('#step4 .back, .switch--final--composition').removeClass('hide'); 
    $(this).addClass('hide');
    $('.switch--final--composition--itens--switch img, .switch--final--composition--itens--modules img, .switch--final--composition--itens--switch figcaption, .switch--final--composition--itens--modules figcaption').remove();
    
    var imgSrcs = [];
    var placeholderListNames = [];
    var placeholderListLinks = [];
    var switchList = $('#step4 .organize--switch.activeSwitch img').attr('src');
    var switchListName = $('#step4 .organize--switch.activeSwitch').attr('data-name').toLowerCase();
    var switchListLink = $('#step4 .organize--switch.activeSwitch').attr('data-link').toLowerCase();
    var placeholderList = $('#step4 .organize--switch--placeholder img');

    $(placeholderList).each(function(){
      imgSrcs.push($(this).attr('src'));
      placeholderListNames.push($(this).attr('data-name'));
      placeholderListLinks.push($(this).attr('data-link'));
    })   

    $('.switch--final--composition--itens--switch').append('<a href="'+ switchListLink +'" target="_blank"><img src="' + switchList + '"><figcaption>' + switchListName + '</figcaption><a/>');

    for (var i = 0; i < imgSrcs.length; i++) {
      $('.switch--final--composition--itens--modules').append('<div class="switch--final--composition--itens--modules--item"><a href="' + placeholderListLinks[i] + '" target="_blank"><img src="' + imgSrcs[i] + '"><figcaption>' + placeholderListNames[i].replace('<br>', '-').toLowerCase() +'</figcaption></a></div>');      
    }
    
  });

  $('#step4 .back').on('click', function(){  
    $('#step4 .other, #step4 .composition-view, .switch--final--choice').removeClass('hide');
    $('.switch--final--composition, .switch--final--other').addClass('hide');  
    $(this).addClass('hide');

  });

  $('#step4 .other').on('click', function(){
    $(this).addClass('hide');
    $('#step4 .back, .switch--final--other').removeClass('hide');
    $('#step4 .composition-view, .switch--final--choice').addClass('hide');

  });
};

var sendForm = function(){

   $("#saveForm").on("submit",function(e){
      e.preventDefault();
      $(".loading-image").removeClass("hide");
      $("#saveForm").addClass("hide");
      
      var sendData = $(this).serialize();

      $.ajax({
      type: "POST",
      url: "get_response.php",
      data: sendData,
         success: function(data){
            console.log('success', data)
            $(".loading-image").addClass("hide");
            $(".save-success").removeClass("hide");  
            
            setTimeout(function(){
               $(".save-success").addClass("hide");
            },2000);
         },
         error: function (request, status, error) {
             console.log(request.responseText);
             $(".save-error").removeClass("hide");
             setTimeout(function(){
               $(".save-error").addClass("hide");
            },2000)
         }
         
      });     
   });

   $("#recoverForm").on("submit",function(e){
      e.preventDefault();
      $(".loading-image").removeClass("hide");
      $("#recoverForm").addClass("hide");
      
      var sendData = $(this).serialize();

      $.ajax({
      type: "POST",
      url: "get_pers.php",
      data: sendData,
         success: function(data){
            var retorno = data;
            $(".loading-image").addClass("hide");       
            $('.recoverListAppend').append(data).removeClass("hide");
            $('.recoverList').removeClass("hide");
            
         },
         error: function (request, status, error) {
             console.log(request.responseText);
             
         }
         
      });     
   });
     
};

$(document).ready(function(){
   popups();
	pagination();
	switchesSlider();
	chooseSwitch();
	draggable();
	resetDrag();
   finalChoice();   
   sendForm();
});

