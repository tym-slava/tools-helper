"use client"

import Link from "next/link";
import { Menu, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { useState } from "react";


interface Item {
  name?: string;
}

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const handleItemClick = (e: React.MouseEvent, { name }: Item) => setActiveItem(name || '');
  

  return (
    <header>
      <Segment inverted style={{ borderRadius: '0' }}>
        <Menu
          inverted
          pointing
          secondary
        >  
          <Menu.Item
            color="blue"
            as={Link}
            href="/"
            name="home"
            active={activeItem === "home"}
            onClick={(e, data) => handleItemClick(e, data)}
          />
            
          <Menu.Item
            color="green"
            as={Link}
            href="/notes"
            name="notes"
            active={activeItem === "notes"}
            onClick={(e, data) => handleItemClick(e, data)}
          />            
            
          <Menu.Item
            color="violet"
            as={Link}
            href="/tasks"
            name="tasks"
            active={activeItem === "tasks"}
            onClick={(e, data) => handleItemClick(e, data)}
          />
        </Menu>
      </Segment>
    </header>
  );
};
export default Header;
