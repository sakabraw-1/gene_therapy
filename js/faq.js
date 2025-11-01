// FAQ Data and Logic for Collapsible, Tabbed, Searchable FAQ
// Categories and questions are grouped for dynamic rendering

const FAQ_DATA = [
  {
    category: "General",
    faqs: [
      {
        q: "Is gene therapy designed for a specific child/mutation?",
        a: "No, the gene replacement therapy is designed to deliver a functional copy of the CDKL5 gene to restore protein expression, making it suitable for most loss-of-function mutations rather than being mutation-specific. It aims to address the underlying deficiency broadly across patients."
      },
      {
        q: "How confident are you about the success of your CDKL5 gene therapy trial from 0 to 10?",
        a: "Based on preclinical data showing phenotypic rescue in mouse models and positive FDA feedback, confidence is around 7-8, reflecting optimism from safety profiles and efficacy in animals, though human trials introduce uncertainties."
      },
      {
        q: "What is your best guess about when there might be approval for the first trial?",
        a: "IND approval estimated mid-2026, with first-in-human dosing potentially starting late 2026, though timelines depend on toxicology results and FDA review."
      },
      {
        q: "How much money is required for the project to get to trials?",
        a: "Approximately $3.5 million is needed to advance to first-in-human trials, covering toxicology, manufacturing, and IND submission."
      },
      {
        q: "How will this move forward in terms of funding?",
        a: "Funding relies on donations and grants to reach $3.5M for trials; current efforts include community fundraising and potential pharma collaborations. Please donate via CDKL5GeneTherapy.com and share with others. "
      }
    ]
  },
  {
    category: "Participation & Eligibility",
    faqs: [
      {
        q: "How can I know if I’m fit for the program?",
        a: "Eligibility will be based on confirmed CDKL5 mutation, age, health status, and trial criteria (e.g., no contraindications to AAV9); more information for screening will be made available once IND is approved."
      },
      {
        q: "If we are from another country, can we still participate?",
        a: "Yes, international participation is possible, with trials planned in the US and India; visa and travel support may be available, subject to regulatory approvals."
      },
      {
        q: "Is there an optimal age to receive gene therapy?",
        a: "Preclinical data suggest earlier intervention (neonatal or early childhood) maximizes benefits due to brain development stages, but studies show potential rescue even in older models (equivalent to adulthood), so no strict cutoff, though younger ages may yield better outcomes."
      },
      {
        q: "Is there a possibility for less than 6-year-olds to participate in gene therapy?",
        a: "Yes, but more details will be available shortly based on inclusion/exclusion criteria after the IND."
      },
      {
        q: "How do we put our children under consideration for upcoming gene trials?",
        a: "Contact trial sites (e.g., UCSF, Boston Children's) for pre-screening; once trials start, eligibility will be assessed based on inclusion criteria."
      }
    ]
  },
  {
    category: "Donations & Support",
    faqs: [
      {
        q: "What organization is best to donate to for fastest progress?",
        a: "The CDKL5 Gene Therapy Coalition (via cdkl5genetherapy.com) for direct support of this AAV9 program, as it focuses specifically on advancing this gene therapy initiative."
      },
      {
        q: "Where can we provide a donation for this research?",
        a: "Directly through cdkl5genetherapy.com."
      },
      {
        q: "What do we do to help? Where do we donate?",
        a: "Donate via cdkl5genetherapy.com; help by spreading awareness, participating in registries, or volunteering for advocacy to accelerate progress."
      }
    ]
  },
  {
    category: "Webinars & Registry",
    faqs: [
      {
        q: "Will we have access to the informative slide show from today?",
        a: "Yes, the webinar is posted on the CDKL5genetherapy.com website under past webinars section."
      },
      {
        q: "Is there any registry for registering clinical trials?",
        a: "Yes, patients can register on www.cdkl5genetherapy.com, which helps with eligibility screening and data collection for CDKL5 studies."
      }
    ]
  },
  {
    category: "Medical & Scientific",
    faqs: [
      {
        q: "CDKL5 helps in development of synapses, communication with other neurons, etc.; all of this happens during the brain development phase. When CDKL5 gene therapy works, how will this rectify these? What kind of reinforcement learning might be needed?",
        a: "The therapy restores CDKL5 protein to promote synaptic maturation and neuronal connectivity; in preclinical models, it rectifies stunted growth even post-development by enhancing microtubule dynamics. Reinforcement may involve therapies like physical/occupational to maximize gains, similar to other neurodevelopmental treatments."
      },
      {
        q: "Do we have access to data on how effective gene therapy has been for Rett Syndrome?",
        a: "Yes, Rett Syndrome gene therapy trials (e.g., Taysha's TSHA-102, Neurogene's NGN-401) show improvements in motor function, seizures, and behavior in early data; details available on ClinicalTrials.gov or RSRT.org, with some patients gaining skills like hand use."
      }
    ]
  },
  {
    category: "Other",
    faqs: [
      {
        q: "Our baby is seen at Cleveland Clinic. Should she also be seen at Boston/Colorado?",
        a: "No, send a note to us through ‘Contact Us’ page on www.cdkl5genetherapy.com."
      }
    ]
  }
];

// Render tabs
function renderTabs() {
  const tabs = document.getElementById('faq-tabs');
  tabs.innerHTML = FAQ_DATA.map((cat, i) => `<button class="faq-tab" data-tab="${i}" ${i===0?'class="active"':''}>${cat.category}</button>`).join('');
}

// Render panels
function renderPanels(filter = '', activeTab = 0) {
  const panels = document.getElementById('faq-panels');
  let html = '';
  FAQ_DATA.forEach((cat, i) => {
    let faqs = cat.faqs;
    if (filter) {
      faqs = faqs.filter(f => f.q.toLowerCase().includes(filter) || f.a.toLowerCase().includes(filter));
    }
    html += `<div class="faq-panel" data-panel="${i}" style="display:${i===activeTab?'block':'none'};">`;
    if (faqs.length === 0) {
      html += '<div class="faq-empty">No questions found.</div>';
    } else {
      html += faqs.map((f, j) => `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">${f.q}</button>
          <div class="faq-answer" hidden>${f.a}</div>
        </div>
      `).join('');
    }
    html += '</div>';
  });
  panels.innerHTML = html;
}

// Tab switching
function setupTabs() {
  document.getElementById('faq-tabs').addEventListener('click', e => {
    if (e.target.classList.contains('faq-tab')) {
      document.querySelectorAll('.faq-tab').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      const tab = +e.target.getAttribute('data-tab');
      renderPanels(document.getElementById('faq-search').value.toLowerCase(), tab);
      setupAccordion();
    }
  });
}

// Accordion logic
function setupAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.onclick = function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.faq-answer').forEach(a => a.hidden = true);
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        this.nextElementSibling.hidden = false;
      }
    };
  });
}

// Search/filter logic
function setupSearch() {
  document.getElementById('faq-search').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const activeTab = Array.from(document.querySelectorAll('.faq-tab')).findIndex(btn => btn.classList.contains('active'));
    renderPanels(filter, activeTab);
    setupAccordion();
  });
}

// Initial render
window.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderPanels();
  setupTabs();
  setupAccordion();
  setupSearch();
});
