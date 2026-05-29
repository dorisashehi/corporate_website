import { useState } from 'react';
import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'consultation',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    setForm({ name: '', email: '', company: '', interest: 'consultation', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <SectionTitle
        title="Contact InfoManage"
        subtitle="Schedule a consultation or request an IT risk assessment. We'll respond promptly to discuss your environment."
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-5">
            <div className="flex gap-4 p-6 bg-brand-light rounded-xl">
              <BiMapPin className="text-2xl text-brand-navy shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-brand-navy mb-1">Location</h3>
                <p className="m-0 text-sm text-brand-muted">
                  Contact us for office and service area details.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-brand-light rounded-xl">
              <BiPhone className="text-2xl text-brand-navy shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-brand-navy mb-1">Phone</h3>
                <p className="m-0 text-sm">
                  <a href="tel:+15585548855" className="text-brand-accent hover:underline">
                    Contact us for current phone number
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-brand-light rounded-xl">
              <BiEnvelope className="text-2xl text-brand-navy shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-brand-navy mb-1">Email</h3>
                <p className="m-0 text-sm">
                  <a href="mailto:info@infomanage.com" className="text-brand-accent hover:underline">
                    info@infomanage.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-brand-gray/30">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-brand-gray rounded-lg text-sm outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-brand-gray rounded-lg text-sm outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-3 border border-brand-gray rounded-lg text-sm outline-none focus:border-brand-navy mb-4"
            />
            <select
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="w-full px-4 py-3 border border-brand-gray rounded-lg text-sm outline-none focus:border-brand-navy mb-4 bg-white"
            >
              <option value="consultation">Schedule a Consultation</option>
              <option value="risk-assessment">Request IT Risk Assessment</option>
              <option value="plans">Discuss Service Plans</option>
              <option value="other">Other Inquiry</option>
            </select>
            <textarea
              placeholder="Tell us about your IT environment and goals"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 border border-brand-gray rounded-lg text-sm outline-none focus:border-brand-navy mb-4 resize-none"
              required
            />
            {status === 'sent' && (
              <p className="text-green-700 text-sm mb-4 font-medium bg-green-50 p-3 rounded-lg">
                Thank you! Your message has been received. We will contact you shortly.
              </p>
            )}
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-navy text-white px-10 py-3.5 rounded-full font-semibold hover:bg-brand-navy-light transition-colors border-0 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
