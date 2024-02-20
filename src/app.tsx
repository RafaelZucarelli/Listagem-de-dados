//lib pacote de icones svg para usar em react 
import { Plus } from 'lucide-react'

export function App() {
  return (
    <div className="py-10 space-y-8">
    <div>
      header
      tabs
    </div> {/* div main - content/ mas-w-6xl= 1250px de largura/ mxauto = margin left &rigth auto centralizado  */}
    <main className="max-w-6xl mx-auto space-y-5"> </main>

      <div className="flex items-center gap-3">
         {/*text-xl = aumenta o texto em 20px/ font-blod=texto em negrito  */}
        <h1 className="text-xl font-bold">Tags</h1>

        <button className="inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-2 py-1">

          {/*size-3 tanto widht & height de 12px*/}
          <Plus className="size-3" />
          Create new
          </button>
      </div>
  </div>
  ) 
}


