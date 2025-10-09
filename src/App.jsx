import Home from './pages/Home';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


export default function XaidorWebsite() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once = only animate on first load
  }, []);
  return <Home />
}