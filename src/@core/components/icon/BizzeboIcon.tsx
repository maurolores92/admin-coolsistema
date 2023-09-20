
import DashboardIcon from "./DashboardIcon";
import SearchIcon from "./SearchIcon";
import ServicesIcon from "./ServicesIcon";
import SettingsIcon from "./SettingsIcon";
import NotificationsIcon from "./NotificationsIcon";
import CommunityIcon from "./CommunityIcon";
import EducationIcon from "./EducationIcon";
import MessagesIcon from "./MessagesIcon";
import FavorityIcon from "./FavorityIcon";
import BusinessIcon from "./BusinessIcon";
import CalendarIcon from "./CalendarIcon";
import UserIcon from "./UserIcon";

const icons = (props: any): any => {
  return {
    dashboard: <DashboardIcon {...props}/>,
    search: <SearchIcon {...props}/>,
    services: <ServicesIcon {...props}/>,
    settings: <SettingsIcon {...props}/>,
    notifications: <NotificationsIcon {...props}/>,
    community: <CommunityIcon {...props}/>,
    education: <EducationIcon {...props}/>,
    messages: <MessagesIcon {...props}/>,
    favority: <FavorityIcon {...props}/>,
    business: <BusinessIcon {...props}/>,
    calendar: <CalendarIcon {...props}/>,
    user: <UserIcon {...props}/>,
  };
}
function BizzeboIcon(props: any) {
  return (
    <>{icons(props)[props.icon]}</>
  )
}

export default BizzeboIcon;