import React, { useState, useRef } from 'react';
import { AnalysisResult } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Upload, FileImage, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UploadPageProps {
  onAnalysisComplete: (result: AnalysisResult) => void;
  onError: (message: string) => void;
}

export function UploadPage({ onAnalysisComplete, onError }: UploadPageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectedFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      onError('Invalid file type. Please upload a JPG or PNG image.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      onError('File size too large. Please upload an image smaller than 10MB.');
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));

      const mockResult: AnalysisResult = {
        predictedClass: Math.random() > 0.5 ? 'Cavity Detected' : 'Healthy Tooth',
        confidence: Math.random() * 20 + 80,
        imageUrl: previewUrl,
        heatmapUrl: `https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop&crop=center`,
      };

      setProgress(100);
      setTimeout(() => {
        clearInterval(progressInterval);
        setIsLoading(false);
        onAnalysisComplete(mockResult);
      }, 500);
    } catch (error) {
      clearInterval(progressInterval);
      setIsLoading(false);
      onError('Analysis failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Upload Dental X-ray</h1>
          <p className="text-muted-foreground">
            Upload your dental X-ray image to receive an AI-powered diagnosis with visual explanations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileImage className="mr-2 h-5 w-5" />
                Select X-ray Image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">
                  {selectedFile ? selectedFile.name : 'Choose or drag X-ray image'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Supported formats: JPG, PNG (Max 10MB)
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handleFileSelect}
                className="hidden"
              />

              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Please ensure the X-ray image is clear and properly oriented for best results.
                </p>
              </div>

              {selectedFile && (
                <Button
                  onClick={handleUpload}
                  disabled={isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? 'Analyzing...' : 'Upload & Analyze'}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {previewUrl ? (
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={previewUrl}
                      alt="X-ray preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {isLoading && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Analyzing image...</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="w-full" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <FileImage className="mx-auto h-16 w-16 mb-4" />
                    <p>No image selected</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
