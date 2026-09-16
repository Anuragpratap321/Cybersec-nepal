import { Article, VideoItem, NewsItem, TopicTrack, AttackDefendItem, GlossaryTerm, ResourceToolkitItem, RoadmapLevel } from '../types';

export const FEATURED_ARTICLES: Article[] = [
  {
    id: 'art-mobile-banking-security-nepal',
    category: 'CYBER NEWS',
    title: 'Digital Wallets & Mobile Banking in Nepal: How Scammers Exploit OTP & SIM Swaps',
    excerpt: 'As QR payments and digital banking surge across Nepal, fraudulent OTP capture and SIM card clones are rising. Here is how modern financial fraud works—and how to harden your accounts.',
    readingTime: '6 min read',
    date: 'Sep 14, 2026',
    author: {
      name: 'Bikash Shrestha',
      role: 'Head of Threat Research',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    source: 'CyberSec Nepal Research Labs',
    featured: true,
    tags: ['Mobile Banking', 'SIM Swap', 'OTP Fraud', 'Nepal FinTech', 'MFA'],
    content: [
      'In recent months, cybersecurity incident reporting centers in Kathmandu and regional hubs have noted a clear shift in cybercrime tactics: instead of breaching bank mainframes, cybercriminals are targeting the weakest link in the chain—the mobile subscriber identity.',
      'A SIM swap attack occurs when a fraudster social-engineers a mobile carrier into reassigning your legitimate phone number to a replacement SIM card under their control. Once the transfer completes, the attacker receives all SMS verification codes, one-time passwords (OTPs), and password reset tokens.',
      'In Nepal, mobile banking apps, popular digital wallets, and e-commerce accounts overwhelmingly rely on SMS-based 2FA as their sole authentication verification layer. When the SIM card is compromised, the attacker can drain funds in minutes through rapid QR transfers.',
      'Key Defense Recommendations:',
      '1. Replace SMS 2FA with hardware tokens or authenticator apps (TOTP) such as Aegis, Bitwarden Authenticator, or Google Authenticator wherever supported.',
      '2. Protect your carrier account with an in-person PIN or biometric lock to block unauthorized SIM reissuance.',
      '3. Immediately contact your telecom provider if your phone suddenly loses cellular signal in a normally stable area.'
    ],
    keyTakeaways: [
      'SIM swapping bypasses standard SMS OTP verification without needing your bank password.',
      'Hardware tokens and app-based authenticators offer vastly superior protection compared to SMS.',
      'Sudden loss of cell reception accompanied by unexpected emails is an urgent red flag.'
    ]
  },
  {
    id: 'art-browser-tracking-fingerprinting',
    category: 'PRIVACY',
    title: 'Beyond Cookies: How Canvas Fingerprinting Tracks You Across the Web',
    excerpt: 'Even in incognito mode with third-party cookies blocked, web trackers can identify your device through hardware rendering nuances and audio APIs.',
    readingTime: '4 min read',
    date: 'Sep 12, 2026',
    author: {
      name: 'Pooja Adhikari',
      role: 'Privacy & Digital Rights Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    source: 'Electronic Frontier Foundation & CyberSec Nepal',
    tags: ['Privacy', 'Browser Fingerprinting', 'Ad Trackers', 'Web Security'],
    content: [
      'Private browsing windows only erase your local session cookies and browsing history; they do nothing to prevent servers from generating a unique hardware fingerprint.',
      'When your browser renders a hidden 2D canvas graphic, minor micro-variations in your GPU driver, font rasterization, and operating system build produce a deterministic hash that remains identical over time.',
      'To mitigate browser fingerprinting, consider modern privacy-preserving browsers like Firefox with Enhanced Tracking Protection or Brave, which inject subtle randomized noise into canvas outputs.'
    ],
    keyTakeaways: [
      'Incognito mode hides history from people using your laptop, not from websites.',
      'Canvas fingerprinting uses your GPU and font rendering to generate a persistent ID.',
      'Use privacy-hardened browsers with anti-fingerprinting protections.'
    ]
  },
  {
    id: 'art-ai-security-prompt-injection',
    category: 'AI SECURITY',
    title: 'The Reality of Prompt Injections: Why Large Language Models Struggle with Trust',
    excerpt: 'When user input and control instructions are processed within the same text stream, AI agents remain fundamentally susceptible to indirect manipulation.',
    readingTime: '5 min read',
    date: 'Sep 10, 2026',
    author: {
      name: 'Rohan Thapa',
      role: 'AI Security Researcher',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    source: 'OWASP Top 10 for LLMs',
    tags: ['AI Security', 'LLM Vulnerabilities', 'Prompt Injection', 'Deep Learning'],
    content: [
      'Prompt injection is widely considered the SQL injection of the modern artificial intelligence era. Unlike classical software with distinct control and data buses, generative LLMs accept both system instructions and untrusted user documents in the exact same context window.',
      'In indirect prompt injection attacks, malicious directives are embedded inside webpage text, PDF resumes, or database records. When an AI summarizer digests the file, it unwittingly follows the hidden instructions to leak data or perform unintended actions.',
      'Developers building LLM tooling must treat all model outputs as untrusted and enforce rigorous schema validation and restricted privilege tokens.'
    ],
    keyTakeaways: [
      'LLMs lack a physical separation between system commands and untrusted user input.',
      'Indirect prompt injection turns documents and websites into invisible attack vectors.',
      'Principle of least privilege must be applied to all autonomous AI tool connectors.'
    ]
  },
  {
    id: 'art-ethical-hacking-api-vulnerabilities',
    category: 'ETHICAL HACKING',
    title: 'Responsible Disclosure in Nepal: Finding Broken Object Level Auth (BOLA)',
    excerpt: 'A beginner-friendly technical walkthrough of how broken authorization bugs occur in modern REST APIs and why responsible bug bounty reporting matters.',
    readingTime: '7 min read',
    date: 'Sep 08, 2026',
    author: {
      name: 'Aayush Karki',
      role: 'Offensive Security Specialist (OSCP)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    source: 'OWASP API Security Project',
    tags: ['API Security', 'BOLA', 'Ethical Hacking', 'Bug Bounty'],
    content: [
      'Broken Object Level Authorization (BOLA) consistently ranks as the number one API vulnerability worldwide. It happens when an endpoint blindly trusts user input—such as an account ID parameter—without verifying whether the requesting user actually owns that resource.',
      'For example, changing /api/user/1042/invoice to /api/user/1043/invoice shouldn\'t display someone else\'s bill. Yet thousands of web apps fail this simple check due to missing access control middleware.',
      'Responsible security researchers document reproduction steps with minimal impact, immediately notify the developer, and give them a reasonable remediation window before publishing any details.'
    ],
    keyTakeaways: [
      'BOLA occurs when servers check WHO you are, but forget to verify WHAT you are allowed to view.',
      'Never test unauthorized infrastructure without explicit written scope and permission.',
      'Always follow coordinated vulnerability disclosure practices.'
    ]
  },
  {
    id: 'art-scam-deepfake-voice-fraud',
    category: 'SCAMS',
    title: 'AI Voice Cloning Scams: How 3 Seconds of Audio Can Impersonate Family',
    excerpt: 'Scammers are scraping public voice clips from social media to execute urgent emergency distress calls to relatives. Here is the exact playbook to protect your family.',
    readingTime: '5 min read',
    date: 'Sep 05, 2026',
    author: {
      name: 'Pooja Adhikari',
      role: 'Privacy & Digital Rights Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
    source: 'Global Anti-Scam Alliance (GASA)',
    tags: ['AI Scams', 'Voice Cloning', 'Social Engineering', 'Family Safety'],
    content: [
      'With neural audio synthesis models widely accessible, an attacker needs as little as three to five seconds of clear vocal speech—harvested from a public TikTok video or Instagram Reel—to clone someone\'s cadence and emotional tone.',
      'The scam begins with a frantic phone call to an elderly parent or sibling claiming an immediate emergency, police detention, or accident requiring instant wire transfer.',
      'The simplest, foolproof defense against voice deepfakes is establishing a private verbal "family safe word" that cannot be discovered online.'
    ],
    keyTakeaways: [
      'High-quality voice clones can now be generated with under 5 seconds of audio.',
      'Establish a secret offline family safe word for any unexpected emergency financial request.',
      'Always hang up and call the family member back directly on their known verified number.'
    ]
  }
];

export const TOPIC_TRACKS: TopicTrack[] = [
  {
    id: 'topic-cybersecurity',
    num: '01',
    title: 'Cybersecurity',
    tagline: 'Defend & Understand',
    description: 'Learn how cyber attacks work and how modern defensive architectures protect users, systems, and global networks.',
    modulesCount: 8,
    level: 'All Audiences',
    icon: 'ShieldCheck',
    highlights: ['Attack Surfaces', 'Network Security', 'Zero Trust Architecture', 'Incident Response']
  },
  {
    id: 'topic-ethical-hacking',
    num: '02',
    title: 'Ethical Hacking',
    tagline: 'Offense Informs Defense',
    description: 'Understand penetration testing, vulnerability assessment, responsible disclosure, and safe hands-on security labs.',
    modulesCount: 12,
    level: 'Intermediate',
    icon: 'Terminal',
    highlights: ['Reconnaissance', 'Web App Vulnerabilities', 'API Testing', 'Bug Bounty Ethics']
  },
  {
    id: 'topic-privacy',
    num: '03',
    title: 'Privacy',
    tagline: 'Own Your Digital Footprint',
    description: 'Learn how websites, apps, advertisers, and surveillance brokers collect, monetize, and cross-reference your personal data.',
    modulesCount: 6,
    level: 'Beginner',
    icon: 'EyeOff',
    highlights: ['Data Brokers', 'Browser Hardening', 'End-to-End Encryption', 'Metadata Trails']
  },
  {
    id: 'topic-ai-security',
    num: '04',
    title: 'AI × Security',
    tagline: 'The Next Threat Frontier',
    description: 'Explore how generative artificial intelligence, automated exploit synthesis, and synthetic media are reshaping cyber warfare.',
    modulesCount: 7,
    level: 'Intermediate',
    icon: 'Cpu',
    highlights: ['Prompt Injection', 'Deepfake Detection', 'Autonomous Agents', 'Model Poisoning']
  },
  {
    id: 'topic-scam-awareness',
    num: '05',
    title: 'Scam Awareness',
    tagline: 'Spot the Trap Before It Sprung',
    description: 'Understand phishing, social engineering, lottery frauds, impersonation schemes, and digital payment fraud in Nepal.',
    modulesCount: 9,
    level: 'All Audiences',
    icon: 'AlertTriangle',
    highlights: ['Social Engineering', 'Fake Job Offers', 'QR Code Scams', 'Cryptocurrency Schemes']
  },
  {
    id: 'topic-tech-tips',
    num: '06',
    title: 'Tech Tips',
    tagline: 'Practical Everyday Habits',
    description: 'Actionable security hygiene and device configuration tips that give you 95% protection with minimal friction.',
    modulesCount: 10,
    level: 'Beginner',
    icon: 'Sparkles',
    highlights: ['Password Managers', 'Hardware Security Keys', 'Router Hardening', 'Backup Strategies']
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'vid-browser-tracking',
    title: 'Your Browser Is Tracking You (Even in Incognito Mode)',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    duration: '04:18',
    category: 'PRIVACY',
    views: '48.2K views',
    date: '3 days ago',
    summary: 'A visual breakdown of canvas fingerprints, WebRTC IP leakage, and why your private tab only protects you from local roommates, not commercial ad networks.',
    keyTakeaways: [
      'Private windows delete cookies upon close, but do not disguise your hardware specs.',
      'WebRTC can disclose your real local and public IP even behind standard proxies.',
      'Switch to privacy-respecting browsers and disable third-party telemetry.'
    ],
    chapters: [
      { time: '00:00', title: 'The Incognito Myth' },
      { time: '01:15', title: 'How Canvas Fingerprinting Works' },
      { time: '02:40', title: 'Testing Your Own Browser' },
      { time: '03:30', title: 'Recommended Privacy Shields' }
    ]
  },
  {
    id: 'vid-phishing-link',
    title: 'What Happens When You Click a Phishing Link?',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    duration: '05:42',
    category: 'SCAMS',
    views: '89.6K views',
    date: '1 week ago',
    summary: 'We spin up an isolated virtual sandbox and follow the exact execution path of a modern reverse-proxy phishing kit harvesting credentials and session cookies.',
    keyTakeaways: [
      'Modern adversary-in-the-middle kits steal session cookies, bypassing traditional SMS 2FA.',
      'Inspect the top-level domain carefully (e.g., login.bank.com vs login.bank-secure.xyz).',
      'FIDO2/WebAuthn hardware keys mathematically reject phishing domains.'
    ],
    chapters: [
      { time: '00:00', title: 'The Anatomy of a Malicious Email' },
      { time: '01:30', title: 'Adversary-in-the-Middle Explained' },
      { time: '03:10', title: 'Why SMS OTP Failed' },
      { time: '04:45', title: 'The Hardware Key Solution' }
    ]
  },
  {
    id: 'vid-wifi-hack',
    title: 'Can Someone Hack You Through Public Wi-Fi?',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    duration: '03:55',
    category: 'CYBERSECURITY',
    views: '62.1K views',
    date: '2 weeks ago',
    summary: 'Is open cafe Wi-Fi as dangerous as people say? We explain the truth about TLS encryption, DNS spoofing, Evil Twin access points, and encrypted DNS (DoH).',
    keyTakeaways: [
      'HTTPS protects the payload of your web traffic from plain sniffing on Wi-Fi.',
      'However, untrusted Wi-Fi can still spoof DNS and inspect domain names you visit.',
      'Enable DNS-over-HTTPS (DoH) and use a trustworthy VPN on untrusted public routers.'
    ],
    chapters: [
      { time: '00:00', title: 'Coffee Shop Network Reality' },
      { time: '01:05', title: 'What HTTPS Encrypts (And What It Leaks)' },
      { time: '02:20', title: 'Evil Twin Routers' },
      { time: '03:15', title: 'Best Practices in Transit' }
    ]
  },
  {
    id: 'vid-password-reuse',
    title: 'Why You Should Never Reuse Passwords',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    duration: '04:30',
    category: 'TECH',
    views: '115K views',
    date: '3 weeks ago',
    summary: 'How credential stuffing automated bots test billions of leaked credentials against eSewa, Gmail, Facebook, and banking portals every single day.',
    keyTakeaways: [
      'A breach at an obscure gaming forum can compromise your primary email if you share passwords.',
      'Automated botnets execute credential stuffing at millions of attempts per minute.',
      'Generate random 16+ character passwords stored inside an encrypted password vault.'
    ],
    chapters: [
      { time: '00:00', title: 'Where Leaked Passwords Go' },
      { time: '01:10', title: 'Credential Stuffing in Action' },
      { time: '02:35', title: 'How Password Managers Work' },
      { time: '03:40', title: 'Setting Up Passkeys' }
    ]
  },
  {
    id: 'vid-scammers-info',
    title: 'How Scammers Find Your Information Online (OSINT)',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    duration: '06:12',
    category: 'ETHICAL HACKING',
    views: '73.4K views',
    date: '1 month ago',
    summary: 'Watch an ethical security researcher demonstrate Open-Source Intelligence (OSINT) to see how publicly posted boarding passes, birthdays, and check-ins assemble your profile.',
    keyTakeaways: [
      'Boarding pass barcodes and event tickets contain your full PNR and frequent flyer numbers.',
      'Geo-tagging your home or workplace provides attackers with personal routine timings.',
      'Regularly audit your public privacy settings across social platforms.'
    ],
    chapters: [
      { time: '00:00', title: 'What is OSINT?' },
      { time: '01:45', title: 'The Danger of Boarding Pass Photos' },
      { time: '03:20', title: 'Data Aggregators' },
      { time: '05:00', title: 'Auditing Your Digital Footprint' }
    ]
  },
  {
    id: 'vid-vpn-explanation',
    title: 'What Does a VPN Actually Do? (And What It Doesn’t)',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    duration: '05:08',
    category: 'SECURITY BASICS',
    views: '94.8K views',
    date: '1 month ago',
    summary: 'Cutting through the misleading marketing hype: what encrypted tunnels protect, what VPN providers can see, and why a VPN won’t save you from phishing.',
    keyTakeaways: [
      'A VPN creates an encrypted tunnel between your device and the VPN server.',
      'It does NOT make you immune to malware, phishing links, or downloaded viruses.',
      'You are simply choosing to trust the VPN company rather than your local ISP.'
    ],
    chapters: [
      { time: '00:00', title: 'The Marketing vs Reality' },
      { time: '01:30', title: 'Encrypted Tunnels Explained' },
      { time: '02:55', title: 'What a VPN Cannot Do' },
      { time: '04:10', title: 'When You Actually Need One' }
    ]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-npicert-telecom-advisory',
    date: 'Sep 16, 2026',
    category: 'CYBER NEWS',
    headline: 'Nepal CERT Releases Urgent Advisory on WhatsApp Account Hijacking Campaigns',
    summary: 'Attackers are using spoofed voice verification PIN requests and impersonating trusted contacts to hijack active Nepali WhatsApp and Telegram accounts.',
    source: 'National Cyber Security Advisory / NPI-CERT',
    sourceUrl: 'https://npicert.gov.np',
    isBreaking: true,
    readTime: '3 min read',
    impactLevel: 'CRITICAL',
    fullStory: [
      'A coordinated campaign targeting Nepali mobile subscribers is actively attempting to commandeer messaging applications. The attack relies on calling the victim during early morning hours while simultaneously triggering a phone call verification.',
      'If the victim does not answer, the carrier voicemail receives the OTP code. By exploiting default or unconfigured voicemail carrier PINs, the attacker accesses the voicemail recording remotely and registers the account.',
      'Mitigation steps: Enable WhatsApp Two-Step Verification with a custom 6-digit PIN and immediately configure a strong personal PIN on your mobile carrier voicemail inbox.'
    ]
  },
  {
    id: 'news-browser-zero-day',
    date: 'Sep 15, 2026',
    category: 'TECH',
    headline: 'Critical Chromium V8 Engine Vulnerability Exploited in the Wild: Update Browsers Immediately',
    summary: 'Google and Microsoft roll out emergency out-of-band security patches for a high-severity type confusion bug in the JavaScript V8 engine allowing remote code execution.',
    source: 'CISA & Chromium Security',
    sourceUrl: 'https://www.cisa.gov',
    isBreaking: true,
    readTime: '2 min read',
    impactLevel: 'CRITICAL',
    fullStory: [
      'The zero-day vulnerability (CVE-2026-3829) was discovered being actively leveraged in targeted commercial spyware attacks. It enables arbitrary memory corruption when processing specially crafted web pages.',
      'Users of Google Chrome, Microsoft Edge, Brave, and Opera on Windows, macOS, and Linux are urged to relaunch their browsers to apply the latest security fix immediately.'
    ]
  },
  {
    id: 'news-banking-nepal-mfa',
    date: 'Sep 13, 2026',
    category: 'CYBER NEWS',
    headline: 'Nepal Rastra Bank Mandates Stricter Multi-Factor Authentication Guidelines for Inter-Bank Transfers',
    summary: 'New regulatory framework requires commercial banks and payment service operators to introduce device-binding and biometric confirmation for high-value transactions.',
    source: 'Nepal Rastra Bank Directives',
    isBreaking: false,
    readTime: '4 min read',
    impactLevel: 'HIGH',
    fullStory: [
      'To curb escalating account takeover incidents, regulatory authorities have instructed all licensed payment systems in Nepal to sunset naked SMS-only verification for transfers exceeding 25,000 NPR.',
      'Financial apps will transition towards cryptographic device-fingerprint binding and in-app cryptographic push notifications, significantly mitigating classic SIM-swap vectors.'
    ]
  },
  {
    id: 'news-ai-phishing-growth',
    date: 'Sep 11, 2026',
    category: 'AI SECURITY',
    headline: 'Research Highlights 400% Rise in LLM-Synthesized Multilingual Phishing Emails',
    summary: 'Grammatically flawless phishing emails in Nepali, Hindi, and regional languages are replacing sloppy, easily detectable scams of the past decade.',
    source: 'BleepingComputer & CyberSec Nepal',
    sourceUrl: 'https://www.bleepingcomputer.com',
    isBreaking: false,
    readTime: '3 min read',
    impactLevel: 'HIGH',
    fullStory: [
      'Historically, cyber security awareness training taught users to look for typos, broken English, and formatting errors. Generative AI tools have eliminated these tells entirely, enabling automated translation into natural colloquial Nepali.',
      'Security teams emphasize that users must focus on verifiable digital signatures, independent domain checking, and never trust email headers alone.'
    ]
  },
  {
    id: 'news-passkeys-adoption',
    date: 'Sep 09, 2026',
    category: 'PRIVACY',
    headline: 'FIDO Alliance Reports Global Passkey Deployment Hits 50% Across Top 100 Web Services',
    summary: 'Public-key cryptography built into phones and operating systems is steadily replacing fragile alphanumeric passwords with biometric convenience and phishing resistance.',
    source: 'FIDO Alliance Research',
    isBreaking: false,
    readTime: '3 min read',
    impactLevel: 'INFORMATIONAL',
    fullStory: [
      'Passkeys use WebAuthn standards where your private cryptographic key never leaves your local secure enclave. Because the browser enforces domain origin binding, a phishing site cannot trick your device into sending credentials.'
    ]
  }
];

export const ATTACK_DEFEND_PAIRS: AttackDefendItem[] = [
  {
    id: 'ad-phishing',
    attackTitle: 'Phishing & Impersonation',
    attackCategory: 'Deceptive Infiltration',
    attackDesc: 'Attackers create convincing duplicates of bank portals, tax departments, or login interfaces, luring targets through urgency, fear, or false rewards.',
    attackVectorDetail: 'Lookalike domains (e.g., pay-esewa.com instead of esewa.com.np), spoofed emails, and QR codes placed over real storefront payment cards.',
    defendTitle: 'Multi-Factor Authentication (MFA)',
    defendCategory: 'Cryptographic Validation',
    defendDesc: 'Hardware security keys (FIDO2) and time-based authenticator apps verify domain identity mathematically, rendering stolen passwords completely useless.',
    defendProtocolDetail: 'App-based TOTP or Passkeys mathematically bind to the real origin domain, instantly neutralizing deceptive lookalike clones.',
    realScenarioNepal: 'A fake SMS claiming your mobile wallet KYC is expired asking you to click an urgent link to prevent wallet suspension.'
  },
  {
    id: 'ad-social-eng',
    attackTitle: 'Social Engineering',
    attackCategory: 'Human Psychology Exploit',
    attackDesc: 'Manipulating human instincts—trust, authority, helpfulness, or greed—to coax confidential tokens, credentials, or physical office access.',
    attackVectorDetail: 'Pretending to be IT support, a bank officer investigating fraud, or a distressed executive demanding emergency transfers.',
    defendTitle: 'Security Awareness & Verification',
    defendCategory: 'Verification Protocol',
    defendDesc: 'Instilling strict out-of-band verification procedures. Never trusting caller ID; always calling back on official published numbers.',
    defendProtocolDetail: 'Zero Trust mindset: "Verify explicitly before acting, regardless of declared authority or urgency level."',
    realScenarioNepal: 'A caller claiming to be from a government lottery department asking for 5,000 NPR advance fee to release prize money.'
  },
  {
    id: 'ad-weak-passwords',
    attackTitle: 'Weak Passwords & Reuse',
    attackCategory: 'Credential Exhaustion',
    attackDesc: 'Exploiting simple, predictable passwords (like "Nepal@123") or spraying leaked database credentials across multiple online accounts.',
    attackVectorDetail: 'Automated dictionary attacks and credential stuffing scripts querying billions of breached plaintext passwords in seconds.',
    defendTitle: 'Strong Passwords & Password Vaults',
    defendCategory: 'Cryptographic Storage',
    defendDesc: 'Using open-source or audited password managers to generate unique, 20+ character random alphanumeric passphrases for every single service.',
    defendProtocolDetail: 'Zero-knowledge end-to-end encrypted vaults (e.g. Bitwarden) ensuring even database breaches yield only salted hashes.',
    realScenarioNepal: 'Using the same password for your college portal, personal email, and Instagram account.'
  },
  {
    id: 'ad-malware',
    attackTitle: 'Malware & Ransomware',
    attackCategory: 'Malicious Code Execution',
    attackDesc: 'Hostile software engineered to harvest keystrokes, establish backdoors, or encrypt critical files until extortion ransom is paid.',
    attackVectorDetail: 'Trojanized software cracks, pirated games, untrusted APK downloads, and malicious Office macros executed by users.',
    defendTitle: 'Immutable Backups & Least Privilege',
    defendCategory: 'Resilience Architecture',
    defendDesc: 'Maintaining offline, immutable 3-2-1 backup copies of essential data, keeping OS updated, and operating without administrator rights.',
    defendProtocolDetail: '3-2-1 Rule: 3 copies of data, across 2 different media formats, with 1 copy stored completely offline or offsite.',
    realScenarioNepal: 'Downloading cracked Photoshop or IDM from sketchy torrent sites and disabling Windows Defender to run the patch.'
  },
  {
    id: 'ad-misconfig',
    attackTitle: 'Misconfiguration & Open Ports',
    attackCategory: 'System Exposure',
    attackDesc: 'Leaving default administrative passwords, unauthenticated cloud storage buckets, or exposed remote desktop (RDP) ports open to the public internet.',
    attackVectorDetail: 'Automated internet-wide scanners like Shodan discovering exposed database ports, admin panels, and unpatched web routers.',
    defendTitle: 'Automated Patching & Zero Trust',
    defendCategory: 'Continuous Hardening',
    defendDesc: 'Routine vulnerability scanning, changing default router credentials, disabling unused network ports, and enforcing strict firewall ingress rules.',
    defendProtocolDetail: 'Principle of Least Privilege + Ingress deny-by-default firewall rules on all perimeter appliances and routers.',
    realScenarioNepal: 'Leaving home Wi-Fi or office Mikrotik router admin password as "admin" with remote management enabled.'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'phishing',
    term: 'Phishing',
    category: 'Social Engineering',
    pronunciation: 'FISH-ing',
    simpleDefinition: 'An attempt to trick you into revealing sensitive information (like passwords or card details) by pretending to be someone you trust.',
    technicalContext: 'Social engineering attack vectors deployed over email, SMS (smishing), or phone calls (vishing), often combined with lookalike domains.',
    realWorldExample: 'A message looking like your bank asking you to "Update your KYC immediately or your account will freeze today."',
    howToProtect: 'Never click links sent via unsolicited messages. Open your banking app or website by typing the official address directly.'
  },
  {
    id: 'malware',
    term: 'Malware',
    category: 'Threats',
    pronunciation: 'MAL-wair',
    simpleDefinition: 'Short for "malicious software"—any computer program designed to secretly infect, steal data from, or damage your device.',
    technicalContext: 'Encompasses viruses, worms, spyware, trojans, adware, and ransomware designed to bypass security sandboxes.',
    realWorldExample: 'A downloaded "free movie player" that secretly records every key you press on your keyboard.',
    howToProtect: 'Only install apps from official stores. Keep your operating system updated and run reputable antivirus scanning.'
  },
  {
    id: 'ransomware',
    term: 'Ransomware',
    category: 'Threats',
    pronunciation: 'RAN-sum-wair',
    simpleDefinition: 'A dangerous type of malware that locks and scrambles all your photos, documents, and files, demanding money to unlock them.',
    technicalContext: 'Leverages asymmetric encryption (e.g. RSA-4096 + AES-256) to encrypt files locally, holding the decryption key on attacker C2 servers.',
    realWorldExample: 'A hospital computer screen turning red with a timer stating all patient records are locked unless $10,000 in crypto is sent.',
    howToProtect: 'Keep an offline physical backup (external hard drive unplugged from your PC). If infected, backups let you restore for free.'
  },
  {
    id: 'firewall',
    term: 'Firewall',
    category: 'Defense',
    pronunciation: 'FYRE-wawl',
    simpleDefinition: 'A digital security guard that inspects all internet traffic entering or leaving your computer and blocks dangerous connections.',
    technicalContext: 'Network security device or software that monitors and filters incoming/outgoing network packets based on established security policies.',
    realWorldExample: 'Blocking an unknown hacker on the internet from connecting directly to your home laptop’s shared files.',
    howToProtect: 'Ensure your computer’s built-in firewall (Windows Defender Firewall or macOS Packet Filter) is turned on.'
  },
  {
    id: 'vpn',
    term: 'VPN (Virtual Private Network)',
    category: 'Privacy',
    pronunciation: 'VEE-PEE-EN',
    simpleDefinition: 'An encrypted digital tunnel between your device and the internet that hides your browsing from your local Wi-Fi provider and changes your visible IP address.',
    technicalContext: 'Encapsulates network packets using cryptographic protocols (WireGuard, OpenVPN, IPsec) routed through an intermediary server.',
    realWorldExample: 'Protecting your browsing data while connected to free, unencrypted Wi-Fi at Tribhuvan International Airport.',
    howToProtect: 'Use reputable paid VPNs with audited no-logs policies; avoid shady "free" VPNs that sell your browsing logs.'
  },
  {
    id: 'encryption',
    term: 'Encryption',
    category: 'Cryptography',
    pronunciation: 'en-KRIP-shun',
    simpleDefinition: 'The process of scrambling readable text into a secret code so only someone with the correct digital key can unscramble and read it.',
    technicalContext: 'Mathematical transformation of plaintext into ciphertext using cryptographic algorithms like AES, RSA, or ChaCha20.',
    realWorldExample: 'WhatsApp end-to-end encryption ensures that even WhatsApp engineers cannot read your private chat messages.',
    howToProtect: 'Always look for HTTPS (padlock icon) on websites and enable full-disk encryption (BitLocker / FileVault) on laptops.'
  },
  {
    id: '2fa',
    term: '2FA / Multi-Factor Auth',
    category: 'Defense',
    pronunciation: 'TWO-EFF-AY',
    simpleDefinition: 'Requiring two different pieces of proof before logging in—typically your password plus a temporary code from your phone.',
    technicalContext: 'Authentication requiring two or more independent credential categories: something you know, something you have, or something you are.',
    realWorldExample: 'Entering your Google password, and then tapping "Yes, it\'s me" on your smartphone prompt.',
    howToProtect: 'Turn on 2FA on your email, banking, social media, and messaging accounts right away.'
  },
  {
    id: 'zero-trust',
    term: 'Zero Trust',
    category: 'Architecture',
    pronunciation: 'ZEE-roh TRUST',
    simpleDefinition: 'A modern security philosophy that says: "Never trust anyone or any device automatically, even if they are inside the office building."',
    technicalContext: 'A strategic architectural approach requiring strict continuous identity verification and least-privilege access for every digital transaction.',
    realWorldExample: 'Requiring an employee to verify their identity and device health every time they open a payroll document, even from the office desk.',
    howToProtect: 'Apply this mindset personally: don’t assume a USB drive or email attachment is safe just because it came from an acquaintance.'
  },
  {
    id: 'ddos',
    term: 'DDoS (Distributed Denial of Service)',
    category: 'Threats',
    pronunciation: 'DEE-doss',
    simpleDefinition: 'Flooding a website with millions of fake visits from compromised computers until the server crashes and legitimate visitors cannot get in.',
    technicalContext: 'An attack that consumes bandwidth or server resources using distributed botnets, causing legitimate traffic to time out.',
    realWorldExample: 'Thousands of hijacked smart home cameras all loading a news site at the exact same second, causing the site to go offline.',
    howToProtect: 'Websites use specialized scrubbing networks and reverse proxies like Cloudflare to filter out malicious traffic spikes.'
  },
  {
    id: 'osint',
    term: 'OSINT (Open-Source Intelligence)',
    category: 'Ethical Hacking',
    pronunciation: 'OH-sint',
    simpleDefinition: 'The practice of legally gathering and analyzing publicly available information from social media, public records, and website codes.',
    technicalContext: 'Intelligence collection discipline involving data publicly available from websites, search engines, public registries, and code repositories.',
    realWorldExample: 'Finding out an attacker\'s server location and registered domain history using publicly queryable DNS tools.',
    howToProtect: 'Review your social media profiles from a logged-out browser to see how much personal information strangers can see about you.'
  }
];

export const TOOLKIT_RESOURCES: ResourceToolkitItem[] = [
  {
    id: 'res-password-guide',
    title: 'Password Security Blueprint 2026',
    category: 'Authentication',
    description: 'A comprehensive, non-technical guide on creating uncrackable passphrases, setting up zero-knowledge vaults, and transitioning to Passkeys.',
    format: 'Interactive Guide',
    iconName: 'KeyRound',
    badge: 'Essential',
    details: [
      'The math behind brute-force cracking times for 8 vs 16-character passwords',
      'Recommended audited vaults: Bitwarden, KeePassXC, 1Password',
      'Step-by-step Passkey setup on iOS, Android, macOS, and Windows',
      'Family password sharing without compromising individual accounts'
    ]
  },
  {
    id: 'res-privacy-checklist',
    title: 'Personal Digital Privacy Audit Checklist',
    category: 'Privacy',
    description: 'An interactive 15-point checklist covering browser hardening, mobile app permissions, DNS encryption, and location tracking settings.',
    format: 'PDF Checklist',
    iconName: 'ShieldAlert',
    badge: 'Popular',
    details: [
      'Audit smartphone microphone, camera, and background location permissions',
      'Enable Encrypted DNS (Cloudflare 1.1.1.1 or Quad9 9.9.9.9)',
      'Revoke third-party OAuth app authorizations in Google, Facebook, and Apple IDs',
      'Opt-out of cross-site advertising and data broker aggregators'
    ]
  },
  {
    id: 'res-scam-detection',
    title: 'Nepali Online Scam Detection Guide',
    category: 'Safety',
    description: 'Practical field guide analyzing real fraud schemes reported in Nepal: fake employment letters, crypto Telegram channels, and mobile banking OTP traps.',
    format: 'Interactive Guide',
    iconName: 'FileCheck',
    badge: 'Local Focus',
    details: [
      '5 dead giveaways of fake job recruitment agencies in Kathmandu and Gulf regions',
      'How to inspect shortened URLs and verify authentic domain registration',
      'Immediate emergency steps if you accidentally entered your OTP on a fake page',
      'Official hotlines and reporting channels for Nepal Police Cyber Bureau'
    ]
  },
  {
    id: 'res-tools-directory',
    title: 'Curated Free Security Tools Directory',
    category: 'Tools',
    description: 'A hand-vetted directory of privacy-respecting, open-source security utilities for desktop, mobile, and network diagnostics.',
    format: 'Tool Directory',
    iconName: 'Wrench',
    badge: 'Verified',
    details: [
      'Encrypted messaging: Signal, Session',
      'Privacy browsers: Firefox with uBlock Origin, Brave, Tor Browser',
      'File & disk encryption: Cryptomator, VeraCrypt',
      'Threat scanning & analysis: VirusTotal, HaveIBeenPwned, URLScan.io'
    ]
  }
];

export const ROADMAP_LEVELS: RoadmapLevel[] = [
  {
    level: 'LEVEL 01',
    title: 'Digital Safety',
    badge: 'Foundations',
    tagline: 'Securing Your Personal Footprint',
    description: 'Master everyday digital hygiene, recognize deceptive social engineering attempts, and secure your personal devices and accounts against 90% of automated threats.',
    topics: [
      { name: 'Password Vaults & Passkeys', desc: 'Eliminate password reuse and master cryptographic credentials', icon: 'Key' },
      { name: 'Multi-Factor Authentication (MFA)', desc: 'Deploy app-based authenticators and hardware FIDO2 keys', icon: 'Smartphone' },
      { name: 'Privacy & Device Hardening', desc: 'Secure smartphone permissions, browsers, and mobile OS settings', icon: 'Lock' },
      { name: 'Phishing & Scam Identification', desc: 'Detect malicious emails, deceptive domains, and social tricks', icon: 'AlertCircle' }
    ],
    recommendedTools: ['Bitwarden', 'Aegis Authenticator', 'uBlock Origin', 'HaveIBeenPwned'],
    certifications: ['Google Cybersecurity Certificate', 'ISC2 Certified in Cybersecurity (CC)'],
    learningOutcome: 'Can independently audit, secure, and defend personal and small business accounts against standard attacks.'
  },
  {
    level: 'LEVEL 02',
    title: 'Cybersecurity Fundamentals',
    badge: 'Core Theory',
    tagline: 'How Networks & Computers Really Work',
    description: 'Deep dive into computer networking models, operating system internals, packet mechanics, web architectures, and the mathematics of cryptography.',
    topics: [
      { name: 'Networking Protocols (TCP/IP & OSI)', desc: 'Understand packets, routing, DNS, ports, firewalls, and Wi-Fi', icon: 'Network' },
      { name: 'Operating Systems (Linux & Windows)', desc: 'Command line fluency, file permissions, processes, and registries', icon: 'Terminal' },
      { name: 'Web Security Architecture', desc: 'HTTP/HTTPS headers, TLS handshakes, cookies, and CORS', icon: 'Globe' },
      { name: 'Cryptography Foundations', desc: 'Symmetric vs asymmetric encryption, hashing, and certificates', icon: 'Binary' }
    ],
    recommendedTools: ['Wireshark', 'Linux (Ubuntu/Debian)', 'Nmap', 'OpenSSL'],
    certifications: ['CompTIA Network+', 'CompTIA Security+'],
    learningOutcome: 'Able to inspect raw network packet traces, navigate Linux terminals comfortably, and understand protocol vulnerabilities.'
  },
  {
    level: 'LEVEL 03',
    title: 'Ethical Hacking & Assessment',
    badge: 'Offensive Security',
    tagline: 'Thinking Like an Attacker to Build Defenses',
    description: 'Learn lawful penetration testing methodologies, discover OWASP Top 10 vulnerabilities, conduct reconnaissance, and practice in isolated lab sandboxes.',
    topics: [
      { name: 'Reconnaissance & OSINT', desc: 'Discover attack surfaces, subdomain mapping, and open ports', icon: 'Search' },
      { name: 'Vulnerability Concepts (OWASP Top 10)', desc: 'SQLi, XSS, BOLA, CSRF, and Broken Authentication', icon: 'Bug' },
      { name: 'Web App Security & API Testing', desc: 'Interception proxies, parameter fuzzing, and token analysis', icon: 'Code' },
      { name: 'Hands-on Ethical Practice Labs', desc: 'Safe legal environments: TryHackMe, HackTheBox, PortSwigger Web Security Academy', icon: 'Cpu' }
    ],
    recommendedTools: ['Burp Suite Community', 'OWASP ZAP', 'Kali Linux', 'Metasploit (Lab only)'],
    certifications: ['eJPT (Junior Penetration Tester)', 'BTL1 (Blue Team Level 1)', 'CEH (Certified Ethical Hacker)'],
    learningOutcome: 'Capable of performing structured security assessments, identifying common web bugs, and writing responsible disclosure reports.'
  },
  {
    level: 'LEVEL 04',
    title: 'Advanced Security & Specialization',
    badge: 'Specialist',
    tagline: 'Enterprise Defense & Emerging Threats',
    description: 'Specialize into high-impact domains: securing multi-cloud environments, analyzing AI vulnerabilities, digital forensics, and proactive threat intelligence.',
    topics: [
      { name: 'Cloud Security (AWS / GCP / Azure)', desc: 'IAM roles, cloud misconfigurations, container security, and Kubernetes', icon: 'Cloud' },
      { name: 'AI & Machine Learning Security', desc: 'Prompt injections, adversarial inputs, and model supply chains', icon: 'BrainCircuit' },
      { name: 'Digital Forensics & Incident Response', desc: 'Memory analysis, log aggregation (SIEM), and artifact recovery', icon: 'FileSearch' },
      { name: 'Cyber Threat Intelligence (CTI)', desc: 'MITRE ATT&CK framework, adversary profiling, and indicators of compromise (IOCs)', icon: 'ShieldAlert' }
    ],
    recommendedTools: ['Splunk', 'Wazuh SIEM', 'YARA', 'Autopsy', 'TruffleHog'],
    certifications: ['OSCP (Offensive Security Certified Professional)', 'CISSP', 'AWS Certified Security Specialty'],
    learningOutcome: 'Equipped to protect enterprise infrastructures, respond to active security incidents, and conduct threat research.'
  }
];
