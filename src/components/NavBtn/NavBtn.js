import { useState} from 'react';
function NavBtn() {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
        document.querySelector('.sidebar').classList.toggle('openSidebar')

    };
  return (
    <button className={isActive ? 'btnActive btn navBtn': 'btn navBtn'}  
    onClick={toggleClass} >
      <div class="bar1 bg-light"></div>
      <div class="bar2 bg-light"></div>
      <div class="bar3 bg-light"></div>
    </button>
  );
}

export default NavBtn;
