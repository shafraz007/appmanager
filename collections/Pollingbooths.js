Pollingbooths = new Mongo.Collection('pollingbooths');

Pollingbooths.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

PollingboothsSchema = new SimpleSchema({
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

Pollingbooths.attachSchema(PollingboothsSchema);