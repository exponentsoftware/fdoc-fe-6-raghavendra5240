import React, { useState, useEffect } from "react";
import {BrowserRouter,Route,Switch } from "react-router-dom"
import "./App.css";
import Albums from "./components/Albums";
import AddAlbum from './components/AddAlbum'
import Navbar from './components/Navigation'
import Songs from './components/Songs'
import Library from './components/Library' 
import PlaylistDetails from './components/PlaylistDetails' 
import AddPlaylist from './components/AddPlaylist'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { ProtectedRoute } from "./components/protected.route";

function App() {
  
  const [albums, setAlbums] = useState([
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: [{
        song_name: "e nadan parinde",
        vide_count:120,
        duration :"1 min",
      },
      {
        song_name: "hawa hawa",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "sada haq",
        vide_count:100,
        duration :"6 min",
      }],
    },
    {
      id: 2,
      artist: "Jubin Nautial",
      album_title: "JukeBox",
      album_cover:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
      songs: [{
        song_name: "meri ashiqi",
        vide_count:120,
        duration :"1 min",
      },
      {
        song_name: "akh lad jave",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "humnava",
        vide_count:100,
        duration :"6 min",
      }],
    },
    {
      id: 3,
      artist: "Arijit Singh",
      album_title: "Love song",
      album_cover:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      songs: [{
        song_name: "Humdard",
        vide_count:200,
        duration :"5 min",
      },
      {
        song_name: "Naina",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "Dekh Lena",
        vide_count:100,
        duration :"6 min",
      }
        ],
    },
    {
      id: 4,
      artist: "Atif Aslam",
      album_title: "Hits Of Atif",
      album_cover:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      songs: [{
        song_name: "be intha",
        vide_count:120,
        duration :"1 min",
      },
      {
        song_name: "doorie",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "kuch is trah",
        vide_count:100,
        duration :"6 min",
      }],
    },
    {
      id: 5,
      artist: "Atif Aslam",
      album_title: "Hits Of Atif",
      album_cover:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      songs: [{
        song_name: "be intha",
        vide_count:120,
        duration :"1 min",
      },
      {
        song_name: "doorie",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "kuch is trah",
        vide_count:100,
        duration :"6 min",
      }],
    },
    {
      id: 6,
      artist: "Arijit Singh",
      album_title: "Love song",
      album_cover:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      songs: [{
        song_name: "Humdard",
        vide_count:200,
        duration :"5 min",
      },
      {
        song_name: "Naina",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "Dekh Lena",
        vide_count:100,
        duration :"6 min",
      }],
    },
    {
      id: 7,
      artist: "Jubin Nautial",
      album_title: "JukeBox",
      album_cover:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
      songs: [{
        song_name: "meri ashiqi",
        vide_count:120,
        duration :"1 min",
      },
      {
        song_name: "akh lad jave",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "humnava",
        vide_count:100,
        duration :"6 min",
      }],
    },
    {
      id: 8,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: [{
        song_name: "e nadan parinde",
        vide_count:120,
        duration :"1 min",
      },
      {
        song_name: "hawa hawa",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "sada haq",
        vide_count:100,
        duration :"6 min",
      }],
    },
  ]);

const [playlists,setPlaylists]=useState([
  {
id:1,
name:"Playlist#1",
songs:[{
        song_name: "e nadan parinde",
        vide_count:120,
        duration :"1 min",
      },
      {
        song_name: "hawa hawa",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "sada haq",
        vide_count:100,
        duration :"6 min",
      }

]
  },
  {
id:2,
name:"Playlist#2",
songs:[{
        song_name: "Humdard",
        vide_count:200,
        duration :"5 min",
      },
      {
        song_name: "Naina",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "Dekh Lena",
        vide_count:100,
        duration :"6 min",
      }

]
  },
   {
id:3,
name:"Playlist#3",
songs:[{
        song_name: "Humdard",
        vide_count:200,
        duration :"5 min",
      },
      {
        song_name: "Naina",
        vide_count:20,
        duration :"4 min",
      },
      {
        song_name: "Dekh Lena",
        vide_count:100,
        duration :"6 min",
      }

]
  }

])

const [signup,setSignup]=[{
  id:1,
  name:'Raghavendra',
  email:'raghu@gmail.com',
  password:123456789
},
{
  id:1,
  name:'Raghavendra',
  email:'raghu@gmail.com',
  password:123456789
}]
useEffect(() => {
    setAlbums(albums);
  }, [albums]);


const [isAuth,setIsAuth]=useState(false)
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar  />
        <br/> <br/> 
    <Switch>
      <Route path="/albums/:id" component={Songs} /> 
      <Route exact path="/albums">  <Albums data={albums}  setAlbums={setAlbums} /></Route>
      <Route path="/addalbums"> <AddAlbum  setAlbums={setAlbums} data={albums} /></Route>
      <Route path="/playlist/:name"  component={PlaylistDetails}/>  
      
       <Route path="/addplaylist"> <AddPlaylist playlists={playlists}  setPlaylists={ setPlaylists}  /></Route>
      <Route path="/signin"> <Signin setIsAuth={setIsAuth}/></Route>
      <Route path="/signup"> <Signup signup={signup} setSignup={setSignup} /></Route>
      <ProtectedRoute exact path="/library" component={Library}  isAuth={isAuth}/>
</Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;