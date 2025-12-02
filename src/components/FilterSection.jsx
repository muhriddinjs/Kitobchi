import React from 'react'

function FilterSection({ title, children, defaultOpen = true }) {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left"
            >
                <h3 className="font-semibold text-gray-800">{title}</h3>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && <div className="mt-3">{children}</div>}
        </div>
    )
}

export default FilterSection