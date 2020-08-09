function openGenre(evt, genreName) {
  var i, tabcontent, tabbutton;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tabbutton = document.getElementsByClassName("tabbutton");
  for (i = 0; i < tabbutton.length; i++) {
    tabbutton[i].className = tabbutton[i].className.replace(" active", "");
  }

  document.getElementById(genreName).style.display = "block";
  evt.currentTarget.className += " active";
}
