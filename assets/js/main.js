/**
 * EduCore — Main Interactive Scripts & WebMCP AI Agent Engine
 * SUBLIME ENTERPRISES | Smart Tool For A Smart School
 */

// ==========================================================================
// 1. WebMCP Polyfill & Standard Initialization (Model Context Protocol for Browsers)
// ==========================================================================
(function initWebMCP() {
  if (typeof navigator !== 'undefined' && !navigator.modelContext) {
    navigator.modelContext = {
      _tools: new Map(),
      registerTool: function (tool) {
        if (tool && tool.name) {
          this._tools.set(tool.name, tool);
          try {
            window.dispatchEvent(new CustomEvent('webmcp:tool-registered', { detail: { name: tool.name } }));
          } catch (e) {}
        }
      },
      getTools: function () {
        return Array.from(this._tools.values());
      },
      invokeTool: async function (name, args) {
        const tool = this._tools.get(name);
        if (!tool) throw new Error('Tool not found: ' + name);
        return await tool.execute(args);
      }
    };
  }
})();

// ==========================================================================
// 2. WebMCP Imperative Tool Registrations (Callable by AI Agents & Browsers)
// ==========================================================================
function registerEduCoreAgentTools() {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;

  // Tool 1: Calculate Pricing Tier
  navigator.modelContext.registerTool({
    name: 'calculateLicensePricing',
    description: 'Calculates the recommended EduCore one-time lifetime license plan, cost, and renewal for a given school student enrollment.',
    inputSchema: {
      type: 'object',
      properties: {
        studentCount: {
          type: 'integer',
          description: 'The total number of students enrolled in the school (integer between 1 and 10000).'
        }
      },
      required: ['studentCount']
    },
    execute: async function (args) {
      const count = parseInt(args.studentCount, 10);
      if (isNaN(count) || count <= 0) {
        return { content: [{ type: 'text', text: 'Please provide a valid positive integer for student enrollment count.' }] };
      }
      let plan, price, renewal, desc;
      if (count <= 50) {
        plan = 'Free Trial';
        price = '₹0 (Free for 30 Days)';
        renewal = '₹0';
        desc = 'Up to 50 students. Complete access to all 10 modules unlocked for evaluation.';
      } else if (count <= 200) {
        plan = 'Basic Tier';
        price = '₹4,499';
        renewal = '₹1,499 / year';
        desc = 'Up to 200 students. Lifetime offline license with full student, attendance, fee, and exam marksheet tools.';
      } else if (count <= 500) {
        plan = 'Standard Tier (Most Popular)';
        price = '₹9,999';
        renewal = '₹2,999 / year';
        desc = 'Up to 500 students. Complete suite with staff payroll, library accession, student ID card generator, and timetable.';
      } else if (count <= 700) {
        plan = 'Professional Tier (700 Students)';
        price = '₹14,999';
        renewal = '₹3,999 / year';
        desc = 'Up to 700 students with priority email and remote desk support.';
      } else if (count <= 1000) {
        plan = 'Enterprise Tier (1,000 Students)';
        price = '₹22,499';
        renewal = '₹5,999 / year';
        desc = 'Up to 1,000 students. High-capacity performance for large secondary and senior secondary schools.';
      } else if (count <= 2000) {
        plan = 'Diamond Tier (2,000 Students)';
        price = '₹37,499';
        renewal = '₹8,999 / year';
        desc = 'Up to 2,000 students. Large institutional campus infrastructure with all 10 modules unlocked.';
      } else {
        plan = 'Ultimate Tier (3,000+ Students)';
        price = '₹59,999';
        renewal = '₹11,999 / year';
        desc = 'Up to 3,000 students with custom CBSE/State Board marksheet support and dedicated priority assistance.';
      }
      return {
        content: [{
          type: 'text',
          text: `For a school with ${count} students: Recommended plan is ${plan}. Price: ${price} (One-Time Perpetual License). Annual Support: ${renewal}. Details: ${desc}`
        }]
      };
    }
  });

  // Tool 2: Check System Compatibility
  navigator.modelContext.registerTool({
    name: 'checkSystemCompatibility',
    description: 'Verifies whether a school office computer satisfies hardware, RAM, disk, and Windows OS specifications for running EduCore offline ERP.',
    inputSchema: {
      type: 'object',
      properties: {
        os: { type: 'string', description: 'Operating system name and version (e.g., Windows 10, Windows 11, Windows 7)' },
        ramGb: { type: 'number', description: 'Installed RAM in Gigabytes (e.g., 4, 8, 16)' },
        architecture: { type: 'string', description: 'CPU Architecture (e.g., 64-bit or 32-bit)' }
      },
      required: ['os', 'ramGb']
    },
    execute: async function (args) {
      const os = (args.os || '').toLowerCase();
      const isWin10or11 = os.includes('10') || os.includes('11') || os.includes('windows 10') || os.includes('windows 11');
      const is64bit = (args.architecture || '64').includes('64');
      const ram = parseFloat(args.ramGb) || 0;

      if (isWin10or11 && is64bit && ram >= 4) {
        return {
          content: [{
            type: 'text',
            text: '✅ System is 100% Compatible with EduCore. Meets all minimum specs (64-bit Windows 10 or 11 with 4 GB+ RAM).'
          }]
        };
      }
      const issues = [];
      if (!isWin10or11) issues.push('Requires Windows 10 or Windows 11 (64-bit)');
      if (!is64bit) issues.push('Requires a 64-bit operating system');
      if (ram < 4) issues.push(`At least 4 GB RAM recommended (detected ${ram} GB)`);

      return {
        content: [{
          type: 'text',
          text: `⚠️ System Compatibility Notice: ${issues.join('; ')}.`
        }]
      };
    }
  });

  // Tool 3: Search FAQ
  navigator.modelContext.registerTool({
    name: 'searchFAQ',
    description: 'Searches EduCore knowledge base of 25 authoritative School ERP and management software FAQs covering pricing, offline security, marksheets, and setup.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'The search query or keyword (e.g., "offline security", "fees", "cbse marksheets", "pricing")' }
      },
      required: ['query']
    },
    execute: async function (args) {
      const q = (args.query || '').toLowerCase().trim();
      const items = document.querySelectorAll('.ec-faq-item, article');
      const results = [];
      items.forEach(function (el) {
        const title = el.querySelector('h3');
        const p = el.querySelector('p');
        if (title && (title.textContent.toLowerCase().includes(q) || (p && p.textContent.toLowerCase().includes(q)))) {
          results.push({
            question: title.textContent.trim(),
            answer: p ? p.textContent.trim() : ''
          });
        }
      });
      return {
        content: [{
          type: 'text',
          text: results.length > 0
            ? `Found ${results.length} matching FAQs:\n` + results.slice(0, 5).map(r => `• Q: ${r.question}\n  A: ${r.answer}`).join('\n\n')
            : `No FAQs found matching "${q}". Please contact support at info@educoreapp.in.`
        }]
      };
    }
  });

  // Tool 4: Submit Question
  navigator.modelContext.registerTool({
    name: 'submitQuestion',
    description: 'Submits a customized inquiry or question regarding EduCore school ERP features, pricing, or deployment to the official engineering team.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Name of the inquirer or school administrator' },
        email: { type: 'string', description: 'Official email address to receive the response' },
        question: { type: 'string', description: 'Detailed question or inquiry about EduCore software' }
      },
      required: ['name', 'email', 'question']
    },
    execute: async function (args) {
      return {
        content: [{
          type: 'text',
          text: `Thank you, ${args.name}. Your inquiry has been routed to the official support desk (info@educoreapp.in). Our educational technology team responds within 24 business hours.`
        }]
      };
    }
  });
}

