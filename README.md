## Heise Bewerbungsaufgaben
Hier finden Sie einen zwei Production-builds der Lösung der Bewerbungsaufgaben:
- .next: für Web-Server auf denen Node.js installiert ist
- out: für Web-Server ohne Node.js

1. Öffnen sie eine directory im terminal (bzw Editor) und fügen Sie folgenden command ein:

git clone https://github.com/fvjupiter/heise-bewerbungsaufgaben-production-build.git

2. Wechseln Sie in den geklonten Ordner:

cd heise-bewerbungsaufgaben-production-build

3. Starten Sie den Server

npm start

- (Server aus out-ordner kann über das index.html file in 'out' gestartet werden)

## oder besuchen Sie folgenden Link für eine Demo:

https://heise-bewerbungsaufgaben.vercel.app

## Bug
- Das Neuladen der App funktioniert nur unter dem pathname '/heise-bewerbungsaufgaben-production-build/out/index.html' wenn 'out' verwendet wurde

Bis jetzt kenne ich mich leider noch nicht damit aus, wie ich einen ordentlichen Production-Build für einen Web-Server ohne Node.js aus einer Next.js-App erstellen bzw. die App richtig designen kann, um das Problem zu beheben...
