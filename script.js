// ========================================
// MODERN PREMIUM PORTFOLIO - JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // === MOBILE MENU TOGGLE ===
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.nav');
    let activeLanguage = 'en';

    // === LANGUAGE SWITCHER ===
    const translations = {
        en: {
            htmlLang: 'en',
            title: 'Muneer Ahmed | Junior Cybersecurity Engineer',
            description: 'Muneer Ahmed - Junior Cybersecurity Engineer specializing in Active Directory security, threat detection, and SOC operations. MSc in Cybersecurity from University of Genoa.',
            ui: {
                emailCopied: 'Email copied to clipboard!',
                backToTop: 'Back to top'
            },
            items: [
                ['.brand-tag', 'Cybersecurity'],
                ['.nav-links a[href="#about"]', 'About'],
                ['.nav-links a[href="#experience"]', 'Experience'],
                ['.nav-links a[href="#projects"]', 'Projects'],
                ['.nav-links a[href="#skills"]', 'Skills'],
                ['.nav-links a[href="#contact"]', 'Contact'],
                ['.hero-label', '<span class="status-dot"></span>Available for Junior SOC & Security Engineering Roles'],
                ['.hero-title', 'Junior Cybersecurity Engineer'],
                ['.hero-subtitle', 'MSc Graduate specializing in <span class="highlight">Active Directory Security</span>, <span class="highlight">Threat Detection</span>, and <span class="highlight">Security Monitoring</span>'],
                ['.hero-description', 'Security-focused engineer with software development foundations in Java and Spring Boot. I understand how systems are built and how they can be secured and monitored for threats.'],
                ['.btn-primary span', 'View Projects'],
                ['.btn-secondary', '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66667 6.66667L8 10L11.3333 6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Download Resume'],
                ['.stat-item:nth-child(1) .stat-label', 'Cybersecurity'],
                ['.stat-item:nth-child(3) .stat-label', 'Internships'],
                ['.stat-item:nth-child(5) .stat-value', 'Italy'],
                ['.stat-item:nth-child(5) .stat-label', 'Based'],
                ['#about .section-label', 'Who I Am'],
                ['#about .section-title', 'About'],
                ['.about-main .lead-text', 'I recently completed my <strong>MSc in Computer Engineering (Cybersecurity)</strong> from the University of Genoa, Italy, with a thesis focused on Active Directory security monitoring and detection.'],
                ['.about-main > p:nth-child(2)', 'During my thesis internship at <strong>Teoresi Group</strong>, I built detection systems for credential-based attacks like Kerberoasting and Pass-the-Hash. I worked with Sysmon, Windows Event Logs, and Python to analyze attacker behavior in enterprise environments.'],
                ['.about-main > p:nth-child(3)', 'My background in <strong>Java and Spring Boot development</strong> gives me a unique advantageâ€”I understand how applications are built, which helps me identify security weaknesses, investigate logs more effectively, and design practical detection strategies.'],
                ['.about-highlight p', '<strong>Currently seeking:</strong> Junior SOC Analyst, Junior Cybersecurity Engineer, Security Consultant, and Detection Engineer roles across Italy. Open to relocation and remote opportunities.'],
                ['.about-sidebar .info-card:nth-child(1) h3', 'Education'],
                ['.about-sidebar .info-card:nth-child(1) strong', 'MSc Computer Engineering'],
                ['.about-sidebar .info-card:nth-child(1) .info-item span:nth-child(2)', 'Cybersecurity Specialization'],
                ['.about-sidebar .info-card:nth-child(1) .info-meta', 'University of Genoa, Italy'],
                ['.about-sidebar .info-card:nth-child(2) h3', 'Languages'],
                ['.language-item:nth-child(1) > span', 'English'],
                ['.language-item:nth-child(2) > span', 'Italian'],
                ['.about-sidebar .info-card:nth-child(3) h3', 'Location'],
                ['.about-sidebar .info-card:nth-child(3) strong', 'Genoa, Italy'],
                ['.about-sidebar .info-card:nth-child(3) .info-item span', 'Open to relocation'],
                ['#experience .section-label', 'My Journey'],
                ['#experience .section-title', 'Experience'],
                ['.timeline-item:nth-child(1) h3', 'Thesis Internship'],
                ['.timeline-item:nth-child(1) .experience-badge', 'Cybersecurity'],
                ['.timeline-item:nth-child(1) .experience-focus', 'Active Directory Security Monitoring & Detection'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(1)', 'Built a controlled Active Directory lab to simulate enterprise attack scenarios including Kerberoasting, Pass-the-Hash, RDP brute force, and credential dumping'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(2)', 'Deployed Sysmon across Windows infrastructure and collected telemetry from Windows Event Logs for attack detection'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(3)', 'Analyzed authentication event IDs and lateral movement patterns to identify attacker behavior'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(4)', 'Developed Python scripts to parse security logs and detect suspicious credential abuse patterns'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(5)', 'Documented detection strategies for credential-based attacks used in enterprise environments'],
                ['.timeline-item:nth-child(1) .tech-tags span:nth-child(3)', 'Windows Event Logs'],
                ['.timeline-item:nth-child(2) h3', 'Security Trainee'],
                ['.timeline-item:nth-child(2) .experience-badge', 'SOC Exposure'],
                ['.timeline-item:nth-child(2) .experience-focus', 'Enterprise Security Operations'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(1)', 'Gained exposure to enterprise security monitoring workflows and incident response processes'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(2)', 'Observed how security alerts are investigated, triaged, and escalated in SOC environments'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(3)', 'Learned enterprise threat detection and response methodologies used by security operations teams'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(4)', 'Studied infrastructure security concepts across network, system, and application layers'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(1)', 'SOC Operations'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(2)', 'Security Monitoring'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(3)', 'Incident Response'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(4)', 'Enterprise Security'],
                ['.timeline-item:nth-child(3) h3', 'IT Support & Systems Administration'],
                ['.timeline-item:nth-child(3) .experience-badge', 'Infrastructure'],
                ['.timeline-item:nth-child(3) .experience-focus', 'Windows Domain Environment'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(1)', 'Managed Active Directory user accounts, groups, and access permissions in Windows domain'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(2)', 'Troubleshot authentication issues, network connectivity, and domain connectivity problems'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(3)', 'Assisted with Windows Server administration tasks and system access configuration'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(4)', 'Gained practical hands-on experience with enterprise Windows infrastructure'],
                ['.timeline-item:nth-child(3) .tech-tags span:nth-child(3)', 'System Administration'],
                ['#projects .section-label', "What I've Built"],
                ['#projects .section-title', 'Featured Projects'],
                ['.featured-badge', '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 0L9.79611 5.52786L15.6085 5.52786L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786L6.20389 5.52786L8 0Z" fill="currentColor"/></svg>Featured Project'],
                ['.project-featured > h3', 'Active Directory Security Monitoring Lab'],
                ['.project-intro', 'Built a comprehensive Windows Active Directory lab environment to simulate realistic enterprise attack scenarios and develop practical detection techniques. This project formed the core of my thesis work at Teoresi Group.'],
                ['.project-block:nth-child(1) h4', 'Attack Scenarios Simulated'],
                ['.project-block:nth-child(1) li:nth-child(1)', '<strong>Kerberoasting</strong> â€” Service ticket extraction and offline cracking'],
                ['.project-block:nth-child(1) li:nth-child(2)', '<strong>Pass-the-Hash</strong> â€” Credential replay attacks for lateral movement'],
                ['.project-block:nth-child(1) li:nth-child(3)', '<strong>RDP Brute Force</strong> â€” Remote access credential attacks'],
                ['.project-block:nth-child(1) li:nth-child(4)', '<strong>SMB Enumeration</strong> â€” Network share discovery and mapping'],
                ['.project-block:nth-child(1) li:nth-child(5)', '<strong>Credential Dumping</strong> â€” LSASS memory extraction techniques'],
                ['.project-block:nth-child(2) h4', 'Detection & Analysis Work'],
                ['.project-block:nth-child(2) li:nth-child(1)', '<strong>Sysmon Deployment</strong> â€” Enhanced logging configuration across Windows infrastructure'],
                ['.project-block:nth-child(2) li:nth-child(2)', '<strong>Event Log Analysis</strong> â€” Identified critical authentication and process creation events'],
                ['.project-block:nth-child(2) li:nth-child(3)', '<strong>Python Automation</strong> â€” Built log parsing scripts to detect suspicious patterns'],
                ['.project-block:nth-child(2) li:nth-child(4)', '<strong>Attack Chain Mapping</strong> â€” Documented detection logic for each attack stage'],
                ['.project-block:nth-child(2) li:nth-child(5)', '<strong>False Positive Analysis</strong> â€” Refined detection rules to reduce noise'],
                ['.project-architecture h4', 'Lab Architecture'],
                ['.domain-controller .node-label', 'Domain Controller'],
                ['.workstations .node-label', 'Client Machines'],
                ['.attacker .node-label', 'Attacker Machine'],
                ['.attacker .node-detail', 'Kali Linux + Tools'],
                ['.tech-stack-featured > strong', 'Technologies:'],
                ['.project-note span', 'Source code cannot be published due to company NDA, but methodology and architecture are documented above'],
                ['.project-card:nth-child(1) h3', 'Web Application Security Testing'],
                ['.project-card:nth-child(1) p', 'Hands-on testing of OWASP Top 10 vulnerabilities using DVWA and PortSwigger Academy. Analyzed SQL injection, XSS, authentication bypasses, and authorization flaws. Documented exploitation techniques and remediation approaches.'],
                ['.project-card:nth-child(2) h3', 'Network Traffic Analysis Lab'],
                ['.project-card:nth-child(2) p', 'Captured and analyzed network traffic to identify suspicious connections and abnormal patterns. Studied how attacks appear in network telemetry and practiced packet-level forensics.'],
                ['.project-card:nth-child(3) h3', 'Backend Development Portfolio'],
                ['.project-card:nth-child(3) p', 'Built REST APIs using Spring Boot with authentication and authorization logic. Implemented Spring Security, database integration, and secure coding practices. This development background informs my security analysis approach.'],
                ['#skills .section-label', 'Technical Expertise'],
                ['#skills .section-title', 'Skills'],
                ['.skill-card:nth-child(1) h3', 'Security Operations'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(1) span', 'Active Directory Security'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(2) span', 'Threat Detection & Monitoring'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(3) span', 'Security Log Analysis'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(4) span', 'Incident Investigation'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(5) span', 'Vulnerability Assessment'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(6) span', 'SIEM Concepts'],
                ['.skill-card:nth-child(2) h3', 'Infrastructure & Systems'],
                ['.skill-card:nth-child(2) .skill-tags span:nth-child(3)', 'Group Policy'],
                ['.skill-card:nth-child(2) .skill-tags span:nth-child(5)', 'TCP/IP Networking'],
                ['.skill-card:nth-child(3) h3', 'Security Tools'],
                ['.skill-card:nth-child(4) h3', 'Programming & Scripting'],
                ['.certifications > h3', 'Certifications & Training'],
                ['.cert-card:nth-child(1) h4', 'Web Application Pentesting'],
                ['.cert-card:nth-child(2) h4', 'Junior Penetration Tester'],
                ['.cert-card:nth-child(3) h4', 'Cyber Security Threat Landscape'],
                ['.cert-link span', 'View', true],
                ['#contact .section-label', 'Get In Touch'],
                ['#contact .section-title', "Let's Connect"],
                ['.contact-text:nth-of-type(1)', "I'm currently seeking <strong>Junior SOC Analyst</strong>, <strong>Junior Cybersecurity Engineer</strong>, <strong>Security Consultant</strong>, and <strong>Detection Engineer</strong> opportunities across Italy."],
                ['.contact-text:nth-of-type(2)', 'Open to <span class="highlight">full-time positions</span>, <span class="highlight">relocation</span>, and <span class="highlight">remote work</span>.'],
                ['.contact-btn.primary', '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 5L10 11L2 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Email Me'],
                ['.contact-info .info-block:nth-child(1) strong', 'Email'],
                ['.contact-info .info-block:nth-child(2) strong', 'Location'],
                ['.contact-info .info-block:nth-child(2) span', 'Genoa, Italy'],
                ['.contact-info .info-block:nth-child(3) strong', 'Open To'],
                ['.contact-info .info-block:nth-child(3) span', 'Full-time â€¢ Relocation â€¢ Remote'],
                ['.footer-left p', '&copy; 2026 Muneer Ahmed. All rights reserved.'],
                ['.footer-right a', 'Back to Top â†‘']
            ]
        },
        it: {
            htmlLang: 'it',
            title: 'Muneer Ahmed | Junior Cybersecurity Engineer',
            description: 'Muneer Ahmed - Junior Cybersecurity Engineer specializzato in sicurezza Active Directory, rilevamento delle minacce e operazioni SOC. MSc in Cybersecurity presso l Universita di Genova.',
            ui: {
                emailCopied: 'Email copiata negli appunti!',
                backToTop: 'Torna su'
            },
            items: [
                ['.brand-tag', 'Cybersecurity'],
                ['.nav-links a[href="#about"]', 'Chi sono'],
                ['.nav-links a[href="#experience"]', 'Esperienza'],
                ['.nav-links a[href="#projects"]', 'Progetti'],
                ['.nav-links a[href="#skills"]', 'Competenze'],
                ['.nav-links a[href="#contact"]', 'Contatto'],
                ['.hero-label', '<span class="status-dot"></span>Disponibile per ruoli Junior SOC e Security Engineering'],
                ['.hero-title', 'Junior Cybersecurity Engineer'],
                ['.hero-subtitle', 'Laureato MSc specializzato in <span class="highlight">Sicurezza Active Directory</span>, <span class="highlight">Rilevamento delle Minacce</span> e <span class="highlight">Monitoraggio della Sicurezza</span>'],
                ['.hero-description', 'Ingegnere orientato alla sicurezza con basi di sviluppo software in Java e Spring Boot. Comprendo come vengono costruiti i sistemi e come possono essere protetti e monitorati contro le minacce.'],
                ['.btn-primary span', 'Vedi Progetti'],
                ['.btn-secondary', '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66667 6.66667L8 10L11.3333 6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Scarica CV'],
                ['.stat-item:nth-child(1) .stat-label', 'Cybersecurity'],
                ['.stat-item:nth-child(3) .stat-label', 'Tirocini'],
                ['.stat-item:nth-child(5) .stat-value', 'Italia'],
                ['.stat-item:nth-child(5) .stat-label', 'Sede'],
                ['#about .section-label', 'Chi sono'],
                ['#about .section-title', 'Profilo'],
                ['.about-main .lead-text', 'Ho recentemente completato il mio <strong>MSc in Computer Engineering (Cybersecurity)</strong> presso l Universita di Genova, Italia, con una tesi focalizzata sul monitoraggio e rilevamento della sicurezza in Active Directory.'],
                ['.about-main > p:nth-child(2)', 'Durante il tirocinio di tesi presso <strong>Teoresi Group</strong>, ho costruito sistemi di rilevamento per attacchi basati sulle credenziali come Kerberoasting e Pass-the-Hash. Ho lavorato con Sysmon, Windows Event Logs e Python per analizzare il comportamento degli attaccanti in ambienti aziendali.'],
                ['.about-main > p:nth-child(3)', 'Il mio background in <strong>sviluppo Java e Spring Boot</strong> mi offre un vantaggio concreto: capisco come sono costruite le applicazioni, il che mi aiuta a individuare debolezze di sicurezza, investigare i log in modo piu efficace e progettare strategie di rilevamento pratiche.'],
                ['.about-highlight p', '<strong>Attualmente cerco:</strong> ruoli come Junior SOC Analyst, Junior Cybersecurity Engineer, Security Consultant e Detection Engineer in Italia. Aperto a trasferimento e opportunita da remoto.'],
                ['.about-sidebar .info-card:nth-child(1) h3', 'Formazione'],
                ['.about-sidebar .info-card:nth-child(1) strong', 'MSc Computer Engineering'],
                ['.about-sidebar .info-card:nth-child(1) .info-item span:nth-child(2)', 'Specializzazione in Cybersecurity'],
                ['.about-sidebar .info-card:nth-child(1) .info-meta', 'Universita di Genova, Italia'],
                ['.about-sidebar .info-card:nth-child(2) h3', 'Lingue'],
                ['.language-item:nth-child(1) > span', 'Inglese'],
                ['.language-item:nth-child(2) > span', 'Italiano'],
                ['.about-sidebar .info-card:nth-child(3) h3', 'Posizione'],
                ['.about-sidebar .info-card:nth-child(3) strong', 'Genova, Italia'],
                ['.about-sidebar .info-card:nth-child(3) .info-item span', 'Aperto al trasferimento'],
                ['#experience .section-label', 'Il mio percorso'],
                ['#experience .section-title', 'Esperienza'],
                ['.timeline-item:nth-child(1) h3', 'Tirocinio di tesi'],
                ['.timeline-item:nth-child(1) .experience-badge', 'Cybersecurity'],
                ['.timeline-item:nth-child(1) .experience-focus', 'Monitoraggio e rilevamento della sicurezza Active Directory'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(1)', 'Ho costruito un laboratorio Active Directory controllato per simulare scenari di attacco aziendali, inclusi Kerberoasting, Pass-the-Hash, brute force RDP e credential dumping'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(2)', 'Ho distribuito Sysmon su infrastruttura Windows e raccolto telemetria dai Windows Event Logs per il rilevamento degli attacchi'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(3)', 'Ho analizzato ID evento di autenticazione e pattern di movimento laterale per identificare il comportamento degli attaccanti'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(4)', 'Ho sviluppato script Python per analizzare log di sicurezza e rilevare pattern sospetti di abuso delle credenziali'],
                ['.timeline-item:nth-child(1) .experience-list li:nth-child(5)', 'Ho documentato strategie di rilevamento per attacchi basati sulle credenziali usati in ambienti aziendali'],
                ['.timeline-item:nth-child(1) .tech-tags span:nth-child(3)', 'Event Log Windows'],
                ['.timeline-item:nth-child(2) h3', 'Security Trainee'],
                ['.timeline-item:nth-child(2) .experience-badge', 'Esperienza SOC'],
                ['.timeline-item:nth-child(2) .experience-focus', 'Operazioni di sicurezza aziendale'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(1)', 'Ho acquisito esperienza nei workflow di monitoraggio della sicurezza aziendale e nei processi di incident response'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(2)', 'Ho osservato come gli alert di sicurezza vengono investigati, classificati ed escalati in ambienti SOC'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(3)', 'Ho appreso metodologie aziendali di threat detection e response usate dai team di security operations'],
                ['.timeline-item:nth-child(2) .experience-list li:nth-child(4)', 'Ho studiato concetti di sicurezza infrastrutturale su livelli rete, sistema e applicazione'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(1)', 'Operazioni SOC'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(2)', 'Monitoraggio sicurezza'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(3)', 'Incident Response'],
                ['.timeline-item:nth-child(2) .tech-tags span:nth-child(4)', 'Sicurezza aziendale'],
                ['.timeline-item:nth-child(3) h3', 'IT Support e amministrazione sistemi'],
                ['.timeline-item:nth-child(3) .experience-badge', 'Infrastruttura'],
                ['.timeline-item:nth-child(3) .experience-focus', 'Ambiente di dominio Windows'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(1)', 'Ho gestito account utente, gruppi e permessi di accesso in Active Directory su dominio Windows'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(2)', 'Ho risolto problemi di autenticazione, connettivita di rete e connessione al dominio'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(3)', 'Ho supportato attivita di amministrazione Windows Server e configurazione degli accessi di sistema'],
                ['.timeline-item:nth-child(3) .experience-list li:nth-child(4)', 'Ho acquisito esperienza pratica con infrastrutture Windows aziendali'],
                ['.timeline-item:nth-child(3) .tech-tags span:nth-child(3)', 'Amministrazione sistemi'],
                ['#projects .section-label', 'Cosa ho costruito'],
                ['#projects .section-title', 'Progetti in evidenza'],
                ['.featured-badge', '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 0L9.79611 5.52786L15.6085 5.52786L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786L6.20389 5.52786L8 0Z" fill="currentColor"/></svg>Progetto in evidenza'],
                ['.project-featured > h3', 'Laboratorio di monitoraggio sicurezza Active Directory'],
                ['.project-intro', 'Ho costruito un ambiente di laboratorio Windows Active Directory completo per simulare scenari di attacco aziendali realistici e sviluppare tecniche pratiche di rilevamento. Questo progetto e stato il nucleo del mio lavoro di tesi presso Teoresi Group.'],
                ['.project-block:nth-child(1) h4', 'Scenari di attacco simulati'],
                ['.project-block:nth-child(1) li:nth-child(1)', '<strong>Kerberoasting</strong> â€” Estrazione di service ticket e cracking offline'],
                ['.project-block:nth-child(1) li:nth-child(2)', '<strong>Pass-the-Hash</strong> â€” Attacchi di replay delle credenziali per movimento laterale'],
                ['.project-block:nth-child(1) li:nth-child(3)', '<strong>RDP Brute Force</strong> â€” Attacchi alle credenziali di accesso remoto'],
                ['.project-block:nth-child(1) li:nth-child(4)', '<strong>SMB Enumeration</strong> â€” Scoperta e mappatura delle condivisioni di rete'],
                ['.project-block:nth-child(1) li:nth-child(5)', '<strong>Credential Dumping</strong> â€” Tecniche di estrazione dalla memoria LSASS'],
                ['.project-block:nth-child(2) h4', 'Lavoro di rilevamento e analisi'],
                ['.project-block:nth-child(2) li:nth-child(1)', '<strong>Distribuzione Sysmon</strong> â€” Configurazione di logging avanzato su infrastruttura Windows'],
                ['.project-block:nth-child(2) li:nth-child(2)', '<strong>Analisi Event Log</strong> â€” Identificazione di eventi critici di autenticazione e creazione processi'],
                ['.project-block:nth-child(2) li:nth-child(3)', '<strong>Automazione Python</strong> â€” Script di parsing log per rilevare pattern sospetti'],
                ['.project-block:nth-child(2) li:nth-child(4)', '<strong>Mappatura Attack Chain</strong> â€” Documentazione della logica di rilevamento per ogni fase dell attacco'],
                ['.project-block:nth-child(2) li:nth-child(5)', '<strong>Analisi falsi positivi</strong> â€” Affinamento delle regole per ridurre il rumore'],
                ['.project-architecture h4', 'Architettura del laboratorio'],
                ['.domain-controller .node-label', 'Domain Controller'],
                ['.workstations .node-label', 'Client'],
                ['.attacker .node-label', 'Macchina attaccante'],
                ['.attacker .node-detail', 'Kali Linux + Strumenti'],
                ['.tech-stack-featured > strong', 'Tecnologie:'],
                ['.project-note span', 'Il codice sorgente non puo essere pubblicato per NDA aziendale, ma metodologia e architettura sono documentate sopra'],
                ['.project-card:nth-child(1) h3', 'Test di sicurezza applicazioni web'],
                ['.project-card:nth-child(1) p', 'Testing pratico delle vulnerabilita OWASP Top 10 con DVWA e PortSwigger Academy. Ho analizzato SQL injection, XSS, bypass di autenticazione e flaw di autorizzazione, documentando tecniche di sfruttamento e approcci di remediation.'],
                ['.project-card:nth-child(2) h3', 'Laboratorio di analisi traffico di rete'],
                ['.project-card:nth-child(2) p', 'Ho catturato e analizzato traffico di rete per identificare connessioni sospette e pattern anomali. Ho studiato come gli attacchi appaiono nella telemetria di rete e praticato analisi forense a livello pacchetto.'],
                ['.project-card:nth-child(3) h3', 'Portfolio di sviluppo backend'],
                ['.project-card:nth-child(3) p', 'Ho costruito REST API con Spring Boot, includendo logiche di autenticazione e autorizzazione. Ho implementato Spring Security, integrazione database e pratiche di secure coding. Questo background di sviluppo rafforza il mio approccio all analisi di sicurezza.'],
                ['#skills .section-label', 'Competenza tecnica'],
                ['#skills .section-title', 'Competenze'],
                ['.skill-card:nth-child(1) h3', 'Security Operations'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(1) span', 'Sicurezza Active Directory'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(2) span', 'Threat Detection e monitoraggio'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(3) span', 'Analisi log di sicurezza'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(4) span', 'Investigazione incidenti'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(5) span', 'Valutazione vulnerabilita'],
                ['.skill-card:nth-child(1) .skill-item:nth-child(6) span', 'Concetti SIEM'],
                ['.skill-card:nth-child(2) h3', 'Infrastruttura e sistemi'],
                ['.skill-card:nth-child(2) .skill-tags span:nth-child(3)', 'Criteri di gruppo'],
                ['.skill-card:nth-child(2) .skill-tags span:nth-child(5)', 'Reti TCP/IP'],
                ['.skill-card:nth-child(3) h3', 'Strumenti di sicurezza'],
                ['.skill-card:nth-child(4) h3', 'Programmazione e scripting'],
                ['.certifications > h3', 'Certificazioni e formazione'],
                ['.cert-card:nth-child(1) h4', 'Web Application Pentesting'],
                ['.cert-card:nth-child(2) h4', 'Junior Penetration Tester'],
                ['.cert-card:nth-child(3) h4', 'Cyber Security Threat Landscape'],
                ['.cert-link span', 'Vedi', true],
                ['#contact .section-label', 'Contattami'],
                ['#contact .section-title', 'Connettiamoci'],
                ['.contact-text:nth-of-type(1)', 'Attualmente cerco opportunita come <strong>Junior SOC Analyst</strong>, <strong>Junior Cybersecurity Engineer</strong>, <strong>Security Consultant</strong> e <strong>Detection Engineer</strong> in Italia.'],
                ['.contact-text:nth-of-type(2)', 'Aperto a <span class="highlight">posizioni full-time</span>, <span class="highlight">trasferimento</span> e <span class="highlight">lavoro da remoto</span>.'],
                ['.contact-btn.primary', '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 5L10 11L2 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Scrivimi'],
                ['.contact-info .info-block:nth-child(1) strong', 'Email'],
                ['.contact-info .info-block:nth-child(2) strong', 'Posizione'],
                ['.contact-info .info-block:nth-child(2) span', 'Genova, Italia'],
                ['.contact-info .info-block:nth-child(3) strong', 'Aperto a'],
                ['.contact-info .info-block:nth-child(3) span', 'Full-time â€¢ Trasferimento â€¢ Remoto'],
                ['.footer-left p', '&copy; 2026 Muneer Ahmed. Tutti i diritti riservati.'],
                ['.footer-right a', 'Torna su â†‘']
            ]
        }
    };

    function applyLanguage(language) {
        const translation = translations[language];
        if (!translation) return;

        activeLanguage = language;
        document.documentElement.lang = translation.htmlLang;
        document.title = translation.title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', translation.description);
        }

        translation.items.forEach(([selector, value, all]) => {
            const elements = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];
            elements.forEach(element => {
                if (element) {
                    element.innerHTML = value;
                }
            });
        });

        document.querySelectorAll('.lang-btn').forEach(button => {
            const isActive = button.dataset.lang === language;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        const languageSwitcher = document.querySelector('.language-switcher');
        if (languageSwitcher) {
            languageSwitcher.setAttribute('aria-label', language === 'it' ? 'Selettore lingua' : 'Language selector');
        }

        const backToTopButton = document.querySelector('[data-back-to-top]');
        if (backToTopButton) {
            backToTopButton.setAttribute('aria-label', translation.ui.backToTop);
        }
    }

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            applyLanguage(this.dataset.lang);
        });
    });

    applyLanguage('en');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // === NAVBAR SCROLL EFFECT ===
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background effect
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = nav.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === ACTIVE NAVIGATION HIGHLIGHT ===
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.nav-links a:not(.nav-cta)');

    function highlightNavigation() {
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Remove active class when at top of page
        if (window.pageYOffset < 100) {
            navLinksArray.forEach(link => link.classList.remove('active'));
        }
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial call

    // === SCROLL REVEAL ANIMATIONS ===
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stop observing once revealed for better performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to reveal on scroll
    const revealElements = document.querySelectorAll(
        '.project-card, .skill-card, .timeline-item, .cert-card, .info-card'
    );

    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        revealObserver.observe(el);
    });

    // === SKILL BAR ANIMATIONS ===
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.level-fill, .bar-fill');
                fills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .info-card').forEach(card => {
        skillObserver.observe(card);
    });

    // === PARALLAX EFFECT FOR HERO BACKGROUND ===
    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');

    if (heroSection && heroBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;

            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // === TYPING EFFECT FOR HERO TITLE (Optional) ===
    // Uncomment if you want a typing animation effect
    /*
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';

        let index = 0;
        function type() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        }

        setTimeout(type, 500);
    }
    */

    // === CARD TILT EFFECT (SUBTLE 3D HOVER) ===
    const cards = document.querySelectorAll('.project-card, .skill-card, .cert-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });

    // === LAZY LOADING FOR IMAGES ===
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // === COPY EMAIL ON CLICK ===
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.href.replace('mailto:', '');

            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification(translations[activeLanguage].ui.emailCopied);
                }).catch(err => {
                    console.error('Failed to copy email:', err);
                });
            }
        });
    });

    // === NOTIFICATION SYSTEM ===
    function showNotification(message, duration = 3000) {
        // Remove existing notification if any
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            padding: 1rem 1.5rem;
            background: var(--accent-primary);
            color: white;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Remove notification after duration
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    // Add notification animations to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // === READING PROGRESS BAR ===
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-light));
        z-index: 10000;
        transition: width 0.1s ease-out;
        width: 0%;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    // === BACK TO TOP BUTTON ===
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--accent-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
        box-shadow: var(--shadow-lg);
        z-index: 999;
    `;
    backToTopBtn.setAttribute('aria-label', translations[activeLanguage].ui.backToTop);
    backToTopBtn.setAttribute('data-back-to-top', 'true');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.1)';
        this.style.boxShadow = 'var(--shadow-glow)';
    });

    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = 'var(--shadow-lg)';
    });

    // === PERFORMANCE: DEBOUNCE SCROLL EVENTS ===
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-heavy functions
    const debouncedHighlight = debounce(highlightNavigation, 100);
    window.removeEventListener('scroll', highlightNavigation);
    window.addEventListener('scroll', debouncedHighlight);

    // === CONSOLE MESSAGE ===
    console.log('%c👋 Hello! Thanks for checking out my portfolio.', 'font-size: 16px; color: #3b82f6; font-weight: bold;');
    console.log('%cLooking for a Junior Cybersecurity Engineer? Let\'s connect!', 'font-size: 14px; color: #60a5fa;');
    console.log('%cLinkedIn: https://www.linkedin.com/in/muneer-jamali/', 'font-size: 12px; color: #94a3b8;');

    // === EASTER EGG: KONAMI CODE ===
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                showNotification('🎮 Konami Code Activated! You found the easter egg!', 5000);
                document.body.style.animation = 'rainbow 2s linear infinite';
                konamiIndex = 0;

                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
            }
        } else {
            konamiIndex = 0;
        }
    });

    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);

    // === INITIALIZE ===
    console.log('✅ Portfolio initialized successfully!');
});

// === PRELOADER (Optional - Uncomment if needed) ===
/*
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        inset: 0;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        transition: opacity 0.5s ease-out;
    `;
    preloader.innerHTML = '<div style="width: 50px; height: 50px; border: 4px solid var(--border-light); border-top-color: var(--accent-primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>';

    const spinStyle = document.createElement('style');
    spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(spinStyle);

    document.body.appendChild(preloader);

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 500);
    }, 500);
});
*/
