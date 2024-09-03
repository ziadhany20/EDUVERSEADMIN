import React from 'react';

interface ContentProps {
    activeItem: string;
}

const Content: React.FC<ContentProps> = ({ activeItem }) => {
    if (activeItem === 'Teachers') {
        return <div>Teachers Content</div>;
    } else if (activeItem === 'Students') {
        return <div>Students Content</div>;
    } else if (activeItem === 'Groups') {
        return <div>Groups Content</div>;
    } else if (activeItem === 'Exams') {
        return <div>Exams Content</div>;
    } else if (activeItem === 'Scheduled Exams') {
        return <div>Scheduled Exams Content</div>;
    } else if (activeItem === 'Settings') {
        return <div>Settings Content</div>;
    } else if (activeItem === 'Logout') {
        return <div>Logout Content</div>;
    }
    return <div>Select an item to display its content</div>;
};

export default Content;
