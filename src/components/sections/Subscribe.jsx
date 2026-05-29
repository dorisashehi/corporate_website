import { useState } from 'react';
import { img } from '../../utils/images';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sent');
    setEmail('');
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="subscribe" className="py-16 md:py-20 bg-gradient-to-br from-arsha-accent/10 to-arsha-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-arsha-heading mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="mb-6">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam id dui posuere blandit.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex rounded-full overflow-hidden shadow-sm border border-gray-200 bg-white">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address..."
                  className="flex-1 px-5 py-3 border-0 outline-none text-sm min-w-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-arsha-accent text-white px-6 py-3 text-sm font-medium hover:bg-[#31a9e1] transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </div>
              {status === 'sent' && (
                <p className="text-green-600 text-sm mt-3 font-medium">
                  Your subscription request has been sent. Thank you!
                </p>
              )}
            </form>
          </div>
          <div className="flex justify-center">
            <img src={img('cta/cta-1.webp')} alt="Newsletter" className="max-w-sm w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
