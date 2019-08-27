const container0 = 'container-0';
const container1 = 'container-1';
const container2 = 'container-2';
const artwork = 'artwork';
const silence = 'silence';

function setArtworkHeight() {
  document.getElementById(container1).style.height = artworkHeight + 'px';
}
function setRoundedCorners() {
  if (!roundedCorners) {
    document.getElementById(container0).style.borderRadius = '0';
    document.getElementById(container1).style.borderRadius = '0';
    document.getElementById(container2).style.borderRadius = '0';
    document.getElementById(artwork).style.borderRadius = '0';
  }
}
function setSilenceText() {
  document.getElementById(silence).innerHTML = silenceText;
}
function setSilenceVisibility() {
  if (!showSilence) {
    document.getElementById(container0).style.display = 'none';
  }
}
function setWidth() {
  if (fullWidth) {
    document.getElementById(container0).style.width = '100%';
    document.getElementById(container1).style.width = '100%';
    document.getElementById(container2).style.width = '100%';
  }
}
function init() {
  setArtworkHeight();
  setRoundedCorners();
  setSilenceText();
  setSilenceVisibility();
  setWidth();
}
