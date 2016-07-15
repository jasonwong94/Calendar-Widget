(function(){
var app = angular.module("calendarWidget")

app.controller("calendarController", ["$scope", "calendarService", function($scope, calendarService){

	var vm = this;
	var present = new moment();
	
	//today's date
	vm.today = {}
	vm.today['year'] = present.year()
	vm.today['month'] = present.month()
	vm.today['day'] = present.day();

	//parameters shown
	vm.year = present.year();
	vm.month = present.month();
	vm.day = present.day();

	vm.monthObjects = calendarService.generateCalendarObject( vm.month );

	vm.PreviousMonth = function(){
		vm.month -= 1;
		vm.monthObjects = calendarService.generateCalendarObject( vm.month );
	}

	vm.NextMonth = function(){
		vm.month += 1;
		vm.monthObjects = calendarService.generateCalendarObject( vm.month );
	}

}])

})();