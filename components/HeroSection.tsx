import React, { useEffect, useRef, useState } from 'react';
import hero1 from '../src/images/hero-1.jpg';
import hero2 from '../src/images/hero-2.jpg';
import member1 from '../src/images/fitness-member-1.jpg';
import member2 from '../src/images/fitness-member-2.jpg';
import member3 from '../src/images/fitness-member-3.jpg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const slides = [
    {
      id: 1,
      title: 'Mindset Mastery',
      subtitle: 'Foundation For Success',
      description:
        'Transform your fitness journey starting with the right mindset. Our coaches help you build unshakeable confidence and mental strength.',
      bgColor: '#0149ac',
      textColor: 'text-white',
      subtitleColor: 'text-blue-100',
      images: [hero1.src, member1.src],
      layout: 'left',
      imageAnimation: 'slide-right',
    },
    {
      id: 2,
      title: 'Exercise Excellence',
      subtitle: 'Personalised Programming',
      description:
        "Experience expertly designed workouts tailored to your goals. From home or our private facility, we've got you covered.",
      bgColor: '#ffffff',
      textColor: 'text-blue-900',
      subtitleColor: 'text-blue-700',
      images: [hero2.src],
      layout: 'right',
      imageAnimation: 'slide-left',
    },
    {
      id: 3,
      title: 'Acute Accountability',
      subtitle: 'Stay On Track',
      description:
        'Weekly check-ins and group support keep you motivated. Join our vibrant community of everyday people achieving real results.',
      bgColor: '#0149ac',
      textColor: 'text-white',
      subtitleColor: 'text-blue-100',
      images: [member2.src, member3.src],
      layout: 'center',
      imageAnimation: 'slide-up',
    },
    {
      id: 4,
      title: 'Nourishing Nutrition',
      subtitle: 'Fuel Your Transformation',
      description:
        'Personalised nutrition planning and 3-ebook bundle included. Learn to eat for your body and achieve lasting results.',
      bgColor: '#ffffff',
      textColor: 'text-blue-900',
      subtitleColor: 'text-blue-700',
      images: [member1.src],
      layout: 'split',
      imageAnimation: 'slide-down',
    },
  ];

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 800);
  };

  const currentSlideData = slides[currentSlide];

  const getImageTransformClasses = (isTransitioningLocal: boolean, animation: string) => {
    if (!isTransitioningLocal) return 'translate-x-0 translate-y-0 opacity-100';
    switch (animation) {
      case 'slide-right':
        return 'translate-x-12 opacity-0';
      case 'slide-left':
        return '-translate-x-12 opacity-0';
      case 'slide-up':
        return 'translate-y-12 opacity-0';
      case 'slide-down':
        return '-translate-y-12 opacity-0';
      default:
        return 'opacity-0';
    }
  };

  const getPlaceholderImage = (index: number) => {
    const colors = ['#d7e0ed', '#e8ecf5', '#c5d3e8', '#dae6f2'];
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='${encodeURIComponent(
      colors[index % colors.length]
    )}' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%230149ac' text-anchor='middle' dy='.3em'%3ETraining Session%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section
      style={{
        backgroundColor: currentSlideData.bgColor,
      }}
      className="relative min-h-screen overflow-hidden transition-all duration-1000 ease-in-out"
    >
      {/* Slide Content */}
      <div
        className={`relative z-10 min-h-screen transition-all duration-1000 ${
          isTransitioning
            ? 'translate-x-8 transform opacity-0'
            : 'translate-x-0 transform opacity-100'
        }`}
      >
        {currentSlideData.layout === 'left' && (
          <div className="flex min-h-screen items-center">
            <div className="w-2/5 space-y-6 px-8 lg:px-16">
              <div className="space-y-4">
                <p
                  className={`${currentSlideData.subtitleColor} text-sm font-medium tracking-wide uppercase`}
                >
                  {currentSlideData.subtitle}
                </p>
                <h1
                  className={`text-4xl font-bold lg:text-6xl ${currentSlideData.textColor} leading-tight`}
                >
                  {currentSlideData.title}
                </h1>
              </div>
              <p className={`${currentSlideData.textColor} text-lg leading-relaxed opacity-90`}>
                {currentSlideData.description}
              </p>
              <button
                className={`mt-6 rounded px-8 py-3 font-semibold transition-all ${
                  currentSlideData.bgColor === '#0149ac'
                    ? 'bg-white text-blue-900 hover:bg-gray-100'
                    : 'bg-blue-900 text-white hover:bg-blue-950'
                }`}
              >
                JOIN TODAY
              </button>
            </div>

            <div className="flex h-screen w-3/5 items-center justify-center">
              <div className="flex h-full w-full items-center justify-center gap-4">
                {currentSlideData.images && currentSlideData.images.length > 0
                  ? currentSlideData.images.map((src: any, index: number) => (
                      <div
                        key={index}
                        style={{
                          height: index === 0 ? '85%' : '75%',
                          width: index === 0 ? '85%' : '75%',
                          marginTop: index === 1 ? '8%' : '0',
                          transitionDelay: `${index * 300}ms`,
                        }}
                        className={`aspect-square transform overflow-hidden rounded-lg transition-all duration-1500 ease-in-out ${getImageTransformClasses(
                          isTransitioning,
                          currentSlideData.imageAnimation
                        )}`}
                      >
                        <img
                          src={src}
                          alt={currentSlideData.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    ))
                  : [0].map((index) => (
                      <div
                        key={index}
                        style={{ height: '80%', width: '80%' }}
                        className="aspect-square overflow-hidden rounded-lg"
                      >
                        <img
                          src={getPlaceholderImage(index)}
                          alt={currentSlideData.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}

        {currentSlideData.layout === 'right' && (
          <div className="flex min-h-screen items-center">
            <div className="flex h-screen w-3/5 items-center justify-center">
              <div className="flex h-full w-full items-center justify-center gap-4">
                {currentSlideData.images && currentSlideData.images.length > 0
                  ? currentSlideData.images.map((src: any, index: number) => (
                      <div
                        key={index}
                        style={{
                          height: '90%',
                          width: '90%',
                          transitionDelay: `${index * 300}ms`,
                        }}
                        className={`aspect-square transform overflow-hidden rounded-lg transition-all duration-1000 ${getImageTransformClasses(
                          isTransitioning,
                          currentSlideData.imageAnimation
                        )}`}
                      >
                        <img
                          src={src}
                          alt={currentSlideData.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    ))
                  : [0].map((index) => (
                      <div
                        key={index}
                        style={{ height: '90%', width: '90%' }}
                        className="aspect-square overflow-hidden rounded-lg"
                      >
                        <img
                          src={getPlaceholderImage(index)}
                          alt={currentSlideData.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
              </div>
            </div>

            <div className="w-2/5 space-y-6 px-8 lg:px-16">
              <div className="space-y-4">
                <p
                  className={`${currentSlideData.subtitleColor} text-sm font-medium tracking-wide uppercase`}
                >
                  {currentSlideData.subtitle}
                </p>
                <h1
                  className={`text-4xl font-bold lg:text-6xl ${currentSlideData.textColor} leading-tight`}
                >
                  {currentSlideData.title}
                </h1>
              </div>
              <p className={`${currentSlideData.textColor} text-lg leading-relaxed opacity-90`}>
                {currentSlideData.description}
              </p>
              <button
                className={`mt-6 rounded px-8 py-3 font-semibold transition-all ${
                  currentSlideData.bgColor === '#0149ac'
                    ? 'bg-white text-blue-900 hover:bg-gray-100'
                    : 'bg-blue-900 text-white hover:bg-blue-950'
                }`}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        )}

        {currentSlideData.layout === 'center' && (
          <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 items-center justify-center px-8 text-center lg:px-16">
              <div className="max-w-2xl space-y-6">
                <div className="space-y-4">
                  <p
                    className={`${currentSlideData.subtitleColor} text-sm font-medium tracking-wide uppercase`}
                  >
                    {currentSlideData.subtitle}
                  </p>
                  <h1
                    className={`text-4xl font-bold lg:text-6xl ${currentSlideData.textColor} leading-tight`}
                  >
                    {currentSlideData.title}
                  </h1>
                </div>
                <p className={`${currentSlideData.textColor} text-lg leading-relaxed opacity-90`}>
                  {currentSlideData.description}
                </p>
                <button
                  className={`mt-6 rounded px-8 py-3 font-semibold transition-all ${
                    currentSlideData.bgColor === '#0149ac'
                      ? 'bg-white text-blue-900 hover:bg-gray-100'
                      : 'bg-blue-900 text-white hover:bg-blue-950'
                  }`}
                >
                  SIGN UP NOW
                </button>
              </div>
            </div>

            <div className="flex h-2/5 items-center justify-center gap-6 px-4">
              {currentSlideData.images && currentSlideData.images.length > 0
                ? currentSlideData.images.map((src: any, index: number) => (
                    <div
                      key={index}
                      style={{
                        width: '60%',
                        maxWidth: '400px',
                        transitionDelay: `${index * 300}ms`,
                      }}
                      className={`aspect-square transform overflow-hidden rounded-lg transition-all duration-1500 ease-in-out ${getImageTransformClasses(
                        isTransitioning,
                        currentSlideData.imageAnimation
                      )}`}
                    >
                      <img
                        src={src}
                        alt={currentSlideData.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))
                : [0, 1].map((index) => (
                    <div
                      key={index}
                      style={{ width: '60%', maxWidth: '400px' }}
                      className="aspect-square overflow-hidden rounded-lg"
                    >
                      <img
                        src={getPlaceholderImage(index)}
                        alt={currentSlideData.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
            </div>
          </div>
        )}

        {currentSlideData.layout === 'split' && (
          <div className="grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center p-8 lg:p-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p
                    className={`${currentSlideData.subtitleColor} text-sm font-medium tracking-wide uppercase`}
                  >
                    {currentSlideData.subtitle}
                  </p>
                  <h1
                    className={`text-4xl font-bold lg:text-6xl ${currentSlideData.textColor} leading-tight`}
                  >
                    {currentSlideData.title}
                  </h1>
                </div>
                <p className={`${currentSlideData.textColor} text-lg leading-relaxed opacity-90`}>
                  {currentSlideData.description}
                </p>
                <button
                  className={`mt-6 rounded px-8 py-3 font-semibold transition-all ${
                    currentSlideData.bgColor === '#0149ac'
                      ? 'bg-white text-blue-900 hover:bg-gray-100'
                      : 'bg-blue-900 text-white hover:bg-blue-950'
                  }`}
                >
                  BOOK CONSULTATION
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center p-4">
              {currentSlideData.images && currentSlideData.images.length > 0
                ? currentSlideData.images.map((src: any, index: number) => (
                    <div
                      key={index}
                      style={{
                        width: '95%',
                        maxWidth: '500px',
                        transitionDelay: `${index * 200}ms`,
                      }}
                      className={`aspect-square transform overflow-hidden rounded-lg transition-all duration-1000 ${getImageTransformClasses(
                        isTransitioning,
                        currentSlideData.imageAnimation
                      )}`}
                    >
                      <img
                        src={src}
                        alt={currentSlideData.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))
                : [0].map((index) => (
                    <div
                      key={index}
                      style={{ width: '95%', maxWidth: '500px' }}
                      className="aspect-square overflow-hidden rounded-lg"
                    >
                      <img
                        src={getPlaceholderImage(index)}
                        alt={currentSlideData.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 transform">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
              currentSlideData.bgColor === '#0149ac'
                ? 'border-white/30 bg-white/20 hover:bg-white/30'
                : 'border-blue-900/30 bg-blue-900/20 hover:bg-blue-900/30'
            }`}
            aria-label="Previous slide"
          >
            <FiChevronLeft
              className={`${currentSlideData.bgColor === '#0149ac' ? 'text-white' : 'text-blue-900'} h-5 w-5`}
              aria-hidden
            />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? currentSlideData.bgColor === '#0149ac'
                      ? 'scale-125 bg-white'
                      : 'scale-125 bg-blue-900'
                    : currentSlideData.bgColor === '#0149ac'
                      ? 'bg-white/40 hover:bg-white/60'
                      : 'bg-blue-900/40 hover:bg-blue-900/60'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
              currentSlideData.bgColor === '#0149ac'
                ? 'border-white/30 bg-white/20 hover:bg-white/30'
                : 'border-blue-900/30 bg-blue-900/20 hover:bg-blue-900/30'
            }`}
            aria-label="Next slide"
          >
            <FiChevronRight
              className={`${currentSlideData.bgColor === '#0149ac' ? 'text-white' : 'text-blue-900'} h-5 w-5`}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
