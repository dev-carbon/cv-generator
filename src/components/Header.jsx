import { Mail, Phone, Globe } from 'lucide-react';

const profile = {
  name: 'Hugues TCHOUALA',
  title: 'Développeur Full Stack | Développeur Blockchain | Passionné d\'Automatisation',
  experience: "5 ans d'expérience en Freelance",
  email: 'hugues.tchouala42@gmail.com',
  phone: '+33 7 80 75 08 19',
  website: 'https://dev-carbon.github.io',
};

const Header = () => {
  return (
    <header className="border-b-2 border-gray-800 pb-1 mb-3">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
      </div>
      <div className="mt-1 text-gray-600">
        <p>{profile.title}</p>
        <p className="mt-1">{profile.experience}</p>
        <div className="mt-1 space-y-1 grid grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="text-blue-600 hover:text-blue-800 flex justify-center items-center gap-2"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 mt-1 flex justify-end items-center gap-2 text-end"
          >
            <Globe size={16} /> {profile.website.replace('https://', '')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
