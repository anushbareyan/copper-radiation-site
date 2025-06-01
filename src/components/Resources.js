import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceCard from "./ResourceCard";
import "./Resources.css";

const Resources = () => {
  const resources = [
    {
      title: "Research Paper",
      description: "Full research paper and supplementary materials.",
      link: "https://drive.google.com/drive/folders/1mmAdhJ39TwlE5-o3rb3ercLEiaX7swyg",
      type: "paper",
    },
    {
      title: "Python Program",
      description:
        "Simulation program to model radiation induced resistance change.",
      link: "https://github.com/anushbareyan/space-radiation-effects#",
      type: "code",
    },
    // {
    //   title: "LinkedIn Profile",
    //   description: "My LinkedIn",
    //   link: "https://www.linkedin.com/in/anush-bareyan/",
    //   type: "linkedin",
    // },
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
