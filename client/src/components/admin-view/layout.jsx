import { Outlet } from "react-router-dom"
import AdminHeader from "./header"
import AdminSlideBar from "./slidebar"
import { useState } from "react"

function AdminLayout() {

    const [openSidebar,setOpenSidebar]= useState(false)
    return(
<div className="flex min-h-screen w-full">

   
<AdminSlideBar open={openSidebar} setOpen={setOpenSidebar}/>
<div className="flex w-full flex-1 flex-col">

<AdminHeader setOpen={setOpenSidebar}/>
    <main className="flex-1 flex bg-muted/40 p-4 md:p-6 flex-col">
        <Outlet/>
    </main>
</div>

</div>
    )
}
export default AdminLayout