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

FlowRouter.route('/divisions', {
	name: 'divisions',
	action() {
		BlazeLayout.render('DivisionLayout', {main: 'Divisions'});
	}
});

FlowRouter.route('/gramasevavasam', {
	name: 'gramasevavasam',
	action() {
		BlazeLayout.render('GramasevavasamLayout', {main: 'Gramasevavasam'});
	}
});


FlowRouter.route('/poolingbooths', {
	name: 'poolingbooths',
	action() {
		BlazeLayout.render('PoolingboothsLayout', {main: 'Poolingbooths'});
	}
});