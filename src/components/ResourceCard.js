import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ResourceCard.css';

const ResourceCard = ({ title, description, link, type }) => {
  // Determine which icon to display based on the card type
  const getIcon = () => {
    switch (type) {
      case 'paper':
        return faFilePdf;
      case 'code':
        return faCode;
      case 'linkedin':
        return faLinkedin;
      default:
        return null;
    }
  };

  return (
    <Card className="resource-card">
      <Card.Body>
        <div className="card-icon">
          <FontAwesomeIcon icon={getIcon()} size="3x" />
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          View {title}
        </a>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
