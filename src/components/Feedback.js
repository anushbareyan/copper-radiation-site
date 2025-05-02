import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./Feedback.css";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const finalName = name.trim() || "Anonymous";
    const finalEmail = email.trim() || "anonymous@example.com";
    // Form validation !name.trim() || !email.trim() ||
    if (!message.trim()) {
      setError("Please fill in you optinion");
      setLoading(false);
      return;
    }

    try {
      // Use the environment variable if available, otherwise fall back to the default value
      const formspreeId = process.env.REACT_APP_FORMSPREE_ID || "xeogagzv";
      const formspreeUrl = `https://formspree.io/f/xeogagzv`;

      // Submit to FormSpree service (a free service to collect form submissions)
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          finalName,
          finalEmail,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (err) {
      setError("Failed to submit your feedback. Please try again later.");
      console.error("Feedback submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="feedback-container">
      <h2 className="feedback-title">Share Your Opinion</h2>
      <p className="feedback-subtitle">
        Since I will continue working on this research to eventually (hopefully)
        publish a scientific paper, I need feedback of what I can include in the
        research, or what I can do to make it better. Any comment or feedback
        will help me a lot.
      </p>

      {submitted ? (
        <Alert variant="success">
          Thank you for your feedback! Your opinion has been submitted
          successfully.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit} className="feedback-form">
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>Name(not required)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email(not required)</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Your Opinion</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Share your thoughts on the research..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Feedback;
