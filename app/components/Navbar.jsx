"use client"

import './navbar.css'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/images/logo.png';


export default function Navbar() {
    const items = [

        {
            label: 'Song Catalog', icon: 'pi pi-fw pi-user', url: 'Songs'
        },
        {
            label: 'Favorites',
            icon: 'pi pi-fw pi-star',
            url: 'Favorites'
        },
        {
            label: 'User', icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-fw pi-cog',
                    url: 'Profile'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    url: 'Settings'
                }
            ]
        }

    ]

    const start = <Link href="/">
        <Image alt="scaryoke-logo" src={Logo} width="40" className="mr-2" />
    </Link>;
    const end = (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
        </span>
    );

    return (
        <Menubar model={items} start={start} end={end} />
    )
} 