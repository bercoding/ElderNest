import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardBody, CardImage } from '../ui/Card';
import { TeamMember } from '../../types';

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Hana Tanaka',
      role: 'Founder & Director',
      bio: 'Dr. Tanaka holds a Ph.D. in Integrative Medicine and has over 20 years of experience in holistic health practices.',
      imageUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      name: 'Michael Wilson',
      role: 'Nutrition Specialist',
      bio: 'Michael is a certified nutritionist with expertise in functional nutrition and therapeutic dietary approaches.',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '3',
      name: 'Lisa Chen',
      role: 'Meditation Instructor',
      bio: 'Lisa has practiced meditation for over 15 years and specializes in mindfulness techniques for stress reduction.',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '4',
      name: 'James Rodriguez',
      role: 'Fitness Coach',
      bio: 'James combines traditional training methods with modern exercise science to create balanced fitness programs.',
      imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-primary mb-4">Meet Our Team</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our team of experienced professionals is dedicated to guiding you on your wellness journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <Card key={member.id} hoverable>
            <CardImage 
              src={member.imageUrl} 
              alt={member.name}
              className="h-64"
            />
            <CardBody>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};