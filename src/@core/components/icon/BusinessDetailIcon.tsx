
import BenefitsIcon from "./business-icons/BenefitsIcon";
import ClientIcon from "./business-icons/ClientsIcon";
import InvoiceIcon from "./business-icons/InvoiceIcon";
import LaunchIcon from "./business-icons/LaunchIcon";
import SectorIcon from "./business-icons/SectorIcon";
import ViewsIcon from "./business-icons/ViewsIcon";

const icons = (props: any): any => {
  return {
    benefits: <BenefitsIcon tsIcon {...props}/>,
    clients: <ClientIcon {...props}/>,
    invoice: <InvoiceIcon {...props}/>,
    launch: <LaunchIcon {...props}/>,
    sector: <SectorIcon {...props}/>,
    views: <ViewsIcon {...props}/>,
  };
}
function BusinessDetailIcon(props: any) {
  return (
    <>{icons(props)[props.icon]}</>
  )
}

export default BusinessDetailIcon;