// ==========================================================================
// 3. Document Interactive Handlers (Navigation, Calculator & Search)
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
  // Initialize WebMCP tools
  registerEduCoreAgentTools();

  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.ec-mobile-toggle');
  const mobileMenu = document.querySelector('.ec-mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // Canonical clean URL history update
  if (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/index.html') {
    const cleanUrl = window.location.origin + '/' + window.location.search + window.location.hash;
    window.history.replaceState(null, '', cleanUrl);
  }

  // Active link highlighting
  const currentPath = window.location.pathname.split('/').pop() || '';
  document.querySelectorAll('.ec-desktop-nav a, .ec-mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || ((currentPath === '' || currentPath === 'index.html') && (href === '/' || href === 'https://educoreapp.in/'))) {
      link.classList.add('active');
    }
  });

  // Interactive License Calculator Form Handler
  const calcForm = document.getElementById('license-calculator-form');
  const calcInput = document.getElementById('calc-students');
  const calcResult = document.getElementById('calc-result');

  if (calcForm && calcInput && calcResult) {
    calcForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const count = parseInt(calcInput.value, 10);
      if (isNaN(count) || count <= 0) {
        calcResult.innerHTML = '<span style="color: #dc2626;">Please enter a valid student count.</span>';
        calcResult.style.display = 'block';
        return;
      }
      if (navigator.modelContext && typeof navigator.modelContext.invokeTool === 'function') {
        try {
          const res = await navigator.modelContext.invokeTool('calculateLicensePricing', { studentCount: count });
          const text = res.content[0].text;
          calcResult.innerHTML = `<div style="background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 8px; padding: 14px 18px; color: #0369a1; font-size: 14px; line-height: 1.6;"><strong>🎯 Plan Recommendation:</strong><br>${text}</div>`;
          calcResult.style.display = 'block';
          return;
        } catch (err) {}
      }
      let planName = count <= 50 ? 'Free Trial (₹0)' : count <= 200 ? 'Basic Tier (₹4,499)' : count <= 500 ? 'Standard Tier (₹9,999)' : count <= 700 ? 'Professional Tier (₹14,999)' : count <= 1000 ? 'Enterprise Tier (₹22,499)' : count <= 2000 ? 'Diamond Tier (₹37,499)' : 'Ultimate Tier (₹59,999)';
      calcResult.innerHTML = `<div style="background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 8px; padding: 14px 18px; color: #0369a1; font-size: 14px; line-height: 1.6;"><strong>Recommended Plan:</strong> ${planName} for ${count} students. Includes lifetime offline data sovereignty and all 10 modules unlocked.</div>`;
      calcResult.style.display = 'block';
    });
  }

  // Interactive FAQ Instant Search Bar Handler
  const faqSearchInput = document.getElementById('faq-search-input');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', function () {
      const q = this.value.toLowerCase().trim();
      const faqItems = document.querySelectorAll('.ec-faq-item, .ec-faq-section article');
      let visibleCount = 0;

      faqItems.forEach(function (item) {
        const heading = item.querySelector('h3');
        const paragraph = item.querySelector('p');
        const textToMatch = (heading ? heading.textContent : '') + ' ' + (paragraph ? paragraph.textContent : '');

        if (q === '' || textToMatch.toLowerCase().includes(q)) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      // Update counter if present
      const countEl = document.getElementById('faq-count-feedback');
      if (countEl) {
        countEl.textContent = q ? `Showing ${visibleCount} matching questions for "${q}"` : 'Browse all 25 questions across 5 core categories below';
      }
    });
  }
});
