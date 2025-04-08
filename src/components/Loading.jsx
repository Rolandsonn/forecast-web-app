import React from "react";
import ContentLoader from "react-content-loader";

const Loading = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={700}
    viewBox="0 0 1200 700"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="30" ry="30" width="360" height="375" />
    <rect x="480" y="0" rx="30" ry="30" width="720" height="375" />
    <rect x="3" y="420" rx="30" ry="30" width="1200" height="343" />
  </ContentLoader>
);

export default Loading;
