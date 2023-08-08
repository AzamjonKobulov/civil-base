export default function Pinned({ item }) {
  return (
    <div className="h-14 flex items-center">
      <div
        className={`${item.bgColor} h-full rounded-l-md w-16 grid place-content-center`}
      >
        <item.icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 h-full justify-between flex items-center border-y border-r rounded-r-md pl-4 pr-2">
        <div>
          <h5 className="font-medium">{item.label}</h5>
          <div className="flex items-center space-x-1 text-gray-500">
            <span>{item.stat}</span>
            <span>{item.status}</span>
          </div>
        </div>
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z"
              fill="#111827"
            />
            <path
              d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z"
              fill="#111827"
            />
            <path
              d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z"
              fill="#111827"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
