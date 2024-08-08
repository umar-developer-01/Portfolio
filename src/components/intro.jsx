
import React, { forwardRef } from 'react';
import Introduction from "./intro/introduction";
import IntoImage from "./intro/introImage";

// eslint-disable-next-line react/display-name
const Intro = forwardRef((props, ref) => {

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0" id="targetSection" ref={ref} {...props}>
      <div className="relative ml-auto pt-20 md:pt-20 xl:pt-20">
        <div className="gap-12 md:flex">

          <Introduction />
          <IntoImage />
        </div>


      </div>
    </div>
  );
});

export default Intro;
