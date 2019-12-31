import back from './IMGs/back.png';
import vIcon from './IMGs/business-and-finance.png';

 // Add shortcut icon dynamically and inject head background style
  const icon = () => {
    const topBack = document.querySelector('.top');
    topBack.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${back})`;
    const shortcut = document.createElement('link');
    shortcut.href = vIcon;
    shortcut.rel = 'shortcut icon';
    shortcut.type = 'image/x-icon';
    document.head.appendChild(shortcut)
};
  
export default icon