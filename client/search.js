Session.setDefault ("q",{});

Template.searchbar.events({
    'submit form': function(event){
        event.preventDefault();
        var cityName = $("#location").val();
        var query = {};
        if(cityName != "") 
            query.BarCity = cityName;

        if($("#beer").is(':checked')){
            query["Drinks.beer.available"]= true;
        }
        if($("#vodka").is(':checked')){
            query["Drinks.Vodka.available"]= true;
        }
       Session.set ("q",query);
        
        console.log(query , Bar.find(query).count());

        /*return Bar.find(query);*/
        
  
    }
});
 Template.searchbar.helpers({
    "searchdisplay" : function() {
        var query = Session.get("q");
         return Bar.find(query);
     }
 })