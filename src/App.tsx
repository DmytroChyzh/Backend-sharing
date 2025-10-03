import { useState, useEffect, lazy, Suspense, memo } from 'react';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';

// Lazy load slides for better performance
const TitleSlide = lazy(() => import('./slides/TitleSlide'));
const WhoWeAreSlide = lazy(() => import('./slides/WhoWeAreSlide'));
const ForWhoSlide = lazy(() => import('./slides/ForWhoSlide'));
const QuickComparisonSlide = lazy(() => import('./slides/QuickComparisonSlide'));
const FirebaseSetupSlide = lazy(() => import('./slides/FirebaseSetupSlide'));
const FirebaseProsSlide = lazy(() => import('./slides/FirebaseProsSlide'));
const FirebaseConsSlide = lazy(() => import('./slides/FirebaseConsSlide'));
const FirebaseProjectsSlide = lazy(() => import('./slides/FirebaseProjectsSlide'));
const ConvexSetupSlide = lazy(() => import('./slides/ConvexSetupSlide'));
const ConvexProsSlide = lazy(() => import('./slides/ConvexProsSlide'));
const ConvexConsSlide = lazy(() => import('./slides/ConvexConsSlide'));
const ConvexProjectsSlide = lazy(() => import('./slides/ConvexProjectsSlide'));
const WhenToChooseSlide = lazy(() => import('./slides/WhenToChooseSlide'));
const AlternativesSlide = lazy(() => import('./slides/AlternativesSlide'));
const TipsSlide = lazy(() => import('./slides/TipsSlide'));
const FinalSlide = lazy(() => import('./slides/FinalSlide'));

const slides = [
  TitleSlide,
  WhoWeAreSlide,
  ForWhoSlide,
  QuickComparisonSlide,
  FirebaseSetupSlide,
  FirebaseProsSlide,
  FirebaseConsSlide,
  FirebaseProjectsSlide,
  ConvexSetupSlide,
  ConvexProsSlide,
  ConvexConsSlide,
  ConvexProjectsSlide,
  WhenToChooseSlide,
  AlternativesSlide,
  TipsSlide,
  FinalSlide,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [preloadedSlides, setPreloadedSlides] = useState<Set<number>>(new Set([0]));

  // Preload next and previous slides
  useEffect(() => {
    const preloadSlide = (slideIndex: number) => {
      if (slideIndex >= 0 && slideIndex < slides.length && !preloadedSlides.has(slideIndex)) {
        setPreloadedSlides(prev => new Set([...prev, slideIndex]));
      }
    };

    // Preload next slide
    if (currentSlide < slides.length - 1) {
      preloadSlide(currentSlide + 1);
    }
    
    // Preload previous slide
    if (currentSlide > 0) {
      preloadSlide(currentSlide - 1);
    }
  }, [currentSlide, preloadedSlides, slides.length]);

  const navigateToSlide = (newSlide: number) => {
    if (newSlide === currentSlide || isTransitioning) return;
    
    setDirection(newSlide > currentSlide ? 'next' : 'prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        navigateToSlide(Math.min(currentSlide + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToSlide(Math.max(currentSlide - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full h-full">
        <div 
          className={`w-full h-full transition-all duration-300 ease-in-out ${
            isTransitioning 
              ? direction === 'next' 
                ? 'transform translate-x-full opacity-0' 
                : 'transform -translate-x-full opacity-0'
              : 'transform translate-x-0 opacity-100'
          }`}
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="glassmorphism-3d p-8 rounded-3xl animate-glow-pulse">
                <div className="text-4xl text-center rainbow-text">
                  Завантаження слайда...
                </div>
              </div>
            </div>
          }>
            <CurrentSlideComponent />
          </Suspense>
        </div>
      </div>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={navigateToSlide}
      />
    </div>
  );
}

export default App;
