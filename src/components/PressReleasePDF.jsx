// src/components/PressReleasePDF.jsx
import React from "react";
import { jsPDF } from 'jspdf';

export default function PressReleasePDF({ title, date, content }) {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text(title, 10, 20);

    // Add date
    doc.setFontSize(12);
    doc.text(date, 10, 30);

    // Add content
    doc.setFontSize(12);
    doc.text(content, 10, 40, { maxWidth: 180 }); // Wrap text within width

    doc.save(`${title}.pdf`);
  };

  return (
    <button onClick={handleDownload} style={{ marginTop: "0.5rem" }}>
      Download PDF
    </button>
  );
}
