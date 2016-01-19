Meteor.publish('advancelevelsubjects', function() {
	return Advancelevelsubjects.find({});
});

Meteor.publish('candidates', function() {
	return Candidates.find({});
});

Meteor.publish('divisions', function() {
	return Divisions.find({});
});

Meteor.publish('gramasevavasam', function() {
	return Gramasevavasam.find({});
});

Meteor.publish('poolingbooth', function() {
	return Poolingbooths.find({});
});