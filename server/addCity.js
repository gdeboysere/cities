Meteor.methods({
    'addCityToDatabase': function (cityName, cityLatitude, cityLongitude)
    {

        console.log(cityName);
            Cities.insert({
                City : cityName,
                Latitude :  cityLatitude,
                Latitude : cityLongitude
                }
            );
    }
});