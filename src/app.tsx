//lib pacote de icones svg para usar em react 
import { Plus, Search, FileDown, MoreHorizontal } from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Control, Input } from './components/ui/input'
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from './components/ui/table'
import { Pagination } from './components/pagination'

export function App() {
  return (
    <div className="py-10 space-y-8">
    <div>
    <Header />
    <Tabs />
      
    </div> {/* div main - content/ mas-w-6xl= 1250px de largura/ mxauto = margin left &rigth auto centralizado  */}
    <main className="max-w-6xl mx-auto space-y-5"> 

      <div className="flex items-center gap-3">
         {/*text-xl = aumenta o texto em 20px/ font-blod=texto em negrito  */}
        <h1 className="text-xl font-bold">Tags</h1>

        <Button variant='primary' >

          {/*size-3 tanto widht & height de 12px*/}
          <Plus className="size-3" />
          Create new
          </Button>    
      </div>

      <div className="flex items-center justify-between">
        <Input variant='filter'>
          <Search className="size-3"/>
          <Control placeholder="Search tags..." />
        </Input>

        <Button>
          <FileDown className="size-3" />
          Export
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Tag</TableHead>
            <TableHead>Amount of videos</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((value, index) => {
            return (
              <TableRow key={index}>
            <TableCell></TableCell>
            <TableCell>
              <div className="flex flex-col gap-0.5">
                <span className="font-medium">React</span>
                <span className="text-xs text-zinc-500">9E0E95BF-4BF6-4A23-B79E-F71AE9C9C117</span>
              </div>
            </TableCell>
            <TableCell className="text-zinc-300">
              13 video(s)
            </TableCell>
            <TableCell className="text-right">
              <Button size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
              </TableCell>
          </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <Pagination />

      

      
      </main>
  </div>
  ) 
}


