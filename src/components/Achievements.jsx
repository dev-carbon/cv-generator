import { Trophy } from 'lucide-react';
import AchievementCard from './AchievementCard';

const achievements = [
  {
    title: 'Fondateur et Propriétaire de DevChainer.com',
    description:
      "Création et gestion d'une plateforme proposant des formations en ligne sur la blockchain, permettant aux étudiants, professionnels et autodidactes d'approfondir leurs connaissances et compétences dans ce domaine.",
  },
  {
    title: 'Mentor Technique et Consultant',
    description:
      'Accompagnement et conseil auprès des étudiants, stagiaires et professionnels sur des projets académiques et de production.',
  },
];

const Achievements = () => {
  return (
    <section className="mb-[12px]">
      <div className="flex items-center gap-2 mb-2 px-1 py-1 bg-gray-100">
        <Trophy />
        <h2 className="text-[16px] font-semibold text-gray-800">
          Réalisations Clés
        </h2>
      </div>
      <div className="ml-4">
        <ul className="list-disc ml-6 text-gray-700">
          {achievements.map((achievement, index) => (
            <li key={index}>
              <AchievementCard
                title={achievement.title}
                description={achievement.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
