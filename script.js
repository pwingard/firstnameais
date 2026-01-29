// Domain data - Add your domains here
const domains = [
    {
        name: "corrina.ai",
        description: "Personal AI assistant with a friendly, approachable name. Perfect for consumer-facing AI products.",
        tags: ["AI", "Personal", "Assistant"],
        status: "Available"
    },
    {
        name: "dickie.ai",
        description: "Casual, friendly AI companion. Great for personal AI assistants or chatbot services.",
        tags: ["AI", "Personal diarist"],
        status: "Available"
    },
    {
        name: "margaux.ai",
        description: "Sophisticated personal AI with an elegant name. Premium AI assistant branding.",
        tags: ["AI", "Personal", "Premium"],
        status: "Available"
    },
    {
        name: "florid.ai",
        description: "AI for creative writing, content generation, or elaborate language processing.",
        tags: ["AI", "Creative", "Writing", "Muse"],
        status: "Available"
    },
    {
        name: "razzi.ai",
        description: "Sharp, energetic AI brand. Perfect for fast-paced AI tools and services.",
        tags: ["AI", "Personal", "Dynamic"],
        status: "Available"
    },
    {
        name: "ryes.ai",
        description: "Clever wordplay on 'rise' - AI for growth, optimization, and improvement.",
        tags: ["AI", "Personal", "Dynamic"],
        status: "Available"
    },
    {
        name: "simmerhan.ai",
        description: "Patient, thoughtful AI that takes time to analyze and process complex information.",
        tags: ["AI", "Analysis", "Strategic"],
        status: "Available"
    },
    {
        name: "creampuff.ai",
        description: "Sweet and delightful AI companion with an endearing personality.",
        tags: ["AI", "Desirable", "Easy on the Eyes", "Sales", "Marketing"],
        status: "Available"
    },
    {
        name: "gussie.ai",
        description: "Your AI fashion guru with impeccable style advice and trend insights.",
        tags: ["AI", "Fashion", "Style Guru"],
        status: "Available"
    },
    {
        name: "coretta.ai",
        description: "Elegant AI assistant with a melodious and sophisticated presence.",
        tags: ["AI", "Sweet", "Musical"],
        status: "Available"
    },
    {
        name: "jeanluc.ai",
        description: "Authoritative AI expert with commanding knowledge and leadership qualities.",
        tags: ["AI", "Knowledgeable", "Authoritative", "In Charge"],
        status: "Available"
    },
    {
        name: "billyray.ai",
        description: "Friendly, down-to-earth AI companion who's always there for you.",
        tags: ["AI", "Personable", "Friendly", "Buddy"],
        status: "Available"
    },
    {
        name: "rosemarie.ai",
        description: "Your trusted AI confidant for relationship advice and social guidance.",
        tags: ["AI", "Dating Advice", "Wing Woman"],
        status: "Available"
    },
    {
        name: "strewn.ai",
        description: "AI for organization, pattern recognition, and making sense of scattered data.",
        tags: ["AI", "Data", "Organization"],
        status: "Available"
    },
    {
        name: "superpositioning.ai",
        description: "Quantum-inspired AI for exploring multiple solutions simultaneously.",
        tags: ["AI", "Quantum", "Innovation", "Future of Computing"],
        status: "Available"
    },
    {
        name: "hereshow.ai",
        description: "AI-powered demonstrations, tutorials, and show-and-tell platforms.",
        tags: ["AI", "Demo", "Education", "Explainitory"],
        status: "Available"
    },
    {
        name: "hereis.ai",
        description: "Present and deliver - perfect for AI presentation tools, content delivery, or information services.",
        tags: ["AI", "Presentation", "Content", "Explainitory"],
        status: "Available"
    },
    {
        name: "cutbait.ai",
        description: "AI for decision-making and strategic choices. 'Cut bait or fish' - make the call with AI insights.",
        tags: ["AI", "Business", "Strategy", "Motivation"],
        status: "Available"
    },
    {
        name: "machuniverse.ai",
        description: "Expansive AI ecosystem or multiverse platform. Great for comprehensive AI solutions.",
        tags: ["AI", "Platform", "Enterprise"],
        status: "Available"
    },
    {
        name: "netnav.ai",
        description: "AI-powered web navigation, search, and internet exploration tools.",
        tags: ["AI", "Navigation", "Search", "Web helper"],
        status: "Available"
    },
    {
        name: "quenby.ai",
        description: "Unique personal AI companion with a distinctive, memorable name.",
        tags: ["AI", "Personal", "Unique"],
        status: "Available"
    },
    {
        name: "quentanglement.ai",
        description: "Quantum-inspired AI for complex problem-solving and advanced computational tasks.",
        tags: ["AI", "Science", "Quantum", "Advanced"],
        status: "Available"
    },
    {
        name: "qwendolyn.ai",
        description: "Personal AI assistant with character and sophistication.",
        tags: ["AI", "Personal", "Assistant"],
        status: "Available"
    },
    {
        name: "bobbiesue.ai",
        description: "Friendly, approachable AI companion with a warm, Southern charm.",
        tags: ["AI", "Personal", "Friendly"],
        status: "Available"
    }
];

