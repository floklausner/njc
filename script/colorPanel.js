window.addEventListener('load', () => {

  const heading  = document.getElementById('headline');
  const burger = document.getElementById('menu');
  const arrow = document.getElementById('arrowDown');
  const gallery = document.getElementById('navGallery');
  const subway = document.getElementById('navSubway');
  const taxi = document.getElementById('navTaxi');
  const times = document.getElementById('navTimes');
  const contact = document.getElementById('navContact');
  const about = document.getElementById('navAbout');
  let hoverColor;

  if (!sessionStorage.getItem('hoverColor')) {
    sessionStorage.setItem('hoverColor', '#d50000');
  } else {
    hoverColor = sessionStorage.getItem('hoverColor');
  }

  heading.addEventListener('mouseover', () => {
    heading.style.color = hoverColor;
  });

  heading.addEventListener('mouseout', () => {
    heading.style.color = 'black';
  });

  // Burger
  burger.addEventListener('mouseover', () => {
    burger.style.color = hoverColor;
  });

  burger.addEventListener('mouseout', () => {
    burger.style.color = 'black';
  });

  // Arrow
  arrow.addEventListener('mouseover', () => {
    arrow.style.color = hoverColor;
  });

  arrow.addEventListener('mouseout', () => {
    arrow.style.color = 'black';
  });

  // Gallery
  navGallery.addEventListener('mouseover', () => {
    navGallery.style.color = hoverColor;
  });

  navGallery.addEventListener('mouseout', () => {
    navGallery.style.color = 'black';
  });

  // Subway
  navSubway.addEventListener('mouseover', () => {
    navSubway.style.color = hoverColor;
  });

  navSubway.addEventListener('mouseout', () => {
    navSubway.style.color = 'black';
  });

  // Taxi
  navTaxi.addEventListener('mouseover', () => {
    navTaxi.style.color = hoverColor;
  });

  navTaxi.addEventListener('mouseout', () => {
    navTaxi.style.color = 'black';
  });

  // Times
  navTimes.addEventListener('mouseover', () => {
    navTimes.style.color = hoverColor;
  });

  navTimes.addEventListener('mouseout', () => {
    navTimes.style.color = 'black';
  });

  // Contact
  navContact.addEventListener('mouseover', () => {
    navContact.style.color = hoverColor;
  });

  navContact.addEventListener('mouseout', () => {
    navContact.style.color = 'black';
  });

  // About
  navAbout.addEventListener('mouseover', () => {
    navAbout.style.color = hoverColor;
  });

  navAbout.addEventListener('mouseout', () => {
    navAbout.style.color = 'black';
  });

  const colors = ['#8904B1', 'blue', 'orange', 'yellow', 'green', '#d50000'];

  for (let i = 0; i < colors.length; i++) {

    let contentWrapper = document.getElementById('colorPanelWrapper');
    let newColor = document.createElement('div');

    let colorBox = document.createElement('div');

    let eintragData = [colors[i]];
    let outputArr = [colorBox];

    for (let i = 0; i < outputArr.length; i++) {
        outputArr[i].addEventListener('click', () => {

          sessionStorage.setItem('hoverColor', eintragData[i]);

          // Heading
          heading.addEventListener('mouseover', () => {
            heading.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          heading.addEventListener('mouseout', () => {
            heading.style.color = 'black';
          });

          // Burger
          burger.addEventListener('mouseover', () => {
            burger.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          burger.addEventListener('mouseout', () => {
            burger.style.color = 'black';
          });

          // Arrow
          arrow.addEventListener('mouseover', () => {
            arrow.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          arrow.addEventListener('mouseout', () => {
            arrow.style.color = 'black';
          });

          // Gallery
          navGallery.addEventListener('mouseover', () => {
            navGallery.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          navGallery.addEventListener('mouseout', () => {
            navGallery.style.color = 'black';
          });

          // Subway
          navSubway.addEventListener('mouseover', () => {
            navSubway.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          navSubway.addEventListener('mouseout', () => {
            navSubway.style.color = 'black';
          });

          // Taxi
          navTaxi.addEventListener('mouseover', () => {
            navTaxi.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          navTaxi.addEventListener('mouseout', () => {
            navTaxi.style.color = 'black';
          });

          // Times
          navTimes.addEventListener('mouseover', () => {
            navTimes.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          navTimes.addEventListener('mouseout', () => {
            navTimes.style.color = 'black';
          });

          // Contact
          navContact.addEventListener('mouseover', () => {
            navContact.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          navContact.addEventListener('mouseout', () => {
            navContact.style.color = 'black';
          });

          // About
          navAbout.addEventListener('mouseover', () => {
            navAbout.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          navAbout.addEventListener('mouseout', () => {
            navAbout.style.color = 'black';
          });

        });
        outputArr[i].style.backgroundColor = eintragData[i];
        newColor.appendChild(outputArr[i]);
    }
    contentWrapper.appendChild(newColor);
  }
});
