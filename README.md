# Robot Framework Meetup Köln Website

This website is created for the Robot Framework Meetup in Köln on August 28, 2025, hosted by imbus Rheinland GmbH.

## About the Event

The Robot Framework Meetup is a free community event featuring:
- Parallel workshops (Robot Framework Bootcamp, Library Development, Advanced Features)
- Networking opportunities
- BBQ on the rooftop terrace
- Latest Robot Framework news and updates

## Website Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional Styling**: Uses imbus brand colors and modern design principles
- **Interactive Elements**: Countdown timer to the event date
- **Contact Form**: Client-side form that opens email client for registration
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized CSS and JavaScript

## Technology Stack

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Lightweight interactions and form handling
- **Google Fonts**: Inter font family for professional typography

## Deployment

This website is designed to be deployed on GitHub Pages:

1. Push the repository to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" 
4. Choose "main" branch and "/ (root)" folder
5. The website will be available at `https://username.github.io/repository-name`

## Local Development

To run the website locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. For development with live reload, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using VS Code Live Server extension
   Right-click index.html > "Open with Live Server"
   ```

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles with imbus branding
├── script.js           # JavaScript for interactions
├── README.md           # This file
└── .github/
    └── copilot-instructions.md
```

## Customization

### Colors
The website uses imbus brand colors defined in CSS custom properties:
- Primary Blue: `#1e3a8a`
- Secondary Blue: `#3b82f6`
- Accent Blue: `#60a5fa`

### Content Updates
To update event information:
1. Edit the HTML content in `index.html`
2. Update the event date in `script.js` (line 3)
3. Modify program schedule in the HTML

### Styling
All styles are contained in `styles.css` with:
- CSS Grid for layout
- Flexbox for component alignment  
- Custom properties for consistent theming
- Mobile-first responsive design

## Contact

For questions about the event, contact: RL_Vertrieb@imbus.de

## License

This website is created for imbus AG and uses their branding with permission.
