import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Community from "../components/community/Community";
import Cta from "../components/cta/Cta";

const CommunityPage = () => {
  return (
    <div>
      <Navbar />
      <Community />
      <Cta />
      <Footer />
    </div>
  );
};

export default CommunityPage;
