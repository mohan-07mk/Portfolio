# MohanKumar M — ECE Portfolio Website

A complete, production-ready Electronics & Embedded Systems portfolio website with a full Admin CMS dashboard. No backend server required — runs entirely in the browser using LocalStorage.

---

## 📁 File Structure

```
mohankumar-portfolio/
├── index.html        ← Main portfolio (all pages in one SPA)
├── projects.html     ← Standalone projects showcase page
└── README.md         ← This file
```

---

## 🚀 How to Run

### Option 1 — Open directly in browser
Double-click `index.html`. Works offline, no server needed.

### Option 2 — Local dev server (recommended)
```bash
# Python
python3 -m http.server 3000
# Then open: http://localhost:3000

# Node.js
npx serve .
# Then open: http://localhost:3000
```

---

## 🗂 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero with Three.js animation, stats counter, social links |
| **About** | Bio, education timeline, skills bars, leadership |
| **Certificates** | Filterable gallery with modal viewer |
| **Achievements** | Cards with type badges and filters |
| **Projects** | Full project showcase (projects.html) |
| **Contact** | Form, map embed, social links |
| **Admin** | Secure CMS dashboard |

---

## 🔐 Admin Portal

**URL:** Click "Admin" in the navigation bar  
**Default Login:**
- Username: `admin`
- Password: `mk2024`

### Admin Features
- ✅ Dashboard overview (stats, activity log, quick actions)
- ✅ Edit hero name, designation, intro, badge text
- ✅ Upload profile photo (live preview)
- ✅ Upload resume PDF
- ✅ Add/Edit/Delete certificates
- ✅ Add/Edit/Delete achievements
- ✅ Manage education timeline entries
- ✅ Add skills with proficiency %
- ✅ Edit contact information
- ✅ View & delete received messages
- ✅ Media manager with drag-and-drop uploads
- ✅ Export all data as JSON
- ✅ Backup & restore data

---

## 🎨 Features

| Feature | Status |
|---------|--------|
| Dark/Light mode toggle | ✅ |
| Three.js 3D hero animation | ✅ |
| Smooth scroll reveal animations | ✅ |
| Animated stat counters | ✅ |
| Skill progress bars | ✅ |
| Certificate modal viewer | ✅ |
| Achievement category filters | ✅ |
| Contact form with validation | ✅ |
| LocalStorage persistence | ✅ |
| Mobile responsive | ✅ |
| Visitor counter | ✅ |
| Page transitions | ✅ |
| Loading screen | ✅ |
| Toast notifications | ✅ |
| Admin sidebar toggle | ✅ |

---

## 🔧 Customization Guide

### 1. Change Personal Info
Open `index.html` and search for the following IDs to update directly in HTML, **or use the Admin panel**:
- `hero-name-text` — Your name
- `hero-designation-text` — Your designation
- `hero-intro-text` — Introduction paragraph
- `about-bio-text` — Full biography

### 2. Add Your Photo
**Via Admin Panel:**
1. Login → Home Page → Upload Profile Photo
2. Select your JPG/PNG file — preview updates instantly

**Via HTML:**
Replace the `hero-avatar-placeholder` div with:
```html
<img src="your-photo.jpg" class="hero-avatar" alt="MohanKumar M">
```

### 3. Update Resume
**Via Admin Panel:** Home Page → Upload Resume PDF  
**Via HTML:** Update the `downloadResume()` function:
```javascript
function downloadResume() {
  const a = document.createElement('a');
  a.href = 'MohanKumar_Resume.pdf';
  a.download = 'MohanKumar_M_Resume.pdf';
  a.click();
}
```

### 4. Update Social Links
Find `.social-link` elements in `index.html` and update `href` attributes with your actual URLs.

### 5. Add Certificates/Achievements
Use the **Admin Panel** or edit the `defaultCerts()` and `defaultAchs()` functions in the `<script>` section.

### 6. Add Google Maps
Replace the iframe src in the Contact section:
```html
<iframe src="https://maps.google.com/maps?q=YOUR+CITY+NAME&output=embed&z=12"></iframe>
```

---

## 🌐 Deployment

### GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
# Enable GitHub Pages in repo Settings → Pages → Source: main branch
```

### Netlify (Free, Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `mohankumar-portfolio/` folder
3. Your site is live in seconds!

### Vercel
```bash
npx vercel
```

---

## 🔮 Future Upgrades (Backend Integration)

To add a real database (Firebase/Supabase):

```javascript
// Replace localStorage calls with:
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save certificate
await addDoc(collection(db, 'certificates'), certData);

// Load certificates
const snapshot = await getDocs(collection(db, 'certificates'));
state.certs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
```

---

## 📱 Tech Stack

| Technology | Usage |
|-----------|-------|
| **Three.js r128** | 3D particle & geometry hero animation |
| **Vanilla JS** | SPA routing, state management, admin CMS |
| **CSS Custom Properties** | Theming (dark/light mode) |
| **LocalStorage API** | Data persistence without backend |
| **Google Fonts** | Orbitron + Space Grotesk + JetBrains Mono |
| **CSS Animations** | Scroll reveal, counters, transitions |

---

## 📞 Support

Portfolio built for **MohanKumar M** — ECE Student, Technical Coordinator, IEEE Circuit Systems Joint Secretary.

For customization help, reach out via the contact form on the website.
