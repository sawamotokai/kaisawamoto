import { useBreakpointValue } from '@chakra-ui/react'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PDFViewer() {
  const width = useBreakpointValue({ base: 480, md: 700 })
  console.log(width)
  return (
    <Document file={'./resume.pdf'}>
      <Page
        pageNumber={1}
        width={width}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  )
}
