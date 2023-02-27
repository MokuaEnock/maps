import { PDFDocument } from "pdf-lib";

export default function Pdf() {
    
  const createPdf = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the document
    const page = pdfDoc.addPage();

    // Draw some text on the page
    const font = await pdfDoc.embedFont("Helvetica");
    const textSize = 30;
    const text = "Hello, world!";
    page.drawText(text, {
      x: 50,
      y: page.getHeight() / 2,
      size: textSize,
      font,
    });

    // Serialize the PDF document to a Uint8Array
    const pdfBytes = await pdfDoc.save();

    // Return the PDF document as a Blob
    return new Blob([pdfBytes], { type: "application/pdf" });
  };

  return <></>;
}
