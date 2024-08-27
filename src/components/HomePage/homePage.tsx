import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainAppBar from "./MainAppBar";
import SideBar from "./SideBar/SideBar";
import {useEffect, useState} from 'react';
import MainPost from "./DiscussionsAndPosts/MainPost";


export type CategoryState = {
    [key: string]: {
        [key: string]: boolean;
    };
};
const myCategories = {
    tech: {
        facebook: false,
        google: false,
        tesla: false,
        microsoft: false,
        apple: false,
        tmp:false
    },
    sport: {
        football: false,
        basketball: false,
        tennis: false,
        volleyball: false,
    },
    food: {
        pizza: false,
        hamburger: false,
        shawarma: false,
        coffee: false,
    }
};


function HomePage() {
    const [objectCategory, setObjectCategory] = useState<CategoryState>(myCategories);

    const toggleCategory = (category:string, subcategory:string) => {
        setObjectCategory(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [subcategory]: !prevState[category][subcategory],
            }
        }));
    };

    const [PositiveNegativeSelected, setPositiveNegativeSelected]
        = React.useState([false, false, false]);
    const changePositiveNegativeSelected = (index: number) => {
        const newChecked = [...PositiveNegativeSelected];
        newChecked[index] = !newChecked[index];
        setPositiveNegativeSelected(newChecked);
    }

    useEffect(() => {
        console.log(objectCategory);
    }, [objectCategory]);

    useEffect(() => {
        console.log(PositiveNegativeSelected)
    }, [PositiveNegativeSelected]);
    return(
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <MainAppBar />
                <SideBar objectCategory={objectCategory}
                         toggleCategory={toggleCategory}
                         PositiveNegativeSelectedArray={PositiveNegativeSelected}
                         changePositiveNegativeSelected={changePositiveNegativeSelected}
                />
                <Box >
                    <MainPost selectedCategories={objectCategory}
                              PositiveNegativeSelectedArray={PositiveNegativeSelected}
                    />
                </Box>
            </Box>
        </>
    );
}
export default HomePage;