$(document).ready(function () {
  // mengambil status dark mode dari penyimpanan browser local
  let darkMode = localStorage.getItem("dark-mode");

  // FUNGSI INI AKAN MENGESET NILAI CLASS DAN ATRIBUTE DARI ELEMENT YANG DIBUTUHKAN
  // membuat fungsi untuk megaktifkan dark mode dan menyimpan statusnya
  const enableDarkMode = () => {
    $(".container").removeClass("light-container");
    $(".container").addClass("dark-container");
    $(".buttons").removeClass("light-buttons");
    $(".buttons").addClass("dark-buttons");
    $("#toggle-btn").attr("checked", true);
    localStorage.setItem("dark-mode", "enabled");
  };
  // membuat fungsi untuk megaktifkan light mode dan menyimpan statusnya
  const disableDarkMode = () => {
    $(".container").removeClass("dark-container");
    $(".container").addClass("light-container");
    $(".buttons").removeClass("dark-buttons");
    $(".buttons").addClass("light-buttons");
    $("#toggle-btn").attr("checked", false);
    localStorage.setItem("dark-mode", "disabled");
  };

  // mengeksekusi fungsi dark mode apabila status dark mode aktif/enable
  if (darkMode === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // merubah status mode saat toggle diklik
  $(".switch").click(function (e) {
    e.preventDefault();
    // update status mode
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});
