import React,{ useRef } from 'react'
import { Navbar, TextInput } from "flowbite-react";
import { api, api_key } from './../api/index';
import { useDispatch } from 'react-redux';
import { fetchmovies } from '../redux/action/movies';

const Header = () => {
  const dispatch = useDispatch();
  const movieName = useRef('');

  const getName = async ()=>{

    if(movieName.current.value !== ''){
      const res = await api.get(`search/movie?query=${movieName.current.value}&api_key=${api_key}`)
      dispatch(fetchmovies(res.data.results))

    }else{
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchmovies(res.data.results));
    }
  }
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Code-Lab Movies Channel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <form action="" className="flex items-center">
            <TextInput className='mr-1' ref={movieName}/>
            <button type='button' className="rounded-md bg-gray-900 text-white p-2" onClick={()=>{getName()}}>Search</button>
          </form>
        </div>
      </Navbar>
    </div>

  )
}

export default Header
