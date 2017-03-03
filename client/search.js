Template.search.events({
    'submit form': function(event){
        event.preventDefault();
        var cityName = $("#location").val();
        var query = {};
        if(cityName != "") 
            query.BarCity = cityName;

        if($("#beer").is(':checked'))
            query.Drinks = "beer";
       
        console.log(Bar.find(query));
        return Bar.find(query);
    }
});

/*Template.search.helpers({
    "displayBar"
})*/