import { useEffect, useRef, useState } from 'react';
import { img } from '../../utils/images';

const skills = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 75 },
  { name: 'Photoshop', value: 55 },
];

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 md:py-20" ref={ref}>
      <div className={`container mx-auto px-4 ${visible ? 'skills-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={img('illustration/illustration-10.webp')}
              alt="Skills"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-arsha-heading mb-4">
              Voluptatem dignissimos provident quasi corporis voluptas
            </h3>
            <p className="italic mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-arsha-heading">{skill.name}</span>
                    <span className="text-arsha-heading font-medium">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="progress-bar-fill h-full bg-arsha-accent rounded-full"
                      style={{ width: visible ? `${skill.value}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
