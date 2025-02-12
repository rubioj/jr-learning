import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

export const ResponsiveRouter = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isMobile = width < 600;
    const currentPath = location.pathname;

    // Skip if we're already on the correct version
    if (currentPath.includes(isMobile ? '-mobile' : '-desktop')) {
      return;
    }

    // Map of desktop routes to mobile routes
    const routeMap = {
      '/': isMobile ? '/home-mobile' : '/home-desktop',
      '/home-desktop': '/home-mobile',
      '/home-mobile': '/home-desktop',
      '/about-desktop': '/about-mobile',
      '/about-mobile': '/about-desktop',
      '/services-desktop': '/services-mobile',
      '/services-mobile': '/services-desktop',
      '/publications': isMobile ? '/publications-mobile' : '/publications-desktop',
      '/publications-desktop': '/publications-mobile',
      '/publications-mobile': '/publications-desktop',
      '/menu': '/menu-mobile',  // Always route to mobile menu
      '/menu-mobile': '/menu-mobile'  // Stay on mobile menu
    };

    // Get the base route without -mobile or -desktop
    const baseRoute = currentPath.replace(/-mobile|-desktop/g, '');
    
    // Determine the target route
    let targetRoute;
    if (baseRoute === '/menu') {
      targetRoute = '/menu-mobile'; // Always use mobile menu
    } else {
      targetRoute = isMobile ? 
        baseRoute + '-mobile' : 
        baseRoute + '-desktop';
    }

    // Navigate to the appropriate route
    navigate(targetRoute);
  }, [width, location.pathname, navigate]);

  return null;
};
