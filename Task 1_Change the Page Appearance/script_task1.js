 // Mengubah Warna Background
 const bgColorSelect = document.getElementById('bgColor');
 bgColorSelect.addEventListener('change', function() {
   document.body.style.backgroundColor = bgColorSelect.value;
  
  });

 // Mengubah ukuran font
 const fontSizeSlider = document.getElementById('fontSize');
 fontSizeSlider.addEventListener('input', function() {
   document.body.style.fontSize = fontSizeSlider.value + 'px';
 });

 // Mode Gelap
 const toggleDarkModeButton = document.getElementById('toggleDarkMode');
 toggleDarkModeButton.addEventListener('click', function() {
   document.body.classList.toggle('dark-mode');
 });

 // Mengubah style font
 const fontStyleSelect = document.getElementById('fontStyle');
 fontStyleSelect.addEventListener('change', function() {
   document.body.style.fontFamily = fontStyleSelect.value;
 });