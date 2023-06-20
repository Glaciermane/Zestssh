const Client = require('ssh2').Client;

const host = process.env.HOST;
const port = process.env.PORT;
const username = process.env.USERNAME;
const SSHKEY = process.env.SSHKEY;

// Restlicher Code zur Verbindungsherstellung und Befehlsausführung

const sshClient = new Client();
sshClient.on('ready', () => {
  console.log('SSH client connected');
  
  // Befehl ausführen
  sshClient.exec('ls', (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
      console.log('Stream closed');
      sshClient.end();
    }).on('data', (data) => {
      console.log('Received:', data.toString());
      // Hier kannst du die Ausgabe an das Terminal in der Webseite senden
    }).stderr.on('data', (data) => {
      console.log('STDERR:', data.toString());
      // Hier kannst du Fehlermeldungen an das Terminal in der Webseite senden
    });
  });
});

sshClient.connect({
  host: host,
  port: port,
  username: username,
  privateKey: SSHKEY
});
