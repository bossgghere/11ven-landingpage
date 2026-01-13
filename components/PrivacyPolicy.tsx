import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-44 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Privacy Policy</h1>
        <div className="space-y-6 text-sm md:text-base opacity-90 leading-relaxed">
          <p className="text-lg font-semibold mb-4">
            This Privacy Policy describes how 11VEN ("we", "our", or "us") collects, uses, and shares your personal information when you use our website.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Account credentials if you create an account</li>
              <li>Communications with us (customer service inquiries, feedback)</li>
            </ul>
            <p className="mt-4">
              We also automatically collect certain information when you visit our website, such as IP address, browser type, device information, and usage data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders, products, services, and promotional offers</li>
              <li>Improve and personalize your shopping experience</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who perform services on our behalf (payment processing, shipping, email delivery)</li>
              <li>Business partners when necessary to fulfill your orders</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">7. Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email: theofficial11ven@gmail.com
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-main">
            <p className="text-xs opacity-60">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
