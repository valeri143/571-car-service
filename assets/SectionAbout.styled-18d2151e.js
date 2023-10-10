import{f as t}from"./index-f69d55d9.js";const e=t.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 1512px) {
    align-items: center;
    position: relative;
    z-index: 2;
  }
`,n=t.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  @media screen and (min-width: 1512px) {
    width: 28px;
    height: 28px;
  }
`,a=t.h2`
  text-align: right;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.5;
`,s=t.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  @media screen and (min-width: 1512px) {
    text-indent: 200px;
    font-size: 38px;
    max-width: 997px;
    margin-left: auto;
  }
`,p=t.span`
  color: var(--accent-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  @media screen and (min-width: 1512px) {
    font-size: 38px;
  }
`,d=t.p`
  max-width: 360px;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    margin-bottom: 50px;
    max-width: 788px;
    margin-left: auto;
    margin-right: auto;
  }
`,r=t.img`
  position: absolute;
  right: 0;
  top: -135px;
  @media screen and (min-width: 1512px) {
    display: none;
  }
`,m=t.img`
  display: none;
  position: absolute;
  left: 0;
  top: -46px;
  @media screen and (min-width: 1512px) {
    display: block;
  }
`,i=t.div`
  position: relative;
  @media screen and (min-width: 1512px) {
    transition: background 250ms var(--animation-cubic),
      width 250ms var(--animation-cubic), height 250ms var(--animation-cubic);
    &:hover {
      &::before {
        content: '';
        position: absolute;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`,c=t.picture`
  border-radius: 8px;
`,x=t.img`
  position: absolute;
  top: 20px;
  right: 20px;
  @media screen and (min-width: 1512px) {
    opacity: 0;
    transition: opacity 250ms var(--animation-cubic);
    ${i}:hover & {
      opacity: 1;
    }
    ${i}:focus & {
      opacity: 1;
    }
  }
`,h=t.h4`
  position: absolute;
  left: 12px;
  bottom: 190px;
  color: var(--light-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 360px) {
    bottom: 170px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 24px;
    bottom: 30px;
    left: 20px;
    transition: bottom 250ms 100ms var(--animation-cubic);
    ${i}:hover & {
      bottom: 138px;
    }
    ${i}:focus & {
      bottom: 138px;
    }
  }
`,l=t.h4`
  position: absolute;
  left: 12px;
  top: 15px;
  color: var(--light-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 360px) {
    top: 75px;
  }
  @media screen and (min-width: 380px) {
    top: 100px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 24px;
    bottom: 30px;
    left: 20px;
    top: unset;
    transition: bottom 250ms 100ms var(--animation-cubic);
    ${i}:hover & {
      bottom: 192px;
    }
    ${i}:focus & {
      bottom: 192px;
    }
  }
`,g=t.p`
  position: absolute;
  left: 12px;
  bottom: 16px;
  color: var(--light-color);
  font-size: 16px;
  line-height: 1.5;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    opacity: 0;
    left: 20px;
    transition: opacity 250ms ease-in-out;
    ${i}:hover & {
      opacity: 1;
    }
    ${i}:focus & {
      opacity: 1;
    }
  }
`;export{r as S,m as a,e as b,n as c,a as d,s as e,p as f,d as g,i as h,c as i,x as j,h as k,g as l,l as m};
