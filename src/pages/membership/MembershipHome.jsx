import MembershipHomeImg from "../../assets/MembershipHomeImg.jpg";

function MembershipHome() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="relative mb-11">
        <h1
          className="text-4xl text-white absolute font-medium"
          style={{ right: "8%", top: "50%", transform: "translateY(-50%)" }}
        >
          Self Study Package
        </h1>
        <figure>
          <img src={MembershipHomeImg} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default MembershipHome;
