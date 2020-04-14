import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import SignPage from './components/SignPage';
import NavBar from './components/NavBar'
import Modal from './components/Modal'
import SideNav from './components/SideNav'
import { Route, Switch } from "react-router-dom";
import {setUser} from './reducers/User/actions'
import {UserState} from './reducers/User/types'
import "./App.css"

const App = () => {

  // const [userLogged, setUserLogged] = useState(false)
  const selectUserLogged = (state: UserState) => state.userLogged
  const isLogged = useSelector(selectUserLogged)
  const dispatch = useDispatch()



  useEffect(()=>{
    if(localStorage.token){
      // TODO
      // send token to the backend and populate and populate User State
      // mimics successful Get User request
      dispatch(setUser({username: "Alex", id: "1", token: "Avocado"}))
    }
  }, [dispatch])

  return (
    <React.Fragment>
      {isLogged ? (
        <>
          <NavBar />
          <Switch>
            <Route exact path="/modal" component={Modal} />
            <Route exact path="/sidenav" component={SideNav} />
          </Switch>
        </>
      
      ) : <SignPage/>} 
    </React.Fragment>
  );
}


export default App;
