Divisions = new Meteor.Collection('divisions');

Divisions.allow({
	insert: function(userId, doc){
		return !!userId;
	}
});


DivisionSchema = new SimpleSchema({

	name: {
		type: String,
		label: "DivisionName"
	},

	CreatedAt: {
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


Divisions.attachSchema(DivisionSchema);
