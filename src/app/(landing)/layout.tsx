interface LandingPageLayoutProps {
        children: React.ReactNode;
}

const LandingLayout = (
        { children } : LandingPageLayoutProps
) => {
  return (
    <div className="w-full scroll-smooth overflow-x-hidden">
      {children}
    </div>
  )
}

export default LandingLayout
