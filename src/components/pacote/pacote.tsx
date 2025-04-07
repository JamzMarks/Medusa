import Card from './components/card'

export default function Pacote() {
  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:gap-8 lg:grid-cols-4">        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    );
}
