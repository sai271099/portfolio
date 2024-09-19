'use client';
import { useState } from 'react';
import NavItem from '@/components/elements/NavItem';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Update for correct type in input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update for correct form submit event type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('https://formspree.io/f/xwpedeyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);

        // Reload the page after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        alert('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="sep-border mx-6 px-2 py-16 mt-6">
      <div className="flex flex-col max-w-5xl mx-auto">
        <div className="flex flex-row gap-4 items-center mb-8">
          <span className="material-symbols-rounded mr-1 scale-[200%] mx-1">
            alternate_email
          </span>
          <h1 className="text-4xl font-bold" id="contact">
            Contact
          </h1>
        </div>

        <div className="flex gap-5 flex-row">
          {submitted ? (
            <div className="text-2xl font-bold">
              Thank you! Your message has been submitted.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-2/3">
              <h2 className="text-3xl font-semibold">Let&apos;s Connect</h2>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="fullname" className="ml-1 font-medium text-lg">
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    placeholder="John Doe"
                    type="text"
                    autoComplete="name"
                    value={formData.fullname}
                    onChange={handleInputChange} // Correct type for input change
                    className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white bg-opacity-60 dark:bg-opacity-20"
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="email" className="ml-1 font-medium text-lg">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="john.doe@gmail.com"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange} // Correct type for input change
                    className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white bg-opacity-60 dark:bg-opacity-20 dark:text-[#ffeef8]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="ml-1 font-medium text-lg">
                  Message <span className="opacity-40">(totally optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share any thoughts or feedback..."
                  value={formData.message}
                  onChange={(e) => handleInputChange(e as React.ChangeEvent<HTMLTextAreaElement>)} // Correct type for textarea change
                  className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white bg-opacity-60 dark:bg-opacity-20 dark:text-[#ffeef8] h-40"
                />
              </div>

              <button
                id="submit"
                type="submit"
                className="flex flex-row gap-3 items-center px-6 py-3 rounded-full bg-black text-white w-fit dark:bg-[#ffeef8] dark:text-black transition-colors"
              >
                Send
                <span className="material-symbols-rounded scale-110">send</span>
              </button>
            </form>
          )}

          <ul className="flex flex-col w-1/3">
            <h2 className="text-3xl font-semibold mb-12 ml-3">Contact Info</h2>
            <li className="py-2 px-4 rounded-full flex flex-row gap-1 items-center hover:bg-white hover:bg-opacity-10 transition-colors whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="-2 -2 24 24"
                className="scale-[170%] ml-1 mr-1"
              >
                <g fill="currentColor">
                  <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                  <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
                </g>
              </svg>

              <a
                href="https://www.linkedin.com/in/sai-yada27/"
                className="font-medium"
              >
                LinkedIn
              </a>
            </li>
            <li className="py-2 px-4 rounded-full flex flex-row gap-1 items-center hover:bg-white hover:bg-opacity-10 transition-colors whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="scale-150 ml-1 mr-1"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                  <path d="M9 20.027c-3 .973-5.5 0-7-3" />
                </g>
              </svg>

              <a href="https://github.com/sai271099" className="font-medium">
                GitHub
              </a>
            </li>
            <NavItem
              name="saiyada1027@gmail.com"
              link="mailto:saiyada1027@gmail.com"
              icon="mail"
            />
            <NavItem
              name="+1 (352)-283-5750"
              link="tel:+13522835750"
              icon="call"
            />
            <NavItem
              name="Gainesville, Florida"
              link="https://maps.app.goo.gl/tnuPtfo8t3BkqgPz5"
              icon="location_on"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
