import React from 'react';

const ReturnRefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-44 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Return & Refund Policy</h1>
        <div className="space-y-6 text-sm md:text-base opacity-90 leading-relaxed">
          <p className="text-lg font-semibold mb-4">
            At 11VEN, we want you to be completely satisfied with your purchase. This policy outlines our return and refund procedures.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">1. Return Duration</h2>
            <p>
              You have <strong>7 days</strong> from the date of delivery to initiate a return request. Items must be returned within <strong>14 days</strong> of the return request approval.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">2. Eligibility for Returns</h2>
            <p>To be eligible for a return, your item must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be unused and in the same condition that you received it</li>
              <li>Be in the original packaging with all tags attached</li>
              <li>Not be a personalized or custom-made item</li>
              <li>Not be a sale or clearance item (unless defective)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">3. How to Initiate a Return</h2>
            <p>To initiate a return:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact us at theofficial11ven@gmail.com within 7 days of delivery</li>
              <li>Provide your order number and reason for return</li>
              <li>Wait for return authorization and instructions</li>
              <li>Ship the item back using the provided return address</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">4. Refund Mode</h2>
            <p>
              Refunds will be processed using the <strong>same payment method</strong> used for the original purchase:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credit/Debit Card: Refunded to the original card (5-10 business days)</li>
              <li>UPI: Refunded to the original UPI account (3-5 business days)</li>
              <li>Net Banking: Refunded to the original bank account (5-7 business days)</li>
              <li>Wallet: Refunded to the original wallet (2-3 business days)</li>
            </ul>
            <p className="mt-4">
              Please note: Refund processing time may vary depending on your bank or payment provider.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">5. Refund Processing Time</h2>
            <p>
              Once we receive and inspect your returned item, we will process your refund within <strong>5-7 business days</strong>. You will receive an email notification once the refund has been processed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">6. Return Shipping</h2>
            <p>
              Return shipping costs are the responsibility of the customer unless the item is defective or incorrect. We recommend using a trackable shipping service and purchasing shipping insurance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">7. Exchanges</h2>
            <p>
              We currently do not offer direct exchanges. If you need a different size or item, please return the original item for a refund and place a new order.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">8. Defective or Damaged Items</h2>
            <p>
              If you receive a defective or damaged item, please contact us immediately at theofficial11ven@gmail.com with photos of the defect or damage. We will arrange for a replacement or full refund, including return shipping costs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">9. Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items worn, used, or damaged by the customer</li>
              <li>Items without original tags or packaging</li>
              <li>Personalized or custom-made items</li>
              <li>Items returned after the 7-day return window</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">10. Contact Us</h2>
            <p>
              For any questions about returns or refunds, please contact us at:
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

export default ReturnRefundPolicy;
