// Single source of truth for site content.
// Edit here; components render whatever this file says.

export const profile = {
  name: 'Albert Gómez Triunfante',
  role: 'AI Engineer',
  company: 'Nordhealth',
  location: 'Espoo, Finland',
  standfirst:
    'I work on generative AI for clinical software, where an unverified answer is a patient safety problem. I build the whole stack: the model, the evaluation that proves it is safe to ship, the interface it reaches clinicians through, and the services behind it.',
  links: {
    email: 'albertgotri03@gmail.com',
    github: 'https://github.com/AlbertGoTri',
    linkedin: 'https://linkedin.com/in/albertgotri',
  },
}

export const about = {
  lede: 'I own things end to end, from how a model behaves to the infrastructure it runs on.',
  body: [
    `At Nordhealth that means taking a feature the whole way down: shaping the model behaviour,
     building the evaluation that proves the output holds up under MDR review and clinician
     feedback, wiring the service into the systems around it, and shipping the interface a
     clinician actually reads. The hard part is never getting a model to answer. It is proving
     the answer is safe to put in front of a patient.`,
    `I have gone deepest at the two ends of that stack. My thesis went down into model
     internals, compressing a language diffusion model to a third of its inference steps on a
     single consumer GPU. A year in DevOps and cloud went the other way, into Azure,
     Kubernetes and CI/CD. Both feed the same habit: the systems I design are ones I can
     also run.`,
    `Alongside the full-time job I am taking an MSc in Data Science at a full course load —
     two full-time commitments rather than a degree fitted around the edges of work.`,
  ],
}

