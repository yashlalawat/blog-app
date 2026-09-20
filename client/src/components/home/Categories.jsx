import {
    Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    styled
} from '@mui/material';

import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;

    &:hover {
        background: #4169E1;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const ActiveLink = styled(Link)`
    text-decoration: none;
    color: #1976d2;
    font-weight: bold;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();

    // Get currently selected category
    const selectedCategory = searchParams.get('category');

    return (
        <>
            <Link
                to={`/create?category=${selectedCategory || ''}`}
                style={{ textDecoration: 'none' }}
            >
                <StyledButton variant="contained">
                    Create Blog
                </StyledButton>
            </Link>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            {selectedCategory ? (
                                <StyledLink to="/">
                                    All Categories
                                </StyledLink>
                            ) : (
                                <ActiveLink to="/">
                                    All Categories
                                </ActiveLink>
                            )}
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {categories.map(category => {

                        const isActive =
                            selectedCategory === category.type;

                        return (
                            <TableRow key={category.id}>
                                <TableCell>
                                    {isActive ? (
                                        <ActiveLink
                                            to={`/?category=${category.type}`}
                                        >
                                            {category.type}
                                        </ActiveLink>
                                    ) : (
                                        <StyledLink
                                            to={`/?category=${category.type}`}
                                        >
                                            {category.type}
                                        </StyledLink>
                                    )}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </StyledTable>
        </>
    );
};

export default Categories;