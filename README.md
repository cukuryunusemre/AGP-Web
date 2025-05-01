# Ataşehir Youth Parliament Website

This is a multilingual, responsive static website built for the Ataşehir Youth Parliament. The site aims to promote youth participation, showcase events, and raise awareness about the United Nations Sustainable Development Goals (SDGs).

## 🔧 Features

- ✅ Static frontend built with HTML, CSS, and Bootstrap 5
- ✅ Multilingual support: Turkish (TR), English (EN), German (DE)
- ✅ Responsive design for desktop and mobile
- ✅ Interactive event listings and photo gallery
- ✅ Dynamic content localization with JSON
- ✅ Embedded Google Maps for contact page

## 📂 File Structure

```
├── index.html             # Home page
├── about.html             # About Us
├── contact.html           # Contact page
├── events.html            # Events listing
├── sdg.html               # SDG goals overview
├── assets/
│   ├── style.css          # Main stylesheet
│   ├── lang/
│   │   ├── lang.js        # Language switching logic
│   │   ├── tr.json        # Turkish translations
│   │   ├── en.json        # English translations
│   │   └── deu.json       # German translations
│   ├── sdg/               # SDG goal images
│   ├── about/             # Gallery images for About page
│   └── contact/           # Contact page image
```

## 🌐 Language Support

Users can change the site language via the 🌐 "Select Language" dropdown in the navbar. The selected language is saved in `localStorage` and reloaded on refresh.

## 📈 Getting Started

To run the website locally:

1. Clone the repository or download the files:
   ```bash
   git clone https://github.com/your-username/project-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd project-name
   ```

3. Start a local web server (e.g., Python):
   ```bash
   python -m http.server
   ```

4. Open `http://localhost:8000` in your browser.

## 🚀 Contributing

Feel free to fork the project and submit a pull request. You can also create an issue to suggest improvements, report bugs, or propose additional language support.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

