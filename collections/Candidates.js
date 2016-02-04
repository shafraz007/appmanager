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
	dropdown : {
    type : String,
    label : "Select One",
    autoform : {
      options: function(){
        var doc = Poolingbooths.find({});
        var docOptions = doc && doc.options;
        return _.map(docOptions, function(value){
          return {
            label: value,
            value: value
          };
        });
      }
    }
  },
  service: {
    type: String,
    label: " ",
    autoform: {
      type: "select",
      firstOption: 'Choose a provider',
      options: function () {
        console.log(Poolingbooths.find({}));
        return Poolingbooths.find({}).map(function(service){return {label: service.name, value: service.name};});
      }
    }
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