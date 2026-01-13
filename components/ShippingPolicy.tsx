import React from 'react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-44 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Shipping Policy</h1>
        <div className="space-y-6 text-sm md:text-base opacity-90 leading-relaxed">
          <p className="text-lg font-semibold mb-4">
            This policy outlines our shipping procedures, timelines, and terms for 11VEN orders.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">1. Shipping Duration</h2>
            <p>
              Standard shipping typically takes <strong>5-7 business days</strong> from the date of dispatch. Express shipping options may be available at checkout for faster delivery (2-3 business days).
            </p>
            <p className="mt-2">
              Processing time: Orders are typically processed and shipped within <strong>2-3 business days</strong> of order confirmation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">2. Shipping Locations</h2>
            <p>
              We currently ship to addresses within India. International shipping may be available for select locations - please contact us for more information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">3. Shipping Costs</h2>
            <p>Shipping costs are calculated at checkout based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery location</li>
              <li>Package weight and dimensions</li>
              <li>Selected shipping method</li>
            </ul>
            <p className="mt-4">
              Free shipping may be available for orders above a certain value - check our website for current promotions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">4. Order Tracking</h2>
            <p>
              Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor your shipment's progress on the courier's website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">5. Delivery Address</h2>
            <p>
              Please ensure your delivery address is complete and accurate. We are not responsible for delays or non-delivery due to incorrect addresses provided by the customer.
            </p>
            <p className="mt-2">
              If you need to change your delivery address, please contact us immediately at theofficial11ven@gmail.com, provided your order has not been shipped.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">6. Delivery Attempts</h2>
            <p>
              Our courier partners typically make 2-3 delivery attempts. If delivery is unsuccessful, the package will be returned to our facility. Additional shipping charges may apply for re-delivery.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">7. Delayed Shipments</h2>
            <p>
              While we strive to meet all shipping timelines, delays may occur due to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Weather conditions</li>
              <li>Courier delays</li>
              <li>Customs clearance (for international orders)</li>
              <li>Public holidays</li>
              <li>Unforeseen circumstances</li>
            </ul>
            <p className="mt-4">
              We will notify you of any significant delays and work to resolve them promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">8. Damaged or Lost Shipments</h2>
            <p>
              If your package arrives damaged or is lost in transit, please contact us immediately at theofficial11ven@gmail.com with your order number. We will investigate and arrange for a replacement or refund as appropriate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">9. Business Days</h2>
            <p>
              Business days are Monday through Friday, excluding public holidays. Orders placed on weekends or holidays will be processed on the next business day.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">10. Contact Us</h2>
            <p>
              For any questions about shipping, please contact us at:
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

export default ShippingPolicy;
