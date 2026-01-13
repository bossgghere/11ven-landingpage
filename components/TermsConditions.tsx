import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-44 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Terms & Conditions</h1>
        <div className="space-y-6 text-sm md:text-base opacity-90 leading-relaxed">
          <div className="glass p-6 rounded-lg mb-6">
            <p className="text-lg font-semibold mb-4">
              This website is operated by 11VEN.
            </p>
            <div className="mt-4 space-y-2">
              <p className="font-semibold">Legal Name & Registered Address:</p>
              <p className="opacity-90">
                Tribikram Prasad Sahoo<br/>
                Flat No: 1-10-88/S2<br/>
                Priya Residency<br/>
                J J Nagar Colony<br/>
                Alwal<br/>
                Hyderabad<br/>
                Telangana - 500010<br/>
                India
              </p>
            </div>
          </div>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on 11VEN's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on 11VEN's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">3. Disclaimer</h2>
            <p>
              The materials on 11VEN's website are provided on an 'as is' basis. 11VEN makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">4. Limitations</h2>
            <p>
              In no event shall 11VEN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 11VEN's website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on 11VEN's website could include technical, typographical, or photographic errors. 11VEN does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">6. Links</h2>
            <p>
              11VEN has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by 11VEN of the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">7. Modifications</h2>
            <p>
              11VEN may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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

export default TermsConditions;
