import React, { useState, useEffect, useRef } from 'react';

// Main App component for the HTML Editor
const App = () => {
  // State to store the HTML code entered by the user
  const [htmlCode, setHtmlCode] = useState(`
  <html xmlns="http://www.w3.org/1999/xhtml" class="hydrated"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Registration Forms</title>
<style type="text/css">

.style2 {font-size: 24px}
.style4 {
  font-size: 18px;
  color: #666666;
}
.style6 {font-size: 18px}
.style7 {
  font-size: 16px;
  font-weight: bold;
}
.style10 {color: #666666; font-weight: bold; }
.style13 {color: #000000; font-weight: bold; }
.style14 {font-size: 18px; font-weight: bold; }
.style15 {font-weight: bold;}
</style>
<style type="text/css">
.break
    {
        page-break-before: always;
    }
</style>

<script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script><script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20513375-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<script src="chrome-extension://kapjaoifikajdcdehfdlmojlepfpkpoe/sqrx-email-notifier/sqrx-email-notifier.esm.js" type="module" data-resources-url="chrome-extension://kapjaoifikajdcdehfdlmojlepfpkpoe/sqrx-email-notifier/" data-stencil-namespace="sqrx-email-notifier" id="sqrx-email-notifier"></script><script src="chrome-extension://kapjaoifikajdcdehfdlmojlepfpkpoe/sqrx-notification-bar/sqrx-notification-bar.esm.js" type="module" data-resources-url="chrome-extension://kapjaoifikajdcdehfdlmojlepfpkpoe/sqrx-notification-bar/" data-stencil-namespace="sqrx-notification-bar" id="sqrx-notification-bar"></script><script src="chrome-extension://kapjaoifikajdcdehfdlmojlepfpkpoe/sqrx-dialog/sqrx-dialog.esm.js" type="module" data-resources-url="chrome-extension://kapjaoifikajdcdehfdlmojlepfpkpoe/sqrx-dialog/" data-stencil-namespace="sqrx-dialog" id="sqrx-dialog"></script></head>

<body cz-shortcut-listen="true">


 <!--copy 2-->

 <table width="850" border="0" cellpadding="0" align="center">
  <tbody><tr>
    <td>
  <!--Header Starts-->
  <table width="850" border="1" cellpadding="0" align="center">
  <tbody><tr>
    <td width="126" align="center" valign="middle"><img src="https://academics.mnnit.ac.in/static/img/logo-MNNIT.jpg" width="105" height="130"></td>
    <td width="718"><div align="center"><strong><span class="style2">Motilal Nehru National Institute of Technology<br>
      Allahabad - 211004</span><br>
      <span class="style6">Office of the (Dean Academics)</span><br>
      <span class="style4">Student's Copy of Registration Form-cum-Fee Receipt <br>
      (Odd Semester 2025-2026)</span></strong></div></td>
  </tr>
</tbody></table>



  <!--Header Ends-->
  <table width="850" border="1" cellpadding="6" align="center">
    <tbody><tr>
     <td colspan="4" align="center"><span class="style7" style="text-decoration:underline;">Enrollment Number: 20233160 </span></td>
   </tr>
  <tr>
     <td align="center"><div align="left"><span class="style10">Receipt No:</span></div></td>
   <td align="center"><div align="left"><span class="style7"></span><span class="style15">2026/ODD/BT/5/233160</span></div></td>
  <td align="center"><div align="left"><span class="style10">Date of Generation:</span></div></td>
  <!--<td align="left"><div align="left"><span class="style7"></span><span class="style15"> 21 Jul, 2025</span></div></td>-->
       <td align="left"><div align="left"><span class="style7"></span><span class="style15">  Jan. 6, 2025</span></div></td>

   </tr>
  
  <tr>
    <td width="113"><span class="style10">Name:</span></td>
    <td colspan="3"><strong>KHANT NANDEESH UJESH</strong></td>
  </tr>
  <tr>
    <td width="113"><span class="style10">Father's Name:</span></td>
    <td colspan="3"><strong>Khant Ujesh</strong></td>
  </tr>
   <tr>
    <td width="15%"><span class="style10">Program:</span></td>
    <td width="31%"><strong>Bachelor of Technology</strong></td>
    <td width="24%"><span class="style10">Branch:</span></td>
    <td width="30%"><strong>Computer Science and Engineering</strong></td>
  </tr>
  
   <tr>
     <td><span class="style10">D.O.B.</span></td>
     <td><strong>2005-02-03</strong></td>
     <td><span class="style10">Sem Registering for: </span></td>
     <td><strong>5</strong></td>
   </tr>
   <tr>
     <td><span class="style10">Slot Details: </span></td>
     <td colspan="3">
      <table width="100%" border="0" cellpadding="0" align="center">
       <tbody><tr>
         <td width="5%"><span class="style10">Id:</span></td>
         <td width="20%"><span class="style15">#</span></td>
         <td width="5%"><span class="style10">Date:</span></td>
         <td width="25%"><span class="style15">#</span></td>
         <td width="5%"><span class="style10"><strong>Time:</strong></span></td>
         <td width="20%"><span class="style15">#</span></td>
       </tr>
      </tbody></table></td>
   </tr>
  
    
     
        <tr>
        <td><span class="style10">Payment Type</span></td>
        <td> <strong>SBI MOPS</strong></td>
        <!--<td><span class="style10">Date</span></td>
        <td><strong></strong></td>-->
        </tr>
     <tr>
     


    <td><span class="style10">Institute Fee: </span></td>
      <td><strong>₹ 93500 /- Only</strong></td>
      <td><span class="style10">Reference No: </span></td>
      <td><strong>KNP4F2E2F3E4C, </strong></td>
    </tr>


    

          <tr>
    <td><span class="style10">Library Dues: </span></td>
      <td><strong>No Dues</strong></td>
      <td><span class="style10">SBI MOPS Amount Paid: </span></td>
      <td><strong>₹ 93500 /- Only</strong></td>
    </tr>
    <tr>
      <td><span class="style10">Educational Loan: </span></td>
      <td><strong>NO</strong></td>
      <td><span class="style10">Fee paid by Funding agency / Scholarship / Organization: </span></td>
      <td><strong>NO</strong></td>
    </tr>
        <tr>
       <td><span class="style10">Hosteller / Day scholar: </span></td>
      <td><strong>HOSTELLER</strong></td>
     </tr>
    <tr>
      <td colspan="4">
        <p>NOTE: 75% attendance will be counted from the alloted date of registration irrespective of actual date of registration in all the subjects.</p>
        <p>Declaration: I will abide by the rules and regulation of Institute related to 75% mandatory attendance in all the subjects.</p>
        <p>I hereby certify that the above information is true to the best of my Knowledge:<br><br>
          Signature of the Student:  ______________________________________ Date: ___________________</p></td>
    </tr>
    <!--<tr>
      <td colspan="4" align="center"><span class="style7"><u>Steps for On-Campus Registration</u></span></td>
   </tr>
  <tr>
     <td colspan="4" align="center"><strong><u>Step <?php /*echo $cntt++;*/ ?></u>: Submission of Undertaking Form, Affidavit by Student and Affidavit by Parent/Guardian</strong></td>
    </tr>
    <tr>
     <td colspan="4" height="95px" style="vertical-align:bottom;"><div align="right">Officer:___________________________ Chief Proctor:___________________________</div></td>
   </tr>-->


    
  
   <tr>
     <td colspan="4" align="center"><strong><u>Step 1</u>: Submission of Mess Fees</strong></td>
    </tr>
    <tr>
     <td><span class="style10">Hostel:</span></td>
     <td></td>
     <td><span class="style10">Room No:</span></td>
     <td></td>
   </tr>
    <tr>
     <td colspan="4" height="55px" style="vertical-align:bottom;"><div align="right">Officer:___________________________ Chief Warden:___________________________</div></td>
   </tr>
  

   
         <tr>
         <td colspan="4" align="center"><strong><u>Step 2</u>: Submission of Undertaking Forms</strong></td>
        </tr>
        <tr>
         <td colspan="4" height="55px" style="vertical-align:bottom;"><div align="right">Officer:________________________ Chief Proctor:___________________________</div></td>
       </tr>
    

       <tr>
         <td colspan="4" align="center"><strong><u>Step 3</u>: Counter Registration [not required due to COVID-19 situations]</strong></td>
        </tr>
        <tr>
         <td colspan="4" height="55px" style="vertical-align:bottom;"><div align="right">Officer:________________________ Dean(Academics):___________________________</div></td>
       </tr>
 
   <!--
    <tr>
     <td colspan="4" align="center"><strong><u>Step <?php echo  $cntt; ?></u>: Issue/Renewal of Identity Card</strong></td>
    </tr>
    <tr>
     <td colspan="4" height="95px" style="vertical-align:bottom;"><div align="right">Officer:___________________________ Chief Proctor:___________________________</div></td>
   </tr>
   -->
    <tr>
     <td colspan="4" align="center"><span class="style7">Note: All the above steps must be completed for your registration to be complete.</span></td>
   </tr>
</tbody></table>

  
  </td>
  </tr>
</tbody></table>

<!--copy 3-->
<p class="break"></p>
<table width="850" border="0" cellpadding="0" align="center">
  <tbody><tr>
    <td>
  <!--Header Starts-->
  <table width="850" border="1" cellpadding="0" align="center">
  <tbody><tr>
    <td width="126" align="center" valign="middle"><img src="/static/img/logo-MNNIT.jpg" width="105" height="130"></td>
    <td width="718"><div align="center"><strong><span class="style2">Motilal Nehru National Institute of Technology<br>
      Allahabad - 211004</span><br>
      <span class="style6">Office of the (Dean Academics)</span><br>
      <span class="style4">Office of the Dean (Academics) Copy of Registration Form-cum-Fee Receipt <br>
      (Odd Semester 2025-2026))</span></strong></div></td>
  </tr>
</tbody></table>

  <!--Header Ends-->
  <table width="850" border="1" cellpadding="6" align="center">
   <tbody><tr>
     <td colspan="4" align="center"><span class="style7" style="text-decoration:underline;">Enrollment Number: 20233160 </span></td>
   </tr>
  <tr>
     <td align="center"><div align="left"><span class="style10">Receipt No:</span></div></td>
   <td align="center"><div align="left"><span class="style7"></span><span class="style15">2026/ODD/BT/5/233160</span></div></td>
  <td align="center"><div align="left"><span class="style10">Date of Generation:</span></div></td>
  <!--<td align="left"><div align="left"><span class="style7"></span><span class="style15">21 Jul, 2025</span></div></td>-->
        <td align="left"><div align="left"><span class="style7"></span><span class="style15"> Jan. 6, 2025</span></div></td>

   </tr>
  
  <tr>
    <td width="113"><span class="style10">Name:</span></td>
    <td colspan="3"><strong>KHANT NANDEESH UJESH</strong></td>
  </tr>
  <tr>
    <td width="113"><span class="style10">Father's Name:</span></td>
    <td colspan="3"><strong>Khant Ujesh</strong></td>
  </tr>
   <tr>
    <td width="15%"><span class="style10">Program:</span></td>
    <td width="31%"><strong>Bachelor of Technology</strong></td>
    <td width="24%"><span class="style10">Branch:</span></td>
    <td width="30%"><strong>Computer Science and Engineering</strong></td>
  </tr>
   <tr>
     <td><span class="style10">D.O.B.</span></td>
     <td><strong>2005-02-03</strong></td>
     <td><span class="style10">Sem Registering for: </span></td>
     <td><strong>5</strong></td>
   </tr>
   <tr>
     <td><span class="style10">Slot Details: </span></td>
     <td colspan="3">
      <table width="100%" border="0" cellpadding="0" align="center">
       <tbody><tr>
         <td width="5%"><span class="style10">Id:</span></td>
         <td width="20%"><span class="style15">#</span></td>
         <td width="5%"><span class="style10">Date:</span></td>
         <td width="25%"><span class="style15">#</span></td>
         <td width="5%"><span class="style10"><strong>Time:</strong></span></td>
         <td width="20%"><span class="style15">#</span></td>
       </tr>
      </tbody></table></td>
   </tr>
  
    
     
        <tr>
        <td><span class="style10">Payment Type</span></td>
        <td> <strong>SBI MOPS</strong></td>
        <!--<td><span class="style10">Date</span></td>
        <td><strong></strong></td>-->
        </tr>
     <tr>
     


    <td><span class="style10">Institute Fee: </span></td>
      <td><strong>₹ 93500 /- Only</strong></td>
      <td><span class="style10">Reference No: </span></td>
      <td><strong>KNP4F2E2F3E4C, </strong></td>
    </tr>


    

          <tr>
    <td><span class="style10">Library Dues: </span></td>
      <td><strong>No Dues</strong></td>
      <td><span class="style10">SBI MOPS Amount Paid: </span></td>
      <td><strong>₹ 93500 /- Only</strong></td>
    </tr>
    <tr>
      <td><span class="style10">Educational Loan: </span></td>
      <td><strong>NO</strong></td>
      <td><span class="style10">Fee paid by Funding agency / Scholarship / Organization: </span></td>
      <td><strong>NO</strong></td> 
    </tr>
    <tr>
      <td colspan="4">
        <p>NOTE: 75% attendance will be counted from the alloted date of registration irrespective of actual date of registration.</p>
        <p>Declaration: I will abide by the rules and regulation of Institute related to 75% mandatory attendance.</p>
        I hereby certify that the above information is true to the best of my Knowledge:<br><br>
     Signature of the Student:  ______________________________________ Date: ___________________</td>
    </tr>
   <tr>
      <td colspan="4">Received the Institute copy of the Challan / Demand Draft. <br>
       <br><br>
     Counter in Charge:  __________________________________________ Date: ____________________ &nbsp;&nbsp;&nbsp;Seal of the Institute </td>
    </tr>
   
</tbody></table>

  
  </td>
  </tr>
</tbody></table>



<!--copy 4-->
<p class="break"></p>
<table width="850" border="0" cellpadding="0" align="center">
  <tbody><tr>
    <td>
  <!--Header Starts-->
  <table width="850" border="1" cellpadding="0" align="center">
  <tbody><tr>
    <td width="126" align="center" valign="middle"><img src="/static/img/logo-MNNIT.jpg" width="105" height="130"></td>
    <td width="718"><div align="center"><strong><span class="style2">Motilal Nehru National Institute of Technology<br>
      Allahabad - 211004</span><br>
      <span class="style6">Office of the (Dean Academics)</span><br>
      <span class="style4">Office of the Dean (Academics) Copy of Registration Form-cum-Fee Receipt <br>
      (Odd Semester 2025-2026))</span></strong></div></td>
  </tr>
</tbody></table>
        <table width="850" border="1" cellpadding="6" align="center">
   <tbody><tr>
     <td colspan="4" align="center"><span class="style7" style="text-decoration:underline;">Enrollment Number: 20233160 </span></td>
   </tr>
  <tr>
     <td align="center"><div align="left"><span class="style10">Receipt No:</span></div></td>
   <td align="center"><div align="left"><span class="style7"></span><span class="style15">2026/ODD/BT/5/233160</span></div></td>
  <td align="center"><div align="left"><span class="style10">Date of Generation:</span></div></td>
  <!--<td align="left"><div align="left"><span class="style7"></span><span class="style15">21 Jul, 2025</span></div></td>-->
        <td align="left"><div align="left"><span class="style7"></span><span class="style15"> Jan. 6, 2025</span></div></td>

   </tr>

  <tr>
    <td width="113"><span class="style10">Name:</span></td>
    <td colspan="3"><strong>KHANT NANDEESH UJESH</strong></td>
  </tr>
  <tr>
    <td width="113"><span class="style10">Father's Name:</span></td>
    <td colspan="3"><strong>Khant Ujesh</strong></td>
  </tr>
   <tr>
    <td width="15%"><span class="style10">Program:</span></td>
    <td width="31%"><strong>Bachelor of Technology</strong></td>
    <td width="24%"><span class="style10">Branch:</span></td>
    <td width="30%"><strong>Computer Science and Engineering</strong></td>
  </tr>
   <tr>
       
        <td><span class="style10">Category</span></td>
        <td><strong></strong></td>
       
       
   </tr>
</tbody></table>
        <br>
<table width="850" border="1" cellpadding="6" align="center">

  <tbody><tr>
    <th>Semester</th>
    <th>Reference No</th>
    <th>Amount</th>
       <th>Date Received</th>
      <th>Mode of Payment</th>
  </tr>
      
              <tr>
                  <td>1</td>
                  <td>KNPF93487AE4F</td>
                  <td>Rs. 26500</td>
                  <td>10-08-2023</td>
                  <td>SBI MOP</td>
              </tr>
          
              <tr>
                  <td>2</td>
                  <td>KNPCBC1A11D3B</td>
                  <td>Rs. 95200</td>
                  <td>31-12-2023</td>
                  <td>SBI MOP</td>
              </tr>
          
              <tr>
                  <td>3</td>
                  <td>KNP6415CC71C9</td>
                  <td>Rs. 94700</td>
                  <td>07-07-2024</td>
                  <td>SBI MOP</td>
              </tr>
          
              <tr>
                  <td>4</td>
                  <td>KNP736DDAA1F2</td>
                  <td>Rs. 94700</td>
                  <td>28-12-2024</td>
                  <td>SBI MOP</td>
              </tr>
          
              <tr>
                  <td>5</td>
                  <td>KNP4F2E2F3E4C</td>
                  <td>Rs. 93500</td>
                  <td>12-07-2025</td>
                  <td>SBI MOP</td>
              </tr>
          



</tbody></table>



</td></tr></tbody></table>
<!--<script> window.print(); </script>-->


<div id="sqrx-content-container"><div class="squarex_ext_modal"><div class="squarex_ext_dialog-container"><div id="module_dialog_root__disposableFileViewer"><div class="squarex_ext_dialog squarex_ext_light squarex_ext__hidden"></div></div></div></div></div><sqrx-notification-bar id="sqrxNotificationBar" elemtitle="SquareX Safe File Viewer" class="hydrated"></sqrx-notification-bar><sqrx-email-notifier variant="light" class="hydrated"></sqrx-email-notifier><audio class="audio-output" style="display: none;"></audio><div id="volume-booster-visusalizer">
                    <div class="sound">
                        <div class="sound-icon"></div>
                        <div class="sound-wave sound-wave_one"></div>
                        <div class="sound-wave sound-wave_two"></div>
                        <div class="sound-wave sound-wave_three"></div>
                    </div>
                    <div class="segments-box">
                        <div data-range="1-20" class="segment"><span></span></div>
                        <div data-range="21-40" class="segment"><span></span></div>
                        <div data-range="41-60" class="segment"><span></span></div>
                        <div data-range="61-80" class="segment"><span></span></div>
                        <div data-range="81-100" class="segment"><span></span></div>
                    </div>
                </div></body></html>
  `);

  // Ref for the iframe to update its content
  const iframeRef = useRef(null);
  // State for displaying messages to the user (e.g., loading, success, error)
  const [message, setMessage] = useState('');
  // State to track if html2canvas library is loaded
  const [html2canvasLoaded, setHtml2canvasLoaded] = useState(false);

  // Effect to dynamically load html2canvas CDN script
  useEffect(() => {
    const loadScript = (src, id, callback) => {
      if (document.getElementById(id)) {
        callback(); // Already loaded
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.onload = callback;
      script.onerror = () => console.error(`Failed to load script: ${src}`);
      document.head.appendChild(script);
    };

    // Load html2canvas
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', 'html2canvas-script', () => {
      setHtml2canvasLoaded(true); // Mark html2canvas as loaded
    });

    // Cleanup function to remove script if component unmounts (optional, but good practice)
    return () => {
      const html2canvasScript = document.getElementById('html2canvas-script');
      if (html2canvasScript) document.head.removeChild(html2canvasScript);
    };
  }, []); // Run only once on component mount

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

  // Function to handle Image download (Frontend Only)
  const handleDownloadImage = async () => {
    setMessage('Generating image... Please wait.');

    try {
      // Check if html2canvas is loaded before proceeding
      if (typeof html2canvas === 'undefined') {
        throw new Error('html2canvas library is still loading. Please try again in a moment.');
      }

      // Get the iframe element
      const iframeElement = iframeRef.current;
      if (!iframeElement || !iframeElement.contentDocument || !iframeElement.contentWindow) {
        throw new Error('Iframe element or its content not found.');
      }

      const iframeDoc = iframeElement.contentDocument;
      const iframeHtml = iframeDoc.documentElement; // Capture the entire HTML content of the iframe

      // Calculate the scrollable dimensions of the iframe content
      const contentWidth = Math.max(
        iframeDoc.body.scrollWidth,
        iframeDoc.body.offsetWidth,
        iframeHtml.clientWidth,
        iframeHtml.scrollWidth,
        iframeHtml.offsetWidth
      );
      const contentHeight = Math.max(
        iframeDoc.body.scrollHeight,
        iframeDoc.body.offsetHeight,
        iframeHtml.clientHeight,
        iframeHtml.scrollHeight,
        iframeHtml.offsetHeight
      );

      // Generate canvas from the iframe's document element
      const canvas = await html2canvas(iframeHtml, {
        scale: 4, // Increased scale for better resolution
        useCORS: true, // Important if your HTML includes images from other origins
        logging: false, // Disable logging for cleaner console
        width: contentWidth, // Explicitly set width to content's scrollWidth
        height: contentHeight, // Explicitly set height to content's scrollHeight
        windowWidth: contentWidth, // Set window width for consistent rendering within html2canvas
        windowHeight: contentHeight, // Set window height for consistent rendering within html2canvas
        scrollX: 0, // Ensure capture starts from top-left
        scrollY: 0, // Ensure capture starts from top-left
        foreignObjectRendering: true, // Attempt to improve rendering of complex CSS/SVG
        backgroundColor: iframeDoc.body.style.backgroundColor || '#ffffff', // Ensure background is captured
        // Ignore elements that might cause issues or are not needed in image
        ignoreElements: (element) => {
          return element.tagName === 'SCRIPT' || element.tagName === 'STYLE';
        }
      });

      // Convert canvas to image data URL
      const imgDataUrl = canvas.toDataURL('image/png');

      // Create a temporary link element to trigger download
      const a = document.createElement('a');
      a.href = imgDataUrl;
      a.download = 'document-screenshot.png'; // Set the download file name
      document.body.appendChild(a);
      a.click(); // Programmatically click the link
      a.remove(); // Clean up the link element

      setMessage('Image generated and downloaded successfully!');
    } catch (error) {
      console.error('Error generating image:', error);
      setMessage(`An error occurred while generating the image: ${error.message}`);
    } finally {
      // Clear message after a short delay
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center font-inter">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 rounded-lg p-3 shadow-md bg-white">
        HTML Editor & Image Generator
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
        {/* Download Image button */}
        <button
          onClick={handleDownloadImage}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          disabled={!html2canvasLoaded} // Disable button until html2canvas is loaded
        >
          {html2canvasLoaded ? 'Download Image' : 'Loading Libraries...'}
        </button>
        {/* Message display area */}
        {message && (
          <div className="mt-4 p-3 text-center text-sm font-medium text-gray-700 bg-blue-50 rounded-lg">
            {message}
          </div>
        )}
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
