Gramasevavasams = new Mongo.Collection('gramasevavasams');

Advancelevelsubjects.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

GramasevavasamSchema = new SimpleSchema({
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

Gramasevavasams.attachSchema(GramasevavasamSchema);
