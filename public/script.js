function toggleLight() {
    const bulbImg = document.getElementById('bulb-img');
    const currentSrc = bulbImg.src;
  
    if (currentSrc.includes('bulb_off.png')) {
      bulbImg.src = 'bulb_on.png';
    } else {
      bulbImg.src = 'bulb_off.png';
    }
  }
