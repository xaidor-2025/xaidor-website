import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import Footer from "./Footer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <Document
        file={`https://ik.imagekit.io/xaidor/about.pdf`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(err) => console.error("PDF error:", err)}
      >
        {numPages &&
          Array.from(new Array(numPages), (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={screen.width - 400}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
      </Document>
      <Footer />
    </div>
  );
}
