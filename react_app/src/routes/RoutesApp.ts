import Home from "../pages/Home"
import { RouteAppObject } from "../interfaces/RouteAppObject.intf"
import Error from "../pages/Error"
import SignIn from "../pages/SignIn"
import Profile from "../pages/Profile"

const routeList: RouteAppObject[] = [
  { 
    path: '/', 
    name: 'home',
    label: 'Home',
    authRequired: false,
    Component: Home,    
  },
  { 
    path: '/sign-in', 
    name: 'signin',
    label: 'Sign In',
    Component: SignIn,
    authRequired: false
  },
  { 
    path: '/profile', 
    name: 'profile',
    Component: Profile,
    authRequired: true
  },
  {
    path: '*', 
    name: 'Error',
    Component: Error,
    authRequired: false
  }
]

const getRouteByName = (name: string):RouteAppObject | undefined => {
  return routeList.find(route => route.name === name)
}

const getRouteByPathName = (pathname: string):RouteAppObject | undefined => {
  return routeList.find(route => route.path === pathname)
}

const RoutesApp = {
  routeList,
  getRouteByName,
  getRouteByPathName
}

export default RoutesApp