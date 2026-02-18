"use client"

import Protected from "@/components/Protected/Protected"
import {PropsWithChildren} from "react"


export default function Layout({children}: PropsWithChildren) {
    return <Protected>{children}</Protected>
}
