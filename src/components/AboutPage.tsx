import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Upload, Brain, Eye, Cpu, Zap, Shield } from 'lucide-react';

export function AboutPage() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-blue-600" />,
      title: "Upload Dental X-ray",
      description: "Users upload their dental X-ray images in JPG or PNG format. Our system accepts high-quality radiographic images and validates them before processing.",
      details: [
        "Supports JPG and PNG formats",
        "Maximum file size: 10MB",
        "Automatic image validation",
        "Secure upload processing"
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Model Predicts Condition",
      description: "Our deep learning model, trained on thousands of dental X-rays, analyzes the uploaded image to detect various dental conditions with high accuracy.",
      details: [
        "Convolutional Neural Network (CNN)",
        "Trained on extensive dental X-ray dataset",
        "Multi-class classification",
        "Continuous model improvements"
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Grad-CAM Shows Heatmap Explanation",
      description: "Using Gradient-weighted Class Activation Mapping (Grad-CAM), we generate visual explanations showing which areas of the X-ray influenced the AI's decision.",
      details: [
        "Gradient-weighted Class Activation Mapping",
        "Visual attention highlights",
        "Transparent AI decision-making",
        "Interactive heatmap overlay"
      ]
    }
  ];

  const technologies = [
    { name: "Deep Learning", description: "CNN-based architecture for image analysis", color: "bg-blue-100 text-blue-800" },
    { name: "Grad-CAM", description: "Visual explanation technique", color: "bg-purple-100 text-purple-800" },
    { name: "Explainable AI", description: "Transparent and interpretable results", color: "bg-green-100 text-green-800" },
    { name: "Flask API", description: "Python backend for model inference", color: "bg-orange-100 text-orange-800" },
    { name: "React", description: "Modern frontend framework", color: "bg-cyan-100 text-cyan-800" },
    { name: "Computer Vision", description: "Medical image processing", color: "bg-pink-100 text-pink-800" }
  ];

  const features = [
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: "Advanced AI Model",
      description: "State-of-the-art deep learning model trained specifically for dental X-ray analysis"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Real-time Processing",
      description: "Fast analysis with results typically available within seconds of upload"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Privacy Focused",
      description: "Images are processed securely and are not stored permanently on our servers"
    },
    {
      icon: <Eye className="h-6 w-6 text-purple-600" />,
      title: "Visual Explanations",
      description: "Understand AI decisions through intuitive heatmap visualizations"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">How Our System Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered dental X-ray diagnosis system combines advanced machine learning 
            with explainable AI techniques to provide accurate and transparent results.
          </p>
        </div>

        {/* Step-by-step Process */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Analysis Process</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[200px]">
                    {/* Icon and Number */}
                    <div className="bg-muted/30 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Technologies Used</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={tech.color}>
                      {tech.name}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {feature.icon}
                    <span className="ml-3">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-800 dark:text-yellow-200">
              <Shield className="mr-2 h-5 w-5" />
              Important Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-yellow-700 dark:text-yellow-300 space-y-2">
              <p>
                This AI dental diagnosis system is designed for educational and research purposes only. 
                The results provided should not be used as a substitute for professional medical advice, 
                diagnosis, or treatment.
              </p>
              <p>
                Always consult with qualified dental professionals for accurate diagnosis and appropriate 
                treatment plans. The AI predictions are meant to assist and inform, not replace, 
                clinical expertise.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}