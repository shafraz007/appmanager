Candidates = new Mongo.Collection('candidates');

Advancelevelsubjects.allow({
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
		label: "Division"
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
		type: String,
		label: "Worked"
	},
	category: {
		type: String,
		label: "Job Category"
	},
	educated: {
		type: String,
		label: "Is Educated"
	},
	ordinarylevel: {
		type: String,
		label: "O / L"
	},
	advancelevel: {
		type: String,
		label: "A / L"
	},
	comments: {
		type: String,
		label: "Other (comments)"
	},
	applicationsubmited: {
		type: String,
		label: "Application Submited"
	},
	jobgiven: {
		type: String,
		label: "Application Submited"
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