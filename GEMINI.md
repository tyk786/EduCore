# Repository Architecture & Guidelines: E:\Educore

## 1. Role & Identity of E:\Educore
- **Public Website & Distribution Repository:** `E:\Educore` (`https://github.com/tyk786/EduCore`) is the public-facing repository for the EduCore project.
- **Zero Source Code Policy:** This repository must contain **0 source code files** to protect proprietary source code.
- **Primary Purposes:**
  1. **Marketing & Documentation Website:** Hosts the static website files for `https://educoreapp.in/` (HTML, CSS, JS, assets, `robots.txt`, `sitemap.xml`, `llms.txt`).
  2. **Software Distribution:** Houses public GitHub Releases where pre-compiled standalone Windows executables (`EduCore_Setup_v*.exe`) are published for user downloads.

## 2. Separation from E:\EDU (Private Development Repo)
- All actual software development, application changes, bug fixes, feature implementations, and test suites live strictly in **`E:\EDU`**, which is the private GitHub repository (`https://github.com/tyk786/EDU`).
- Never move, copy, or commit Python source code (`src/`), tests (`tests/`), internal developer tools, or private configuration (`.env`) into this repository.
