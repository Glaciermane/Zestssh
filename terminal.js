// JavaScript code for the SSH Terminal
const terminalContainer = document.getElementById('terminal-container');
const term = new Terminal();
term.setOption('theme', {
  background: '#0a0a0a',
  foreground: '#ffffff',
  black: '#0a0a0a',
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

function sendCommand() {
  const commandInput = document.getElementById('command-input');
  const command = commandInput.value;

  term.writeln('$ ' + command);
  // Add your SSH connection code and command processing here

  commandInput.value = '';
}

term.focus();
