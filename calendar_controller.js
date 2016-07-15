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

	//current date selected- by default it is today
	var selectDate = present;
	vm.selectDate = {}
	vm.selectDate['year'] = present.year()
	vm.selectDate['month'] = present.month()
	vm.selectDate['date'] = present.date()

	vm.year = present.year();
	vm.month = present.month();
	vm.day = present.day();

	vm.monthObjects = calendarService.generateCalendarObject( vm.today['year'], vm.today['month'] );

	vm.PreviousMonth = function(){
		selectDate = selectDate.subtract(1, "month");
		this.UpdateSelectDate(selectDate)
		vm.monthObjects = calendarService.generateCalendarObject( vm.selectDate['year'], vm.selectDate['month'] );
	}

	vm.NextMonth = function(){
		selectDate = selectDate.add(1, "month");
		this.UpdateSelectDate(selectDate)
		vm.monthObjects = calendarService.generateCalendarObject( vm.selectDate['year'], vm.selectDate['month'] );
	}

	vm.UpdateSelectDate = function(date){
		vm.selectDate['year'] = date.year()
		vm.selectDate['month'] = date.month()
		vm.selectDate['date'] = date.date()
	}

}])

})();