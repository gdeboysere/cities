Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home"
});

 Router.route('/bar/:id', {
     template: "city",
     data: function () {
         return Bar.findOne(this.params.id);
         // Return the document for the selected city (the one whose id is given)
         // The value of this id is given by  this.params.id
     }
 });

// Router.route('/event/:id', {
//     template: "event",
//     data: function () {
//         // Return the document for the selected city (the one whose id is given)
//         // The value of this id is given by  this.params.id
//     }
// });

Router.route('/charts/', {
    template: "charts"
});

Router.route('/about/', {
    template: "about"
});

// Router.route('/search/:result', {
//     template: "search",
//     data: function () {
//         // Return the document for the selected city (the one whose id is given)
//         // The value of this id is given by  this.params.id
//     }
// });

