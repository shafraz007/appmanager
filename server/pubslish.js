Meteor.publish('advancelevelsubjects', function() {
	return Advancelevelsubjects.find({});
});

Meteor.publish('candidates', function() {
	return Candidates.find({});
});