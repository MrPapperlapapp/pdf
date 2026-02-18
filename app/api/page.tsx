'use client';

import {useSelector} from "react-redux";
import {RootState} from "@/store";

export default function ApiPage() {
    const {user} = useSelector(
        (state: RootState) => state.auth
    )
    return (
        <div>
            {user?.email}
        </div>
    );
}
