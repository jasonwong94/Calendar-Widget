(function(){
var app = angular.module("calendarWidget")

app.controller("calendarController", ["$scope", "calendarService", function($scope, calendarService){

	var vm = this;
	var present = new moment();
	vm.present = present;
	vm.year = present.year();
	vm.month = present.month();
	vm.day = present.day();
	
	var numDays = present.daysInMonth();

	var firstDayOfMonth = moment([vm.year, vm.month, 1]).day();
	var lastDayOfMonth = moment([vm.year, vm.month, numDays]).day();

	vm.monthObjects = calendarService.generateCalendarObject();

}])

})();