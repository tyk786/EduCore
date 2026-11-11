# EduCore — Desktop School Management & ERP System
**Version:** 8.2.3 (Enterprise Edition)  
**Website:** [https://educoreapp.in](https://educoreapp.in)  
**Support & Licensing:** [info@educoreapp.in](mailto:info@educoreapp.in)

Thank you for choosing **EduCore**, an enterprise-grade, 100% offline desktop School Management & ERP System engineered for educational institutions.

---

## 1. System Requirements & Local Storage

- **Operating System:** Windows 10 & Windows 11 (64-bit Architecture)
- **Hardware:** Minimum 4 GB RAM (8 GB recommended), 500 MB free disk space
- **Architecture:** 100% On-Premise / Local-First Desktop Application
- **Data Storage:** All school databases, configurations, and automated backups are stored securely inside your local Windows user profile:
  - **Database:** `%LOCALAPPDATA%\EduCore\school_management.db`
  - **Auto-Backups:** `%LOCALAPPDATA%\EduCore\backups\auto\`
  - **Audit Logs:** `%LOCALAPPDATA%\EduCore\educore_audit.log`
  - **Configs:** `%LOCALAPPDATA%\EduCore\`

> **Note:** Application updates and uninstalls safely preserve all existing school databases, student records, and backup archives.

---

## 2. Installation & First-Time Setup

1. Download the official installer package (`Setup_EduCore_App.zip`) strictly from [https://educoreapp.in](https://educoreapp.in) or our [GitHub Releases](https://github.com/tyk786/EduCore/releases).
2. Right-click `Setup_EduCore_App.zip`, select **"Extract All…"**, and click **Extract**. *(Always run the installer from inside the extracted folder, not from inside the ZIP preview.)*
3. Open the extracted folder and double-click **`EduCore_Setup_v8.2.3.exe`**.
   - If Windows displays the Microsoft Defender SmartScreen prompt, follow **Section 3** below.
4. Follow the setup wizard prompts, click **Install**, and click **Finish**.
5. Launch **EduCore** from your Desktop or Start Menu.
6. Complete the **First-Run Wizard**:
   - **Admin Account:** Create the primary Administrator account (protected with bcrypt password hashing and secure random salt).
   - **School Profile:** Enter your School Name, Address, Contact details, Affiliation No., and upload your School Logo (automatically embedded on generated PDF report cards, ID cards, fee receipts, and marksheets).
   - **Initial Login:** Sign in with your Administrator credentials.

---

## 3. Windows Defender SmartScreen & Security Verification

### 100% Safe, Offline & Virus-Free Guarantee
EduCore is a self-contained, completely offline school ERP built for strict institutional data privacy. **No student records, grades, or fee transactions are ever transmitted to external cloud servers.**

### Why Does SmartScreen Appear ("Windows protected your PC")?
- **Cloud Reputation Check:** Microsoft Defender SmartScreen checks newly released software downloads against an online download-volume database. Because EduCore releases frequent updates, Windows may display an advisory prompt asking you to verify the file source before executing.
- **Why "Unknown publisher"?** To keep EduCore affordable for schools, it is distributed without adding the recurring surcharges of an expensive third-party corporate code-signing certificate. Windows Defender continues to actively scan the installer and protect your PC.
- **Not a Virus Warning:** SmartScreen is an advisory prompt to pause and verify your source — **not** malware or virus detection. As long as you downloaded EduCore directly from [https://educoreapp.in](https://educoreapp.in) or this official repository, it is verified and safe to run. **Never disable Microsoft Defender or system antivirus protections.**

### How to Confirm & Proceed (2 Simple Clicks)
1. **Click "More info":** Directly under the description text on the blue SmartScreen prompt, click the underlined **"More info"** link to reveal application details.
2. **Verify App Name & Click "Run anyway":** Confirm that the App name displays **`EduCore_Setup_v8.2.3.exe`**, then click the **"Run anyway"** button at the bottom right to start setup.

> **Troubleshooting ("Run anyway" not visible):** If your school PC runs in Windows S-Mode or under managed IT group policies, right-click `EduCore_Setup_v8.2.3.exe`, open **Properties**, check the **"Unblock"** box at the bottom of the *General* tab, and click **Apply**.

📥 **Illustrated Walkthrough:** Download the step-by-step **[EduCore Installation & Safety Guide (.pdf)](assets/EduCore_Installation_Guide.pdf)** (also available at [https://educoreapp.in/assets/EduCore_Installation_Guide.pdf](https://educoreapp.in/assets/EduCore_Installation_Guide.pdf)).

---

## 4. Recommended Workflow for New Schools

Configure your institution's data in this sequence for optimal operation:

1. **Classes & Subjects:** Define class levels (e.g., Nursery, Class 1 to Class 12), sections, default monthly fees, subject lists, and Class Teachers in the **Classes** tab.
2. **Staff & Faculty:** Add teaching and administrative staff, designate roles, qualifications, base salaries, photos/documents, and print **Staff ID Cards** with barcode identifiers.
3. **Student Enrollment:** Enroll students individually or use **Bulk Import from Excel** (`student_import_template.xlsx`). Assign admission numbers, roll numbers, transport modes, discounts, and generate QR-verified **Student ID Cards** & **Admit Cards**.
4. **Daily Operations & Academics:** Manage daily student/staff attendance, build conflict-free timetables and academic calendars, record exam grades for automated consolidated marksheets/report cards, and run barcode-enabled Library checkouts.
5. **Finance, Fees & Payroll:** Generate one-click monthly tuition/transport invoices, collect full or partial payments with A4/thermal QR receipts, process monthly staff payroll vouchers, and track institutional expense ledgers.

---

## 5. Data Protection & Backup Resilience

EduCore includes an automated local backup engine:
- **Daily Auto-Backup:** Automatically verifies database age on startup and creates a local backup archive every 24 hours without interrupting work.
- **Pre-Backup Integrity Check:** Runs SQLite `PRAGMA quick_check` prior to archiving so corrupted files are never backed up.
- **Automatic Rotation:** Retains the latest 30 automated archives and prunes older snapshots to save disk space.
- **Manual Backups:** Trigger on-demand backups anytime via `Settings → Maintenance → Backup & Restore`.
- **Best Practice:** Periodically copy `%LOCALAPPDATA%\EduCore\backups\` to an external USB drive or secure secondary storage.

---

## 6. Licensing & Activation Tiers

EduCore includes a **30-day Evaluation Trial** (up to 50 active students). Perpetual node-locked license tiers are available by active student capacity:

| Tier | License Type | Active Student Limit |
| :--- | :--- | :--- |
| **Trial** | 30-Day Evaluation | Up to 50 students |
| **Basic** | Perpetual | Up to 200 students |
| **Standard** | Perpetual | Up to 500 students |
| **Professional** | Perpetual | Up to 700 students |
| **Enterprise** | Perpetual | Up to 1,000 students |
| **Diamond** | Perpetual | Up to 2,000 students |
| **Ultimate** | Perpetual | Up to 3,000 students |

### How to Activate Your License
1. Open EduCore and go to `Settings → Help & Licensing → License Management`.
2. Copy your unique hardware **Machine ID**.
3. Email your Machine ID and desired tier to **[info@educoreapp.in](mailto:info@educoreapp.in)** to receive your cryptographic activation key.

---

## 7. Technical Support & Contact

- **Publisher:** Sublime Enterprises / Tariq Yousuf
- **Official Website:** [https://educoreapp.in](https://educoreapp.in)
- **Installation & Safety Guide:** [https://educoreapp.in/assets/EduCore_Installation_Guide.pdf](https://educoreapp.in/assets/EduCore_Installation_Guide.pdf)
- **Support & Licensing Inquiries:** [info@educoreapp.in](mailto:info@educoreapp.in)

---
*EduCore — Smart Tool for a Smart School*
