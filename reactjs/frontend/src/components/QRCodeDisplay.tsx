import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';



const QRCodeDisplay: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="flex justify-center items-center">
      <QRCodeCanvas value={value} />
    </div>
  );
};

export default QRCodeDisplay;
