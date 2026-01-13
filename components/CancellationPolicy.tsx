import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-44 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Cancellation Policy</h1>
        <div className="space-y-6 text-sm md:text-base opacity-90 leading-relaxed">
          <p className="text-lg font-semibold mb-4">
            This policy outlines the terms and conditions for order cancellations at 11VEN.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">1. Cancellation Duration</h2>
            <p>
              Orders can be cancelled within <strong>24 hours</strong> of placing the order, provided the order has not been shipped. Once an order has been shipped, it cannot be cancelled and will be subject to our Return & Refund Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">2. How to Cancel an Order</h2>
            <p>To cancel an order:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact us immediately at theofficial11ven@gmail.com</li>
              <li>Provide your order number and reason for cancellation</li>
              <li>We will confirm the cancellation and process your refund</li>
            </ol>
            <p className="mt-4">
              Alternatively, if you have an account, you may be able to cancel directly from your order history if the order is still within the cancellation window.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">3. Refund for Cancelled Orders</h2>
            <p>
              If your order is cancelled within the 24-hour window:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A full refund will be processed to your original payment method</li>
              <li>Refund processing time: 5-7 business days</li>
              <li>You will receive an email confirmation once the refund is processed</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">4. Orders That Cannot Be Cancelled</h2>
            <p>The following orders cannot be cancelled:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders that have already been shipped</li>
              <li>Orders cancelled after the 24-hour window</li>
              <li>Custom-made or personalized items that are already in production</li>
              <li>Orders that have been processed and are ready for dispatch</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">5. Cancellation by 11VEN</h2>
            <p>
              We reserve the right to cancel any order due to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unavailability of the product</li>
              <li>Pricing errors</li>
              <li>Fraudulent or suspicious activity</li>
              <li>Payment issues</li>
            </ul>
            <p className="mt-4">
              If we cancel your order, you will receive a full refund to your original payment method.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">6. Partial Cancellation</h2>
            <p>
              If you wish to cancel only certain items from your order, please contact us. Partial cancellations are subject to the same 24-hour time limit and may affect shipping costs or promotional discounts applied to your order.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">7. Refund Processing Time</h2>
            <p>
              Refunds for cancelled orders are typically processed within <strong>5-7 business days</strong> after cancellation confirmation. The actual time for the refund to appear in your account depends on your bank or payment provider.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">8. Contact Us</h2>
            <p>
              For any questions about order cancellation, please contact us at:
            </p>
            <p className="mt-2">
              Email: theofficial11ven@gmail.com
            </p>
            <p className="mt-2">
              Please include your order number in all cancellation requests for faster processing.
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

export default CancellationPolicy;
