import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import {fetchAny} from './datafacade.jsx'

export const FetchDataFromJsonServer = () => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([])

    const url = "http://localhost:4000/books";

    useEffect(() => {
      fetchAny(url,(inputdata)=>{
        setHeaders(Object.keys(inputdata[0]));
        setData(inputdata);
      },'GET')
    }, []);
    
   
    return(
    <>
      <h1>Fetch Data From Json Server Exercise</h1>
      <table>
        <tr key={uuid()}>
          {headers.map((header,index)=>{
            return <th key={index}>{header}</th>
          })}
        </tr>
        {data.map(data => {
          return <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.author}</td>
                    <td>{data.rating}</td>
                    <td>{data.year_published}</td>
                  </tr>
        })}
      </table>
    </>
    );
}