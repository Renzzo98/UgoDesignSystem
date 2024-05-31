import "./ComponentPage.css";

import { FC } from 'react';
import { componentPage } from "../../../models/constants";
import SideNavLayout from "../../../layouts/ugo-side-nav/ugo-side-nav";
import ComponentContent from "../../contents/ComponentContent/ComponentContent";



interface ComponentPageProps {}

const ComponentPage: FC<ComponentPageProps> = () => {

    return (
        <div>
            <SideNavLayout navItems={componentPage.navList} childComponent={<ComponentContent />}/>
        </div>
    )
}

export default ComponentPage;