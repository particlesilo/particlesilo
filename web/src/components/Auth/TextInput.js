import React from 'react'; 

export const TextInput = ({name, type, value, setValue}) => {
    return(
        <div className="w-1/3 mb-2">
                    <div className="flex justify-center">
                        <input type={type} placeholder={name} value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" />
                    </div>
        </div>
    ); 
}