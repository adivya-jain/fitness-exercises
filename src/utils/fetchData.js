export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    // 'X-RapidAPI-Key': '16d9ddaademsh9b66f96a5d4e806p1aa8c1jsn2abe0156d95b'
  },
};


export const fetchData = async(url,options)=>{

    const response =await fetch(url,options);
    const data=await response.json();
    return data;
}