export const personalInfo = {
    name: "Martin Bonetti",
    title: "Developer Back-end",
    location: "Lyon - France",
    email: "martin.bonetti.dev@gmail.com",
    github: "https://github.com/M-TTI",
    linkedin: "https://www.linkedin.com/in/martin-bonetti-240b34290/",
    yapping: "Alternant Développeur Back-end chez Ice-Development, " +
        "étudiant en Bachelor 3 Développement à Ynov Lyon " +
        "et fan d'informatique et de jeux vidéo, " +
        "À travers ce portfolio, découvrez mes projets, " +
        "mes compétences et ma soif d'apprendre, " +
        "entre lignes de code et univers virtuels. " +
        "Bienvenue dans mon parcours !",
};

export const workExperience = [
    {
        company: "Ice Development",
        location: "Lyon, France",
        position: "Alternant Développeur Symfony/.NET",
        period: "Sep 2025 - Actuel",
        achievements: [
            "Conception et Développement d'un site vitrine intégré à un intranet Admin avec Symfony",
            "Développement d'une application client lourd type Progiciel de Gestion Intégré (PGI) en .NET",
            "Développement et maintenance de nombreux sites Symfony",
        ],
    },
    {
        company: "Ice Development",
        location: "Lyon, France",
        position: "Stage Développeur C#",
        period: "Jan 2025 - Fev 2025",
        achievements: [
            "Développement d'une application client lourd type Progiciel de Gestion Intégré (PGI) en .NET",
            "Mise a niveau d'une application mobile Xamarin vers .NET MAUI",
            "Développement d'une API pour un webservice en ASP.NET",
            "Développement d'une API Rest en PHP Natif pour un besoin interne",
            "Ajout de commentaires, de documentation et restructuration de code sur différents projets existants",
        ],
        certificate: "/certificates/attestation_stage_2.pdf",
    },
    {
        company: "New Aircraft Solutions",
        location: "Toulouse, France",
        position: "Stage Tecnicien Réseaux",
        period: "Mai 2024 - Juin 2024",
        achievements: [
            "Installation d'une antenne starlink et mise en place d'un réseau local chez un client",
            "Nombreuse interventions de maintenance réseau pour des clients, dont certaines en autonomie complète",
            "Mise en place de la DMZ et de la sécurité réseau en interne après une panne",
            "Réalisation d'une maquette pour un site marchand en interne",
        ],
        certificate: "/certificates/attestation_stage_1.pdf",
    },
];

export const education = [
    {
        institution: "Ynov Lyon",
        location: "Lyon (69), France",
        degree: "Bachelor 3 Développement",
        period: "oct 2023 - actuel",
        achievements: [
            ""
        ]
    },
    {
        institution: "Business School by CSND",
        location: "Limas (69), France",
        degree: "BTS SIO option SLAM",
        period: "sep 2023 - Jun 2025",
        achievements: [
            ""
        ],
    },
    {
        institution: "IUT Clermont-Ferrand",
        location: "Clermont-Ferrand (63), France",
        degree: "1ère année BUT Informatique",
        period: "sep 2022 - Jun 2023",
        achievements: [
            ""
        ],
    }
];
export const skills = {
    programmingLanguages: [
        "C#",
        "C/C++",
        "Python",
        "PHP",
        "Java",
        "JavaScript",
        "Bash",
    ],
    backendDevelopment: [
        ".NET",
        ".NET MAUI",
        "ASP.NET",
        "Node.js",
    ],
    frontendDevelopment: [
        "Three.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "WPF",
    ],
    gameDevelopment: [
        "Unity",
        "Godot",
    ],
    databaseAndStorage: [
        "mySQL",
        "PostgreSQL",
    ],
    cloudAndDevOps: [
        "Google Cloud Platform",
        "Tailscale",
    ],
    toolsAndServices: [
        "Git",
        "SVN",
        "Github and Gitlab",
        "Vercel",
    ],
};

export const projects = [
    {
        title: "EcoClassroom",
        github: "https://github.com/M-TTI/EcoClassroom",
        description: [
            "Projet en équipe de 2e année",
            "Création d'un site de gestion de classe",
            "Permet de gérer les classe d'un établissement scolaire et d'attribuer des notes aux élève en fonction de l'impact écologique de leur mode de transport",
            "Site dynamique en Laravel, Livewire, Breeze et Tailwind CSS",
            "Base de données en mySQL",
            "Mise en production dans un container Docker",
        ],
    },
    {
        title: "YCorp site",
        github: "https://github.com/M-TTI/Y_website",
        description: [
            "Projet en équipe de 2e année",
            "Création d'un site vitrine d'une entreprise fictive de web development",
            "Site statique en HTML et Tailwind CSS",
            "Mise en production dans un container Docker",
        ],
    },
];

export const awards = [
    {
        name: "Cisco C++ Essentials",
        issuer: "Cisco Academy",
        date: "Avril 2025",
        type: "International",
        file : "/attestation_cisco.pdf",
    },
    {
        name: "PIX",
        issuer: "CSND Business School",
        date: "Decembre 2024",
        type: "National",
        position: "586 points",
        file: "/attestation_secnum.pdf",
    },
    {
        name: "ANSSI SECNUM",
        issuer: "Gouvernement Français",
        date: "Novembre 2024",
        type: "National",
        position: "score moyen 98%",
        file: "/attestation_secnum.pdf",
    },
];
