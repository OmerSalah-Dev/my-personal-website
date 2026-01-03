import "./connect.css";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { contactSchema } from "./validationSchema";
import icons from "./icons";
interface FormStatus {
  status: "idle" | "loading" | "success" | "error";
  message: string | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}


function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: "idle",
    message: null,
  });

  const handleInputChange =
    <T,>(
      setter: React.Dispatch<React.SetStateAction<T>>,
      field: keyof FormErrors
    ) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value as T);
      if (formErrors[field]) {
        setFormErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus({ status: "loading", message: null });
    setFormErrors({});

    try {
      const formData = { name, email, message };
      await contactSchema.validate(formData, { abortEarly: false });

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();
      console.log("Response data:", resData);

      if (response.ok) {
        setFormStatus({
          status: "success",
          message: resData.message,

        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        if (resData.error) {
          setFormErrors(resData.error);
        }
        setFormStatus({
          status: "error",
          message: resData.error || "An unknown error occurred.",
        });
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors: FormErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path as keyof FormErrors] = err.message;
          }
        });

        setFormErrors(errors);
        setFormStatus({
          status: "error",
          message: "Please fix the errors in the form",
        });
      } else {
        setFormStatus({
          status: "error",
          message:
            "An unexpected network error occurred. Please try again later.",
        });
      }
    }
  };

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ status: "idle", message: null });
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [formStatus.message]);

  const isLoading = formStatus.status === "loading";

  return (
    <div className="connect-main-container scroll-target" id="contact">
      <div className="connect-grid-container">
        {/* left connect form */}
        <div className="left-connect-form">
          <div className="connect-header">
            <h2>Get In Touch</h2>
            <p>
              Open for new projects and exciting collaborations.
            </p>
          </div>
          <h4>Let's Connect</h4>
          <p>
          I'm just a message away. Drop your details below and I'd love to connect soon.
          </p>
          <div className="contact-details">
            <div>
              <span className="contact-icon">{icons.mail}</span>{" "}
              <span className="contact-info-text">omersalah.dev@gmail.com</span>
            </div>
            <div>
              <span className="contact-icon">{icons.mapPin}</span>{" "}
              <span className="contact-info-text">Duhok, Iraq</span>
            </div>
          </div>
          <div className="contact-social">
            <a
              href="https://github.com/OmerSalah-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-github"
              aria-label="View my GitHub profile"
            >
              {icons.github}
            </a>

            <a
              href="https://www.linkedin.com/in/omer-salah-29b509286"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-linkedin"
              aria-label="Connect with me on LinkedIn"
            >
              {icons.linkedin}
            </a>

            <a
              href="https://wa.me/9647517467815"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-whatsapp"
              aria-label="Chat with me on WhatsApp"
            >
              {icons.whatsapp}
            </a>
          </div>
        </div>
        {/* right connect form  */}
        <form className="right-connect-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input
              type="text"
              id="name"
              placeholder="your name"
              value={name}
              onChange={handleInputChange(setName, "name")}
              required
              disabled={isLoading}
            />
            {formErrors.name && (
              <p className="form-error-message">{formErrors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@.com"
              value={email}
              onChange={handleInputChange(setEmail, "email")}
              required
              disabled={isLoading}
            />
            {formErrors.email && (
              <p className="form-error-message">{formErrors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message"> Message: </label>
            <textarea
              id="message"
              placeholder="Your message..."
              value={message}
              onChange={handleInputChange(setMessage, "message")}
              required
              disabled={isLoading}
            ></textarea>
            {formErrors.message && (
              <p className="form-error-message">{formErrors.message}</p>
            )}
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {formStatus.message && (
            <p
              className={`form-message ${
                formStatus.status === "success"
                  ? "form-message-success"
                  : "form-message-error"
              }`}
            >
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
export default Connect;

