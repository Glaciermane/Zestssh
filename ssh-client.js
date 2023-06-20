// Beispielcode für die Verbindungsherstellung und Befehlsausführung mit der ssh2-Bibliothek
const Client = require('ssh2').Client;

const host = process.env.HOST;
const port = process.env.PORT;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

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
  host: 'your-host',
  port: 22,
  username: 'your-username',
  password: 'your-password'
});
