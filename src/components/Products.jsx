import React from "react";
// import { CartContext } from "../context/CartContext";
// import { useContext } from "react";
const Products = () => {

  // const[incCart]= useContext(CartContext)
  // const[cart] = useContext(CartContext)
  const [page,setPage]=React.useState(1)
  const [input,setInput] = React.useState("");
  const [data,setSetdata] = React.useState([]);
  const [loding,setLoding] = React.useState(false);
  const [error,setError] = React.useState(false);
  const [npage,setNpage] =React.useState(0);
  
  const getitem =()=>{
  
     setLoding(true);
     
     fetch(`http://localhost:8080/products`) 
     
  .then((res)=>res.json())
      .then((res)=>{
          // console.log(res.headers["x-total-count"])
          // let total = ;
          // setNpage(res.headers.get('X-Total-Count'))
          setSetdata(res)
          setLoding(false)
          
  
      })
      .catch((err)=>{
  
          setError(true)
          setLoding(false)
          setSetdata([])
      })
  }
  React.useEffect(()=>{
  
      getitem()
  
  },[page])



  return <div>
    
      <h1><p>{page}</p></h1>
    {


    
     data.map((e)=>(

      <div key={e.id}  >
          
          <b>{e.name}</b>
          <br />
          <b>{e.description}</b>
          <hr />
          <button onClick={()=>{setPage(page+1)}}>add</button>
            
           </div>
      
          ))}
          
          <div>
        
        <button disabled={page===1} onClick={()=>{setPage(page-1)}} >prev{page}</button>
        <button disabled={page===7} onClick={()=>{setPage(page+1)}}>next</button>
        
        </div>

    </div>;
};

export default Products;
