Gramasevavasam = new Meteor.Collection('gramasevavasam');

Gramasevavasam.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

GramasevavasamSchema = new SimpleSchema({
	name: {
		type: String,
		label: "G.Vasam Name"
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

Gramasevavasam.attachSchema(GramasevavasamSchema);
