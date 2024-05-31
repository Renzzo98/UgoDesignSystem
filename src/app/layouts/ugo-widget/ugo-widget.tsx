import "./ugo-widget.css";

import { FC } from 'react';
import { useGlobalState } from "../../../GlobalStateProvider";

interface UgoWidgetProps {
    navItems: string[];
    header?: string;
    childComponent?: React.ReactNode;
}

const UgoWidget: FC<UgoWidgetProps> = ({ header, navItems, childComponent }) => {

    const { isMobile } = useGlobalState();
    
    return (
        <div className="ugo-widget-container">
            
        </div>
    )
}

export default UgoWidget;