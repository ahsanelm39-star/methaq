import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
  ogType?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = 'مِيثاق للمحاماة والاستشارات القانونية — صرح قانوني واستشاري يقدم حلولاً وقائية وترافعية قائمة على الفحص المجهري للوقائع والتحليل النظامي الرصين.',
  ogType = 'website',
}) => {
  useEffect(() => {
    const fullTitle = `${title} | مِيثاق للمحاماة والاستشارات القانونية`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', fullTitle);

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Update OG Type
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (!ogTypeMeta) {
      ogTypeMeta = document.createElement('meta');
      ogTypeMeta.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeMeta);
    }
    ogTypeMeta.setAttribute('content', ogType);
  }, [title, description, ogType]);

  return null;
};
