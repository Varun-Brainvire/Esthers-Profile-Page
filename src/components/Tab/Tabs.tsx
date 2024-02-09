import React, { useState } from "react";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";
import { TabsDiv, TabsLI, TabsUL } from "./Tabs.styles";
import { useRouter } from "next/router";

const Tabs = () => {
  const [toggleTabs, setToggleTabs] = useState("Feed");
  console.log(toggleTabs);
  const onTabsClick = (tabContent: string) => {
    setToggleTabs(tabContent);
  };

  const router = useRouter();

  return (
    <div>
      <ProfileDetailContainer style={{ borderColor: "1px solid blue" }}>
        <TabsDiv>
          <TabsUL>
            <TabsLI
              isActive={toggleTabs == "Feed"}
              onClick={() =>{
                onTabsClick("Feed")
                router.push("/oliver/shop")
              }}
            >
              Feed
            </TabsLI>
            <TabsLI
              isActive={toggleTabs == "Shop"}
              onClick={() => onTabsClick("Shop")}
            >
              Shop
            </TabsLI>
            <TabsLI
              isActive={toggleTabs == "Styleboards"}
              onClick={() => onTabsClick("Styleboards")}
            >
              Styleboards
            </TabsLI>
            <TabsLI
              isActive={toggleTabs == "Blog"}
              onClick={() => onTabsClick("Blog")}
            >
              Blog
            </TabsLI>
          </TabsUL>
        </TabsDiv>
      </ProfileDetailContainer>
    </div>
  );
};

export default Tabs;
