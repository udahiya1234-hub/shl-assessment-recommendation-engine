import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemStory } from './components/ProblemStory';
import { SolutionAction } from './components/SolutionAction';
import { DataVisualization } from './components/DataVisualization';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { ModelVisuals } from './components/ModelVisuals';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { EdgeCaseHandling } from './components/EdgeCaseHandling';
import { DeploymentCloud } from './components/DeploymentCloud';
import { BusinessImpact } from './components/BusinessImpact';
import { FinalClosing } from './components/FinalClosing';
import { NavigationDots } from './components/NavigationDots';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* Global Background Elements - Light & Subtle */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 left-[-100px] w-[400px] h-[400px] bg-blue-200/20 blur-[100px] rounded-full"></div>
      </div>

      <NavigationDots />

      <main className="relative z-10">
        <HeroSection id="hero" />
        <ProblemStory id="problem" />
        <SolutionAction id="solution" />
        <DataVisualization id="data" />
        <ArchitectureFlow id="architecture" />
        <ModelVisuals id="models" />
        <PerformanceMetrics id="metrics" />
        <EdgeCaseHandling id="edge-cases" />
        <DeploymentCloud id="deployment" />
        <BusinessImpact id="impact" />
        <FinalClosing id="closing" />
      </main>
    </div>
  );
};

export default App;