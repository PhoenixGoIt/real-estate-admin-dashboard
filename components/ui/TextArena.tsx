"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface SearchItem {
    title: string,
    width?: string,
    type?: string,
    id?: string,
    required?: boolean,
    value?: string,
    maxLength?: number,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export const TextArea: React.FC<SearchItem> = ({ title, width, id, required, value, onChange, maxLength = 1000 }) => {
    const [wordCount, setWordCount] = useState(value?.length || 0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setWordCount(text.length);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className="w-full relative flex-grow block lg:block">
            <textarea
                required={required}
                id={id}
                placeholder={title}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                className={cn(
                    width ? `pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none w-${width}`
                        : `w-full pl-5 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none resize-none`
                )}
                rows={4}
            />
            <div className="text-gray-500 text-sm absolute right-4 bottom-2">
                {`${wordCount}/${maxLength}`}
            </div>
        </div>
    );
};
