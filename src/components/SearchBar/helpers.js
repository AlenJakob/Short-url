export function copyUrl() {
  let copyText = document.querySelector(".input");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}