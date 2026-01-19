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
      'Develop the mental strength and positive mindset needed for lasting health transformation. Master your thoughts, build healthy habits, and create a foundation for sustainable wellness through mindful eating practices and conscious lifestyle choices.',
    videoUrl: 'https://player.vimeo.com/video/574565642?h=1f91785ad0',
    testimonialImage: gerwyn.src,
    exampleTitle: 'Self Confessed Unhealthy & Unhappy',
    exampleDescription: 'Gerwyn Pritchard, Discovered His BEST VERSION!',
  },
  {
    letter: 'E',
    firstWord: 'xercise',
    secondWord: 'Excellence',
    description:
      'Achieve peak physical performance with structured, efficient workout programs designed to fit your busy lifestyle. Whether you have 30 minutes or an hour, our expert-designed routines help you build strength, improve endurance, and reach your fitness goals.',
    videoUrl: 'https://player.vimeo.com/video/680586649?h=abee859150',
    testimonialImage: debbie.src,
    exampleTitle: 'Busy Health Professional & Mum Debbie',
    exampleDescription:
      'Really Lacked The Confidence & Knowledge To Embark On Her Body & Lifestyle Transformation, With Structured & Detailed Coaching, Debbie Was Able To Overcome!',
  },
  {
    letter: 'A',
    firstWord: 'cute',
    secondWord: 'Accountability',
    description:
      'Track your progress and stay committed to your health goals with proven accountability systems. Monitor your daily nutrition, understand the glycemic index of foods, and use the nutrition pyramid to make informed choices that keep you on track for success.',
    videoUrl: 'https://player.vimeo.com/video/697878456?h=966b7b3a52',
    testimonialImage: shane.src,
    exampleTitle: 'Busy Family Man Shane From Nottingham',
    exampleDescription:
      'Struggled With Belly Fat For Many Years, But With The Tailored Support Given & JUST 12 WEEKS With the Goals Set, Shane Achieved Some Incredible RESULTS!',
  },
  {
    letter: 'N',
    firstWord: 'ourishing',
    secondWord: 'Nutrition',
    description:
      'Fuel your body with science-backed nutritional strategies and delicious, healthy recipes. Learn to balance macronutrients, make smart food swaps, and discover meal ideas that nourish your body while satisfying your taste buds for long-term wellness.',
    videoUrl: 'https://player.vimeo.com/video/561328871?h=071045ddad',
    testimonialImage: dave.src,
    exampleTitle: 'Dave From Chester',
    exampleDescription:
      'Lacked The Understanding Of How To Achieve His Body Transformation Goals, Whilst Striking The Balance Between A Demanding Job & Family Life, But With Our 12 Week Formula, THIS CHANGED!',
  },
];

export default function MeanSection() {
  return (
    <section className="min-h-screen w-full bg-[var(--primary-white)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-32">
          {meanData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.letter}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="space-y-6 lg:w-[40%]">
                  <div className="space-y-2">
                    <h2 className="text-5xl leading-tight font-bold text-slate-800 sm:text-6xl lg:text-7xl">
                      <span className="text-9xl" style={{ color: '#0149ac' }}>
                        {item.letter}
                      </span>
                      {item.firstWord}
                    </h2>
                    <h2 className="text-5xl leading-tight font-bold text-slate-800 sm:text-6xl lg:text-7xl">
                      {item.secondWord}
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="lg:w-[60%]">
                  <div className="space-y-4">
                    {/* Top Row - Image and Description */}
                    <div className="flex gap-4">
                      {/* Fat L-shape - Image (Left) */}
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

                      {/* Rounded Square - Description with Blue Background (Right) */}
                      <div
                        className="flex w-[48%] items-center justify-center p-6 shadow-xl sm:p-8 bg-[var(--primary-black)]"
                        style={{
                          borderRadius: '60px 60px 4px 60px',
                          aspectRatio: '1',
                        }}
                      >
                        <div className="text-center">
                          <h3 className="mb-3 text-sm font-semibold text-white sm:text-base lg:text-lg">
                            {item.exampleTitle}
                          </h3>
                          <p className="text-xs leading-relaxed text-white sm:text-sm">
                            {item.exampleDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Video (Bottom) */}
                    <div
                      className="overflow-hidden"
                      style={{
                        borderRadius: '40px',
                        aspectRatio: '16/9',
                      }}
                    >
                      <iframe
                        src={item.videoUrl}
                        title={`${item.letter} - ${item.firstWord} ${item.secondWord} Example`}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        allowFullScreen
                        className="h-full w-full"
                        style={{ border: 0, display: 'block' }}
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