export const experience = [
  {
    role: 'AI Engineer',
    company: 'Nordhealth',
    location: 'Helsinki',
    period: 'May 2026',
    until: 'Present',
    current: true,
    highlights: [
      'Sole backend and infrastructure engineer on a real-time telehealth service. Shipped end-to-end encrypted calls in about six weeks with Python, FastAPI, AWS Lambda, ECS, Terraform and LiveKit.',
      'Architected the automated evaluation pipelines for clinical LLM output, aligned to MDR and patient-safety standards and validated against real clinician feedback.',
      'Built the AI observability layer: token-usage tracking, event instrumentation across AI and search surfaces, and feature-flagged rollout to gate and A/B test AI features safely.',
      'Cut search latency by 40 to 200 times across the core patient management system, owning the database migrations and the reusable search infrastructure behind it.',
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Nordhealth',
    location: 'Helsinki',
    period: 'Feb 2026',
    until: 'May 2026',
    highlights: [
      'Shipped end-to-end file attachment support for an agentic chatbot, spanning the patient management system and the backend AI services.',
      'Built a full proof of concept for an AI-driven remote healthcare application and validated the architecture through internal testing.',
      'Overhauled the automated prompt evaluation pipeline and expanded prompt coverage, infrastructure the AI safety metrics and MDR compliance depend on.',
      'Iterated on RAG pipelines and prompting strategies to anchor outputs in verified clinical knowledge and reduce medical hallucination.',
    ],
  },
  {
    role: 'DevOps & Cloud Engineer Intern',
    company: 'Itequia',
    location: 'Barcelona',
    period: 'Jun 2025',
    until: 'Jan 2026',
    highlights: [
      'Managed cloud infrastructure and automated deployments with Azure DevOps CI/CD pipelines and Kubernetes orchestration.',
      'Ran security audits and infrastructure hardening across client environments, improving Microsoft Secure Score.',
    ],
  },
]

export const work = [
  {
    title: 'Fast Parallel Token Inference with Language Diffusion Models',
    note: 'Bachelor thesis, graded 9.8',
    year: '2026',
    repo: 'https://github.com/AlbertGoTri/fast-parallel-token-inference-with-language-diffusion-models',
    summary: `Autoregressive models emit one token per forward pass, so latency grows with
      length. Diffusion models generate in parallel and depend instead on the number of denoising
      steps — but they need 50 to 100 of them, which cancels the advantage. Progressive
      distillation solved this for images. Nobody had made it work on discrete text, where a
      small error in embedding space flips a word outright and the image-distillation loss does
      not match language modelling.`,
    results: {
      caption: 'LLaDA-8B · Promptfoo task-pass rate and GPT-2 perplexity',
      columns: ['Configuration', 'Steps', 'Speed-up', 'Pass rate', 'Perplexity'],
      rows: [
        ['Teacher', '128', '1.00×', '74.07%', '13.00'],
        ['Distilled', '64', '1.94×', '74.07%', '12.97'],
        ['Distilled', '32', '3.63×', '75.93%', '15.93', true],
        ['Distilled', '8', '12.25×', '62.96%', '68.44'],
        ['No distillation', '64', '1.51×', '70.37%', '17.38'],
      ],
    },
    details: [
      'Recasting the objective as KL divergence over the teacher soft vocabulary distribution sidesteps the token-space problem; a LoRA-adapted student then learns it in seven recursive rounds.',
      '32 steps is the operating point, and it is close to a free lunch: 3.63× faster than the teacher, and a higher pass rate than the teacher it was distilled from.',
      'The bottom row is the control that makes the result mean anything. Same weights, same 64 steps, no distillation: 70.37%. The distilled student at those same steps scores 74.07%. Cutting steps is not what costs quality, and step count is not what recovers it.',
      'Below 16 steps rounding errors stop cancelling and start cascading. Perplexity runs from 15.93 at 32 steps to 353 at a single step; that boundary is the finding, not a footnote.',
      'The whole pipeline ran in 3.5 hours on a $450 consumer card from 2019 with 8 GB of VRAM, in a field that assumes 40 to 80 GB of datacenter hardware.',
    ],
    stack: ['PyTorch', 'Hugging Face Transformers', 'PEFT / LoRA', 'bitsandbytes', 'Promptfoo'],
  },
  {
    title: 'RepoWhisperer',
    note: 'Retrieval over source code',
    year: '2026',
    repo: 'https://github.com/AlbertGoTri/repowhisperer-ai',
    summary: `Paste a GitHub URL and hold a conversation with the codebase. It clones and indexes
      the repository, retrieves the chunks relevant to each question, and streams back answers
      grounded in the files rather than in the model priors.`,
    details: [
      'FastAPI backend handles ingestion and retrieval; a React and Vite frontend consumes it; inference runs on DigitalOcean Gradient.',
      'Answers stream token by token over Server-Sent Events instead of blocking on a full completion.',
      'Four models sit behind one interface, Llama 3.3 70B, DeepSeek R1, Mistral Nemo and Llama 3 8B, so retrieval quality can be compared independently of the generator.',
      'A demo mode makes the whole interface reviewable without API credentials.',
    ],
    stack: ['FastAPI', 'Python 3.12', 'React', 'GitPython', 'Docker', 'nginx'],
  },
  {
    title: 'FacePass',
    note: 'Face recognition access control, edge to cloud',
    year: '2025',
    repo: 'https://github.com/AlbertGoTri/FacePass',
    summary: `Face recognition standing in for keys and badges. A Raspberry Pi captures at the
      door, a neural model turns the face into an embedding, and that vector is matched against
      the enrolled set to decide whether the door opens.`,
    details: [
      'The recognition is the model: DeepFace running FaceNet produces the face embedding, and ChromaDB does the vector similarity search against enrolled identities. PostgreSQL keeps the access log.',
      'The Pi drives camera capture and servo actuation, talking to the backend over MQTT.',
      'Services are containerised with Docker Compose and deployed on K3s behind NGINX.',
      'The React dashboard handles enrolment, Firebase auth, and Chart.js reporting over access history.',
    ],
    stack: ['Python', 'DeepFace', 'ChromaDB', 'PostgreSQL', 'MQTT', 'Node / Express', 'K3s'],
  },
  {
    title: 'AI Commit Buddy',
    note: 'Commit messages from the diff itself',
    year: '2025',
    repo: 'https://github.com/AlbertGoTri/AI-Commit-Buddy',
    summary: `A CLI that reads what you actually staged and writes the Conventional Commit
      message for it. Most tools in this category summarise the whole change in one generic
      line; this one walks the diff file by file, so the message describes the change rather
      than restating the branch name.`,
    details: [
      'Parses the staged diff per file and feeds that structure to the model, which is what separates “refactor(auth): extract token validation into middleware” from “update files”.',
      'Classifies into the Conventional Commit types — feat, fix, docs, refactor, test, chore — so the output drops straight into a changelog or a semantic-release pipeline.',
      'Ships an offline fallback that generates from the diff alone. An API outage degrades the message quality; it never blocks the commit, which is the difference between a tool you keep installed and one you uninstall the first time it fails.',
      'Interactive CLI with a review step before anything is written, and it runs on Windows, macOS and Linux.',
    ],
    stack: ['Python', 'Groq', 'Git'],
  },
]

export const index = [
  {
    name: 'Agent Routing for Customer Service',
    repo: 'https://github.com/AlbertGoTri/LLM-Agent-Framework-for-Customer-Service-Routing',
    blurb:
      'An LLM router classifies a query and dispatches it to a FAQ or an order agent. Benchmarked across a 30-query suite before picking a provider: Gemini 2.5 Flash at 100% and 627 ms against Groq Llama 3.1 8B at 96.67% and 180 ms.',
    tags: 'Python, Gemini, Groq',
  },
  {
    name: 'DevOps Spec Compiler',
    repo: 'https://github.com/AlbertGoTri/DevOps-Spec-Compiler',
    blurb:
      'Watches a specs directory and compiles terse YAML into full Kubernetes Deployment and Service manifests.',
    tags: 'Python, Kubernetes, Groq',
  },
  {
    name: 'Rectified Flow, vision',
    repo: 'https://github.com/AlbertGoTri/rectified-flow-vision',
    blurb:
      'Reflow on image generation: train a base flow model, then straighten its trajectories to sample in one to four steps instead of a hundred. Harness wired for FID, LPIPS and SSIM.',
    tags: 'PyTorch, UNet',
    note: 'In progress',
  },
  {
    name: 'Rectified Flow, text',
    repo: 'https://github.com/AlbertGoTri/rectified-flow-text',
    blurb:
      'The same straightening idea in embedding space: encode to continuous embeddings, learn noise to embedding, decode back out. Companion to the vision track.',
    tags: 'PyTorch, Transformers',
    note: 'In progress',
  },
  {
    name: 'CIFAR-10 Classifier',
    repo: 'https://github.com/AlbertGoTri/Cifar-10-image-classifier',
    blurb: 'Convolutional image classifier built and trained on CIFAR-10.',
    tags: 'TensorFlow, Keras',
  },
  {
    name: 'FIBBLE',
    repo: 'https://github.com/AlbertGoTri/FIBBLE',
    blurb:
      'Scrabble engine implementing Guy–Jacobson move generation. University systems project.',
    tags: 'Java, Algorithms',
  },
  {
    name: 'FME Datathon 2023',
    repo: 'https://github.com/AlbertGoTri/FME-Datathon-2023',
    blurb: 'Sustainable UPC challenge entry, built to a datathon deadline.',
    tags: 'Data analysis',
  },
]

export const tools = [
  {
    group: 'Models & evaluation',
    items:
      'LLM architecture; RAG pipelines; agentic systems; prompt engineering; automated evaluation and prompt regression; model distillation; LoRA and PEFT; quantisation; token observability',
  },
  {
    group: 'Written in',
    items: 'Python; SQL; Bash; JavaScript; C; C++; Java; PHP',
  },
  {
    group: 'Run on',
    items:
      'AWS Lambda and ECS; Terraform; Azure and Azure DevOps; Kubernetes; Docker; CI/CD; PostgreSQL',
  },
  {
    group: 'Libraries',
    items: 'PyTorch; Hugging Face Transformers; FastAPI; ChromaDB',
  },
]

export const education = [
  {
    school: 'Universitat Oberta de Catalunya',
    award: 'MSc, Data Science',
    period: 'Sept 2026 – Jan 2028 expected',
    note: 'Part-time, alongside full-time work.',
  },
  {
    school: 'Universitat Politècnica de Catalunya',
    award: 'BSc, Informatics Engineering — Information Technologies',
    period: 'Sept 2022 – Jun 2026',
    note: 'Thesis graded 9.8. Competed in Datathon 2023, Sustainable UPC challenge.',
  },
  {
    school: 'La Salle Campus Barcelona',
    award: 'Double Degree, International Computer Engineering & Management of Business and Technology',
    period: 'Sept 2020 – Jun 2022',
    note: 'Founded and ran the LS Chess Club.',
  },
]

export const certificates = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University and DeepLearning.AI',
    year: '2025',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6VYOND2GRSUR',
  },
  {
    name: 'CS50 Introduction to Artificial Intelligence with Python',
    issuer: 'Harvard University',
    year: '2025',
    url: 'https://certificates.cs50.io/d264a217-5f3b-4957-970f-af42a37d3baa.pdf?size=letter',
  },
]

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'Catalan', level: 'Native' },
  { name: 'English', level: 'C1, Cambridge CAE 197' },
  { name: 'French', level: 'Elementary' },
  { name: 'German', level: 'Elementary' },
]

export const closing = {
  heading: 'Correspondence',
  body: `I am most useful on problems where the output has to be defensible: regulated domains,
    evaluation harnesses, anything where “it usually works” is not an acceptable answer. If that
    is the kind of thing you are building, write to me.`,
}
