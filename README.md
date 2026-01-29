# Premium Domain Sales Website

A clean, professional website to showcase your domain names for sale.

## Features

- Responsive design that works on all devices
- Search functionality to filter domains
- Contact form (no email displayed publicly)
- Easy to customize and add domains

## Setup Instructions

### 1. Adding Your Domains

Edit `script.js` and add your domains to the `domains` array:

```javascript
const domains = [
    {
        name: "firstnameais.com",
        description: "Perfect for an AI-powered name generation service",
        tags: ["AI", "Names", "Tech"],
        status: "Available"
    },
    {
        name: "yourdomain.com",
        description: "Description of your domain",
        tags: ["Category1", "Category2"],
        status: "Available"
    },
    // Add more domains here...
];
```

### 2. Setting Up the Contact Form

The contact form requires a backend service to send emails without exposing your email address. Choose one of these free options:

#### Option A: Formspree (Recommended)

1. Go to https://formspree.io and create a free account
2. Create a new form and get your form ID
3. In `script.js`, uncomment and update the Formspree section (around line 50):

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});

if (!response.ok) throw new Error('Form submission failed');
```

4. Remove the simulated success code:
```javascript
// Delete this line:
await new Promise(resolve => setTimeout(resolve, 1000));
```

#### Option B: Web3Forms

1. Go to https://web3forms.com and get a free access key
2. Update the form submission in `script.js`:

```javascript
const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY',
        ...formData
    })
});

if (!response.ok) throw new Error('Form submission failed');
```

### 3. Customization

#### Update Your Email in Footer (Optional)
Edit `index.html` to add any additional information to the footer.

#### Change Colors
Edit `styles.css` to customize the color scheme. Colors are defined at the top:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... */
}
```

## Deployment

### Quick Deployment Options:

1. **Netlify** (Recommended)
   - Drag and drop the folder to https://app.netlify.com/drop
   - Free custom domain support

2. **GitHub Pages**
   - Create a GitHub repository
   - Push your code
   - Enable GitHub Pages in repository settings

3. **Vercel**
   - Import your project at https://vercel.com
   - Automatic deployments

## Files Structure

```
/a/ai first names/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

Works on all modern browsers including Chrome, Firefox, Safari, and Edge.
