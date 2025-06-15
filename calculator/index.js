    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
          currentInput = '';
          display.textContent = '0';
        } else if (value === '=') {
          try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
            resultDisplayed = true;
          } catch {
            display.textContent = 'Error';
            currentInput = '';
          }
        } else {
          if (resultDisplayed && /[0-9.]/.test(value)) {
            currentInput = '';
            resultDisplayed = false;
          }
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });