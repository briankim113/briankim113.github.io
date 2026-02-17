/* ==========================================================================
   Dark/Light Theme Toggle
   ========================================================================== */

$(document).ready(function(){
  var setTheme = function(theme) {
    const use_theme = theme || localStorage.getItem("theme") || "light";
    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-toggle i").removeClass("fa-sun").addClass("fa-moon");
    } else {
      $("html").attr("data-theme", "light");
      $("#theme-toggle i").removeClass("fa-moon").addClass("fa-sun");
    }
  };

  var toggleTheme = function() {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  };

  // Initialize theme on page load
  setTheme();

  // Toggle theme on button click
  $("#theme-toggle").on("click", function(e) {
    e.preventDefault();
    toggleTheme();
  });
});
