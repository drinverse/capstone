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

// FOR HAMBURGER BUTTON - OPEN SIDEBAR AND CLOSE SIDEBAR
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
/* function closeNav() {
  document.querySelector('nav').style.display = "none";
} */

// FROM CHATGPT: Add event listener to all sections with ID ending with '-section'
/* Array.from(document.querySelectorAll('[id$="-section"]')).forEach(function(element) {
  element.addEventListener('click', closeNav);
}); */

})

// SIDE BAR MENU TOGGLER - THIS IS GENERATE FROM CHATGPT
/* window.addEventListener('load', () => {
  const childBars = Array.from(document.querySelectorAll('[id^="bar-child-"]')); //id^= that is start from
  const sections = Array.from(document.querySelectorAll('[id$="-section"]')); //id$= is that ending with

  childBars.forEach((childBar, i) => {
    childBar.addEventListener('click', () => {
      childBars.forEach((cb) => cb.classList.remove('active'));
      childBar.classList.add('active');
      sections.forEach((sect) => sect.style.display = 'none');
      sections[i].style.display = 'block';
    });
  });
}); */


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


//CLOSE SIDEBAR WHEN CLICK OUTSIDE
/* 
function closeNav() { 
  document.querySelector('nav').style.display = "none";
}

document.querySelector('#dashboard-section').addEventListener('click', closeNav)
document.querySelector('#company-section').addEventListener('click', closeNav)
document.querySelector('#application-section').addEventListener('click', closeNav)
document.querySelector('#inspection-section').addEventListener('click', closeNav)
document.querySelector('#nov-section').addEventListener('click', closeNav)
document.querySelector('#naf-section').addEventListener('click', closeNav) */

/* document.querySelector('.right').addEventListener('click', closeNav) */

// CLOSE SIDEBAR WHEN CLICK OUTSIDE
/*   document.querySelector('#menu-btn').onclick = e => {
    sideMenu.style.display = 'block';
    e.stopPropagation()
  }
  
  document.body.addEventListener('click', e => sideMenu.style.display = 'none') */


