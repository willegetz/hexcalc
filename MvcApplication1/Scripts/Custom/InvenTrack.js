var initialData = [
    { name: "Backpack", weight: 2 },
    { name: "Bedroll", weight: 1 },
    { name: "Rations", weight: 1 },
    { name: "Lantern", weight: 3 },
    { name: "Tent", weight: 10 },
    { name: "Blanket", weight: 0.5 }
];

HexCalcApp.InvenTrackViewModel = function (items) {
    var self = this;
    // A list of item/weights
    self.items = ko.observableArray(items);
    // Weights are tallied and displayed prominently
    self.totalWeight = ko.computed(function () {
        var total = 0;
        console.log(self.items());
        for (var i = 0; i < self.items().length; i++) {
            total += self.items()[i].weight;
        }

        return total;
    });
};

ko.applyBindings(new HexCalcApp.InvenTrackViewModel(initialData));