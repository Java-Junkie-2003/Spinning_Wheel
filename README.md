# 🎡 Spinning Wheel - Lucky Wheel Game

A beautiful lucky wheel application built with React + Vite featuring stunning UI and smooth animations. Players can spin the wheel to win prizes such as discounts, vouchers, or free shipping.

## ✨ Features

- 🎯 Spinning wheel with 6 different prizes
- 🎨 Modern UI with Tailwind CSS
- 🌀 Smooth spinning animations
- 🎁 Result modal display after spinning
- 📱 Responsive design, compatible with all devices
- ⚡ Optimized performance with Vite

## 🛠️ Tech Stack

- **React 19.2.0** - UI Library
- **Vite 7.2.4** - Build tool & Dev server
- **Tailwind CSS 4.1.18** - CSS Framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📦 Installation

### System Requirements

- Node.js version 16.x or higher
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spinning-wheel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the application in development mode**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will run at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview the build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📁 Project Structure

```
spinning-wheel/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── ResultModal.jsx   # Result display modal
│   │   ├── SpinWheel.jsx     # Main spinning wheel component
│   │   └── Wheel.jsx         # Wheel render component
│   ├── data/
│   │   └── prizes.js   # Prize data
│   ├── App.jsx         # Main component
│   ├── App.css         # App styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── README.md           # Documentation
```

## 🎮 How to Use

1. Click on the "Lucky Wheel" button on the homepage
2. Click on the "SPIN NOW" button to spin the wheel
3. Wait for the wheel to stop and see the result
4. A modal will display your prize
5. You can spin again or close the modal

## 🔧 Customization

### Change Prizes

Edit the `src/data/prizes.js` file:

```javascript
export const prizes = [
  { label: "Your Prize", value: "value" },
  // Add more prizes...
];
```
