import React from 'react';
import Link from 'next/link';

const Footer = () => (
    <footer className="bg-gray-200 p-4 text-center">
        <p className="m-0">만든이 : 
            <Link className="text-blue-700" href="https://github.com/Kim-Geonwoo"> 김건우</Link>
        </p>
    </footer>
);

export default Footer;