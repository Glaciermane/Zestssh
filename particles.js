document.addEventListener("DOMContentLoaded", function() {
  // Terminal initialisieren
  const terminalContainer = document.getElementById('terminal-container');
  const term = new Terminal();
  term.setOption('theme', {
    background: '#1f1f1f',
    foreground: '#ffffff',
    black: '#1f1f1f',
    red: '#ff4578',
    green: '#6be839',
    yellow: '#fdd835',
    blue: '#009dff',
    magenta: '#e040fb',
    cyan: '#00e1ff',
    white: '#ffffff',
    brightBlack: '#5f5f5f',
    brightRed: '#ff4578',
    brightGreen: '#6be839',
    brightYellow: '#fdd835',
    brightBlue: '#009dff',
    brightMagenta: '#e040fb',
    brightCyan: '#00e1ff',
    brightWhite: '#ffffff'
  });

  term.open(terminalContainer);

  // Partikel initialisieren
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "path/to/your/image.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
                  },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

  // Formular für die Benutzereingabe abfangen
  const form = document.getElementById('input-form');
  const inputField = document.getElementById('input-field');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const command = inputField.value.trim();
    if (command !== '') {
      term.writeln('$ ' + command);
      term.writeln('User input: ' + command);

      // Zurücksetzen des Eingabefelds
      inputField.value = '';
    }

    // Partikelanimation auslösen
    particlesJS('particles-js', {
      particles: {
        move: {
          speed: 20, // Anpassen der Geschwindigkeit der Partikelbewegung
          direction: 'top', // Partikelbewegungsrichtung von unten nach oben
          out_mode: 'destroy' // Partikel aus dem Canvas entfernen, wenn sie den Bildschirm verlassen
        }
      }
    });
  });
});

