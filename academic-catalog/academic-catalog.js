//Academic Catalog function
var academicCatalog = (function($) {

  var $programs = $('#catalog-programs .catalog-program');                  
  var $buttons = $('#buttons');                   
  var tagged = {};                                
  function init(){
    $programs.each(function() {                         
      var program = this;                               
      var tags = $(this).data('tags');              

      if (tags) {                                   
        tags.split(',').forEach(function(tagName) { 
          if (tagged[tagName] == null) {            
            tagged[tagName] = [];                   
          }
          tagged[tagName].push(program);                
        });
      }
    });

    $('<button/>', {                                 
      text: 'Show All',                              
      class: 'active',                               
      click: function() {                            
        $(this)                                      
          .addClass('active')                        
          .siblings()                                
          .removeClass('active');                    
        $programs.show();                                
      }
    }).appendTo($buttons);                           

    $.each(tagged, function(tagName) { 
                  
      $('<button/>', {                               
        text: tagName + ' (' + tagged[tagName].length + ')', 
        click: function() {                          
          $(this)                                    
            .addClass('active')                      
            .siblings()                              
            .removeClass('active');                  
          $programs                                      
            .hide()                                  
            .filter(tagged[tagName])                 
            .show();                                 
        }
      }).appendTo($buttons);                         
    });
  }

  return{init: init}
  
}(jQuery));