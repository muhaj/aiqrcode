import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="original QR code" />}
      itemTwo={<ReactCompareSliderImage src={restored} alt="generated QR code" />}
      portrait
      className="flex w-[600px] mt-5 h-96"
    />
  );
};