// Render domains to the grid
function renderDomains(domainsToRender) {
    const grid = document.getElementById('domainsGrid');

    if (domainsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b7280; padding: 40px;">No domains found matching your search.</p>';
        return;
    }

    grid.innerHTML = domainsToRender.map(domain => `
        <div class="domain-card">
            <div class="domain-name">${domain.name}</div>
            <div class="domain-description">${domain.description}</div>
            <div class="domain-tags">
                ${domain.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="domain-status">${domain.status}</div>
        </div>
    `).join('');
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const filteredDomains = domains.filter(domain => {
            return domain.name.toLowerCase().includes(searchTerm) ||
                   domain.description.toLowerCase().includes(searchTerm) ||
                   domain.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });

        renderDomains(filteredDomains);
    });
}

// Contact form handling
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Check honeypot field - if filled, it's a bot
        const honeypot = document.getElementById('honeypot').value;
        if (honeypot) {
            // Silently reject bot submission
            formMessage.textContent = 'Thank you! Your inquiry has been sent successfully.';
            formMessage.className = 'form-message success';
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Send Inquiry';
            return;
        }

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            domain: document.getElementById('domain').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validate form data
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.name.length < 2) {
            formMessage.textContent = 'Please enter a valid name (at least 2 characters).';
            formMessage.className = 'form-message error';
            submitButton.disabled = false;
            submitButton.textContent = 'Send Inquiry';
            return;
        }

        if (!emailRegex.test(formData.email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.className = 'form-message error';
            submitButton.disabled = false;
            submitButton.textContent = 'Send Inquiry';
            return;
        }

        if (formData.domain.length < 3) {
            formMessage.textContent = 'Please enter the domain you are interested in.';
            formMessage.className = 'form-message error';
            submitButton.disabled = false;
            submitButton.textContent = 'Send Inquiry';
            return;
        }

        if (formData.message.length < 10) {
            formMessage.textContent = 'Please enter a message (at least 10 characters).';
            formMessage.className = 'form-message error';
            submitButton.disabled = false;
            submitButton.textContent = 'Send Inquiry';
            return;
        }

        try {
            // Submit to Web3Forms with bot protection
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '82d70441-be9a-4f81-a119-607cf1d0f62a',
                    ...formData
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                formMessage.textContent = 'Thank you! Your inquiry has been sent successfully.';
                formMessage.className = 'form-message success';
                form.reset();
            } else {
                throw new Error(result.message || 'Form submission failed');
            }

        } catch (error) {
            formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
            formMessage.className = 'form-message error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Inquiry';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDomains(domains);
    setupSearch();
    setupContactForm();
});
