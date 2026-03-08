"use client"

import * as React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@base-ui/react"
import { CiMenuBurger } from "react-icons/ci";



export function Menu() {

  return (
    <Drawer direction="right"  >
      <DrawerTrigger asChild>
        <Button> <CiMenuBurger size={24} /> </Button>
      </DrawerTrigger>
      <DrawerContent className="">
        <div className="mx-auto p-10 ">
          <ul className="flex flex-col gap-y-3 justify-center items-center" >
            <li className="text-black text-base uppercase border-b-2 w-full text-center" >Home</li>
            <li className="text-black text-base uppercase border-b-2 w-full text-center" >About</li>
            <li className="text-black text-base uppercase border-b-2 w-full text-center" >Services</li>
            <li className="text-black text-base uppercase border-b-2 w-full text-center" >News</li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
