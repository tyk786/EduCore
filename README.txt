================================================================================
  EduCore - Desktop School Management & ERP System
  Version: 8.2.3 (Enterprise Edition)
  Quick Start, Operational & Best Practices Guide
================================================================================

Thank you for choosing EduCore, an enterprise-grade desktop School Management
and ERP System designed for educational institutions.

--------------------------------------------------------------------------------
1. SYSTEM REQUIREMENTS & STORAGE
--------------------------------------------------------------------------------
- Operating System: Windows 10, Windows 11 (64-bit Architecture).
- Hardware: Minimum 4 GB RAM (8 GB recommended), 500 MB free disk space.
- Architecture: 100% On-Premise / Local-First Desktop Application.
- Data Storage: All databases, configurations, and automated backups are stored
  securely in your local Windows user profile:
    Database:     %LOCALAPPDATA%\EduCore\school_management.db
    Auto-Backups: %LOCALAPPDATA%\EduCore\backups\auto\
    Audit Logs:   %LOCALAPPDATA%\EduCore\educore_audit.log
    Configs:      %LOCALAPPDATA%\EduCore\

* Note: Application updates and uninstalls safely preserve all existing school
  databases, student records, and backup archives.

--------------------------------------------------------------------------------
2. INSTALLATION & FIRST-TIME SETUP
--------------------------------------------------------------------------------
1. Download the official installer package (Setup_EduCore_App.zip) strictly
   from https://educoreapp.in or our official GitHub Releases page.
2. Right-click Setup_EduCore_App.zip, select "Extract All...", and click
   Extract. (Always run the installer from the extracted folder, not from
   inside the compressed ZIP preview.)
3. Open the extracted folder and double-click "EduCore_Setup_v8.2.3.exe".
   * If Windows displays a SmartScreen prompt, follow Section 3 below.
4. Follow the setup wizard prompts, click Install, and then click Finish.
5. Launch "EduCore" from your Desktop or Start Menu.
6. First-Run Wizard:
   a. Admin Account: Create the primary Administrator account (uses industry-
      standard bcrypt password hashing with secure salt).
   b. School Profile: Enter your official School Name, Address, Contact details,
      Affiliation No., and upload your School Logo (used on all generated PDF
      reports, ID cards, fee receipts, and marksheets).
   c. Initial Login: Log in with your new Administrator credentials.

--------------------------------------------------------------------------------
3. WINDOWS DEFENDER SMARTSCREEN & SECURITY VERIFICATION
--------------------------------------------------------------------------------
100% Safe, Offline & Virus-Free:
EduCore is a completely offline, self-contained school ERP designed for strict
institutional data privacy. No student records, grades, or fee data are ever
sent to third-party cloud servers.

Why Does Windows SmartScreen Appear ("Windows protected your PC")?
- When installing freshly released software, Microsoft Defender SmartScreen
  checks downloads against a cloud reputation database. Because EduCore is
  updated frequently, Windows may display an advisory prompt asking you to
  confirm the application before running it.
- Why "Unknown publisher"? EduCore is currently distributed without passing on
  the recurring cost of an expensive third-party commercial code-signing
  certificate to schools. This keeps EduCore affordable without compromising
  software safety. Windows Defender continues to actively scan the installer
  and protect your computer.
- Important: SmartScreen is a reputation verification prompt -- NOT a virus or
  malware detection. As long as you downloaded the file directly from
  https://educoreapp.in, it is safe to install. Never disable Microsoft
  Defender or your antivirus protections.

How to Confirm & Proceed (2 Simple Clicks):
  Step 1: Directly under the SmartScreen message, click the underlined
          "More info" link to reveal the application details.
  Step 2: Verify that the App name is "EduCore_Setup_v8.2.3.exe", then click
          the "Run anyway" button at the bottom right to start installation.

Troubleshooting (If "Run anyway" is Not Visible):
If your school PC is managed by IT group policies or running Windows S-Mode:
  Right-click "EduCore_Setup_v8.2.3.exe" -> select Properties -> check the
  "Unblock" checkbox at the bottom of the General tab -> click Apply.

Illustrated Step-by-Step PDF Guide:
https://educoreapp.in/assets/EduCore_Installation_Guide.pdf

--------------------------------------------------------------------------------
4. RECOMMENDED WORKFLOW FOR NEW SCHOOLS
--------------------------------------------------------------------------------
To ensure smooth operation, configure your school data in this sequence:

