/** @format */

import { Navigate, useLocation } from "react-router-dom";


function CheckAuth({  isAuthenticated , user , children }) {

  const location = useLocation();
  console.log(isAuthenticated, user);
  

  if(location.pathname === '/'){
    if(!isAuthenticated){
      return <Navigate to='/auth/login'/>;
    }else{
      if (user?.role === 'admin') {
        return <Navigate to='/admin/dashboard'/>;
      } else {
        return <Navigate to='/shop/home' />;
      }
    }
  }
 

  if (!isAuthenticated &&
    !(
      location.pathname.includes('/login') ||
      location.pathname.includes('/register')
    )
  ) {
    return <Navigate to='/auth/login'/>;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes('/login') ||
      location.pathname.includes('/register'))
  ){
    if (user?.role === 'admin') {
      return <Navigate to='/admin/dashboard'/>;
    } else {
      return <Navigate to='/shop/home' />;
    }
}
  if (
    isAuthenticated &&
    user?.role !== 'admin' &&
    location.pathname.includes('admin')
  ) {
    return <Navigate to='/unauth-page' />;
  }
  if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')){
    return <Navigate to='/admin/dashboard'/>
  }
  return<>{children}</>
}
export default CheckAuth;


// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   // If not authenticated and not on login/register pages, redirect to login page
//   if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
//     return <Navigate to='/auth/login' />;
//   }
 

//   // If authenticated and trying to access login/register, redirect based on role
//   if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
//     if (user?.role === 'admin') {
//       return <Navigate to='/admin/dashboard' />;
//     } else {
//       return <Navigate to='/shop/home' />;
//     }
//   }

//   // If authenticated but trying to access admin routes as a non-admin, redirect to unauthorized page
//   if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
//     return <Navigate to='/unauth-page' />;
//   }

//   // If authenticated and admin but trying to access shop routes, redirect to admin dashboard
//   if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
//     return <Navigate to='/admin/dashboard' />;
//   }

//   // Otherwise, render children (this page is accessible)
//   return <>{children}</>;
// }

// export default CheckAuth;
