import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}

// This layout format will display in every page under the dashboard pathway. It's a persistent navbar. 
// I can use this concept to add navbars, headers or/and footers later on for specific routes. 
// Maybe I can also add the redux authorization routes to conditionally render the specific navbars/footers?