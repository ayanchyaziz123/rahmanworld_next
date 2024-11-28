import Biography from "@/components/Biography";
import Profile from "@/components/Profile";
import TargetAudience from "@/components/TargetAudience";
import ValueProposition from "@/components/ValueProposition";

const HomePage = () => {
  return(
    <div>
      
      <Biography/>
      <ValueProposition/>
      <TargetAudience/>
    </div>
  );
}

export default HomePage;