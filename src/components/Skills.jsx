import { SquareTerminal, Code, GitMerge, Bot, Database, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'Langages de Programmation',
    items: ['C', 'Java', 'Python', 'PHP', 'JavaScript', 'Typescript', 'VBA'],
    icon: <Code className="w-5 h-5 text-gray-800" />,
  },
  {
    category: 'Frameworks & Bibliothèques',
    items: [
      'Laravel',
      'Django',
      'Spring Boot',
      'React',
      'Redux',
      'Next.js',
      'Angular',
    ],
    icon: <GitMerge className="w-5 h-5 text-gray-800" />,
  },
  {
    category: 'Automatisation & Scraping',
    items: ['Puppeteer', 'Selenium', 'Beautiful Soup'],
    icon: <Bot className="w-5 h-5 text-gray-800" />,
  },
  {
    category: 'Bases de Données & DevOps',
    items: ['PostgreSQL', 'MariaDB', 'Docker'],
    icon: <Database className="w-5 h-5 text-gray-800" />,
  },
  {
    category: 'Autres Technologies',
    items: ['Blockchain', 'Machine Learning'],
    icon: <Cpu className="w-5 h-5 text-gray-800" />,
  },
];

const Skills = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-2 px-1 py-1 bg-gray-100">
        <SquareTerminal className="w-6 h-6 text-gray-800" />
        <h2 className="text-[16px] font-semibold text-gray-800">
          Compétences Techniques
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className='bg-neutral-50 p-2 rounded'>
            <div className="flex items-center gap-2 mb-2">
              {skillGroup.icon}
              <h3 className="font-medium">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-1">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
