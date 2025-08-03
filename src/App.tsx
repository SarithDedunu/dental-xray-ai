import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { UploadPage } from './components/UploadPage';
import { ResultPage } from './components/ResultPage';
import { ErrorPage } from './components/ErrorPage';
import { AboutPage } from './components/AboutPage';
import { TeamPage } from './components/TeamPage';
import { Navigation } from './components/Navigation';

export type Page = 'home' | 'upload' | 'result' | 'error' | 'about' | 'team';

export interface AnalysisResult {
  predictedClass: string;
  confidence: number;
  imageUrl: string;
  heatmapUrl: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
  };

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setCurrentPage('result');
  };

  const handleError = (message: string) => {
    setErrorMessage(message);
    setCurrentPage('error');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'upload':
        return <UploadPage onAnalysisComplete={handleAnalysisComplete} onError={handleError} />;
      case 'result':
        return <ResultPage result={analysisResult} onNavigate={navigateToPage} />;
      case 'error':
        return <ErrorPage message={errorMessage} onNavigate={navigateToPage} />;
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={navigateToPage} />
      <main className="pt-16">
        {renderCurrentPage()}
      </main>
    </div>
  );
}