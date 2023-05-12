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

/* window.addEventListener('resize', () => {
  sideMenu.style.display = 'block';
});  */

// SIDEBAR SHOW WHEN IT RESIZE TO SPECIFIC WIDTH
var limitFunc = function(){
  if (window.innerWidth>769){
     sideMenu.style.display = 'block';
  }
  else {
    sideMenu.style.display = 'none';
  }
};

window.addEventListener("resize", limitFunc);


// CLOSE SIDEBAR WHEN CLICK OUTSIDE
function closeNav() {
  document.querySelector('nav').style.display = "none";
}

document.querySelector('main').addEventListener('click', closeNav)
  

})



window.addEventListener('load', function() {

  // SIDEBAR MENU TOGGLER
  //let sidebarMenu = document.querySelector('.sidebar');
  const childBar1 = document.querySelector('#bar-child-1');
  const childBar2 = document.querySelector('#bar-child-2');
  const childBar3 = document.querySelector('#bar-child-3');
  const childBar4 = document.querySelector('#bar-child-4');
  const childBar5 = document.querySelector('#bar-child-5');
  const childBar6 = document.querySelector('#bar-child-6');
  const childBar7 = document.querySelector('#bar-child-7');

  const dashboardSect = document.querySelector('#dashboard');
  const companySect = document.querySelector('#company-section');
  const applicationSect = document.querySelector('#application-section');
  const inspectionSect = document.querySelector('#inspection-section');
  const NOVSect = document.querySelector('#nov-section');
  const NAFSect = document.querySelector('#naf-section');
  
  childBar1.onclick = () => {
    childBar1.classList.add('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dashboardSect.style.display = 'block';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    
  };

  childBar2.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.add('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'block';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';

  };

  childBar3.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.add('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'block';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';

  };

  childBar4.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.add('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'block';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';

  };

  childBar5.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.add('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'block';
    NAFSect.style.display = 'none';
    
  };

  childBar6.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.add('active');
    childBar7.classList.remove('active');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'block';
  };

  childBar7.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.add('active');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
  };

})



// LITEMODE AND DARKMODE
window.addEventListener('load', function() {

  // CHANGE TO DARK THEME
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

})



// TABLE CONTENT DEPENDING FROM LOG.JS
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
