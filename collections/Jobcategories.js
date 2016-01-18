Jobcategories = new Mongo.Collection('jobcategories');

Jobcategories.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

JobcategoriesSchema = new SimpleSchema({
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

Jobcategories.attachSchema(JobcategoriesSchema);
