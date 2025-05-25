import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import PizzaOrdersData from "@/lib/Data"


export function PizzaTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">OrderId</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Pizza Type</TableHead>
          <TableHead >Order Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PizzaOrdersData.map((invoice) => (
          <TableRow key={invoice.orderId}>
            <TableCell className="font-medium">{invoice.orderId}</TableCell>

            <TableCell>{invoice.customerName}</TableCell>
            <TableCell>{invoice.quantity}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.pizzaType}</TableCell>
            <TableCell>{invoice.orderDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

