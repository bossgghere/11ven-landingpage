import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-44 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">About Us</h1>
        <div className="space-y-6 text-sm md:text-base opacity-90 leading-relaxed">
          <p className="text-lg font-semibold mb-4">
            Welcome to 11VEN - Not Just a Number.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Our Story</h2>
            <p>
              11VEN is a streetwear brand that transcends conventional fashion boundaries. We blend minimalist brutalism with technical precision to create garments that are not just worn, but lived. Our mission is to define the new vanguard of global streetwear through high-performance apparel that speaks to the modern vanguard.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Our Philosophy</h2>
            <p>
              At 11VEN, we believe in architecting silhouettes for the modern vanguard. Every piece we create is engineered with attention to detail, quality craftsmanship, and a vision for the future of streetwear. We're not just creating clothing - we're building a movement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">What We Stand For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quality First:</strong> Premium materials and meticulous craftsmanship in every garment</li>
              <li><strong>Innovation:</strong> Pushing boundaries with technical precision and modern design</li>
              <li><strong>Authenticity:</strong> Staying true to our vision of brutalist aesthetics and minimalist design</li>
              <li><strong>Community:</strong> Building a global community of streetwear enthusiasts</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Our Products</h2>
            <p>
              Our collections feature exclusive drops that blend high-performance materials with cutting-edge design. Each piece is carefully curated to represent the 11VEN aesthetic - clean, powerful, and forward-thinking.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Contact Information</h2>
            <p>
              We'd love to hear from you. Reach out to us:
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Email:</strong> theofficial11ven@gmail.com
              </p>
              <p>
                <strong>Instagram:</strong> @11ven_store
              </p>
              <p>
                <strong>Location:</strong> HUB_STATION_011 // SEOUL_TX
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">Legal Information</h2>
            <p>
              <strong>Trade Name:</strong> 11VEN
            </p>
            <p className="mt-2">
              <strong>Registered Address:</strong>
            </p>
            <p className="mt-2 pl-4">
              Tribikram Prasad Sahoo<br/>
              Flat No: 1-10-88/S2<br/>
              Priya Residency<br/>
              J J Nagar Colony<br/>
              Alwal<br/>
              Hyderabad<br/>
              Telangana - 500010<br/>
              India
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-main">
            <p className="text-xs opacity-60">
              Thank you for being part of the 11VEN community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
