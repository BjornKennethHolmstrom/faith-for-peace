// src/components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">Uniting faiths and beliefs for peace</p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Faith for Peace Project
        </p>
      </div>
    </footer>
  );
}
