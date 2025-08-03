import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Mail, Github, Linkedin, User, Eye } from 'lucide-react';
import { Button } from './ui/button';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  initials: string;
  email: string;
  github?: string;
  linkedin?: string;
  specialties: string[];
}

export function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Model Developer",
      bio: "PhD in Computer Science with specialization in medical image analysis. 5+ years developing deep learning models for healthcare applications.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=150&h=150&fit=crop&crop=face",
      initials: "SC",
      email: "sarah.chen@dentalai.com",
      github: "sarahchen",
      linkedin: "sarah-chen-phd",
      specialties: ["Deep Learning", "Computer Vision", "Medical AI"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Frontend Developer",
      bio: "Full-stack developer passionate about creating intuitive user experiences for healthcare technology. Expert in React and modern web development.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      initials: "MR",
      email: "marcus@dentalai.com",
      github: "mrodriguez",
      linkedin: "marcus-rodriguez-dev",
      specialties: ["React", "TypeScript", "UI/UX Design"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Dental Consultant",
      bio: "Practicing dentist with 15+ years of experience in digital radiography and diagnostic imaging. Provides clinical expertise and validation.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      initials: "EW",
      email: "emily.watson@dentalai.com",
      linkedin: "dr-emily-watson",
      specialties: ["Digital Radiography", "Oral Diagnosis", "Clinical Validation"]
    },
    {
      name: "James Park",
      role: "Backend Developer",
      bio: "Systems engineer specializing in scalable API development and cloud infrastructure. Ensures reliable and secure model deployment.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      initials: "JP",
      email: "james.park@dentalai.com",
      github: "jamespark",
      linkedin: "james-park-engineer",
      specialties: ["Python", "Flask", "Cloud Infrastructure"]
    },
    {
      name: "Dr. Aisha Patel",
      role: "Research Lead",
      bio: "Biomedical engineer and researcher focused on explainable AI in healthcare. Leading research initiatives and model interpretability efforts.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      initials: "AP",
      email: "aisha.patel@dentalai.com",
      github: "aishapatel",
      linkedin: "dr-aisha-patel",
      specialties: ["Explainable AI", "Healthcare Research", "Grad-CAM"]
    },
    {
      name: "Alex Thompson",
      role: "Data Scientist",
      bio: "Machine learning specialist with expertise in medical data preprocessing and model validation. Ensures data quality and model reliability.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      initials: "AT",
      email: "alex.thompson@dentalai.com",
      github: "alexthompson",
      linkedin: "alex-thompson-ds",
      specialties: ["Data Science", "Model Validation", "Statistics"]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our multidisciplinary team combines expertise in artificial intelligence, 
            software development, and dental medicine to create innovative healthcare solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  {member.role}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Specialties */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Contact Links */}
                <div className="flex justify-center space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="px-2">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email {member.name}</span>
                  </Button>
                  
                  {member.github && (
                    <Button variant="outline" size="sm" className="px-2">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub profile</span>
                    </Button>
                  )}
                  
                  {member.linkedin && (
                    <Button variant="outline" size="sm" className="px-2">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn profile</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <section className="bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Project Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">X-rays Analyzed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">94.7%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2.3s</div>
              <div className="text-sm text-muted-foreground">Avg. Analysis Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We are committed to advancing dental healthcare through innovative AI technology. 
                Our mission is to make accurate dental diagnosis more accessible while maintaining 
                transparency and explainability in our AI systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Patient-Centered</h3>
                  <p className="text-sm text-muted-foreground">
                    Putting patient care and safety at the center of everything we do
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Transparent AI</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring our AI decisions are explainable and understandable
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Github className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Open Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Contributing to open research and collaborative development
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}