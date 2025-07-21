import React, { useState, useEffect, useRef } from 'react';

// Main App component for the HTML Editor
const App = () => {
  // State to store the HTML code entered by the user
  const [htmlCode, setHtmlCode] = useState(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Document</title>
      <!-- Ensure Inter font is loaded for consistent rendering -->
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Inter', sans-serif;
          margin: 20px;
          padding: 20px;
          background-color: #f0f4f8;
          color: #334155;
          line-height: 1.6;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #1e293b;
          text-align: center;
          margin-bottom: 25px;
        }
        p {
          margin-bottom: 15px;
        }
        ul {
          list-style-type: disc;
          margin-left: 20px;
          margin-bottom: 15px;
        }
        li {
          margin-bottom: 8px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 0.9em;
          color: #64748b;
        }
        .highlight {
          background-color: #e0f2fe;
          padding: 5px 10px;
          border-radius: 6px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Your HTML Document</h1>
        <p>This is a simple HTML document that you can edit in the editor above. Changes will be reflected in the preview below.</p>
        <p>You can add your own <span class="highlight">HTML tags</span>, styling, and content here. For example, try adding an image or a table!</p>
        <ul>
          <li>Item 1: Double-click to edit this text.</li>
          <li>Item 2: Add more list items.</li>
          <li>Item 3: Experiment with different HTML elements.</li>
        </ul>
        <p>Once you are satisfied with your document, you can click the "Download PDF" button to convert it into a PDF file.</p>
        <div class="footer">
          <p>&copy; 2025 HTML Editor. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `);

  // Ref for the iframe to update its content
  const iframeRef = useRef(null);

  // Effect to update the iframe content and add interactive editing
  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;

      // Clear previous content and write new HTML
      iframeDoc.open();
      iframeDoc.write(htmlCode);
      iframeDoc.close();

      // Ensure the iframe content is fully loaded before adding listeners
      // Use a timeout to ensure iframe content is fully rendered before attaching listeners
      const timeoutId = setTimeout(() => {
        const iframeBody = iframeDoc.body;
        if (!iframeBody) return; // Exit if body is not yet available

        // Function to handle double-click for editing
        const handleDblClick = (event) => {
          const target = event.target;
          // Only make elements with actual text content editable, and not the body/html/script/style tags
          if (target && target !== iframeBody && target.tagName !== 'HTML' && target.tagName !== 'HEAD' && target.tagName !== 'STYLE' && target.tagName !== 'SCRIPT' && target.textContent.trim().length > 0) {
            target.contentEditable = 'true';
            target.focus(); // Focus on the element to allow immediate editing
            // Add a temporary style to indicate it's editable
            target.style.outline = '2px solid #3b82f6';
            target.style.borderRadius = '4px';
          }
        };

        // Function to handle blur (when editing stops)
        const handleFocusOut = (event) => {
          const target = event.target;
          if (target.contentEditable === 'true') {
            target.contentEditable = 'false'; // Disable editing
            target.style.outline = ''; // Remove temporary style
            target.style.borderRadius = '';

            // Get the entire updated HTML content from the iframe's document
            // This captures all changes made within the iframe
            const updatedIframeHtml = iframeDoc.documentElement.outerHTML;
            setHtmlCode(updatedIframeHtml); // Update the React state with the new HTML
          }
        };

        // Attach event listeners to the iframe body using event delegation
        iframeBody.addEventListener('dblclick', handleDblClick);
        iframeBody.addEventListener('focusout', handleFocusOut); // focusout bubbles, so it works for delegation

        // Cleanup function to remove event listeners when component unmounts or htmlCode changes
        return () => {
          iframeBody.removeEventListener('dblclick', handleDblClick);
          iframeBody.removeEventListener('focusout', handleFocusOut);
        };
      }, 100); // Small delay to ensure iframe content is ready

      return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or re-render
    }
  }, [htmlCode]); // Re-run when htmlCode changes

  // Function to handle the change in the textarea
  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };

  // Function to handle PDF download (Backend approach)
  const handleDownloadPdf = async () => {
    // Show a loading message to the user
    alert('Generating PDF... Please wait.');

    try {
      // Send the HTML code to your Node.js backend
      // Replace 'http://localhost:3001/generate-pdf' with your actual backend endpoint
      const response = await fetch('http://localhost:3001/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: htmlCode }),
      });

      // Check if the response is OK
      if (response.ok) {
        // Get the PDF as a Blob
        const blob = await response.blob();
        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);
        // Create a temporary link element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.pdf'; // Set the download file name
        document.body.appendChild(a);
        a.click(); // Programmatically click the link to trigger download
        a.remove(); // Remove the link after download
        window.URL.revokeObjectURL(url); // Clean up the URL object

        alert('PDF generated and downloaded successfully!');
      } else {
        // If response is not OK, read the error message from the backend
        const errorText = await response.text();
        alert(`Failed to generate PDF: ${errorText}`);
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while generating the PDF. Please check the console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center font-inter">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 rounded-lg p-3 shadow-md bg-white">
        HTML Editor & PDF Generator
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Your HTML</h2>
        {/* Textarea for HTML input */}
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-y"
          value={htmlCode}
          onChange={handleHtmlChange}
          placeholder="Enter your HTML code here..."
        />
        {/* Download PDF button */}
        <button
          onClick={handleDownloadPdf}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Download PDF
        </button>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Live Preview</h2>
        {/* Iframe for live HTML preview */}
        <iframe
          ref={iframeRef}
          className="w-full h-96 border border-gray-300 rounded-lg bg-white"
          title="HTML Preview"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms" // Basic sandbox for security
        />
      </div>
    </div>
  );
};

export default App;
