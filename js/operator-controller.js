$(document).ready(function () {
  const expression = $('input[name="expression"]');
  let currentExpression;
  let isInit;

  // inisiasi awal kalkulator
  const init = () => {
    expression.val(0);
    expression.text(0);
    currentExpression = "";
    isInit = true;
  };

  // memperbarui ekspresi sekarang
  const updateExpression = () => {
    expression.val(currentExpression);
    expression.text(currentExpression);
  };

  // menghapus karakter ekspresi dari belakang
  const del = () => {
    if (currentExpression.length !== 0) {
      currentExpression = currentExpression.substring(
        0,
        currentExpression.length - 1
      );
      updateExpression();
    }

    if (currentExpression.length === 0 || isInit) {
      init();
    }
  };

  // menghitung hasil akhir ekspresi
  const calc = () => {
    const finalExpression = currentExpression.replace(/[÷x]/g, (match) =>
      match === "÷" ? "/" : "*"
    );

    try {
      currentExpression = eval(finalExpression);

      if (currentExpression.toString().length > 12) {
        console.log("keceluk ora");
        currentExpression = currentExpression.toString().substring(0, 12);
      }

      expression.val(currentExpression);
      expression.text(currentExpression);
      isInit = true;

    } catch (error) {
      alert(`Kesalahan penulisan: ${error.message}`);
      init();
    }
  };

  const insert = (button) => {
    const buttonValue = $(button).val();
    const reassignWhen = ["0", ".", "÷", "x", "-", "+"];

    if (
      reassignWhen.find((x) => x === currentExpression) ||
      currentExpression === "" ||
      isInit
    ) {
      init();
    }

    currentExpression += buttonValue;
    updateExpression();
    isInit = false;
  };

  init();

  $('input[type="button"]').click(function (e) {
    e.preventDefault();
    const buttonId = $(this).attr("id");

    switch (buttonId) {
      case "ac":
        init();
        break;
      case "del":
        del();
        break;
      case "eql":
        calc();
        break;
      default:
        insert(this);
        break;
    }
  });
});
