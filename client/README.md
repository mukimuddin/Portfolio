# M Kings Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Modern and clean design with dark theme
- Smooth scrolling navigation
- Responsive layout for all devices
- Animated sections using Framer Motion
- Interactive project cards
- Contact form with EmailJS integration
- Social media links
- Cursor tracking effect on home section

## Technologies Used

- React 18
- Vite
- Tailwind CSS 3.4+
- Framer Motion
- React Icons
- React Scroll
- EmailJS

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio/client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

1. Update personal information in the respective section components
2. Modify the color scheme in `tailwind.config.js`
3. Add your own projects in the Projects section
4. Update social media links in the Contact section
5. Replace the profile picture in the About section

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting platform (Vercel, Netlify, etc.)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Mukim Uddin - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
