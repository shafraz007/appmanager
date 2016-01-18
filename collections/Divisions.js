Divisions = new Mongo.Collection('divisions');

Divisions.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

DivisionsSchema = new SimpleSchema({
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

Divisions.attachSchema(DivisionsSchema);