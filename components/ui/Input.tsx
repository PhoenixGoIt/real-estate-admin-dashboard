"use client"
import { cn } from '@/lib/utils';
import React from 'react';

interface SearchItem {
    title: string,
    width?: string,
    type?: string,
    id?: string,
    required?: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input: React.FC<SearchItem> = ({ title, width, type, id, required, value, onChange }) => {
    return (
        <div className="w-full relative flex-grow block lg:block">
            <input
                required={required}
                id={id}
                type={type || 'text'}
                placeholder={title}
                value={value}
                onChange={onChange} // добавляем обработчик изменений
                className={cn(
                    width ? `pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none w-${width}`
                        : `w-full pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none`
                )}
            />
        </div>
    );
}
