import React, {useState, useEffect} from 'react';

export const Fetchapi = () => {
    const [data, setData] = useState([]);

    function handleHttpErrors(res){
        if(!res.ok){
          return Promise.reject({status: res.status, fullError: res.json() })
        }
        return res.json();
    }
    

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/albums";
        fetch(url)
        .then(handleHttpErrors).then(inputData=>{
           setData(inputData);
        })
      },[]);


    return (
        <table>
        <tbody>
          {data.map(x => 
            <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.title}</td>
              
            </tr>  
          )}
        </tbody>
      </table>    
    );
}