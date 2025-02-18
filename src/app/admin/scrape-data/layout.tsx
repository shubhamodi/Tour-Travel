import { Sidebar } from "@/components/admin/sidebar"

const AdminLayout=({children}:{children:React.ReactNode})=>{
    return (
        <section className="bg-[#f5f5fe] flex">
            <Sidebar/>
            <section className="flex-1 flex flex-col">
                <div className="h-48 bg-[#6b024a] text-white flex justify-center flex-col px-10 gap-3">
                    <h1 className="text-5xl font-bold">Scrape Data</h1>
                    <p>The ScrApiNg engine is powered by me </p>
                </div>
                {children}
            </section>
        </section>
    )
}

export default AdminLayout;