Step 1: Classes & Subjects
  - Navigate to the 'Classes' tab.
  - Define class levels (e.g., Nursery, Class 1 to Class 12), sections, and
    assign default monthly fee amounts.
  - Configure class subject lists and assign Class Teachers.

Step 2: Staff & Faculty
  - Navigate to the 'Staff' tab.
  - Add teaching and administrative staff, designate roles, qualifications,
    base salary amounts, and attach staff photos/documents.
  - Print Staff ID Cards with barcode identifiers.

Step 3: Student Enrollment
  - Navigate to the 'Students' tab.
  - Enroll students individually or use the 'Bulk Import from Excel' feature
    (download the bundled template "student_import_template.xlsx").
  - Assign admission numbers, roll numbers, transport modes, and fee discounts.
  - Generate Student ID Cards and Admit Cards with cryptographic QR verification.

Step 4: Daily Operations & Academics
  - Attendance: Mark daily student and faculty attendance registers with instant
    analytics and summary reports.
  - Timetable & Calendar: Build conflict-free weekly timetables and academic
    event calendars.
  - Examinations & Grading: Record exam marks, calculate percentage rankings,
    and generate consolidated marksheets and report cards.
  - Library Management: Catalog book titles, manage ISBN barcodes, process
    borrower checkouts/returns, and track overdue loan fines.

Step 5: Finance, Fees & Payroll
  - Automated Monthly Billing: Generate monthly tuition and transport invoices
    with one click across all active classes.
  - Fee Collection: Record full or partial payments, print professional A4/thermal
    receipts with QR validation, and automatically roll over unpaid balances.
  - Payroll & Disbursements: Process monthly staff salaries, record allowances,
    advances, and deductions, and print staff payment vouchers.
  - Expense Ledger: Track day-to-day school expenses, maintenance funds, and
    generate financial balance sheet reports.

--------------------------------------------------------------------------------
5. DATA PROTECTION & BACKUP RESILIENCE
--------------------------------------------------------------------------------
EduCore features an enterprise automated backup engine:
- Daily Auto-Backup: A background daemon checks database age on startup and
  automatically creates a verified backup every 24 hours without UI interruption.
- Pre-Backup Integrity Check: Runs SQLite "PRAGMA quick_check" before archiving
  to guarantee corrupted files are never backed up.
- Automatic Rotation: Keeps the newest 30 automated backup archives and prunes
  older archives to conserve disk space.
- Manual Backups: Perform on-demand backups anytime via Settings -> Maintenance ->
  Backup & Restore.
- Best Practice: Periodically copy the "%LOCALAPPDATA%\EduCore\backups\" folder
  to a secure external drive or secondary storage.

--------------------------------------------------------------------------------
6. LICENSING & ACTIVATION TIERS
--------------------------------------------------------------------------------
EduCore includes a 30-day Evaluation Trial (up to 50 active students).
For commercial deployment, perpetual node-locked license tiers are available
based on active student capacity:

- TRIAL Tier:        30 days evaluation, up to 50 active students.
- BASIC Tier:        Perpetual license, up to 200 active students.
- STANDARD Tier:     Perpetual license, up to 500 active students.
- PROFESSIONAL Tier: Perpetual license, up to 700 active students.
- ENTERPRISE Tier:   Perpetual license, up to 1,000 active students.
- DIAMOND Tier:      Perpetual license, up to 2,000 active students.
- ULTIMATE Tier:     Perpetual license, up to 3,000 active students.

To activate your license:
1. Open EduCore -> Settings -> Help & Licensing -> License Management.
2. Note your unique Machine ID displayed in the dialog.
3. Email your Machine ID to info@educoreapp.in to obtain your key, then enter
   your authorized cryptographic activation key to activate instantly.

--------------------------------------------------------------------------------
7. TECHNICAL SUPPORT & CONTACT
--------------------------------------------------------------------------------
Developed by: Sublime Enterprises / Tariq Yousuf
Official Website: https://educoreapp.in
Installation & Security Guide: https://educoreapp.in/assets/EduCore_Installation_Guide.pdf
Support & Licensing Inquiries: info@educoreapp.in

================================================================================
   EduCore - Empowering Educational Excellence Through Intelligent Management
================================================================================
