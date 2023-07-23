import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
// import { Pagination } from '@mui/material/Pagination' 
import { Box } from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'

const ExerciseDetail=()=>{
  const [exerciseDetail,setExerciseDetail]=useState({});
  const {id}=useParams();

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl ='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData =await fetchData(`${exerciseDbUrl}/exercises/exercises/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }
  })
}








const ExerciseDetails = () => {
  return (
    <Box>
      <Detail ExerciseDetail={ExerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/>
      
    </Box>
  )
}

export default ExerciseDetails
