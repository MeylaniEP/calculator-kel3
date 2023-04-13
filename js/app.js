$(document).ready(function() {
    let output = $('.result');
    output.text(0);

    $('button').on('click', function() {
      let currentOutput = output.text();
      let value = $(this).val();

      if (value === 'clr') {
        currentOutput = 0
      } else if (value === 'eql') {
        currentOutput = eval(currentOutput);
      } else {
        currentOutput = currentOutput === '0'? value : (currentOutput + value);
      }

      output.text(currentOutput);
    });
  });