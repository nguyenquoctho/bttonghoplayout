// document.documentElement.setAttribute("lang", "en");
// document.documentElement.removeAttribute("class");

// axe.run( function(err, results) {
//   console.log( results.violations );
// } );
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
//   Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

function closeInfo__card(){
  document.getElementById('info__card').style.display = 'none';
}

function showInfo__card(){
  document.getElementById('info__card').style.display = 'inline';
  // alert('sadasda');
}

function openInfo__card(){
  document.getElementById('info__ford').style.display = 'inline';
}

function closeInfo__ford(){
  document.getElementById('info__ford').style.display = 'none';
  // alert('sadasda');
}

function movetoPickup(){
  document.getElementById('movetoPickup').style.display = 'none';
}