Ordinarylevelsubjects = new Mongo.Collection('ordinarylevelsubjects');

Ordinarylevelsubjects.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

OrdinarylevelsubjectSchema = new SimpleSchema({
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

Ordinarylevelsubjects.attachSchema(OrdinarylevelsubjectSchema);