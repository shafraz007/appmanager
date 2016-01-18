Qualifications = new Mongo.Collection('qualifications');

Qualifications.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

QualificationsSchema = new SimpleSchema({
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

Qualifications.attachSchema(QualificationsSchema);