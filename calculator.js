document.addEventListener("DOMContentLoaded", function () {
    var displayScreen = document.querySelector('#displayScreen');

    var displayScreen = document.querySelector('#displayScreen');
    displayScreen.focus(); // Set initial focus on the input field

    // Event listener for keyboard input
    document.addEventListener('keydown', function (event) {
        var key = event.key;

        if (key === 'Enter') {
            evalEquals();
        } else if (key === 'Backspace') {
            backSpc();
        } else if (/^[0-9.\-+*/()]+$/.test(key)) {
            // Append valid characters to the display
            displayScreen.value += key;
        } else if (key === '.' && !displayScreen.value.includes('.')) {
            // Append decimal point if not already present
            displayScreen.value += key;
        } else if (key === '*' || key === '/') {
            // Convert multiplication and division symbols
            displayScreen.value += (key === '*') ? '×' : '÷';
        }

        // Prevent default behavior of the key event
        event.preventDefault();

        var calendarBtn = document.getElementById('calendarBtn');
        calendarBtn.addEventListener('click', function () {
            // Redirect the user to the calendar app page
            window.location.href = 'calendar.html'; // Replace with the actual URL of your calendar app
        });
    });


    var btn = document.querySelectorAll('.btn');

    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext === '.' && displayScreen.value.includes('.')) {
                // Do nothing if decimal point is already present
                return;
            }

            // Convert multiplication and division symbols for evaluation
            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }

            // Append the valid input to the display
            displayScreen.value += btntext;
        });
    }
});

function sin() {
    displayScreen.value = Math.sin(displayScreen.value);
}

function cos() {
    displayScreen.value = Math.cos(displayScreen.value);
}

function tan() {
    displayScreen.value = Math.tan(displayScreen.value);
}

function pow() {
    displayScreen.value = Math.pow(displayScreen.value, 2);
}

function sqrt() {
    displayScreen.value = Math.sqrt(displayScreen.value, 2);
}

function log() {
    displayScreen.value = Math.log(displayScreen.value);
}

function pi() {
    displayScreen.value = 3.14159265359;
}

function e() {
    displayScreen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1;
    num = displayScreen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    displayScreen.value = f;
}

function clearDisplay() {
    displayScreen.value = '';
}

function backSpc() {
    displayScreen.value = displayScreen.value.substr(0, displayScreen.value.length - 1);
}

function evalEquals() {
    displayScreen.value = eval(displayScreen.value);
}