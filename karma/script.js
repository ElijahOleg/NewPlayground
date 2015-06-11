var Karma = {
  storeData: function(array) {
    localStorage["karma.data"] = JSON.stringify(this.data);
  },
  readData: function() {
    this.data = JSON.parse(localStorage["karma.data"]);
  },
  modifyPointFor: function(indexofArray, inputNumber) {
    this.data[indexofArray].points = inputNumber;
    this.storeData();
  },
  sortedData: function() {
    return this.data.sort(this.compare);
  },
  compare: function(a, b) {
    return b.points - a.points;
  },
  data: [],
  forceGet : true
};

$(document).ready(function() {
  Karma.readData()
  var sortedData = Karma.sortedData();
  var template = $(".person:first");
  var peopleArray = sortedData.map(function(person, index) {
    var $newDiv = template.clone();
    $newDiv.show();
    $newDiv.data("order", index).text(person.order)
    $newDiv.find(".name").text(person.name);
    $newDiv.find(".points").text(person.points);
    return $newDiv;
  });

  $(".people-list").append(peopleArray);

  $(".edit").click(function(){
    $(".input").show();
    $(".save").show();
    $(".points").hide();
  });

  $("div.person")
  .on("dblclick",".points", function() {
    var person = $(this).parents(".person")
    $(this).closest(".points").hide();
    $(this).closest(".person").find(".input").show();
  })
  .on("keyup","input", function (event){
    if (event.which === 13) {
        console.log($(this).val());
        $(this).closest(".person").find(".points").html($(this).val());
        $(this).closest(".person").find(".points").show();
        $(this).closest(".person").find(".input").hide();
        var person = $(this).parents(".person");
        var index = person.data("order");
        Karma.modifyPointFor(index, $(this).val());
        location.reload(Karma.forceGet);
      }
  });

  $(".save").click(function(){
    $(".save").hide();
    $(this).closest(".person").find(".points").html($(this).val());
    $(this).closest(".person").find(".points").show();
    $(this).closest(".person").find(".input").hide();
    var person = $(this).parents(".person");
    var index = person.data("order");
    Karma.modifyPointFor(index, $(this).val());
    location.reload(Karma.forceGet);
  })
});
//   // var $body = $(".container");
//   // var divArray = [];
//   // for (var i = 0; i < sorted.length; i++) {
//   //   var $div = $("<div class='name-div'>");
//   //   var $p = $("<p>");
//   //   $p.text(sorted[i].name + ' ' + sorted[i].points);
//   //   $div.append($p);
//   //   divArray.push($div);
//   // }
//   // $body.append(divArray);
// $(".points").on(dblclick, function(){
//
// })
//
//








//
//
//
//
//
//
//
//
// var data = [
//   { "name": "Sheryl Boughton", "points": 1 },
//   { "name": "Tania Leonian", "points": 1 },
//   { "name": "Loren Barrick", "points": 3 },
//   { "name": "Stanley Liu", "points": 0 },
//   { "name": "Ryan Taylor", "points": 0 },
//   { "name": "Son Truong", "points": 1 },
//   { "name": "Michael Sankovich", "points": 0 },
//   { "name": "Gerald Anekwe", "points": 2 },
//   { "name": "Juan Barragan", "points": 1 },
//   { "name": "Troy Wood", "points": 0 },
//   { "name": "Bonnie So", "points": 0 },
//   { "name": "Collin Webb", "points": 2 },
//   { "name": "Elijah Olegnowicz", "points": 0 },
//   { "name": "Trey Huffine", "points": 1 },
//   { "name": "Sean Blattenberger", "points": 0 },
//   { "name": "Dan Ward", "points": 1 },
//   { "name": "Aliou Maiga", "points": 0 },
//   { "name": "Javier Escobar", "points": 2 },
//   { "name": "Perrin Clark", "points": 1 }
// ];
