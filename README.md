# DIVD.Course Casus
Dit project betreft de ontwikkeling van een online leeromgeving waarin mensen trainingen kunnen volgen over digitale veiligheid. Het doel is om gebruikers op een toegankelijke manier bewust te maken van digitale risico’s en hen te helpen hun kennis op dit gebied te vergroten.
De website is zo opgebouwd dat deze overzichtelijk is en in de toekomst gemakkelijk uitgebreid kan worden. Er is aandacht besteed aan gebruiksvriendelijkheid, zodat ook mensen zonder technische achtergrond de trainingen eenvoudig kunnen volgen.
Dit project vormt een onderdeel van een grotere webapplicatie en is bedoeld om door andere stagiairs of ontwikkelaars verder te worden uitgewerkt.

## 🛠️ Functionaliteiten
- Gebruikers kunnen zich registreren via een formulier
- Inloggen met bestaande accountgegevens
- API-koppelingen met backend voor authenticatie
- Foutafhandeling met duidelijke meldingen
- Voorbereid op toekomstige uitbreiding en onderhoud

## 🧪 Uitgevoerde tests
Voor de belangrijkste functionaliteiten zijn de volgende tests uitgevoerd:
- Functionele tests voor inlog- en registreerpagina’s
- API-tests (request-response gedrag)
- Debugging uitgevoerd bij fouten

Zie `tests/` of de testbijlage voor testdetails.

## 🧰 Gebruikte technologieën
- C# (.NET)
- ASP.NET Core
- HTML/CSS
- JavaScript
- Axios (voor API-calls)
- SQL Server (database)

## 🖥️ Structuur van het project
```bash
DIVD.Course/
├── Controllers/           # Backend controllers
├── Models/                # Gebruikersmodellen en entiteiten
├── Views/                 # Frontend pagina’s (Inloggen, Registreren, Home, Contact, About us)
├── wwwroot/               # Statics (css, js)
├── Program.cs             # Startpunt van de applicatie
├── appsettings.json       # Configuratiebestanden
├── README.md              # (Deze file)