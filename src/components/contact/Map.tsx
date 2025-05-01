import React from 'react';
import { Section } from '../ui/Section';

export const Map: React.FC = () => {
  return (
    <Section background="light" className="pb-0">
      <div className="text-center mb-8">
        <h2 className="text-primary mb-4">Tìm Chúng Tôi</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Tọa lạc tại trung tâm Đà Nẵng, trung tâm của chúng tôi dễ dàng tiếp cận bằng phương tiện giao thông công cộng.
        </p>
      </div>
      
      <div className="h-96 rounded-t-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.047853430035!2d108.25146631528767!3d16.0648729888815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142176f5f8b9b1d%3A0x5d8b9b1d8b9b1d8b!2zMTbCsDAzJzUzLjUiTiAxMDjCsDE1JzA1LjciRQ!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
};