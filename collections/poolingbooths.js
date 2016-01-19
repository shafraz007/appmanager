Poolingbooths = new Meteor.Collection('poolingbooth');

Poolingbooths.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

PoolingboothSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Poolingbooth Name"
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

Poolingbooths.attachSchema(PoolingboothSchema);
