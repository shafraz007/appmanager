Candidates = new Mongo.Collection('candidates');

Candidates.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

CandidateSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Full Name"
	},
	namewithinit: {
		type: String,
		label: "Name With Initials"
	},
	gender: {
		type: String,
		label: "Gender"
	},
	idnumber: {
		type: String,
		label: "I D Number"
	},
	birthday: {
		type: Date,
		label: "D O B"
	},
	address: {
		type: String,
		label: "Address"
	},
	tel: {
		type: String,
		label: "Telephone"
	},
	mobile: {
		type: String,
		label: "Mobile"
	},
	email: {
		type: String,
		label: "Email"
	},
	division: {
		type: String,
		label: "Devisions"
	},
	gramersevavasama: {
		type: String,
		label: "Grama Seva Vasama"
	},
	pollingbooth: {
		type: String,
		label: "Polling Booth"
	},
	worked: {
		type: Boolean,
		defaultValue: false,
		optional: true
	},
	category: {
		type: [String]
	},
	educated: {
		type: Boolean,
		label: "Is Educated",
		defaultValue: false,
		optional: true
	},
	ordinarylevel: {
		type: [String]
	},
	advancelevel: {
		type: [String]
	},
	comments: {
		type: String,
		label: "Other (comments)"
	},
	applicationsubmited: {
		type: Boolean,
		label: "Application Submited",
		defaultValue: false,
		optional: true
	},
	jobgiven: {
		type: Boolean,
		label: "Job Given",
		defaultValue: false,
		optional: true
	},
	createdAt: {
		type: Date,
		label: "Created at",
		autoValue: function() {
			return new Date()
		}
	}
});

Candidates.attachSchema(CandidateSchema);