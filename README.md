================================================================================
  EduCore - Desktop School Management & ERP System
  Version: 5.2.3 (Enterprise Edition)
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
    Database:    %LOCALAPPDATA%\EduCore\data\educore.db
    Auto-Backups:%LOCALAPPDATA%\EduCore\backups\Auto\
    Audit Logs:  %LOCALAPPDATA%\EduCore\logs\
    Configs:     %LOCALAPPDATA%\EduCore\config\

* Note: Application updates and uninstalls safely preserve all existing school
  databases, student records, and backup archives.

--------------------------------------------------------------------------------
2. INSTALLATION & FIRST-TIME SETUP
--------------------------------------------------------------------------------
1. Run "EduCore_Setup_v5.2.3.exe" and follow the installer prompts.
2. Launch "EduCore" from your Desktop or Start Menu.
3. First-Run Wizard:
   a. Admin Account: Create the primary Administrator account (uses industry-
      standard bcrypt password hashing with secure salt).
   b. School Profile: Enter your official School Name, Address, Contact details,
      Affiliation No., and upload your School Logo (used on all generated PDF
      reports, ID cards, fee receipts, and marksheets).
   c. Initial Login: Log in with your new Administrator credentials.

--------------------------------------------------------------------------------
3. RECOMMENDED WORKFLOW FOR NEW SCHOOLS
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
4. DATA PROTECTION & BACKUP RESILIENCE
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
5. LICENSING & ACTIVATION TIERS
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
3. Enter your authorized cryptographic activation key to activate instantly.

--------------------------------------------------------------------------------
6. TECHNICAL SUPPORT & CONTACT
--------------------------------------------------------------------------------
Developed by: Sublime Enterprises / Tariq Yousuf
Official Website: https://www.educoreapp.blogspot.com/
Support & Licensing Inquiries: tyk786@gmail.com

================================================================================
   EduCore - Empowering Educational Excellence Through Intelligent Management
================================================================================
