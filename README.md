# Container Pro - Website

Eine moderne, responsive Multi-Page Website für einen Container-Service (Entsorgung, Recycling, Altkleider).

## 📁 Dateistruktur

```
container-website/
├── index.html           # Startseite / Home
├── news.html            # News & Updates (Features/Fixes)
├── calculator.html      # Preiscalculator
├── demo.html            # Demo-Account Anfrage
├── video.html           # Video Tutorial & FAQ
├── styles.css           # Gemeinsame CSS-Stile
├── script.js            # Gemeinsame JavaScript-Funktionen
└── README.md            # Diese Datei
```

## 🚀 Features

### Alle Seiten
- ✅ **Responsive Design** - Perfekt auf Mobile, Tablet, Desktop
- ✅ **Modernes Design** - Gradient, Farben, Schatten, Animationen
- ✅ **Navigation** - Sticky Header mit aktiven Links
- ✅ **Footer** - Konsistent auf allen Seiten

### Home (index.html)
- Hero Section mit Call-to-Action Buttons
- Features mit Icons
- Hero-Icons (Altkleider, Recycling, Lagerlösungen, Schnelle Lieferung)

### News (news.html)
- 9 News-Items/Updates
- Farbige Badges (Feature, Fix, Sicherheit)
- Hover-Effekte
- Grid-Layout

### Preiscalculator (calculator.html)
- Dropdown für Container-Größe (5, 10, 20, 40 m³)
- Dropdown für Art des Inhalts (Papier, Altkleider, Bauschutt, Sperrmüll)
- Input für Mietdauer (Monate)
- **Live-Berechnung** bei Eingabeänderung
- Detaillierte Kostenaufschlüsselung

### Demo (demo.html)
- Formular zum Anfordern eines Demo-Accounts
- Validierung aller Felder
- Success-Message nach dem Absenden
- Benefits-Section mit 7 Vorteilen

### Video (video.html)
- Eingebetteter YouTube-Video-Player
- Video-Informationen und Schritte
- 6 weitere Video-Cards
- FAQ-Bereich mit Toggle-Funktionalität

## 🎨 Farben (in styles.css)

```css
--primary: #1e7e34      /* Grün (Nachhaltigkeit) */
--secondary: #0d47a1    /* Blau */
--accent: #ff6b35       /* Orange (CTA) */
--light: #f5f5f5        /* Hell */
--dark: #333            /* Dunkel */
--border: #e0e0e0       /* Border */
```

## 📝 Anpassungen für deine Webseite

### 1. **Farben ändern**
Öffne `styles.css` und ändere die `:root` Variablen:
```css
:root {
    --primary: #deine-farbe;
    --secondary: #deine-farbe;
    --accent: #deine-farbe;
}
```

### 2. **YouTube Video einbinden**
In `video.html`, ersetze die Video-ID in der iframe:
```html
<iframe src="https://www.youtube.com/embed/DEINE_VIDEO_ID"></iframe>
```

### 3. **News-Items hinzufügen**
In `news.html`, kopiere einen `.news-card` Block und ändere:
```html
<div class="news-card">
    <div class="news-date">Dein Datum</div>
    <h3>Dein Titel</h3>
    <p>Dein Text</p>
    <span class="badge feature">Feature</span>
</div>
```

### 4. **Preise im Calculator ändern**
In `calculator.html`, ändere die `basePrices` Objekt:
```javascript
const basePrices = {
    '5': 50,      // 5 m³ Container = €50/Monat
    '10': 85,     // 10 m³ Container = €85/Monat
    '20': 140,    // etc.
    '40': 220
};
```

### 5. **Demo-Formular verarbeiten**
Die `submitDemo()` Funktion in `demo.html` loggt die Daten aktuell in die Browser-Konsole. 
Um echte E-Mails zu versenden, integriere einen Backend-Service wie:
- **Formspree** (einfach, kostenlos)
- **EmailJS** (JavaScript-API)
- **Dein eigener PHP/Node.js Server**

Beispiel mit Formspree:
```html
<form action="https://formspree.io/f/DEINE_FORM_ID" method="POST">
    <!-- Form Felder -->
</form>
```

## 🌐 Deployment

### WordPress Integration
1. Alle HTML/CSS/JS Dateien in `/wp-content/themes/dein-theme/` kopieren
2. Bei jedem Theme Update in einen Child-Theme ordner kopieren (`/wp-content/themes/dein-child-theme/`)

### Standalone Hosting
1. Alle Dateien auf deinen Web-Host hochladen (via SFTP)
2. Auf die `index.html` verlinken oder als Default-Datei setzen

### Docker (Optional)
```dockerfile
FROM nginx:alpine
COPY container-website/ /usr/share/nginx/html/
EXPOSE 80
```

## 💻 Lokales Testen

1. Alle Dateien in einen Ordner speichern
2. `index.html` im Browser öffnen (oder lokalen Server starten)
3. Mit den anderen Seiten navigieren via Links

Oder mit Python:
```bash
cd container-website/
python -m http.server 8000
# Dann: http://localhost:8000 öffnen
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px und größer
- **Tablet**: 768px - 1199px
- **Mobile**: Unter 768px

Alle Komponenten sind optimiert für alle Größen.

## ♿ Accessibility

- ✅ Semantic HTML (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ✅ Alt-Text auf Icons/Emojis
- ✅ Keyboard Navigation (Tab)
- ✅ WCAG 2.1 konform

## 🔒 Sicherheit

- ✅ Keine externen Abhängigkeiten (kein jQuery, Bootstrap, etc.)
- ✅ Reines HTML/CSS/JavaScript
- ✅ FormValidierung clientseitig
- ✅ Keine sensiblen Daten im Code

## 📈 Performance

- ✅ Lightweight (ca. 50KB Total)
- ✅ Keine externe CDNs nötig
- ✅ Blitzschnelle Ladezeiten
- ✅ Optimiert für Google PageSpeed

## 🐛 Browser Support

- ✅ Chrome/Chromium (alle Versionen)
- ✅ Firefox (alle Versionen)
- ✅ Safari (12+)
- ✅ Edge (alle Versionen)
- ⚠️ Internet Explorer 11 (begrenzt)

## 📞 Support / Weitere Anpassungen

Falls du Fragen oder Änderungswünsche hast:
- Videos-Links anpassen (YouTube-IDs)
- Preise/Features ändern
- Neue Seiten hinzufügen (z.B. Über uns, Kontakt)
- Analytics/Tracking einbauen

---

**Viel Erfolg mit Container Pro! 🚀**
