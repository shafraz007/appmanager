FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/alsubjects', {
	name: 'alsubjects',
	action() {
		BlazeLayout.render('MainLayout', {main: 'AdvancedLevelSubjects'});
	}
});

FlowRouter.route('/candidates', {
	name: 'candidates',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Candidates'});
	}
});