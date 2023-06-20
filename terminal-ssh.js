// SSH-Terminal initialisieren
const terminalContainer = document.getElementById('terminal-container');
const term = new Terminal();
term.open(terminalContainer);

// Verbindung zum SSH-Server herstellen
const connectSSH = () => {
  const host = process.env.HOST;
  const port = process.env.PORT;
  const username = process.env.USERNAME;
  const privateKey = process.env.SSHKEY;

  const conn = new Client();
  conn.on('ready', () => {
    term.write('SSH connection successful.\r\n');
    conn.shell((err, stream) => {
      if (err) {
        term.write('Error executing shell command: ' + err.message + '\r\n');
        conn.end();
        return;
      }
      term.attach(stream);
      stream.on('close', () => {
        term.write('\r\nSSH connection closed.\r\n');
        conn.end();
      });
    });
  });

  conn.on('error', (err) => {
    term.write('Error connecting to SSH server: ' + err.message + '\r\n');
  });

  conn.connect({
    host: host,
    port: port,
    username: username,
    privateKey: privateKey
  });
};

connectSSH();
