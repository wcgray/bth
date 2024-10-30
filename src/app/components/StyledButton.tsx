export default function StyledButton({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 text-white text-sm sm:text-base font-semibold bg-blue-600 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform transition duration-200 ease-in-out
                hover:shadow-none hover:translate-y-1 active:translate-y-1 active:shadow-none focus:outline-none"
    >
      {title}
    </button>
  );
}