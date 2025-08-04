import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TeamMember {
  name: string;
  index: string;
  role: string;
  avatar?: string;
}

export function TeamPage() {
  const teamMembers: TeamMember[] = [
    { name: "I.S. Siriwardana", index: "22UG1-0522", role: "Model Developer" },
    { name: "J.S. Dharmadasa", index: "22UG1-0557", role: "Model Developer" },
    { name: "S.P.A.S. Senarathne", index: "22UG1-0345", role: "Backend Developer & Deployment" },
    { name: "H.A.K. De Zoysa", index: "22UG1-0496", role: "Frontend Developer" },
    { name: "K.G.V.T. Gamage", index: "22UG1-0392", role: "Backend Developer & Deployment" },
    { name: "H.M.K.S. Dedunupitiya", index: "22UG1-0812", role: "Frontend Developer" },
    { name: "B.K.G. Perera", index: "22UG1-0506", role: "Data Collection & Preprocessing" },
    { name: "G.K.S. Fernando", index: "22UG1-0379", role: "Data Collection & Preprocessing" },
    { name: "G.K.S. Pathum", index: "22UG1-0520", role: "Data Collection & Preprocessing" },
    { name: "S. Yugadharshini", index: "22UG1-0289", role: "Model Developer" },
    { name: "U.V.C.T. Jayathilaka", index: "22UG1-0380", role: "Backend Developer & Deployment" }
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">Meet Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This mini project for CCS4310 Deep Learning was developed by <span className="font-semibold text-primary">DL Squad</span>, a team of passionate undergraduate students exploring the power of deep learning through real-world applications.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <Card
              key={idx}
              className="rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md"
              style={{
                background: 'linear-gradient(135deg, #f9fafb 50%, #e0e7ff 200%)',
              }}
            >

              <CardHeader className="text-center pt-6 pb-2 space-y-3">
                <div className="flex justify-center">
                  <Avatar className="h-20 w-20 border shadow-sm">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg bg-muted text-muted-foreground">
                      {member.name
                        .split(' ')
                        .map((w) => w[0])
                        .join('')
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                <p className="text-md text-gray-700 font-medium">{member.index}</p>
                <div className="flex justify-center mt-2">
                  <Badge className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {member.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>

        {/* Mission Statement with custom background */}
        <div className="bg-[#f0f4f8] rounded-2xl px-6 py-10 shadow-sm border border-gray-200">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At DL Squad, we believe the future of dental healthcare lies at the intersection of clinical expertise and cutting-edge AI. Our mini project reflects this vision — bringing accessible, interpretable, and impactful diagnostics through deep learning. With a focus on open collaboration and ethical development, we aim to make a difference in both research and real-world impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
