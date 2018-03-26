var PointsTotal = 20;
var pointSystem = new Array(0, 0, 0, 0, 0, 0, 0, -4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17);

window.onload = function () {
  CalculateStats();
  $("Strength").addEventListener("change", CalculateStats);
  $("StrRace").addEventListener("change", CalculateStats);
  $("StrLevel").addEventListener("change", CalculateStats);
  $("StrOther").addEventListener("change", CalculateStats);

  $("Dexterity").addEventListener("change", CalculateStats);
  $("DexRace").addEventListener("change", CalculateStats);
  $("DexLevel").addEventListener("change", CalculateStats);
  $("DexOther").addEventListener("change", CalculateStats);

  $("Constitution").addEventListener("change", CalculateStats);
  $("ConRace").addEventListener("change", CalculateStats);
  $("ConLevel").addEventListener("change", CalculateStats);
  $("ConOther").addEventListener("change", CalculateStats);

  $("Intelligence").addEventListener("change", CalculateStats);
  $("IntRace").addEventListener("change", CalculateStats);
  $("IntLevel").addEventListener("change", CalculateStats);
  $("IntOther").addEventListener("change", CalculateStats);

  $("Wisdom").addEventListener("change", CalculateStats);
  $("WisRace").addEventListener("change", CalculateStats);
  $("WisLevel").addEventListener("change", CalculateStats);
  $("WisOther").addEventListener("change", CalculateStats);

  $("Charisma").addEventListener("change", CalculateStats);
  $("ChaRace").addEventListener("change", CalculateStats);
  $("ChaLevel").addEventListener("change", CalculateStats);
  $("ChaOther").addEventListener("change", CalculateStats);

  $("Low").addEventListener("click", Low);
  $("Standard").addEventListener("click", Standard);
  $("High").addEventListener("click", High);
  $("Epic").addEventListener("click", Epic);

  $("Young").addEventListener("click", Young);
  $("Adult").addEventListener("click", Adult);
  $("Middle").addEventListener("click", Middle);
  $("Old").addEventListener("click", Old);
  $("Venerable").addEventListener("click", Venerable);

  $("Humanish").addEventListener("click", Humanish);
  $("Dwarf").addEventListener("click", Dwarf);
  $("Elf").addEventListener("click", Elf);
  $("Gnome").addEventListener("click", Gnome);
  $("Halfling").addEventListener("click", Halfling);

  $("Restart").addEventListener("click", Restart);
};

function $(id) {
  return document.getElementById(id);
}

function Restart() {
  ZeroRace();
  ZeroLevel();
  ZeroOther();
  $("Race").innerText = "Race";
  Deactivate("Race");
  $("Strength").value = 10;
  $("Dexterity").value = 10;
  $("Constitution").value = 10;
  $("Intelligence").value = 10;
  $("Wisdom").value = 10;
  $("Charisma").value = 10;
  Adult();
  High();
}

function ZeroLevel() {
  $("StrLevel").value = 0;
  $("DexLevel").value = 0;
  $("ConLevel").value = 0;
  $("IntLevel").value = 0;
  $("WisLevel").value = 0;
  $("ChaLevel").value = 0;
}

function ZeroOther() {
  $("StrOther").value = 0;
  $("DexOther").value = 0;
  $("ConOther").value = 0;
  $("IntOther").value = 0;
  $("WisOther").value = 0;
  $("ChaOther").value = 0;
}

function ZeroRace() {
  $("StrRace").value = 0;
  $("DexRace").value = 0;
  $("ConRace").value = 0;
  $("IntRace").value = 0;
  $("WisRace").value = 0;
  $("ChaRace").value = 0;
}

function Humanish() {
  ZeroRace();
  $("Race").innerText = "Human/Half Breed";
  Activate("Race");
  CalculateStats();
}

function Dwarf() {
  ZeroRace();
  $("ConRace").value = 2;
  $("WisRace").value = 2;
  $("ChaRace").value = -2;
  $("Race").innerText = "Dwarf";
  Activate("Race");
  CalculateStats();
}

function Elf() {
  ZeroRace();
  $("DexRace").value = 2;
  $("ConRace").value = -2;
  $("IntRace").value = 2;
  $("Race").innerText = "Elf";
  Activate("Race");
  CalculateStats();
}

function Gnome() {
  ZeroRace();
  $("StrRace").value = -2;
  $("ConRace").value = 2;
  $("ChaRace").value = 2;
  $("Race").innerText = "Gnome";
  Activate("Race");
  CalculateStats();
}

function Halfling() {
  ZeroRace();
  $("StrRace").value = -2;
  $("DexRace").value = 2;
  $("ChaRace").value = 2;
  $("Race").innerText = "Halfling";
  Activate("Race");
  CalculateStats();
}

function Young() {
  Activate("Young");
  Deactivate("Adult");
  Deactivate("Middle");
  Deactivate("Old");
  Deactivate("Venerable");
  ChangeSpan("StrAge", -2);
  ChangeSpan("DexAge", +2);
  ChangeSpan("ConAge", -2);
  ChangeSpan("IntAge", 0);
  ChangeSpan("WisAge", -2);
  ChangeSpan("ChaAge", 0);
  CalculateStats();
}

function Adult() {
  Deactivate("Young");
  Activate("Adult");
  Deactivate("Middle");
  Deactivate("Old");
  Deactivate("Venerable");
  ChangeSpan("StrAge", 0);
  ChangeSpan("DexAge", 0);
  ChangeSpan("ConAge", 0);
  ChangeSpan("IntAge", 0);
  ChangeSpan("WisAge", 0);
  ChangeSpan("ChaAge", 0);
  CalculateStats();
}

