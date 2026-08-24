import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, Video, User, Mail, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AppointmentBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0] // Tomorrow as default
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<{ appointmentId: string; message: string; whatsappUrl: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '04:00 PM',
    '06:00 PM',
    '07:30 PM'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const appointmentId = `VINGS-APT-${Math.floor(10000 + Math.random() * 90000)}`;

    const text = `Hello VINKS! I'd like to book a 1-on-1 Consultation Session:

📅 *Booking Details*
• *Booking ID:* ${appointmentId}
• *Name:* ${formData.name}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone}
• *Date:* ${selectedDate}
• *Time Slot:* ${selectedTimeSlot}
${formData.requirement ? `• *Requirement Details:* ${formData.requirement}\n` : ''}`;

    const whatsappUrl = `https://wa.me/919845820117?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    setBookingConfirmed({
      appointmentId,
      message: `Consultation booking ready for ${selectedDate} at ${selectedTimeSlot}! Redirecting to WhatsApp to send booking to +91 98458 20117.`,
      whatsappUrl,
    });

    setIsSubmitting(false);
  };

  return (
    <section className="py-20 md:py-28 relative bg-tech-grid border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Free 1-on-1 Strategy Session</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's Talk About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Project</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Schedule a free 15-minute video call or Google Meet session with our technical leads to clarify requirements and get expert guidance.
          </p>
        </div>

        {/* Calendar & Form Wrapper */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          
          {bookingConfirmed ? (
            <div className="py-10 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Consultation Booking Ready!</h3>
                <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold">
                  Booking ID: {bookingConfirmed.appointmentId}
                </div>
                <p className="text-slate-300 text-sm max-w-md mx-auto pt-2">
                  {bookingConfirmed.message}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={bookingConfirmed.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <span>Open in WhatsApp (+91 98458 20117)</span>
                </a>

                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Book Another Slot
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-8">
              
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Column: Date & Time Picker */}
                <div className="space-y-6 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
                  
                  {/* Select Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-cyan-400" />
                      <span>1. Select Consultation Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  {/* Select Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>2. Select Time Slot (IST)</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                            selectedTimeSlot === slot
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/60 shadow-md'
                              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Meeting Format Info */}
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                    <Video className="w-5 h-5 text-cyan-400 shrink-0" />
                    <div className="text-xs text-slate-300">
                      <div className="font-bold text-white">Google Meet / WhatsApp Video Call</div>
                      <div className="text-[11px] text-slate-400">Meeting link will be sent to your email & WhatsApp.</div>
                    </div>
                  </div>

                </div>

                {/* Right Column: User Info Inputs */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span>3. Your Contact Info</span>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98458 20117"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Brief Requirement Topic</label>
                    <input
                      type="text"
                      placeholder="e.g. Final-Year AI Project, Website Development..."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                </div>

              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Reserving Time Slot...</span>
                ) : (
                  <span>Confirm Booking via WhatsApp (+91 98458 20117)</span>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
