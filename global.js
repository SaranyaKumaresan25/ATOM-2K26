// ===== Fix mobile back button cache (bfcache) =====
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    window.location.reload();
  }
});
