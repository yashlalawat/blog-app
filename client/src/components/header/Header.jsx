import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;

    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
        transition: 0.3s;
    }

    & > a.active {
        color: #1976d2;
        font-weight: bold;
        border-bottom: 3px solid #1976d2;
    }
`;

const Header = () => {
    return (
        <Component>
            <Container>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    HOME
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    ABOUT
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    CONTACT
                </NavLink>

                <NavLink
                    to="/account"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    LOGOUT
                </NavLink>

            </Container>
        </Component>
    );
};

export default Header;