function DisplayType(character) {
  var characterType = character.getAttribute("data-character-type");
  alert(characterType + " is in the " + character.innerHTML + " Universe!");
}
