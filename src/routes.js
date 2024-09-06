import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"

export const ROUTES = [
    {
        route: '/',
        element: DashboardLayout,
        exact: true,
        Children:[{
            route: '/Home',
            element: Dashboard,
            exact: true
        }]
    },
    
]