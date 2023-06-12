import React, { useState } from 'react';
import colors from 'tailwindcss/colors';

console.log(colors);

// Sample color list (Add all tailwind color classes for comprehensive search)
const tailwindColors = Object.keys(colors).reduce((array, color) => {
    const weights = Object.keys(colors[color])
    const newColours = weights.flatMap(weight => `text-${color}-${weight}`)
    return [
        ...array,
        ...newColours
    ]
}, []);

const trailwindTextColours = [
    'text-inherit',
'text-current',
'text-transparent',
'text-black',
'text-white',
'text-slate-50',
'text-slate-100',
'text-slate-200',
'text-slate-300',
'text-slate-400',
'text-slate-500',
'text-slate-600',
'text-slate-700',
'text-slate-800',
'text-slate-900',
'text-slate-950',
'text-gray-50',
'text-gray-100',
'text-gray-200',
'text-gray-300',
'text-gray-400',
'text-gray-500',
'text-gray-600',
'text-gray-700',
'text-gray-800',
'text-gray-900',
'text-gray-950',
'text-zinc-50',
'text-zinc-100',
'text-zinc-200',
'text-zinc-300',
'text-zinc-400',
'text-zinc-500',
'text-zinc-600',
'text-zinc-700',
'text-zinc-800',
'text-zinc-900',
'text-zinc-950',
'text-neutral-50',
'text-neutral-100',
'text-neutral-200',
'text-neutral-300',
'text-neutral-400',
'text-neutral-500',
'text-neutral-600',
'text-neutral-700',
'text-neutral-800',
'text-neutral-900',
'text-neutral-950',
'text-stone-50',
'text-stone-100',
'text-stone-200',
'text-stone-300',
'text-stone-400',
'text-stone-500',
'text-stone-600',
'text-stone-700',
'text-stone-800',
'text-stone-900',
'text-stone-950',
'text-red-50',
'text-red-100',
'text-red-200',
'text-red-300',
'text-red-400',
'text-red-500',
'text-red-600',
'text-red-700',
'text-red-800',
'text-red-900',
'text-red-950',
'text-orange-50',
'text-orange-100',
'text-orange-200',
'text-orange-300',
'text-orange-400',
'text-orange-500',
'text-orange-600',
'text-orange-700',
'text-orange-800',
'text-orange-900',
'text-orange-950',
'text-amber-50',
'text-amber-100',
'text-amber-200',
'text-amber-300',
'text-amber-400',
'text-amber-500',
'text-amber-600',
'text-amber-700',
'text-amber-800',
'text-amber-900',
'text-amber-950',
'text-yellow-50',
'text-yellow-100',
'text-yellow-200',
'text-yellow-300',
'text-yellow-400',
'text-yellow-500',
'text-yellow-600',
'text-yellow-700',
'text-yellow-800',
'text-yellow-900',
'text-yellow-950',
'text-lime-50',
'text-lime-100',
'text-lime-200',
'text-lime-300',
'text-lime-400',
'text-lime-500',
'text-lime-600',
'text-lime-700',
'text-lime-800',
'text-lime-900',
'text-lime-950',
'text-green-50',
'text-green-100',
'text-green-200',
'text-green-300',
'text-green-400',
'text-green-500',
'text-green-600',
'text-green-700',
'text-green-800',
'text-green-900',
'text-green-950',
'text-emerald-50',
'text-emerald-100',
'text-emerald-200',
'text-emerald-300',
'text-emerald-400',
'text-emerald-500',
'text-emerald-600',
'text-emerald-700',
'text-emerald-800',
'text-emerald-900',
'text-emerald-950',
'text-teal-50',
'text-teal-100',
'text-teal-200',
'text-teal-300',
'text-teal-400',
'text-teal-500',
'text-teal-600',
'text-teal-700',
'text-teal-800',
'text-teal-900',
'text-teal-950',
'text-cyan-50',
'text-cyan-100',
'text-cyan-200',
'text-cyan-300',
'text-cyan-400',
'text-cyan-500',
'text-cyan-600',
'text-cyan-700',
'text-cyan-800',
'text-cyan-900',
'text-cyan-950',
'text-sky-50',
'text-sky-100',
'text-sky-200',
'text-sky-300',
'text-sky-400',
'text-sky-500',
'text-sky-600',
'text-sky-700',
'text-sky-800',
'text-sky-900',
'text-sky-950',
'text-blue-50',
'text-blue-100',
'text-blue-200',
'text-blue-300',
'text-blue-400',
'text-blue-500',
'text-blue-600',
'text-blue-700',
'text-blue-800',
'text-blue-900',
'text-blue-950',
'text-indigo-50',
'text-indigo-100',
'text-indigo-200',
'text-indigo-300',
'text-indigo-400',
'text-indigo-500',
'text-indigo-600',
'text-indigo-700',
'text-indigo-800',
'text-indigo-900',
'text-indigo-950',
'text-violet-50',
'text-violet-100',
'text-violet-200',
'text-violet-300',
'text-violet-400',
'text-violet-500',
'text-violet-600',
'text-violet-700',
'text-violet-800',
'text-violet-900',
'text-violet-950',
'text-purple-50',
'text-purple-100',
'text-purple-200',
'text-purple-300',
'text-purple-400',
'text-purple-500',
'text-purple-600',
'text-purple-700',
'text-purple-800',
'text-purple-900',
'text-purple-950',
'text-fuchsia-50',
'text-fuchsia-100',
'text-fuchsia-200',
'text-fuchsia-300',
'text-fuchsia-400',
'text-fuchsia-500',
'text-fuchsia-600',
'text-fuchsia-700',
'text-fuchsia-800',
'text-fuchsia-900',
'text-fuchsia-950',
'text-pink-50',
'text-pink-100',
'text-pink-200',
'text-pink-300',
'text-pink-400',
'text-pink-500',
'text-pink-600',
'text-pink-700',
'text-pink-800',
'text-pink-900',
'text-pink-950',
'text-rose-50',
'text-rose-100',
'text-rose-200',
'text-rose-300',
'text-rose-400',
'text-rose-500',
'text-rose-600',
'text-rose-700',
'text-rose-800',
'text-rose-900',
'text-rose-950',
]

function TailwindColours() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedColor, setCopiedColor] = useState("");

  const handleColorClick = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
  };

  const filteredColors = trailwindTextColours.filter((color) =>
    color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-1">
        <div>
          <input
            type="text"
            placeholder="Search colors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 text-gray-700 border rounded-md focus:outline-none w-full"
          />
        </div>
        <div className="mt-3">
          {filteredColors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorClick(color)}
              className="py-2 px-3 my-1 cursor-pointer hover:bg-gray-200 rounded"
            >
              <div className={color}>{color}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-green-500">
          {copiedColor && `Copied ${copiedColor} to clipboard`}
        </div>
      </div>
    </div>
  );
}

export default TailwindColours;
