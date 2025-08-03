import React from 'react';
import { Page } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AlertTriangle, RotateCcw, Upload, Home } from 'lucide-react';

interface ErrorPageProps {
  message: string;
  onNavigate: (page: Page) => void;
}

export function ErrorPage({ message, onNavigate }: ErrorPageProps) {
  const getErrorIcon = () => {
    return <AlertTriangle className="h-16 w-16 text-red-500" />;
  };

  const getErrorType = () => {
    if (message.toLowerCase().includes('file type')) return 'Invalid File Type';
    if (message.toLowerCase().includes('size')) return 'File Too Large';
    if (message.toLowerCase().includes('server') || message.toLowerCase().includes('api')) return 'Server Error';
    if (message.toLowerCase().includes('network')) return 'Network Error';
    return 'Analysis Error';
  };

  const getSuggestions = () => {
    const errorType = getErrorType().toLowerCase();
    
    if (errorType.includes('file type')) {
      return [
        'Make sure your file is in JPG or PNG format',
        'Avoid uploading GIF, BMP, or other unsupported formats',
        'Check that the file extension matches the actual file type'
      ];
    }
    
    if (errorType.includes('size')) {
      return [
        'Reduce the image file size to under 10MB',
        'Use image compression tools to reduce file size',
        'Try uploading a lower resolution version of the image'
      ];
    }
    
    if (errorType.includes('server') || errorType.includes('network')) {
      return [
        'Check your internet connection',
        'Try uploading the image again in a few moments',
        'Clear your browser cache and reload the page'
      ];
    }
    
    return [
      'Make sure the uploaded image is a clear dental X-ray',
      'Check that the image is properly oriented',
      'Try uploading a different X-ray image'
    ];
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card>
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              {getErrorIcon()}
            </div>
            <CardTitle className="text-2xl text-red-600">
              {getErrorType()}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4">
                {message}
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">
                Suggestions to resolve this issue:
              </h3>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                {getSuggestions().map((suggestion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                onClick={() => onNavigate('upload')} 
                className="flex-1"
                size="lg"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              
              <Button 
                onClick={() => onNavigate('upload')} 
                variant="outline"
                className="flex-1"
                size="lg"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload New Image
              </Button>
              
              <Button 
                onClick={() => onNavigate('home')} 
                variant="ghost"
                className="flex-1"
                size="lg"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </div>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                If you continue to experience issues, please try refreshing the page or contact support.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}