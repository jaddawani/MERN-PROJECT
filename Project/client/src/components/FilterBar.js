import { ButtonGroup } from '@material-ui/core';
import Button from "./Button"

export const FilterBar = (props) => {
    const {products,setProducts,showProduct, setShowproduct} =props
    const catagorys =["puzzle","العاب خشبية", "أثاث", "طاولات","ألواح", "زينة ميلاد"];
    
    const Filter=(catagory)=>{
        console.log("@@@@@@@@")
        if (catagory==="all product")
        {
            setShowproduct(products)
        }
        else{
        var pro=[]
        pro=products.filter(product => product.category === catagory)
        setShowproduct(pro)}
    }
    const hi=()=>{console.log("hi")}
    return (
        <div>
            <Button onclickHandler={hi()}  text={"hi"}/>
            <button  type="button" onClick={() => Filter("all product")}>All product</button>
            {
        catagorys.map( (item, i) => 
        <Button onclickHandler={() => Filter(item)}  text={item}/>
        

        )}
        
        </div>
    )
}
