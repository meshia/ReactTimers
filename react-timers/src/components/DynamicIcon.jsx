import { useState, useEffect } from "react";

const DynamicIcon = ({iconName}) => {
    const [Icon, setIcon] = useState(null);
    
    useEffect(()=> {
        import(`@mui/icons-material/${iconName}`).then((module)=>{
            const { default: Icon } = module;
            setIcon(Icon);
        })
    }, [iconName]);

    if (!Icon) {
        return null;
    }

    return <Icon />;
}

export default DynamicIcon;