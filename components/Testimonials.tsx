import { useEffect, useRef, useState, type JSX } from 'react';
import type { Testimonial } from '../src/data/testimonials';
import { testimonials as testimonialsData } from '../src/data/testimonials';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { RiDoubleQuotesL } from 'react-icons/ri';

export default function Testimonials(): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const t: Testimonial = testimonialsData[index];

  const quoteRef = useRef<HTMLDivElement | null>(null);

  // reset scroll position of the quote area when the testimonial changes
  useEffect(() => {
    if (quoteRef.current) quoteRef.current.scrollTop = 0;
  }, [index]);

  const prev = () => setIndex((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      aria-label="Community testimonials"
      className="w-full bg-white px-2 py-24 md:px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-stretch gap-8 md:flex-row">
          <div className="order-2 flex min-w-[240px] flex-col justify-center md:order-1 md:basis-[30%]">
            <h3 className="mb-3 text-4xl leading-tight font-extrabold text-[var(--primary-blue)] md:text-5xl">
              From our <span className="block text-[var(--primary-black)]">community.</span>
            </h3>

            <p className="mb-6 max-w-sm text-sm text-gray-600 md:text-base">
              Here’s what our clients had to say, checkout our wall of proof
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50"
              >
                <FaChevronLeft size={16} aria-hidden />
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50"
              >
                <FaChevronRight size={16} aria-hidden />
              </button>

              <div className="ml-4 flex items-center gap-2">
                {testimonialsData.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className="relative flex h-5 w-5 cursor-pointer items-center justify-center rounded-full"
                  >
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        border:
                          i === index
                            ? '2px solid var(--primary-blue)'
                            : '1px solid rgba(0,0,0,0.3)',
                        background: 'transparent',
                      }}
                    />
                    <span
                      className="relative block h-1.5 w-1.5 rounded-full"
                      style={{
                        background: i === index ? 'var(--primary-blue)' : 'transparent',
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center sm:min-w-[300px] md:order-2 md:min-w-[420px] md:basis-[70%]">
            <div className="box-border flex h-[360px] w-full gap-16 rounded-2xl bg-[var(--primary-blue)] p-6 text-white md:p-8">
              <div className="flex flex-shrink-0 items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-40 w-40 rounded-full object-cover ring-4 ring-white/10"
                  style={{ border: '4px solid rgba(255,255,255,0.06)' }}
                />
              </div>

              <div className="mt-2 flex flex-1 flex-col">
                <div className="mb-2 text-white/95">
                  <RiDoubleQuotesL size={24} strokeWidth={1.8} aria-hidden />
                </div>

                <blockquote className="md:text-md text-xs leading-relaxed font-medium lg:text-lg xl:text-xl">
                  “{t.quote}”
                </blockquote>

                <div className="mt-3">
                  <div className="text-sm font-semibold md:text-base">{t.name}</div>
                  <div className="text-xs text-white/90 md:text-sm">{t.role}</div>
                  {t.update && (
                    <p className="mt-2 hidden text-sm text-white/90 lg:block">{t.update}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
