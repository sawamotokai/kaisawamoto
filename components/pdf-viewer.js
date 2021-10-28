import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PDFViewer() {
  return (
    <Document file={'./resume.pdf'}>
      <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer />
    </Document>
  )
}
