import { LinkProps } from "app/components/common/link/Link";
import Stylist, { Sizing } from "stylist/Stylist";
import ColumnLink from "./ColumnLink";
import ColumnTitle, { ColumnTitleProps } from "./ColumnTitle";

const ColumnStyle = Stylist.builder()
  .inMobile({
    padding: 5,
    width: Sizing.ONE_HALF
  })
  .inTablet({
    width: Sizing.ONE_THIRD
  })
  .inLaptop({
    width: Sizing.ONE_QUARTER
  })
  .build();


export interface ColumnProps extends ColumnTitleProps {
  links: LinkProps[];
}

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
  return (
    <div className={ColumnStyle}>
      <ColumnTitle title={props.title} />
      {props.links.map((link, i) => <ColumnLink key={i} {...link} />)}
    </div>
  );
}

export default Column;