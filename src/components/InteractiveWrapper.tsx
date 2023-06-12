export default function ({ title, children }) {
  return (
    <section className="p-6 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white rounded-md shadow-md mb-20 mt-5">
      <h2 className="text-1xl mb-4">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
