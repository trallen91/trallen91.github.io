var toDoObjects = [
{
  "description": "Get groceries",
  "tags": ["shopping", "chores"]
},
{
  "description": "Answer emails",
  "tags": ["work"]
},
{
  "description": "clean room",
  "tags": ["chores"]
}
];

var organizeByTags = function(toDoObjects){
  var newTagsArray = [];

  toDoObjects.forEach(function(toDo) {
    toDo.tags.forEach(function(tag) {
        if (newTagsArray.indexOf(tag) === -1) {
        newTagsArray.push(tag)
      };
    })
  });
  console.log(newTagsArray);
};

var main = function() {
  "use strict";

  organizeByTags(toDoObjects);

};

$(document).ready(main);