import React from 'react';
import { Page } from '../App';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Upload, Eye, Brain } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Dental X-Ray Diagnosis with Explainable AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Upload a dental X-ray image and receive a diagnosis with visual explanations powered by AI. 
              Our advanced system provides accurate predictions with transparent, interpretable results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => onNavigate('upload')} 
              size="lg"
              className="px-8 py-3 text-lg"
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload X-ray
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onNavigate('about')} 
              size="lg"
              className="px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Upload X-ray</h3>
                <p className="text-muted-foreground">
                  Upload your dental X-ray image in JPG or PNG format
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI model analyzes the image and predicts dental conditions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Visual Explanation</h3>
                <p className="text-muted-foreground">
                  View results with Grad-CAM heatmap showing areas of focus
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Analyze Your X-ray?</h2>
          <p className="text-xl text-muted-foreground">
            Get started with our AI-powered dental diagnosis system
          </p>
          <Button 
            onClick={() => onNavigate('upload')} 
            size="lg"
            className="px-8 py-3 text-lg"
          >
            <Upload className="mr-2 h-5 w-5" />
            Start Analysis
          </Button>
        </div>
      </section>
    </div>
  );
}