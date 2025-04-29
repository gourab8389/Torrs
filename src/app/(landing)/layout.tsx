interface LandingPageLayoutProps {
        children: React.ReactNode;
}

const LandingLayout = (
        { children } : LandingPageLayoutProps
) => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      {children}
    </div>
  )
}

export default LandingLayout
