 $(document).ready(function(){

   var colorListContainer = $("#color-list-container").html();
   var navList = $("#color-list").html();

   var compiledColorTemplate = Handlebars.compile(colorListContainer);
   var compiledListTemplate = Handlebars.compile(navList);

   $.ajax("../data/data.json").done(function(palette){
     $(".row").html(compiledColorTemplate(palette));
     $(".nav").html(compiledListTemplate(palette));
   });
  });
