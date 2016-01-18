Advancelevelsubjects = new Mongo.Collection('advancelevelsubjects');

Advancelevelsubjects.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

AdvancelevelsubjectSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	createdAt: {
		type: Date,
		label: "Created at",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Advancelevelsubjects.attachSchema(AdvancelevelsubjectSchema);