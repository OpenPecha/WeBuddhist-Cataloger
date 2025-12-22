import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#FAFAFA] h-screen">
            <div className=" h-screen border-b-2 border-dashed border-edge w-full" />
            <div className="relative h-fit p-4 border-x-2 border-dashed border-edge">
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400" />
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-400" />
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400" />
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-400" />
                {children}
            </div>
            <div className=" h-screen border-t-2 border-dashed border-edge w-full" />
        </div>
    )
}

export default AuthLayout