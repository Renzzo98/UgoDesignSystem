import "./ComponentPage.css";

import { FC } from 'react';
import { componentPage } from "../../constants";
import SideNavLayout from "../../layout/SideNavLayout/SideNavLayout";
import ComponentContent from "../ComponentContent/ComponentContent";



interface ComponentPageProps {}

const ComponentPage: FC<ComponentPageProps> = () => {

    return (
        <div>
            <SideNavLayout navItems={componentPage.navList} childComponent={<ComponentContent />}/>
        </div>
    )
}

export default ComponentPage;