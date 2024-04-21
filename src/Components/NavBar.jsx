import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export const NavBar = () => {

    return (
        <Menu fixed='top' size='huge'>
            <Menu.Item as={Link} to="/">Home</Menu.Item>
            <Menu.Item as={Link} to="/rated">Rated</Menu.Item>
            
            <Menu.Menu position='right'>
                <Menu.Item as={Link} to="/auth">Auth</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}