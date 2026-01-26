import gerwyn from '../src/images/testimonials/gerwyn-pritchard.jpg';
import debbie from '../src/images/testimonials/debbie.png';
import shane from '../src/images/testimonials/shane.png';
import dave from '../src/images/testimonials/dave.jpg';

const meanData = [
  {
    letter: 'M',
    firstWord: 'indset',
    secondWord: 'Mastery',
    description:
      'Develop the mental strength and positive mindset needed for lasting health transformation. Master your thoughts, build healthy habits, and create a foundation for sustainable wellness.',
    videoUrl: 'https://player.vimeo.com/video/574565642?h=1f91785ad0',
    testimonialImage: gerwyn.src,
    exampleTitle: 'UNHEALTHY TO UNSTOPPABLE',
    exampleDescription: 'Gerwyn linked his vision to reality and found his best version.',
  },
  {
    letter: 'E',
    firstWord: 'xercise',
    secondWord: 'Excellence',
    description:
      'Achieve peak physical performance with structured, efficient workout programs designed to fit your busy lifestyle. Whether you have 30 minutes or an hour, we build strength that lasts.',
    videoUrl: 'https://player.vimeo.com/video/680586649?h=abee859150',
    testimonialImage: debbie.src,
    exampleTitle: 'BUSY MUM. NEW CONFIDENCE.',
    exampleDescription:
      'Debbie mastered the structure to transform her body and lifestyle.',
  },
  {
    letter: 'A',
    firstWord: 'cute',
    secondWord: 'Accountability',
    description:
      'Track your progress and stay committed with proven accountability systems. Monitor your nutrition and use the pyramid to make informed choices that keep you on track for success.',
    videoUrl: 'https://player.vimeo.com/video/697878456?h=966b7b3a52',
    testimonialImage: shane.src,
    exampleTitle: 'BELLY FAT TO PEAK PHYSIQUE',
    exampleDescription:
      'Shane crushed a 12-week blueprint to build a body that lasts.',
  },
  {
    letter: 'N',
    firstWord: 'ourishing',
    secondWord: 'Nutrition',
    description:
      'Fuel your body with science-backed strategies. Learn to balance macronutrients, make smart food swaps, and discover meal ideas that nourish your body while satisfying your taste buds.',
    videoUrl: 'https://player.vimeo.com/video/561328871?h=071045ddad',
    testimonialImage: dave.src,
    exampleTitle: 'THE CAREER-LIFE BALANCE',
    exampleDescription:
      'Dave applied our 12-week formula to reshape his goals and his life.',
  },
];

export default function MeanSection() {
  return (
    <section className="min-h-screen w-full bg-[var(--primary-white)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-24 lg:gap-32">
          {meanData.map((item, index) => {
            const isEven = index % 2 === 0;
            const stepNumber = `0${index + 1}`;

            return (
              <div
                key={item.letter}
                className={`flex flex-col lg:flex-row lg:items-stretch ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* COLUMN 1: Text Content */}
                <div className="flex flex-col justify-center space-y-6 lg:w-[40%]">
                  <div className="space-y-2">
                    <h2 className="text-5xl leading-tight font-bold text-slate-800 sm:text-6xl lg:text-7xl flex items-baseline gap-4">
                      {/* Mobile Number Indicator */}
                      <span className="lg:hidden text-2xl font-black text-slate-200">
                         {stepNumber}.
                      </span>
                      <span>
                        <span className="text-9xl" style={{ color: '#0149ac' }}>
                          {item.letter}
                        </span>
                        {item.firstWord}
                      </span>
                    </h2>
                    <h2 className="text-5xl leading-tight font-bold text-slate-800 sm:text-6xl lg:text-7xl">
                      {item.secondWord}
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    {item.description}
                  </p>
                </div>

                {/* COLUMN 2: The Vertical Track (Desktop Only) */}
                <div className="hidden lg:flex lg:w-[10%] flex-col items-center justify-center relative">
                    {/* The Vertical Line */}
                    <div className="absolute top-0 bottom-0 w-px bg-slate-200"></div>
                    
                    {/* The Number Bubble */}
                    <div 
                        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-[#0149ac] shadow-lg"
                    >
                        <span className="text-xl font-black text-[#0149ac]">{stepNumber}</span>
                    </div>
                </div>

                {/* COLUMN 3: Media (Images & Video) */}
                <div className="mt-8 lg:mt-0 lg:w-[50%]">
                  <div className="space-y-4">
                    {/* Top Row - Image and Description */}
                    <div className="flex gap-4">
                      {/* Fat L-shape - Image */}
                      <div
                        className="w-[48%] overflow-hidden shadow-xl"
                        style={{
                          borderRadius: '60px 60px 60px 4px',
                          aspectRatio: '1',
                        }}
                      >
                        <img
                          src={item.testimonialImage}
                          alt={`${item.exampleTitle} testimonial`}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>

                      {/* Dark Description Card */}
                      <div
                        className="flex w-[50%] flex-col justify-center p-6 sm:p-8 bg-slate-900"
                        style={{
                          borderRadius: '40px 40px 4px 40px',
                          boxShadow: '12px 12px 0px #0149ac',
                        }}
                      >
                        <div className="text-left space-y-3">
                          <span className="inline-block px-3 py-1 bg-[#0149ac] text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-1">
                            Result
                          </span>
                          <h3 className="text-xl sm:text-3xl font-black text-white uppercase italic leading-tight">
                            {item.exampleTitle}
                          </h3>
                          <p className="text-l leading-relaxed text-gray-300 font-medium border-l-2 border-[#0149ac] pl-3">
                            {item.exampleDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Video Section */}
                    <div
                      className="mt-6 overflow-hidden bg-black shadow-2xl"
                      style={{
                        borderRadius: '24px',
                        aspectRatio: '16/9',
                        border: '4px solid #f8fafc',
                      }}
                    >
                      <iframe
                        src={item.videoUrl}
                        title={`${item.letter} Video`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full opacity-90 hover:opacity-100 transition-opacity"
                        style={{ border: 0 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}