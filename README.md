# 📟 Who I Am | Personal Profile Page

A playful, tech-themed personal profile page for **Atzar** built with **HTML5, CSS3, and Vanilla JavaScript**. It features a neo-brutalist workbench layout, fun emoji badge stickers, and an interactive command-line terminal widget.

---

## 📂 File Structure

```bash
whoiam/
├── index.html     # Page markup (Hero profile, hobbies, mock terminal, and creations grid)
├── style.css      # Custom styles, Neo-brutalist theme variables, and dark mode layouts
├── script.js      # Terminal commands logic and synchronization of homepage theme settings
└── README.md      # This guide!
```

---

## 🛠️ Customization Guide

You can easily modify your profile to reflect new activities, change text, or add interactive commands.

### 1. Changing Your Name
To change the main name on the header:
*   Open **`index.html`** and locate line 42:
    ```html
    <h1 class="hero-title">Hey there, I'm <span>Atzar</span>!</h1>
    ```
*   Replace `Atzar` with your preferred name.

---

### 2. Modifying or Adding Hobbies
The cards under *"What Keeps My Brain Buzzing"* are declared inside `<div class="hobbies-grid">` in **`index.html`**.

#### To edit an existing hobby:
Find the corresponding card (e.g. `Hobby 1: DIY`) and modify the title (`<h3>`), description (`<p>`), or tag elements (`<div class="hobby-tags">`).

#### To add a new hobby card:
Copy and paste this template inside the `.hobbies-grid` container:
```html
<div class="hobby-card" data-color="blue">
    <div class="hobby-icon-box">
        <i data-lucide="activity"></i> <!-- Browse icons at lucide.dev/icons -->
    </div>
    <h3>My New Hobby</h3>
    <p>Describe your new hobby here in a fun, informal way!</p>
    <div class="hobby-tags">
        <span>#tag1</span><span>#tag2</span>
    </div>
</div>
```
> [!TIP]
> You can change the card's accent glow and shadow color by changing the `data-color` attribute. Supported values are: `violet`, `emerald`, `amber`, `rose`, `blue`, `cyan`, and `indigo`.

---

### 3. Adding a New Command to the Terminal Console
The emulator at the center of the page runs custom JavaScript actions. To add a new executable button command:

1.  **Add the Button in HTML**:
    Open **`index.html`** and add a button inside `<div class="terminal-controls">` (around line 130):
    ```html
    <button class="term-btn" onclick="runCommand('hack')">
        <i data-lucide="shield-alert"></i> hack-matrix
    </button>
    ```
2.  **Define the Command Logic in JS**:
    Open **`script.js`** and add a case block inside `runCommand(cmd)` (around line 78):
    ```javascript
    case 'hack':
        outputLine.innerHTML = `Bypassing firewalls... 🔓
[+] Overriding mainframe credentials...
[+] System successfully bypassed. Access GRANTED! 🕶️`;
        break;
    ```
3.  **Define the Prompt Label**:
    Add the friendly text converter inside `getCommandName(cmd)` at the bottom of **`script.js`**:
    ```javascript
    case 'hack': return 'hack-matrix';
    ```

---

### 4. Updating Project Links
The *"My Digital Toyshop"* section links to sibling directories. If you want to change these target links or direct to external domains, edit the `href` attributes inside **`index.html`**:
*   For sibling folders: `<a href="../note/" ...>`
*   For external links: `<a href="https://github.com/atzartech-prog" ...>`

---

## 🚀 How to Run

Simply open **`index.html`** in any web browser by double-clicking the file.
If you deploy this project to GitHub Pages (e.g., to the `whoiam` repository under your username), it will sync perfectly with your welcome hub!
