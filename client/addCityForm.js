Template.addCityForm.events({
    'submit form': function(event){
        event.preventDefault();
        var cityName = $("#cityName").val();
        var cityLatitude = $("#cityLatitude").val();
        var cityLongitude = $("#cityLongitude").val();



        Meteor.call('addCityToDatabase', cityName, cityLatitude, cityLongitude);

        // Router.go('home');
    }
});