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
	var selectDate = moment(present);
	vm.selectDate = {}
	vm.selectDate['year'] = selectDate.format('YYYY')
	vm.selectDate['month'] = selectDate.format('MMMM')
	vm.selectDate['date'] = selectDate.format('DD')

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

	vm.Today = function(){
		selectDate = moment(present);
		this.UpdateSelectDate(selectDate);
		vm.monthObjects = calendarService.generateCalendarObject( vm.selectDate['year'], vm.selectDate['month'] );
	}

	vm.UpdateSelectDate = function(date){
		vm.selectDate['year'] = date.format('YYYY')
		vm.selectDate['month'] = date.format('MMMM')
		vm.selectDate['date'] = date.format('DD')
	}

}])

})();