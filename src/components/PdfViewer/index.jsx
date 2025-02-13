import './index.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';
import { API_BASE_URL } from '../../common/constants/environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { faDownload, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const PdfViewer = ({ setYear, file }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const checkPdfFile = async () => {
      try {
        const response = await axios.head(`${API_BASE_URL}/doc/${file}_${currentYear}.pdf`);
        if (response.status === 200) {
          setYear(currentYear);
        }
      } catch (error) {
        console.error('error: ', error);
        setCurrentYear(currentYear - 1);
        setYear(currentYear - 1);
      }
    };
    checkPdfFile();
  }, [currentYear]);

  const handlePrevPage = () => {
    pageNumber === 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
  };
  const handleNextPage = () => {
    pageNumber === numPages ? setPageNumber(numPages) : setPageNumber(pageNumber + 1);
  };

  return (
    <div className="pdf">
      <div className="pdf__page-indicators">
        <div className={classNames('pdf__page-indicator', pageNumber === 1 && '-disabled')} onClick={handlePrevPage}>
          <FontAwesomeIcon icon={faLeftLong} />
        </div>
        <div className="pdf__page-indicator-text">
          Page {pageNumber} of {numPages}
        </div>
        <div
          className={classNames('pdf__page-indicator', pageNumber === numPages && '-disabled')}
          onClick={handleNextPage}
        >
          <FontAwesomeIcon icon={faRightLong} />
        </div>
      </div>
      <div className="pdf__pdf-container">
        <Document
          file={`${API_BASE_URL}/doc/${file}_${currentYear}.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          <Page pageNumber={pageNumber} className="pdf__pdf" />
        </Document>
      </div>

      <div className="pdf_download-container">
        <Link to={`${API_BASE_URL}/doc/${file}_${currentYear}.pdf`} className="pdf__download" target="blank">
          PDF file letöltése <FontAwesomeIcon icon={faDownload} className="pdf__icon" />
        </Link>
      </div>
    </div>
  );
};

export default PdfViewer;
