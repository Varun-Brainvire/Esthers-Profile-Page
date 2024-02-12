import React, { useState } from "react";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";
import { TabsDiv, TabsLI, TabsUL } from "./Tabs.styles";
import { useRouter } from "next/router";

const Tabs = () => {
  const [toggleTabs, setToggleTabs] = useState("Feed");
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
              onClick={() => {
                onTabsClick("Feed");
                router.push("/oliver");
              }}
            >
              Feed
            </TabsLI>
            <TabsLI
              isActive={toggleTabs == "Shop"}
              onClick={() => {
                onTabsClick("Shop");
                router.push("/oliver/shop");
              }}
            >
              Shop
            </TabsLI>
            <TabsLI
              isActive={toggleTabs == "Styleboards"}
              onClick={() => {
                onTabsClick("Styleboards");
                router.push("/oliver/styleboards");
              }}
            >
              Styleboards
            </TabsLI>
            <TabsLI
              isActive={toggleTabs == "Blog"}
              onClick={() => {
                onTabsClick("Blog");
                router.push("/oliver/blog");
              }}
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
