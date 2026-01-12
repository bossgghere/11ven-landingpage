
import React, { useState } from 'react';
import { Send, Lock, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Connect: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) return;

    setIsLoading(true);

    try {
      // Initialize EmailJS with your Public Key
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      // Better error messages for debugging
      if (!serviceId) {
        throw new Error('EmailJS Service ID is missing. Please check your .env file.');
      }
      if (!templateId) {
        throw new Error('EmailJS Template ID is missing. Please check your .env file.');
      }
      if (!publicKey) {
        throw new Error('EmailJS Public Key is missing. Please check your .env file.');
      }

      // Send email to the subscriber (welcome email)
      // Note: Template uses {{email}} variable for "To Email" field
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          email: email, // Template expects {{email}}
          to_name: email.split('@')[0],
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitted(true);
        setEmail('');
        // Reset after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to send email. Please try again later.');
      }
    } catch (err: any) {
      // More detailed error handling
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (err?.text) {
        // EmailJS specific error
        errorMessage = `Email service error: ${err.text}`;
      } else if (err?.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl px-6 flex flex-col items-center text-center">
      <div className="mb-16 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border border-main flex items-center justify-center mb-10 opacity-40">
           <Lock size={16} />
        </div>
        <span className="font-tech text-[10px] tracking-[0.8em] opacity-30 uppercase block mb-8">Secure Access</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-10 uppercase leading-none">
          JOIN THE <br className="hidden md:block"/> PRIVATE LIST
        </h2>
        <p className="text-base md:text-xl opacity-50 max-w-xl mx-auto leading-relaxed font-light">
          Get notified before the drop goes public. Early access is reserved for the 11VEN collective. Not a customer, a member.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col sm:flex-row gap-0 group">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="ENTER_EMAIL_IDENTITY"
            disabled={isLoading}
            className="flex-1 bg-transparent border border-main py-6 px-10 focus:outline-none focus:border-[var(--fg)] transition-all font-light tracking-[0.4em] text-[11px] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-[var(--fg)] text-[var(--bg)] py-6 px-14 hover:opacity-90 transition-all font-bold text-[11px] tracking-[0.4em] uppercase flex items-center justify-center gap-4 border border-[var(--fg)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span className="hidden sm:inline">LOADING</span>
              </>
            ) : (
              <>
                JOIN_NOW <Send size={14} />
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="w-full max-w-2xl py-12 border border-main animate-in zoom-in duration-300 flex items-center justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[var(--fg)] animate-pulse" />
          <p className="font-tech text-xs tracking-[0.6em] text-[var(--fg)] uppercase">
            SYNC_COMPLETE. ACCESS_GRANTED.
          </p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-xs text-red-400 font-light tracking-wide">
          {error}
        </p>
      )}

      <div className="mt-20 flex items-center gap-8 opacity-10">
        <div className="h-[1px] w-12 bg-[var(--fg)]" />
        <p className="font-tech text-[9px] tracking-[0.6em] uppercase">Verified Entry Point</p>
        <div className="h-[1px] w-12 bg-[var(--fg)]" />
      </div>
    </div>
  );
};

export default Connect;
