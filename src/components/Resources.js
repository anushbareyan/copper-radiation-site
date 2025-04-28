import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResourceCard from './ResourceCard';
import './Resources.css';

const Resources = () => {
  const resources = [
    {
      title: 'Research Paper',
      description: 'Full research paper and supplementary materials.',
      link: 'https://drive.google.com/drive/folders/your-folder-id',
      type: 'paper'
    },
    {
      title: 'Python Program',
      description: 'Simulation program to model radiation induced resistance change.',
      link: 'https://github.com/yourusername/your-repo',
      type: 'code'
    },
    {
      title: 'LinkedIn Profile',
      description: 'Connect with me on LinkedIn for professional updates.',
      link: 'https://linkedin.com/in/your-linkedin',
      type: 'linkedin'
    }
  ];

  return (
    <Container className="resources-container">
      <Row>
        {resources.map((resource, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <ResourceCard
              title={resource.title}
              description={resource.description}
              link={resource.link}
              type={resource.type}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Resources;
