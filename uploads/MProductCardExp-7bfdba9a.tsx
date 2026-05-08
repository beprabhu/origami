import svgPaths from "./svg-d6uh0105hu";
import imgProductImage from "figma:asset/9b17231a5156637da239b7f49cbba002eb855594.png";

function TouchTarget() {
  return (
    <div className="absolute bottom-[0.33px] content-stretch flex flex-col items-start p-[4px] right-[0.33px]" data-name="Touch Target">
      <div className="bg-white content-stretch flex gap-[2px] h-[32px] items-center justify-center p-[6px] relative rounded-[8px] shrink-0 w-[56px]" data-name="M-ATC Buttons">
        <div aria-hidden="true" className="absolute border-[#f9105e] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[1px_1px_0px_0px_#f9105e]" />
        <p className="font-['Zepto_Norms:DemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f9105e] text-[12px] text-center tracking-[0.2px] w-[28px]">ADD</p>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="aspect-[107/107] bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Image Container">
      <div className="aspect-[147/147] pointer-events-none relative shrink-0 w-full" data-name="Product Image">
        <img alt="" className="absolute inset-0 max-w-none object-contain size-full" src={imgProductImage} />
        <div aria-hidden="true" className="absolute border-[#dfe4ec] border-b-[0.5px] border-solid inset-0" />
      </div>
      <TouchTarget />
    </div>
  );
}

function Quantity() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Quantity">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between leading-[0] not-italic p-[6px] relative size-full text-[#101418] text-[10px] whitespace-nowrap">
          <div className="flex flex-col font-['Zepto_Norms:DemiBold',sans-serif] justify-center max-w-[100px] overflow-hidden relative shrink-0 text-ellipsis">
            <p className="leading-[12px] overflow-hidden text-ellipsis">84 pcs</p>
          </div>
          <div className="flex flex-col font-['Zepto_Norms:Medium',sans-serif] justify-center max-w-[100px] overflow-hidden relative shrink-0 text-ellipsis">
            <p className="leading-[12px] overflow-hidden text-ellipsis">₹7.5/ pc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-[#f3f5f7] relative rounded-[8px] shrink-0 w-full" data-name="Card Header">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <ImageContainer />
        <div className="absolute content-stretch flex items-start justify-end p-[2px] right-[0.33px] size-[24px] top-0" data-name="U-Ad/Heart">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="M-Icon/System-Icon/heart-solid">
            <div className="absolute inset-[15.64%_12.5%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5006 12.3688">
                <path d={svgPaths.ped41a80} fill="var(--fill-0, white)" id="Union" stroke="var(--stroke-0, #C2C9D6)" style={{ fill: "white", fillOpacity: "1", stroke: "color(display-p3 0.7608 0.7882 0.8392)", strokeOpacity: "1" }} />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#ffefe4] content-stretch flex gap-[2px] h-[16px] items-center justify-center left-0 max-w-[74px] px-[4px] py-[2px] rounded-bl-[1px] rounded-br-[4px] rounded-tl-[6px] rounded-tr-[1px] top-0 w-[47px]" data-name="_Info Label">
          <div aria-hidden="true" className="absolute border-[#fedcc5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-bl-[1px] rounded-br-[4px] rounded-tl-[6px] rounded-tr-[1px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Zepto_Norms:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bd6c0f] text-[8px] text-ellipsis whitespace-nowrap">
            <p className="leading-[10px] overflow-hidden text-ellipsis">Best Value</p>
          </div>
        </div>
        <Quantity />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe4ec] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Sp() {
  return (
    <div className="bg-[#329537] content-stretch flex items-baseline pb-[2px] pt-[4px] px-[6px] relative rounded-[6px] shrink-0" data-name="SP">
      <div aria-hidden="true" className="absolute border-[#084121] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1.5px_1.5px_0px_0px_#084121]" />
      <p className="font-['Zepto_Norms:DemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">₹</p>
      <p className="font-['Zepto_Norms:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">510</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-baseline flex flex-wrap gap-[4px_8px] items-baseline pb-[2px] relative shrink-0 w-full" data-name="_Price">
      <Sp />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Zepto_Norms:Normal',sans-serif] leading-[14px] line-through not-italic relative shrink-0 text-[#8b96a7] text-[12px] whitespace-nowrap">₹949</p>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title Container">
      <p className="flex-[1_0_0] font-['Zepto_Norms:Medium',sans-serif] leading-[14px] min-w-px not-italic overflow-hidden relative text-[#101418] text-[12px] text-ellipsis">TEDDYY Baby Easy Pant Diapers 74 Count (M) 7-12 kgs</p>
    </div>
  );
}

