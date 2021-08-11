/* eslint-disable no-use-before-define */
import React ,{useState,useEffect} from 'react';

import Search from './Search.css'
import axios from 'axios';

const SearchComp= (props)=> {
    const {products, setProducts , showProduct,setShowProd} = props;
    

    const searchProd =(value) =>{
        console.log(value)
        var pro=[]
        pro=products.filter(products => products.name.includes(value))

        setShowProd(pro)
    }

return (
    <div style={{ width: 300 }} className="searchComp" >
    <p>
    <label className="searchComp" >Name</label><br />
    <input type="text" name="search" placeholder="Search.."
        onChange={(e) => { searchProd(e.target.value) }} />
</p>

    </div>
    );
}
export default SearchComp;
