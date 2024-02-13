import React, { useState } from 'react'
import axios from 'axios'

const useCrud = (urlBase) => {

    const [apiData, setApiData] = useState()

    const getApi = (path) =>{
        axios.get(`${urlBase}${path}`)
        .then(res => setApiData(res.data))
        .catch(err => console.log(err))
    }

    const postApi = (path, data) =>{
      axios.post(`${urlBase}${path}/`, data)
      .then(res=>setApiData([...apiData, res.data]))
      .catch(err=> console.log(err))
    }

    const deleteApi = (path, id) =>{
      axios.delete(`${urlBase}${path}/${id}`)
      .then(res=> setApiData(apiData.filter(element => element.id !== id)))
      .catch(err => console.log(err))
    }

    const updateApi = (path, id, data) =>{
      axios.patch(`${urlBase}${path}/${id}/`, data)
      .then(res => setApiData(apiData.map(element => element.id===id? res.data:element)))
    }

  return [apiData, getApi, postApi, deleteApi, updateApi]
}

export default useCrud