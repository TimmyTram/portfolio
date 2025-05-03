interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="w-[80%]">
            {children}
            </div>
        </div>
    );
}

export default Layout;