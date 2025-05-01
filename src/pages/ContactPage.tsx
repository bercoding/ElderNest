import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { Map } from '../components/contact/Map';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="pt-20 md:pt-24 lg:pt-28 bg-background-light">
        <ContactForm />
        <Map />
      </div>
    </>
  );
};

export default ContactPage;