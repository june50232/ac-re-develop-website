import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Logo } from '../'

export default function Footer() {
  return (
    <footer 
        className={`
            w-full 
            flex-row
            border-gray-200 
            border-t-2 
            flex 
            items-center
            place-content-between
            px-12
            py-14
            gap-x-2
            bg-slate-100
        `}>
        <div
            className="flex flex-col flex-1"
        >   
            <h2>AC Re Services Co., Ltd.</h2>
            <p>Adress: 9F.-5, No. 63, Sec. 2, Chang'an East Rd., Taipei 104097, Taiwan</p>
            <p>Fax: 9F.-5, No. 63, Sec. 2, Chang'an East Rd., Taipei 104097, Taiwan</p>
        </div> 
        <div
            className="flex flex-1 justify-center"
        >    
        <Logo/>
        </div> 
        <ul
            className="flex flex-1 justify-end space-x-4"
        >
            <li className="flex items-center place-content-between space-x-2">
                <Image
                    src="/img/email-icon.svg"
                    width={36}
                    height={36}
                />
                <p>
                info@ac-re.com.tw
                </p>
                <a hidden href="https://www.flaticon.com/free-icons/telephone" title="telephone icons">Telephone icons created by DinosoftLabs - Flaticon</a>
            </li>
            <li className="flex items-center place-content-between space-x-2">
                <Image
                    src="/img/telephone-icon.svg"
                    width={28}
                    height={28}
                    style={{
                        marginBottom: '3px'
                    }}
                />
                <p>
                +886-2-2508-0488
                </p>
                <a hidden href="https://www.flaticon.com/free-icons/telephone" title="telephone icons">Telephone icons created by DinosoftLabs - Flaticon</a>
            </li>
        </ul>
    </footer>
  );
}
