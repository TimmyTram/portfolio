interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col items-center min-h-screen mb-10">
            <div className="flex flex-col w-[80%] gap-4 bg-royal-blue-opacity border-6 rounded-xl border-royal-gold-solid p-10 mt-10 mb-10">
                {children}
            </div>
        </div>
    );
}

export default Layout;