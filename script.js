
/* funzione di animazione bottone mobile */
function toggleSearch() {
    const searchResults = document.getElementById("search-input")
    searchResults.classList.toggle("showMyBar1")
    const button1 = document.getElementById("myButton")
    button1.classList.toggle("move1")
  }

  /* funzione di animazione bottone schermo grande */

  function toggleSearch2() {
    const searchResults2 = document.getElementById("search-input2")
    const button2 = document.getElementById("myButton2")
    button2.classList.toggle("move2")
    searchResults2.classList.toggle("showMyBar2")
  }
