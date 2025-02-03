import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: 'Fondateur & Formateur Principal - DevChainer',
    subtitle: 'Formation Blockchain',
    details: [
      "Création et gestion d'une plateforme de formation complète en blockchain",
      'Développement de programmes et de contenu pédagogique pour la technologie blockchain',
      'Encadrement des étudiants dans le développement et la mise en œuvre de solutions blockchain',
    ],
  },
  {
    title: 'Développeur Logiciel Freelance',
    subtitle: "5 ans d'expérience",
    details: [
      "Développement et maintenance d'applications full-stack avec différentes technologies",
      "Mise en place de solutions d'automatisation avec Puppeteer et Selenium",
      'Création de solutions blockchain et de contrats intelligents',
      "Conception d'outils de scraping web et d'extraction de données",
      'Encadrement des étudiants et professionnels en développement logiciel',
      'Consultation technique pour des projets académiques et de production',
    ],
  },
];

const Experience = () => {
  return (
    <section className="mb-[12px]">
      <div className="flex items-center gap-2 mb-2 px-1 py-1 bg-gray-100">
        <Briefcase className="w-6 h-6 text-gray-800" />
        <h2 className="text-[16px] font-semibold text-gray-800">
          Expérience Professionnelle
        </h2>
      </div>
      <div className="ml-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            subtitle={experience.subtitle}
            details={experience.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
