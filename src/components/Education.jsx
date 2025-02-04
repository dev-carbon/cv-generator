import { GraduationCap } from 'lucide-react';

const educations = [
    {
      institution: 'École 42',
      description: "Programme intensif d'ingénierie logicielle.",
    },
    {
      institution: "EPF - École d'ingénieur·e",
      description: "Formation d'ingénieur·e généraliste.",
    }
  ];
  

const Education = () => {
  return (
    <section className="mb-[12px]">
      <div className="flex items-center gap-2 mb-2 px-1 py-1 bg-gray-100">
        <GraduationCap className="w-6 h-6 text-gray-800" />
        <h2 className="text-[16px] font-semibold text-gray-800">Éducation</h2>
      </div>
      <div className="ml-4">
        {educations.map((education, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-medium">{education.institution}</h3>
            <p className="text-gray-600">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
