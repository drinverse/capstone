window.addEventListener('load', function() {

// -- JAVASCRIPT FOR OPENING MODAL --

// Get the modal
var modal = document.getElementById("modal-reg");

// Get the button that opens the modal
var btn = document.getElementById("reg-lnk");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-icon")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

})

window.addEventListener('load', function() {

// -- JAVASCRIPT FOR MAIN.HTML --

// -- JAVASCRIPT FOR SIDEBAR --
const sideMenu = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

// SHOW SIDEDAR
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

// CLOSE SIDEBAR
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})

window.addEventListener('resize', () => {
  sideMenu.style.display = 'block';
}); 

})

window.addEventListener('load', function() {

  // CHANGE ACTIVE IN SIDEBAR
const sidebarToggler = document.querySelector("side-1");

sidebarToggler.addEventListener('click', () => {
  //document.body.classList.toggle('nav .sidebar a.active');

  sidebarToggler.querySelector('a').classList.toggle('active');

})

})

window.addEventListener('load', function() {

  // CHANGE TO DARK THEME
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

})




window.addEventListener('load', function() {
// FILL ORDERS IN TABLE
Logs.forEach(log => {
  const tr = document.createElement('tr');
  const trContent = `
                  <td>${log.logCategory}</td>
                  <td>${log.logRefNo}</td>
                  <td class="${log.logInteraction ===
                  'Delete' ? 'danger' : log.logInteraction ===
                  'Edit' ? 'warning' : 'success'}">${log.logInteraction}</td>
                  <td>${log.logDate}</td>
                  <td class="primary">Details</td>
                                `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})
})
