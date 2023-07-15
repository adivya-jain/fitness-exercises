export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c84b22bdamsh875e9c255bbccc5p1b5e51jsn4d51ffc53959',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url,options)=>{

    const response =await fetch(url,options);
    const data=await response.json();
    return data;
}