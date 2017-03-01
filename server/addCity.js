Meteor.methods({
    'addCityToDatabase': function (cityName, cityLatitude, cityLongitude)
    {
            Cities.insert({
                City : cityName,
                Latitude :  cityLatitude,
                Longitude : cityLongitude
                }
            );
    }
});