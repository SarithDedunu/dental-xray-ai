import React, { useState } from 'react';
import { AnalysisResult, Page } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Upload, Download, Eye, EyeOff, CheckCircle, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ResultPageProps {
  result: AnalysisResult | null;
  onNavigate: (page: Page) => void;
}

export function ResultPage({ result, onNavigate }: ResultPageProps) {
  const [showHeatmap, setShowHeatmap] = useState(true);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">No analysis results to display</p>
          <Button onClick={() => onNavigate('upload')}>
            <Upload className="mr-2 h-4 w-4" />
            Upload New Image
          </Button>
        </div>
      </div>
    );
  }

  const isHealthy = result.predictedClass.toLowerCase().includes('healthy');
  const confidenceColor = result.confidence >= 90 ? 'text-green-600' : result.confidence >= 70 ? 'text-yellow-600' : 'text-red-600';

  const handleDownload = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = result.imageUrl;
    link.download = `dental-analysis-result-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Analysis Results</h1>
          <p className="text-muted-foreground">
            AI-powered diagnosis with visual explanations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Results Summary */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                {isHealthy ? (
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                ) : (
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
                )}
                Diagnosis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Predicted Condition</Label>
                <Badge 
                  variant={isHealthy ? "secondary" : "destructive"}
                  className="text-lg px-3 py-1"
                >
                  {result.predictedClass}
                </Badge>
              </div>

              <div className="space-y-2">
                <Label>Confidence Score</Label>
                <div className="flex items-center space-x-2">
                  <div className={`text-2xl font-bold ${confidenceColor}`}>
                    {result.confidence.toFixed(1)}%
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="heatmap-toggle"
                    checked={showHeatmap}
                    onCheckedChange={setShowHeatmap}
                  />
                  <Label htmlFor="heatmap-toggle" className="flex items-center">
                    {showHeatmap ? <Eye className="mr-1 h-4 w-4" /> : <EyeOff className="mr-1 h-4 w-4" />}
                    Show Heatmap
                  </Label>
                </div>

                <div className="text-sm text-muted-foreground">
                  The heatmap highlights areas that influenced the AI's decision using Grad-CAM visualization.
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Button onClick={handleDownload} variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Result
                </Button>
                
                <Button onClick={() => onNavigate('upload')} className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Another Image
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Image Visualization */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Original X-ray */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Original X-ray</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={result.imageUrl}
                      alt="Original X-ray"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Heatmap Overlay */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {showHeatmap ? 'Grad-CAM Heatmap' : 'Analysis View'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    {showHeatmap ? (
                      <ImageWithFallback
                        src={result.heatmapUrl}
                        alt="Grad-CAM Heatmap"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageWithFallback
                        src={result.imageUrl}
                        alt="Original X-ray"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {showHeatmap && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      Red areas indicate regions of highest AI attention
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Understanding Your Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Confidence Score</h4>
                    <p className="text-muted-foreground">
                      Indicates how certain the AI model is about its prediction. 
                      Higher scores indicate greater confidence in the diagnosis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Grad-CAM Heatmap</h4>
                    <p className="text-muted-foreground">
                      Shows which areas of the X-ray the AI focused on when making its prediction. 
                      Warmer colors indicate higher attention.
                    </p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                        Important Disclaimer
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300">
                        This AI diagnosis is for educational and research purposes only. 
                        Always consult with a qualified dental professional for medical advice and treatment decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}