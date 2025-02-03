const ExperienceCard = ({ title, subtitle, details }) => {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
