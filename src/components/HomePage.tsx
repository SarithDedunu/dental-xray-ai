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
      <section className="px-4 py-24 max-w-7xl mx-auto">
        <div className="text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Dental X-Ray Diagnosis with Explainable AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Upload a dental X-ray image and receive a diagnosis with visual explanations powered by AI.
              Our advanced system provides accurate predictions with transparent, interpretable results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA - Upload X-ray */}
            <button
              onClick={() => onNavigate('upload')}
              className="flex items-center justify-center gap-3 px-10 py-4 text-lg font-semibold rounded-xl text-white bg-gray-700 shadow-md hover:bg-gray-900 transition duration-300"
              style={{ minWidth: '180px' }}
            >
              <Upload className="h-6 w-6" />
              Upload X-ray
            </button>

            {/* Secondary CTA - Learn More */}
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center justify-center gap-3 px-10 py-4 text-lg font-semibold rounded-xl text-black border border-black bg-white shadow-sm hover:bg-gray-100 transition duration-300"
              style={{ minWidth: '180px' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center border border-gray-200 shadow-md hover:shadow-lg transition-all">
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

            <Card className="text-center border border-gray-200 shadow-md hover:shadow-lg transition-all">
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

            <Card className="text-center border border-gray-200 shadow-md hover:shadow-lg transition-all">
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
      <section className="px-4 py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Analyze Your X-ray?</h2>
          <p className="text-xl text-muted-foreground">
            Get started with our AI-powered dental diagnosis system
          </p>
          <Button
            onClick={() => onNavigate('upload')}
            size="lg"
            className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Upload className="mr-2 h-5 w-5" />
            Start Analysis
          </Button>
        </div>
      </section>
    </div>
  );
}