function AttributeTags() {
  return (
    <div className="content-stretch flex gap-[4px] items-start py-[4px] relative shrink-0 w-full" data-name="Attribute Tags">
      <div className="bg-[rgba(11,12,14,0.04)] content-stretch flex gap-[2px] items-center max-h-[18px] max-w-[141px] min-h-[18px] px-[4px] py-[2px] relative rounded-[4px] shrink-0 size-[18px]" data-name="M-Status Label">
        <div aria-hidden="true" className="absolute border-[#dfe4ec] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[4.25px]" />
        <div className="flex flex-[1_0_0] flex-col font-['Zepto_Norms:DemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#424957] text-[10px] text-ellipsis whitespace-nowrap">
          <p className="leading-[12px] overflow-hidden text-ellipsis">M</p>
        </div>
      </div>
      <div className="bg-[rgba(11,12,14,0.04)] content-stretch flex gap-[2px] h-[18px] items-center max-h-[18px] max-w-[141px] min-h-[18px] px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[45px]" data-name="M-Status Label">
        <div aria-hidden="true" className="absolute border-[#dfe4ec] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[4.25px]" />
        <div className="flex flex-[1_0_0] flex-col font-['Zepto_Norms:DemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#424957] text-[10px] text-ellipsis whitespace-nowrap">
          <p className="leading-[12px] overflow-hidden text-ellipsis">7 - 12 kg</p>
        </div>
      </div>
    </div>
  );
}

function CardBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Card Body">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[2px] relative size-full">
        <Price />
        <div className="content-stretch flex gap-[4px] items-center pt-[2px] relative shrink-0 w-full" data-name="_Savings">
          <p className="font-['Zepto_Norms:Bold',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#329537] text-[10px] whitespace-nowrap">₹24 OFF</p>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Divider">
            <div className="absolute inset-[-0.5px_-0.82%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.3333 1">
                <path d="M0.5 0.5H61.8333" id="Divider" stroke="var(--stroke-0, #DFE4EC)" strokeDasharray="4 4" strokeLinecap="round" style={{ stroke: "color(display-p3 0.8745 0.8941 0.9255)", strokeOpacity: "1" }} />
              </svg>
            </div>
          </div>
        </div>
        <TitleContainer />
        <AttributeTags />
        <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full" data-name="_ETA + Rating">
          <div className="bg-gradient-to-r content-stretch flex from-[#e5faec] gap-[2px] items-center overflow-clip pl-[2px] py-px relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 to-[rgba(255,255,255,0.16)]" data-name="Rating">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="M-Icon/System-Icon/star-filled">
              <div className="absolute inset-[9.02%_8.01%_10.34%_8.02%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0763 9.67677">
                  <path d={svgPaths.p391ace00} fill="var(--fill-0, #329537)" id="Vector" style={{ fill: "color(display-p3 0.1961 0.5843 0.2157)", fillOpacity: "1" }} />
                </svg>
              </div>
            </div>
            <p className="font-['Zepto_Norms:Normal',sans-serif] leading-[0] not-italic relative shrink-0 text-[#329537] text-[0px] whitespace-nowrap">
              <span className="font-['Zepto_Norms:Medium',sans-serif] leading-[12px] text-[10px]">4.5</span>
              <span className="leading-[12px] text-[10px]">{` `}</span>
              <span className="leading-[12px] text-[#586274] text-[10px]">(928)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MProductCardExp() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative size-full" data-name="M-Product Card Exp">
      <CardHeader />
      <CardBody />
    </div>
  );
}