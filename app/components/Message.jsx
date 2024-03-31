import Image from "next/image";

export default function Message(props) {
  return (
    <>
      {props.sender == true ? (
        <div className="flex items-end justify-end gap-2">
          <Image
            src="https://images.unsplash.com/photo-1587750113469-d2ba02441e8f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={50}
            height={50}
            alt="Profile Picture"
            className="order-last w-8 h-8 object-cover object-center rounded-full ring-2 ring-violet-900 flex-shrink-0"
          />
          <div className="flex flex-col gap-2 text-white">
            <div className="relative p-5 rounded-2xl bg-violet-950/80 shadow lg:max-w-xl max-w-sm">
              <h1 className="tracking-normal lg:text-base text-sm">
                {props.message}
              </h1>
              <span className="absolute -bottom-5 right-0 text-xs text-black/80">
                9:45 PM
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-end gap-2">
          <Image
            src="https://images.unsplash.com/photo-1547460719-5bb9d93c46e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={50}
            height={50}
            alt="Profile Picture"
            className="w-8 h-8 object-cover object-center rounded-full ring-2 ring-violet-900 flex-shrink-0"
          />
          <div className="flex flex-col gap-2">
            <div className="relative p-5 rounded-2xl bg-violet-950/10 ring-1 ring-gray-300 shadow-inner lg:max-w-xl max-w-sm">
              <h1 className="tracking-normal lg:text-base text-sm">
                {props.message}
              </h1>
              <span className="absolute -bottom-5 left-0 text-xs text-black/80">
                9:45 PM
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
