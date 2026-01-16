'use client'
import { useEffect, useRef } from 'react';
import Layout from "@/components/layout/Layout";

export default function DataResources() {
  const dataverseRef = useRef(null);

  useEffect(() => {
    const currentRef = dataverseRef.current;
    if (!currentRef) return;

    if (document.getElementById('dataverse-widget-js')) {
      return;
    }

    currentRef.innerHTML = '';

    const script = document.createElement('script');
    script.id = 'dataverse-widget-js';
    script.src = 'https://dataverse.harvard.edu/resources/js/widgets.js?alias=peskas&dvUrl=https://dataverse.harvard.edu&widgetScope=peskas&widget=iframe&heightPx=600';
    script.async = true;
    
    script.onerror = () => {
      console.error('Failed to load Dataverse widget');
      if (currentRef) {
        currentRef.innerHTML = '<p className="text-body-text color-gray-600">Unable to load Dataverse widget. Please try refreshing the page.</p>';
      }
    };

    currentRef.appendChild(script);

    return () => {
      const existingScript = document.getElementById('dataverse-widget-js');
      if (existingScript && existingScript.parentNode === currentRef) {
        currentRef.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums bg-gray-100">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-display-3 color-gray-900 mb-20">Explore PESKAS resources</h1>
                  <p className="text-heading-6 color-gray-600 mb-20">
                    Access a growing repository of data and scientific publications, advancing fisheries research annually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-90">
          <div className="container">
            <h2 className="text-heading-1 color-gray-900">Scientific publications</h2>
            <div className="row">
              <div className="col-lg-6">
                <p className="text-body-lead-large color-gray-600 mt-20">A curated collection of research papers and articles detailing the advances made possible by PESKAS.</p>
              </div>
            </div>
          </div>
          <section className="section-box">
            <div className="container mt-40">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appr5nF2863yuTobW/shruU0GhlMox1whQt?backgroundColor=redDusty&viewControls=on"
                frameBorder="0"
                width="100%"
                height="533"
                style={{ background: 'transparent', border: '1px solid #ccc' }}
              ></iframe>
            </div>
            <div className="container mt-40">
              <h2 className="text-heading-1 color-gray-900">Data</h2>
              <div className="row">
                <div className="col-lg-6">
                  <p className="text-body-lead-large color-gray-600 mt-20">Explore the latest datasets and insights from PESKAS, conveniently accessible through our integrated Harvard Dataverse portal.</p>
                </div>
              </div>
              <div className="container mt-40">
                <div 
                  ref={dataverseRef} 
                  style={{ 
                    minHeight: '600px', 
                    width: '100%',
                    position: 'relative'
                  }}
                ></div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
