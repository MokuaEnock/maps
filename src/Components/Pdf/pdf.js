import { PDFDocument } from "pdf-lib";

export default function Pdf() {
  const createPdf = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the document
    const page = pdfDoc.addPage();

    // Embed Times New Roman font
    const font = await pdfDoc.embedFont("Times-Roman");

    // Create a custom text run with Times New Roman font and size 12
    const text = "Hello, world!";
    const textSize = font.widthOfTextAtSize(text, 12);
    const x = (page.getWidth() - textSize) / 2;
    const y = page.getHeight() - 50;

    // Draw the custom text run on the page
    page.drawText(text, {
      x,
      y,
      size: 12,
      font,
    });

    // Serialize the PDF document to a Uint8Array
    const pdfBytes = await pdfDoc.save();

    // Return the PDF document as a Blob
    return new Blob([pdfBytes], { type: "application/pdf" });
  };

  const handleDownloadPdf = async () => {
    const pdfBlob = await createPdf();
    const url = URL.createObjectURL(pdfBlob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "document.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleDownloadPdf} className="pdf-button">
      Download Report
    </button>
  );
}
