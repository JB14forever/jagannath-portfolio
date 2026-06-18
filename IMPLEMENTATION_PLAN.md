# Technical Implementation Plan: Data Analyst Portfolio Website

This implementation plan details the setup, style, features, and deployment steps for the portfolio website of Jagannath Barik.

## 1. Goal & Objectives
Present a clear, professional, and minimalist single-page portfolio tailored for recruiters hiring for Data Analyst, BI Analyst, Junior Data Scientist, and Business Analyst roles in Ireland and Europe.

## 2. Style Guide & Design Tokens
* **Fonts**: Inter (Google Fonts)
* **Color Palette**:
  - Main Background: `#FFFFFF` (White)
  - Section Background: `#F1F7FF` (Soft Blue)
  - Primary Text: `#111827` (Almost Black)
  - Secondary Text: `#6B7280` (Grey)
  - Main Accent: `#3B82F6` (Blue)
  - Dark Accent / Header: `#0B1F3A` (Navy)
  - Border / Card Line: `#D6E4FF` (Light Blue Grey)

## 3. Structure & Layout
* **Header / Navigation**: Sticky navbar with responsive hamburger menu and highlighted "Download CV" button.
* **Hero**: Clear intro, title, location, photo on the right (desktop), call-to-action buttons.
* **About**: Short professional summary and 3 key highlights.
* **Skills**: Grouped grid-based categories with modern cards.
* **Projects**: 4 core projects with cards containing screenshot, tools, description, highlights, and buttons.
* **Experience**: Professional timeline detailing experience at Dentsu Global Services and Gift Emporium.
* **Education**: Academic background (TU Dublin, University of Mumbai).
* **Resume**: Simple layout with direct download links.
* **Contact**: Direct details (Email, Location, LinkedIn, GitHub).
* **Footer**: Simple copyright and quick links.

## 4. Development Checklist
- [x] Create project directory structure.
- [x] Copy profile photo and project screenshots to `assets/images/`.
- [x] Copy updated resume PDF to `assets/documents/`.
- [x] Create modern, responsive `index.html` with clean markup and SEO meta tags.
- [x] Create `css/style.css` containing CSS variables, utility classes, and layout rules.
- [x] Create `js/script.js` for mobile navigation, active section highlighting, scroll animations, and interactive elements.
- [x] Test responsiveness across desktop, tablet, and mobile views.
- [x] Create GitHub repository and deploy using GitHub Pages.
