import React from "react";

export default function DropdownComponent() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="shadow appearance-none rounded w-full py-2 px-1 text-black mb-3">
                <option>choose</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
    );
}