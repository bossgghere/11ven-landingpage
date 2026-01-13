import React from 'react';

const PaymentLegalInfo: React.FC = () => {
  return (
    <div className="glass p-6 md:p-8 rounded-lg border border-main/30">
      <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">Payment & Legal Information</h3>
      <div className="space-y-4 text-sm opacity-90">
        <div>
          <p className="font-semibold mb-2">Legal Name:</p>
          <p>Tribikram Prasad Sahoo</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Registered Address:</p>
          <p className="leading-relaxed">
            Flat No: 1-10-88/S2<br/>
            Priya Residency<br/>
            J J Nagar Colony<br/>
            Alwal<br/>
            Hyderabad<br/>
            Telangana - 500010<br/>
            India
          </p>
        </div>
        <div className="pt-4 border-t border-main/30">
          <p className="text-xs opacity-70">
            This information is required for payment processing and legal compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentLegalInfo;
