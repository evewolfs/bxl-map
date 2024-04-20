import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Ensure the Google Analytics script is only executed on the client side
    if (process.browser) {
      // Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-JCGG83N776`;
      script.async = true;

      // Google Analytics configuration script
      const configScript = document.createElement('script');
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JCGG83N776');
      `;

      // Append the scripts to the document head
      document.head.appendChild(script);
      document.head.appendChild(configScript);

      // Clean up function to remove the scripts when component unmounts
      return () => {
        document.head.removeChild(script);
        document.head.removeChild(configScript);
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
