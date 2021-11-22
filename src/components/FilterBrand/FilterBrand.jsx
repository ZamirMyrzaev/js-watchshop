import React, { useContext, useState } from 'react';
import { FormControlLabel, Grid, Paper, Radio, FormControl, RadioGroup, FormLabel, Slider, Box } from "@mui/material"
import { productContext } from '../../context/ProductContext';
import history from '../../helpers/history';
import './FilterBrand.css'



const FilterBrand = () => {
    const { getTopics } =  useContext(productContext)
    const [ brand, setBrand ] = useState(getBrands())



    function getBrands(){
        const search = new URLSearchParams(history.location.search)
         return search.get('brand')
    }

    function handleChangeBrands(e){
        if(e.target.value === 'all'){
            history.push(`${history.location.pathname.replace('brand')}`)
            getTopics()
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('brand', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getTopics(search.toString())
        setBrand(e.target.value)
    }

    return (
        <div className="filter_brand">
                  <Grid item md={4}>
                       <Paper className="grid" style={{backgroundColor: "#0F0F0F"}}>
                            <FormControl className="menu_dis" component="fieldset">
                                <FormLabel className="bg-dark text-light" component="legend">Brand</FormLabel>
                                    <RadioGroup  value={brand} onChange={handleChangeBrands} aria-label="memory" name="memory1">
                                        <FormControlLabel className="radio_input" value="Rolex" control={<Radio />} label="Rolex" />
                                        <FormControlLabel value="Patek Philippe" control={<Radio />} label="Patek Philippe" />
                                        <FormControlLabel value="Hublot" control={<Radio />} label="Hublot" />
                                        <FormControlLabel value="all" control={<Radio />} label="All" />
                                    </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
        </div>
    );
};

export default FilterBrand;