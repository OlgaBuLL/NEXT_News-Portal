import Feed from "../../Feed/Feed";
import Advertisement from "../../Advertisement/Advertisement";
import MoreNews from "../../MoreNews/MoreNews";
import IncidentsBrief from "../../IncidentsBrief/IncidentsBrief";
import "./style.sass";

export default function HomePage() {
  return (
    <div className="home">
      <Feed />
      <Advertisement />
      <MoreNews />
      <IncidentsBrief />
    </div>
  );
}