// MY OLD CODE IN SIDEBAR MENU TOGGLER
window.addEventListener('load', function() {

  const childBar1 = document.querySelector('#bar-child-1'); //SIDEBAR MENU TOGGLER
  const childBar2 = document.querySelector('#bar-child-2');
  const childBar3 = document.querySelector('#bar-child-3');
  const childBar4 = document.querySelector('#bar-child-4');
  const childBar5 = document.querySelector('#bar-child-5');
  const childBar6 = document.querySelector('#bar-child-6');
  const childBar7 = document.querySelector('#bar-child-7');

  const dashboardSect = document.querySelector('#dashboard-section');
  const companySect = document.querySelector('#company-section');
  const applicationSect = document.querySelector('#application-section');
  const inspectionSect = document.querySelector('#inspection-section');
  const NOVSect = document.querySelector('#nov-section');
  const NAFSect = document.querySelector('#naf-section');
  const settingsSect = document.querySelector('#settings-section');

  const dropDown2 = document.querySelector('#dropdown-2');
  const dropDown3 = document.querySelector('#dropdown-3');
  const dropDown4 = document.querySelector('#dropdown-4');
  const dropDown5 = document.querySelector('#dropdown-5');
  const dropDown6 = document.querySelector('#dropdown-6');
  const dropDown7 = document.querySelector('#dropdown-7');

  const dropBtnAdd2 = document.querySelector('#dropbar-add-2');
  const dropBtnAdd3 = document.querySelector('#dropbar-add-3');
  const dropBtnAdd4 = document.querySelector('#dropbar-add-4');
  const dropBtnAdd5 = document.querySelector('#dropbar-add-5');
  const dropBtnAdd6 = document.querySelector('#dropbar-add-6');

  const dropBtnView2 = document.querySelector('#dropbar-view-2');
  const dropBtnView3 = document.querySelector('#dropbar-view-3');
  const dropBtnView4 = document.querySelector('#dropbar-view-4');
  const dropBtnView5 = document.querySelector('#dropbar-view-5');
  const dropBtnView6 = document.querySelector('#dropbar-view-6');

  const submitresetBtn2 = document.querySelector('#submitreset-container-2');
  const submitresetBtn3 = document.querySelector('#submitreset-container-3');
  const submitresetBtn4 = document.querySelector('#submitreset-container-4');
  const submitresetBtn5 = document.querySelector('#submitreset-container-5');
  const submitresetBtn6 = document.querySelector('#submitreset-container-6');

  var forms = document.getElementsByClassName("form-section");

  function disableFormElements(form) {
    var formElements = form.querySelectorAll("input[type='text'], input[type='date'], select, textarea");
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].disabled = true;
    }
  }
  
  // Function to enable form elements
  function enableFormElements(form) {
    var formElements = form.querySelectorAll("input[type='text'], input[type='date'], select, textarea");
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].disabled = false;
    }
  }



  childBar1.onclick = () => {
    
    childBar1.classList.add('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dashboardSect.style.display = 'block';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    dropDown2.style.display = 'none';
    dropDown3.style.display = 'none';
    dropDown4.style.display = 'none';
    dropDown5.style.display = 'none';
    dropDown6.style.display = 'none';
    dropDown7.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  };

  childBar2.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.add('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropDown2.style.display = 'flex';
    dropDown3.style.display = 'none';
    dropDown4.style.display = 'none';
    dropDown5.style.display = 'none';
    dropDown6.style.display = 'none';
    dropDown7.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }

  };

  childBar3.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.add('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropDown2.style.display = 'none';
    dropDown3.style.display = 'flex';
    dropDown4.style.display = 'none';
    dropDown5.style.display = 'none';
    dropDown6.style.display = 'none';
    dropDown7.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  };

  childBar4.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.add('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropDown2.style.display = 'none';
    dropDown3.style.display = 'none';
    dropDown4.style.display = 'flex';
    dropDown5.style.display = 'none';
    dropDown6.style.display = 'none';
    dropDown7.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }

  };

  childBar5.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.add('active');
    childBar6.classList.remove('active');
    childBar7.classList.remove('active');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropDown2.style.display = 'none';
    dropDown3.style.display = 'none';
    dropDown4.style.display = 'none';
    dropDown5.style.display = 'flex';
    dropDown6.style.display = 'none';
    dropDown7.style.display = 'none';
    
    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  };

  childBar6.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.add('active');
    childBar7.classList.remove('active');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropDown2.style.display = 'none';
    dropDown3.style.display = 'none';
    dropDown4.style.display = 'none';
    dropDown5.style.display = 'none';
    dropDown6.style.display = 'flex';
    dropDown7.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  };

  childBar7.onclick = () => {
    childBar1.classList.remove('active');
    childBar2.classList.remove('active');
    childBar3.classList.remove('active');
    childBar4.classList.remove('active');
    childBar5.classList.remove('active');
    childBar6.classList.remove('active');
    childBar7.classList.add('active');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'block';

    dropDown2.style.display = 'none';
    dropDown3.style.display = 'none';
    dropDown4.style.display = 'none';
    dropDown5.style.display = 'none';
    dropDown6.style.display = 'none';
    dropDown7.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }

  };

  // - TOGGLE FOR DROPDOWN ADD BUTTON - 
  dropBtnAdd2.onclick = () => {
    dropBtnAdd2.classList.add('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'block';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn2.style.display = 'flex';
    submitresetBtn3.style.display = 'flex';
    submitresetBtn4.style.display = 'flex';
    submitresetBtn5.style.display = 'flex';
    submitresetBtn6.style.display = 'flex';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  }

  dropBtnAdd3.onclick = () => {
    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.add('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'block';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn2.style.display = 'flex';
    submitresetBtn3.style.display = 'flex';
    submitresetBtn4.style.display = 'flex';
    submitresetBtn5.style.display = 'flex';
    submitresetBtn6.style.display = 'flex';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  }

  dropBtnAdd4.onclick = () => {
    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.add('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'block';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn2.style.display = 'flex';
    submitresetBtn3.style.display = 'flex';
    submitresetBtn4.style.display = 'flex';
    submitresetBtn5.style.display = 'flex';
    submitresetBtn6.style.display = 'flex';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  }

  dropBtnAdd5.onclick = () => {
    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.add('activate');
    dropBtnAdd6.classList.remove('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'block';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn2.style.display = 'flex';
    submitresetBtn3.style.display = 'flex';
    submitresetBtn4.style.display = 'flex';
    submitresetBtn5.style.display = 'flex';
    submitresetBtn6.style.display = 'flex';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  }

  dropBtnAdd6.onclick = () => {
    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.add('activate');

    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'block';
    settingsSect.style.display = 'none';

    submitresetBtn2.style.display = 'flex';
    submitresetBtn3.style.display = 'flex';
    submitresetBtn4.style.display = 'flex';
    submitresetBtn5.style.display = 'flex';
    submitresetBtn6.style.display = 'flex';

    for (var i = 0; i < forms.length; i++) {
      enableFormElements(forms[i]);
    }
  }

  

  // - TOGGLE FOR VIEW BUTTON -
  dropBtnView2.onclick = () => {
    dropBtnView2.classList.add('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'block';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn2.style.display = 'none';
    
    for (var i = 0; i < forms.length; i++) {
      disableFormElements(forms[i]);
    }

  }

  dropBtnView3.onclick = () => {
    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.add('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'block';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn3.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      disableFormElements(forms[i]);
    }

  }

  dropBtnView4.onclick = () => {
    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.add('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.remove('activate');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'block';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn4.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      disableFormElements(forms[i]);
    }
  }

  dropBtnView5.onclick = () => {
    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.add('activate');
    dropBtnView6.classList.remove('activate');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'block';
    NAFSect.style.display = 'none';
    settingsSect.style.display = 'none';

    submitresetBtn5.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      disableFormElements(forms[i]);
    }
  }

  dropBtnView6.onclick = () => {
    dropBtnView2.classList.remove('activate');
    dropBtnView3.classList.remove('activate');
    dropBtnView4.classList.remove('activate');
    dropBtnView5.classList.remove('activate');
    dropBtnView6.classList.add('activate');

    dropBtnAdd2.classList.remove('activate');
    dropBtnAdd3.classList.remove('activate');
    dropBtnAdd4.classList.remove('activate');
    dropBtnAdd5.classList.remove('activate');
    dropBtnAdd6.classList.remove('activate');

    dashboardSect.style.display = 'none';
    companySect.style.display = 'none';
    applicationSect.style.display = 'none';
    inspectionSect.style.display = 'none';
    NOVSect.style.display = 'none';
    NAFSect.style.display = 'block';
    settingsSect.style.display = 'none';

    submitresetBtn6.style.display = 'none';

    for (var i = 0; i < forms.length; i++) {
      disableFormElements(forms[i]);
    }
  }

  

})


window.addEventListener('load', function() {
// Add event listener to the "Log In" button
var loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", function() {
  // Redirect to main.html
  window.location.href = "main.html";
});
})

window.addEventListener('load', function() {
// Add event listener to the "Log out" button
var logoutButton = document.getElementById("logout-btn");
logoutButton.addEventListener("click", function() {
  // Redirect to index.html
  window.location.href = "index.html";
});
})

/* window.addEventListener('load', function() {
  var linkButtons = document.querySelectorAll(".sidebar a[id^='bar-child-']:not(#bar-child-1):not(#bar-child-7)");

  linkButtons.forEach(function(button) {
    var addButton = button.querySelector(".dropdown-content #dropbar-add");
    var viewButton = button.querySelector(".dropdown-content #dropbar-view");
    var form = document.querySelector(".form-box form");
    var formControls = form.elements;
  
    addButton.addEventListener("click", function() {
      disableFormControls(false);
    });
  
    viewButton.addEventListener("click", function() {
      disableFormControls(true);
    });
  });
  
  function disableFormControls(disabled) {
    for (var i = 0; i < formControls.length; i++) {
      formControls[i].disabled = disabled;
    }
  }
}) */
