HexCalcApp = {};

HexCalcApp.HexCalcViewModel = function (initialMeasure) {
	var self = this;

	self.derivedSideLength = ko.observable(initialMeasure);
	self.currentCalcType = ko.observable();

	self.givenApothem = ko.observable();
	self.calcApothem = ko.computed(function () {
		if (self.currentCalcType() !== 'apothem') {
		    self.givenApothem(toFixedValue(((Math.sqrt(3) / 2) * self.derivedSideLength()), 4));
			return self.givenApothem();
		} else {
			return self.givenApothem();
		}
	});
	
	self.givenPerimeter = ko.observable();
	self.calcPerimeter = ko.computed(function () {
		if (self.currentCalcType() !== 'perimeter') {
		    self.givenPerimeter(toFixedValue((self.derivedSideLength() * 6), 4));
			return self.givenPerimeter();
		} else {
			return self.givenPerimeter();
		}
	});
	
	self.givenArea = ko.observable();
	self.calcArea = ko.computed(function () {
		if (self.currentCalcType() !== 'area') {
		    self.givenArea(toFixedValue((((3 * Math.sqrt(3)) / 2) * Math.pow(self.derivedSideLength(), 2)), 4));
			return self.givenArea();
		} else {
			return self.givenArea();
		}
	});
	
	self.givenVtoV = ko.observable();
	self.calcVtoV = ko.computed(function () {
		if (self.currentCalcType() !== 'VtoV') {
		    self.givenVtoV(toFixedValue((2 * self.derivedSideLength()), 4));
			return self.givenVtoV();
		} else {
			return self.givenVtoV();
		}
	});
	
	self.givenCtoV = ko.observable();
	self.calcCtoV = ko.computed(function () {
		if (self.currentCalcType() !== 'CtoV') {
		    self.givenCtoV(toFixedValue(self.derivedSideLength(), 4));
			return self.givenCtoV();
		} else {
			return self.givenCtoV();
		}
	});
	
	self.givenSide = ko.observable();
	self.calcSide = ko.computed(function () {
		if (self.currentCalcType() !== 'side') {
		    self.givenSide(toFixedValue(self.derivedSideLength(), 4));
			return self.givenSide();
		}else {
			return self.givenSide();
		}
	});
	
	self.givenFtoF = ko.observable();
	self.calcFtoF = ko.computed(function () {
		if (self.currentCalcType() !== 'FtoF') {
		    self.givenFtoF(toFixedValue((2 * ((Math.sqrt(3) / 2) * self.derivedSideLength())), 4));
			return self.givenFtoF();
		} else {
			return self.givenFtoF();
		}
	});
	
	self.apothemEdit = ko.observable(false);
	self.perimeterEdit = ko.observable(false);
	self.areaEdit = ko.observable(false);
	self.vToVEdit = ko.observable(false);
	self.cToVEdit = ko.observable(false);
	self.sideEdit = ko.observable(false);
	self.fToFEdit = ko.observable(false);
	
	self.edit = function (data, event) {
		self.currentCalcType(data);
		
		if (data === 'apothem') {
			self.apothemEdit(true);
			return;
		}
		if (data === 'perimeter') {
			self.perimeterEdit(true);
			return;
		}
		if (data === 'area') {
			self.areaEdit(true);
			return;
		}
		if (data === 'VtoV') {
			self.vToVEdit(true);
			return;
		}
		if (data === 'CtoV') {
			self.cToVEdit(true);
			return;
		}
		if (data === 'side') {
			self.sideEdit(true);
			return;
		}
		if (data === 'FtoF') {
			self.fToFEdit(true);
			return;
		}
	};
	
	self.givenApothem.subscribe(function (entry) {
		if (self.currentCalcType() === 'apothem') {
			self.derivedSideLength(((2 * entry) / 3) * Math.sqrt(3));
		}
	});
	
	self.givenArea.subscribe(function (entry) {
		if (self.currentCalcType() === 'area') {
			self.derivedSideLength(Math.sqrt(2 * entry) * Math.sqrt(Math.sqrt(3)) / 3);
		}
	});
	
	self.givenPerimeter.subscribe(function (entry) {
		if (self.currentCalcType() === 'perimeter') {
			self.derivedSideLength(entry / 6);
		}
	});
	
	self.givenVtoV.subscribe(function (entry) {
		if (self.currentCalcType() === 'VtoV') {
			self.derivedSideLength(entry / 2);
		}
	});
	
	self.givenCtoV.subscribe(function (entry) {
		if (self.currentCalcType() === 'CtoV') {
			self.derivedSideLength(entry);
		}
	});
	
	self.givenSide.subscribe(function (entry) {
		if (self.currentCalcType() === 'side') {
			self.derivedSideLength(entry);
		}
	});
	
	self.givenFtoF.subscribe(function (entry) {
		if (self.currentCalcType() === 'FtoF') {
			self.derivedSideLength((entry / 3) * Math.sqrt(3));
		}
	});
	
	// From: http://stackoverflow.com/a/2909252
	function toFixedValue(value, precision) {
	    return value.toFixed(precision);
	}

    self.fixedNumber = ko.observable();
    self.fixNumber = ko.computed(function(value, precision) {
        if (precision === undefined) {
            precision = 0;
        }
        if (value !== undefined) {
            self.fixedNumber(value.toFixed(precision));
        }
        return self.fixedNumber();
    });
};

// From: http://stackoverflow.com/a/12356271
(function () {
	var valueHandler = ko.bindingHandlers.value;
	var getInjectValueUpdate = function (allBindingsAccessor) {
		var AFTERKEYDOWN = 'afterkeydown';
		return function () {
			var allBindings = ko.utils.extend({}, allBindingsAccessor()),
                valueUpdate = allBindings.valueUpdate;

			if (valueUpdate === undefined) {
				return ko.utils.extend(allBindings, { valueUpdate: AFTERKEYDOWN });
			} else if (typeof valueUpdate === 'string' && valueUpdate !== AFTERKEYDOWN) {
				return ko.utils.extend(allBindings, { valueUpdate: [valueUpdate, AFTERKEYDOWN] });
			} else if (typeof valueUpdate === 'array' && ko.utils.arrayIndexOf(valueUpdate, AFTERKEYDOWN) === -1) {
				valueUpdate = ko.utils.arrayPushAll([AFTERKEYDOWN], valueUpdate);
				return ko.utils.extend(allBindings, { valueUpdate: valueUpdate });
			}
			return allBindings;
		};
	};
	ko.bindingHandlers.value = {
		'init': function (element, valueAccessor, allBindingsAccessor) {
			allBindingsAccessor = getInjectValueUpdate(allBindingsAccessor);
			return valueHandler.init(element, valueAccessor, allBindingsAccessor);
		},
		'update': valueHandler.update
	};
}());

$(document).ready(function() {
    ko.applyBindings(new HexCalcApp.HexCalcViewModel(0));
});