function Middle() {
  Deactivate("Young");
  Deactivate("Adult");
  Activate("Middle");
  Deactivate("Old");
  Deactivate("Venerable");
  ChangeSpan("StrAge", -1);
  ChangeSpan("DexAge", -1);
  ChangeSpan("ConAge", -1);
  ChangeSpan("IntAge", +1);
  ChangeSpan("WisAge", +1);
  ChangeSpan("ChaAge", +1);
  CalculateStats();
}

function Old() {
  Deactivate("Young");
  Deactivate("Adult");
  Deactivate("Middle");
  Activate("Old");
  Deactivate("Venerable");
  ChangeSpan("StrAge", -2);
  ChangeSpan("DexAge", -2);
  ChangeSpan("ConAge", -2);
  ChangeSpan("IntAge", +1);
  ChangeSpan("WisAge", +1);
  ChangeSpan("ChaAge", +1);
  CalculateStats();
}

function Venerable() {
  Deactivate("Young");
  Deactivate("Adult");
  Deactivate("Middle");
  Deactivate("Old");
  Activate("Venerable");
  ChangeSpan("StrAge", -3);
  ChangeSpan("DexAge", -3);
  ChangeSpan("ConAge", -3);
  ChangeSpan("IntAge", +1);
  ChangeSpan("WisAge", +1);
  ChangeSpan("ChaAge", +1);
  CalculateStats();
}

function Low() {
  Activate("Low");
  Deactivate("Standard");
  Deactivate("High");
  Deactivate("Epic");
  PointsTotal = 10;
  CalculatePoints();
}

function Standard() {
  Deactivate("Low");
  Activate("Standard");
  Deactivate("High");
  Deactivate("Epic");
  PointsTotal = 15;
  CalculatePoints();
}

function High() {
  Deactivate("Low");
  Deactivate("Standard");
  Activate("High");
  Deactivate("Epic");
  PointsTotal = 20;
  CalculatePoints();
}

function Epic() {
  Deactivate("Low");
  Deactivate("Standard");
  Deactivate("High");
  Activate("Epic");
  PointsTotal = 25;
  CalculatePoints();
}

function Activate(id) {
  $(id).style.color = "white"
  $(id).style.backgroundColor = "maroon"
}
function Deactivate(id) {
  $(id).style.color = "black"
  $(id).style.backgroundColor = "gold"
}

function ChangeSpan(id, num) {
  var span = $(id);
  span.innerText = num;
}

function CalculatePoints() {
  var span = $('Remaining');
  var PointsRemaining = PointsTotal;
  PointsRemaining -= pointSystem[Number($("Strength").value)];
  PointsRemaining -= pointSystem[Number($("Dexterity").value)];
  PointsRemaining -= pointSystem[Number($("Constitution").value)];
  PointsRemaining -= pointSystem[Number($("Intelligence").value)];
  PointsRemaining -= pointSystem[Number($("Wisdom").value)];
  PointsRemaining -= pointSystem[Number($("Charisma").value)];
  span.innerText = "Points Remaining:" + PointsRemaining;
  if (PointsRemaining <= 0){
    span.style.backgroundColor = "red"
  } else {
    span.style.backgroundColor = ""
  }
}

function CalculateStats() {
  var span = $('StrTotal');
  span.innerText = Number($("Strength").value) + Number($("StrRace").value) + Number($("StrLevel").value) + Number($("StrOther").value) + Number($("StrAge").innerText);
  span = $('StrMod');
  span.innerText = Math.floor((Number($("StrTotal").innerText) - 10) / 2);

  var span = $('DexTotal');
  span.innerText = Number($("Dexterity").value) + Number($("DexRace").value) + Number($("DexLevel").value) + Number($("DexOther").value) + Number($("DexAge").innerText);
  span = $('DexMod');
  span.innerText = Math.floor((Number($("DexTotal").innerText) - 10) / 2);

  var span = $('ConTotal');
  span.innerText = Number($("Constitution").value) + Number($("ConRace").value) + Number($("ConLevel").value) + Number($("ConOther").value) + Number($("ConAge").innerText);
  span = $('ConMod');
  span.innerText = Math.floor((Number($("ConTotal").innerText) - 10) / 2);

  var span = $('IntTotal');
  span.innerText = Number($("Intelligence").value) + Number($("IntRace").value) + Number($("IntLevel").value) + Number($("IntOther").value) + Number($("IntAge").innerText);
  span = $('IntMod');
  span.innerText = Math.floor((Number($("IntTotal").innerText) - 10) / 2);

  var span = $('WisTotal');
  span.innerText = Number($("Wisdom").value) + Number($("WisRace").value) + Number($("WisLevel").value) + Number($("WisOther").value) + Number($("WisAge").innerText);
  span = $('WisMod');
  span.innerText = Math.floor((Number($("WisTotal").innerText) - 10) / 2);

  var span = $('ChaTotal');
  span.innerText = Number($("Charisma").value) + Number($("ChaRace").value) + Number($("ChaLevel").value) + Number($("ChaOther").value) + Number($("ChaAge").innerText);
  span = $('ChaMod');
  span.innerText = Math.floor((Number($("ChaTotal").innerText) - 10) / 2);

  CalculatePoints();
}