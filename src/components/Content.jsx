import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
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
    <rect x="0" y="0" rx="0" ry="0" width="193" height="121" /> 
    <rect x="0" y="0" rx="0" ry="0" width="193" height="8" />
  </ContentLoader>

  )
}

const con = styled`

`
export default Content