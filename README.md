# Component Studio — React Reusable Components Practice

> **College Assignment:** React Components Practice — Reusable Components with Props and State  
> **Student Name:** Shivam Mishra  
> **Technology Stack:** React 18, Vite, JavaScript (ES6+), CSS3 (Modern Flexbox & Grid), Lucide React  
> **Repository Base:** Production-ready SaaS Component Lab  

---

## 🌟 Project Overview

**Component Studio** is a developer dashboard and component showcase designed to fulfill the requirements of the college practical: **“React Components Practice — Reusable Components with Props and State.”**

Rather than a simplistic demo, this project is engineered as a developer tool featuring:
- **5 Custom Reusable Components**: `Header`, `Footer`, `Card`, `Button`, and `ContactForm`.
- **Dynamic Props Demonstration**: Passing differing strings, variants, arrays, and functions to the same component instances.
- **Dynamic Array Mapping (`.map()`)**: Rendering a collection of data-driven cards from a JavaScript array with unique keys.
- **State Management (`useState`)**: Light/Dark theme switching, button click counter, interactive component showcase search & category filters, controlled form inputs, and dynamic submission feedback.
- **Interactive "Props in Action" Playground**: A live sandbox where evaluators can customize prop values in real time and immediately view the re-rendered component and generated JSX.
- **Zero Dead Controls**: Every button, link, search box, and theme toggle performs its intended function.

---

## 📁 Project Structure

```
assignment2/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── node_modules/             # Installed dependencies
├── public/                   # Static public assets
├── src/
│   ├── components/
│   │   ├── Button.jsx        # Reusable Button (6 variants, 3 sizes, disabled states)
│   │   ├── Card.jsx          # Reusable Card (title, badge, stats, icon, action slot)
│   │   ├── ContactForm.jsx   # Controlled Form (validation, regex, live state preview)
│   │   ├── Footer.jsx        # Reusable Footer (full, compact, and minimal layouts)
│   │   └── Header.jsx        # Reusable Header (branding, navigation, theme toggle)
│   ├── App.jsx               # Main Dashboard, state orchestration & showcase
│   ├── index.css             # Unified CSS design system (Dark & Light theme variables)
│   └── main.jsx              # React DOM entry point
├── .gitignore                # Git exclusions
├── index.html                # HTML5 semantic entry point with Google Fonts
├── package.json              # Project scripts & dependencies
├── README.md                 # Complete documentation & viva handbook
└── vite.config.js            # Vite bundler configuration (relative base for deployment)
```

---

## 🧩 The 5 Core Reusable Components

### 1. `Header.jsx`
- **Purpose:** Reusable top navigation header with branding and navigation controls.
- **Props Accepted:**
  - `brandName` *(string)*: Text displayed beside the logo.
  - `brandTag` *(string)*: Small badge subtitle under the brand name.
  - `navLinks` *(array)*: Array of navigation objects `{ id, label, href, icon }`.
  - `activeSection` *(string)*: Currently active section ID for visual highlight.
  - `onNavigate` *(function)*: Callback triggered when a navigation link is clicked.
  - `theme` *('light' | 'dark')*: Active theme mode.
  - `onToggleTheme` *(function)*: Callback for toggling light/dark theme.
  - `actions` *(ReactNode)*: Custom button slot in header right.
- **Showcase Feature:** Includes an interactive preset switcher allowing switching between "Component Studio", "PulseStore E-Commerce", and "Enterprise Admin" presets to prove dynamic prop behavior.

### 2. `Footer.jsx`
- **Purpose:** Reusable footer component for page endings and assignment attributions.
- **Props Accepted:**
  - `brandName` *(string)*: Footer brand identifier.
  - `year` *(number)*: Copyright year.
  - `tagline` *(string)*: Descriptive summary.
  - `assignmentTitle` *(string)*: Course assignment title.
  - `studentName` *(string)*: Author name (**Shivam Mishra**).
  - `links` *(array)*: Navigation link objects.
  - `socialLinks` *(array)*: Social media profile objects with icons.
  - `variant` *('full' | 'compact' | 'minimal')*: Structural layout selector.
- **Showcase Feature:** Toggle between three distinct layouts (*Compact Clean*, *Minimalist Single-Line*, and *Full Multi-Column SaaS*) using the exact same component code.

### 3. `Card.jsx`
- **Purpose:** Multi-purpose container for features, metrics, modules, and products.
- **Props Accepted:**
  - `title` *(string)*: Main card headline.
  - `description` *(string)*: Explanatory card body text.
  - `category` *(string)*: Small uppercase categorization tag.
  - `badge` *(string)*: Pill badge status (e.g., "Active", "Verified").
  - `badgeVariant` *('violet' | 'emerald' | 'cyan' | 'amber' | 'rose' | 'indigo')*: Badge accent color.
  - `icon` *(ReactNode)*: Visual Lucide icon.
  - `stats` *(array)*: Key-value metadata chips `[{ label, value }]`.
  - `footer` *(ReactNode)*: Slot for interactive action buttons.
- **Showcase Feature:** Multiple cards mapped dynamically from a JavaScript array (`projectCardsData.map(...)`) showing how one component renders varying content.

