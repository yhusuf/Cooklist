import React from 'react';
import ContentLoader from 'react-content-loader';

function Content() {
  return (
    <ContentLoader 
    rtl
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f7f7f7"
    foregroundColor="#e1dfdf"
  >
    <rect x="206" y="147" rx="10" ry="10" width="193" height="121" /> 
    <rect x="206" y="273" rx="2" ry="2" width="193" height="8" />
  </ContentLoader>

  )
}

export default Content