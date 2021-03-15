import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.290628985655!2d4.918337915802386!3d52.383281579788566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609abb3be496b%3A0x1a140c53c426f7c7!2sthe+Kromhouthal!5e0!3m2!1sen!2sua!4v1559491565118!5m2!1sen!2sua"
        width="100%"
        height="500px"
        allowFullScreen
        title="location"
      />
      <div className="location_tag">
        <div>Где я?</div>
      </div>
    </div>
  );
};

export default Location;