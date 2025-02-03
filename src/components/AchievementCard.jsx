const AchievementCard = ({ title, description }) => {
    return (
      <div className="mb-3">
        <span className="font-bold">{title}</span>
        <p className="mt-1">{description}</p>
      </div>
    );
  };
  
  export default AchievementCard;