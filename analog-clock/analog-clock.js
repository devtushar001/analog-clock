let hr = document.getElementById('h'),
    mn = document.getElementById('m'),
    sc = document.getElementById('s');

    function displayTime() {
      let date = new Date();

      let hh = date.getHours() * 30,
          mm = date.getMinutes() * 6,
          ss = date.getSeconds() * 6;

          h.style.transform = `rotate(${ hh + mm / 12 }deg)`;
          m.style.transform = `rotate(${ mm }deg)`;
          s.style.transform = `rotate(${ ss }deg)`;
    }

    setInterval(displayTime, 1000);