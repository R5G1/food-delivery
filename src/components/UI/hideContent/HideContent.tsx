import React, { useEffect, useState } from 'react';

interface IHideContent {
  children: React.ReactNode;
  titleUp?: React.ReactNode | string;
  titleDown?: React.ReactNode | string;
}

function HideContent({ children, titleUp, titleDown }: IHideContent) {
  const [btnHide, setBtnHide] = useState(true);

  return (
    <div>
      <div onClick={() => setBtnHide((prev) => !prev)}>
        <p>{titleUp}</p>
      </div>
      {btnHide && children}
      <div onClick={() => setBtnHide((prev) => !prev)}>
        <p>{titleDown}</p>
      </div>
    </div>
  );
}

export default HideContent;
