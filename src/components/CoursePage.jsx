import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function CoursePage() {
      const { slug } = useParams();
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <Document
        file={`/${slug}.pdf`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(err) => console.error("PDF error:", err)}
      >
        {numPages &&
          Array.from(new Array(numPages), (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={screen.width - 15}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
      </Document>

      <Footer />
    </div>
  );
}