### 4. `Button.jsx`
- **Purpose:** Accessible, multipurpose interactive button.
- **Props Accepted:**
  - `variant` *('primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'violet')*: Visual theme.
  - `size` *('sm' | 'md' | 'lg')*: Button scale and padding.
  - `disabled` *(boolean)*: Toggles disabled state and disables click execution.
  - `onClick` *(function)*: Event callback for user clicks.
  - `icon` *(ReactNode)*: Optional leading icon.
  - `iconRight` *(ReactNode)*: Optional trailing icon.
  - `fullWidth` *(boolean)*: Stretches button to 100% parent width.
  - `children` *(ReactNode)*: Label text or elements.
- **Showcase Feature:** Interactive React state click counter demonstrating state updates (`Increment`, `Decrement`, and `Reset`).

### 5. `ContactForm.jsx`
- **Purpose:** Controlled form for user messages and inquiries.
- **Props Accepted:**
  - `formTitle` *(string)*: Form heading.
  - `formSubtitle` *(string)*: Instruction text.
  - `onSubmitSuccess` *(function)*: Callback executed with form data payload upon validation.
  - `showPreviewPanel` *(boolean)*: Enables the live submitted data inspector.
- **Showcase Feature:**
  - Controlled inputs linked to `useState`.
  - Validation: checks for empty fields and validates email format with regex.
  - Real-time error feedback beneath invalid inputs.
  - Reset button that restores form state to pristine.
  - Live "Submitted Information Preview" card and JSON state inspector upon valid submission.
  - Academic disclaimer indicating submissions are simulated client-side.

---

## ⚡ Props vs. State in this Project

| Feature | Props | State |
| :--- | :--- | :--- |
| **Definition** | External data passed into a component from its parent. | Internal, private data held and modified by the component. |
| **Mutability** | **Read-Only (Immutable)** inside the child component. | **Mutable** via the updater function (e.g., `setCount`). |
| **Where used here** | Button variants, Card text/badges, Header titles, Footer layouts. | Theme toggle (`theme`), Click counter (`clickCount`), Filter (`searchQuery`), Form fields (`formData`). |
| **Direction** | Top-down (Parent → Child). | Managed locally where declared or lifted to nearest common ancestor. |

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18.0.0 or later installed)
- **npm** (comes packaged with Node.js)

### 2. Installation
Open your terminal in the project directory (`c:\assignment2`) and install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser to the local URL displayed in the terminal (typically `http://localhost:3000` or `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```
Vite compiles the production-ready assets into the `dist/` directory.

---

## 🌐 Public Deployment Guide

The project is configured with `base: './'` in `vite.config.js`, enabling clean deployment to any static host.

### Option A: GitHub Pages (Automatic via GitHub Actions)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of React Reusable Components Lab"
   ```
2. Create a new repository on GitHub and link it:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - The included workflow file (`.github/workflows/deploy.yml`) will automatically trigger, build the project, and publish it to `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

### Option B: Netlify (Drag and Drop or Git Import)
1. Build the production folder:
   ```bash
   npm run build
   ```
2. Log in to [netlify.com](https://www.netlify.com).
3. Drag and drop the `dist/` folder onto the Netlify dashboard.
4. Netlify will provide an instant, working public URL (e.g. `https://component-studio-shivam.netlify.app`).

---

## 🎓 Viva / Oral Examination Preparation

### 1. What are reusable components in React?
> **Answer:** Reusable components are modular, independent pieces of UI code that can be used repeatedly across different parts of an application. Instead of duplicating HTML and CSS, we create a single component (such as `Button` or `Card`) and supply different data via props.

### 2. What is the fundamental difference between Props and State?
> **Answer:** **Props** (short for properties) are passed from parent to child components and are immutable (read-only) within the child. **State** represents internal, reactive data managed inside a component using hooks like `useState`. When state changes, React re-renders the component to update the UI.

### 3. Why are props immutable?
> **Answer:** React follows a **one-way data flow** architecture. Keeping props immutable ensures predictable component behavior and prevents child components from unexpectedly modifying data owned by parent components.

### 4. What is a "controlled component" in React forms?
> **Answer:** A controlled component is an input element whose value is controlled by React state rather than the browser DOM. We bind the input’s `value` attribute to a state variable and update it through an `onChange` event handler.

### 5. Why do we need the `key` prop when rendering lists using `.map()`?
> **Answer:** React uses the `key` prop to identify which items in a list have been changed, added, or removed. It helps React’s virtual DOM reconciliation algorithm efficiently update only the changed elements rather than re-rendering the entire list.

### 6. What does `useState` return?
> **Answer:** `useState` returns an array with two elements:
> 1. The **current state value**.
> 2. An **updater function** to change the state value and trigger a re-render.
> Example: `const [count, setCount] = useState(0);`

### 7. How does the Light/Dark theme toggle work in this project?
> **Answer:** The theme is stored in React state (`const [theme, setTheme] = useState('dark')`). An effect hook sets the `data-theme` attribute on `document.documentElement`. CSS variables define colors for `[data-theme='dark']` and `[data-theme='light']`, allowing the styling to change seamlessly.

### 8. What is the purpose of the `children` prop in `Button.jsx`?
> **Answer:** The `children` prop is a special React prop that passes whatever elements or text are placed between the opening and closing tags of the component (`<Button>Click Me</Button>`). It makes the component flexible and composable.

### 9. What is conditional rendering? Give an example from your project.
> **Answer:** Conditional rendering means rendering different UI elements based on specific conditions. In `Card.jsx`, badges, icons, and footers are rendered only if their respective props are passed: `{badge && <span className="card-badge">{badge}</span>}`.

### 10. How does the "Props in Action" playground demonstrate props?
> **Answer:** The playground holds prop values (like title, description, badge, and icon) in parent state. As the user alters the input controls, the state updates and passes new prop values into the child `<Card />` component, which instantly re-renders to reflect the changes.

---

## 📜 Student Submission Credits
- **Course Assignment:** React Components Practice — Reusable Components with Props and State
- **Student Name:** Shivam Mishra
- **Declaration:** All components, layouts, and interactive state handlers were developed client-side for academic presentation and code evaluation.
